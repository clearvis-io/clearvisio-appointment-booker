export function api (store) {
  store.on('@init', () => ({ api: { headers: {Accept: "application/ld+json"}, path: null } }))

  store.on('api/addHeaders', ({ api }, headers) => {
    api.headers = Object.assign(api.headers, headers);

    return { api }
  });

  store.on('api/setPath', ({ api }, path) => {
    api.path = path;

    return { api }
  });
}
