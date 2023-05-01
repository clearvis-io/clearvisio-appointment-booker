import { html } from '../helper/index.js'
import { useStoreon } from '../_snowpack/pkg/storeon/preact.js'

export default (props) => {
  const {dispatch, privacyPolicyLink} = useStoreon('privacyPolicyLink');

  if (privacyPolicyLink) {
    return html`
      <a class="link-primary" href="${privacyPolicyLink}" target="_new">
        ${props.children}
      </a>
    `;
  }

  const openModal = () => dispatch('privacyPolicyModalState/set', true);

  return html`
    <a class="link-primary" onClick=${openModal}>
      ${props.children}
    </a>
  `;
}
