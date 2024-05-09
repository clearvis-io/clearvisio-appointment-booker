import ValidationError from './ValidationError.js';

const extendHeaders = (headers) => {
  return Object.assign({
    accept: 'application/ld+json',
    'Content-Type': 'application/ld+json'
  }, headers);
}

const api = {
  get: async (store, model) => {
    const {path, headers} = store.get().api;
    try {
      const response = await fetch(`${path}/${model}`, {headers: extendHeaders(headers)});
      if (response.status < 200 || response.status > 299) { //TODO: nézzük meg response.ok az igaze a post, put kéréseinknél de nem oké a ezekkot
        const e = new Error('Unexpected api response');
        e.code = response.status;
        
        throw e;
      }

      const result = await response.json();

      if (typeof result !== 'object') {
        throw new Error('Invalid response');
      }

      return result['hydra:member'] ?? result;
    } catch (error) {
      store.dispatch('moduleState/set', 'error');
      throw error;
    }
  },

  post: async ({api, dispatch}, model, body) => {
    const {path, headers} = api;

    const options = {
      method: 'POST',
      headers:  extendHeaders(headers),
      body: JSON.stringify(body)
    };

    try {
      var result = await (await fetch(`${path}/${model}`, options)).json();
    } catch (error) {
      dispatch('moduleState/set', 'error');
      throw error;
    }

    if (result['@id']) {
      return result;
    }
    if (result.violations) {
      throw new ValidationError(result.violations);
    }

    dispatch('moduleState/set', 'error');
    throw new Error('Invalid result');
  }
};

export default api;
