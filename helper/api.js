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

      if (!result['hydra:member']) {
        throw new Error('Invalid response');
      }

      return result['hydra:member'];
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
