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
      const result = await (
        await fetch(`${path}/${model}`, {headers: extendHeaders(headers)})
      ).json();

      if (typeof result !== 'object') {
        throw new Error('Invalid response');
      }

      return result['hydra:member'] ?? result;
    } catch (error) {
      store.dispatch('moduleState/set', 'error');
      throw error;
    }
  },

  post: async (storeContent, model, body) => {
    return api.doRequest(storeContent, 'POST', `${storeContent.api.path}/${model}`, body);
  },

  doRequest: async ({api, dispatch}, method, path, body) => {
    const {headers} = api;

    const options = {
      method: method,
      headers:  extendHeaders(headers),
      body: JSON.stringify(body)
    };

    try {
      var result = await (await fetch(path, options)).json();
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
  },

  put: async (storeContent, id, body) => {
    return api.doRequest(storeContent, 'PUT', id, body);
  }
};

export default api;
