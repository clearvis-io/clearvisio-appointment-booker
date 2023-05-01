import {api} from '../helper/index.js'

export function privacyPolicy (store) {
  store.on('@init', () => ({ privacyPolicy: null, privacyPolicyLink: null }));

  store.on('bookerInit', async (previousValue) => {
    var privacyPolicies = await api.get(store, `privacy_policies?chain=${previousValue.store.chain['@id']}`);
    for (let i = 0; i < privacyPolicies.length; i++) {
      if (new Date(privacyPolicies[i].valid_until) > new Date) {
        return store.dispatch('privacyPolicy/set', privacyPolicies[i]);
      }
    }

    throw new Error('Could not find privacy policy');
  });

  store.on('privacyPolicy/set', (previousValue, privacyPolicy) => ({privacyPolicy}));
  store.on('privacyPolicyLink/set', (previousValue, privacyPolicyLink) => ({privacyPolicyLink}));
}
