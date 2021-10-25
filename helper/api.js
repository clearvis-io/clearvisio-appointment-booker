const api = {
  get: async (store, model) => {
    const {path, headers} = store.get().api;

    try {
      const result = await (await fetch(`${path}/${model}`, {headers})).json()

      if (!result['hydra:member']) {
        throw new Error('Invalid response');
      }

      return result['hydra:member'];
    } catch (error) {
      store.dispatch('moduleState/set', 'error');
      throw error;
    }
  },

  post: async (store, model, body) => {
    const {path, headers} = store.get().api

    options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    }

    try {
      const result = await (await fetch(`${path}/${model}`, options)).json();

      console.log('VÁLASZ', result);
    } catch (error) {
      store.dispatch('moduleState/set', 'error');
      throw error;
    }
  }
};

export default api;
