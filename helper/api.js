const api = {
  get: async (store, model) => {
    const {path, headers} = store.get().api;
    const result = await (await fetch(`${path}/${model}`, {headers})).json()

    return result['hydra:member']
  }
};

export default api;
