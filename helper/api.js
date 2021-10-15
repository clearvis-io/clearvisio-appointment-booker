var headers = {Accept: "application/ld+json"}, path;

const api = {
  get: async model => {
    var result = await (await fetch(`${path}/${model}`, {headers})).json()
    return result['hydra:member']
  },
  addHeader: (key, value) => headers[key] = value,
  setPath: (newPath) => path = newPath
};

export default api;
