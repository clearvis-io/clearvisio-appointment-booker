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
  }
};

export default api;
