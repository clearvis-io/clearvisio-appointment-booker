import cloneDeep from "lodash.clonedeep";
export function storeResetCloner (store)  {
  store.on('bookerInit', (storeContent) => {
    return {intialStoreContent: cloneDeep(storeContent)};
  });
    
  store.on('resetStore', ({intialStoreContent}) => {
    const cloneInitialStoreContent = cloneDeep(intialStoreContent)
    return cloneInitialStoreContent;
  });
} 