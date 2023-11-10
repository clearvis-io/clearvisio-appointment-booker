import { html } from '../helper/index.js'

export default ({colors}) => {
  colors = colors || {};
  if (Object.keys(colors).length == 0) {
    return;
  }

  return html`
    <style>
      ${
        colors.background ?
        `
          .cvio-ab-bg-body {
            background-color: ${colors.background} !important;
          }
        ` :
        ''
      }
      ${
        colors.contentBackground ?
        `
          .cvio-ab-list-group-item, .cvio-ab-card, .cvio-ab-modal-content {
            background-color: ${colors.contentBackground} !important;
          }
        ` :
        ''
      }
      ${
        colors.text ?
        `
          .cvio-ab-fixed-top, .cvio-ab-list-group-item {
            color: ${colors.text} !important;
          }
        ` :
        ''
      }
      ${
        colors.primary ?
        `
          .cvio-ab-bg-primary, .cvio-ab-btn-primary {
            background-color: ${colors.primary} !important;
          }
          .cvio-ab-text-primary, .cvio-ab-link-primary {
            color: ${colors.primary} !important;
          }
          .cvio-ab-form-check-input:checked {
            background-color: ${colors.primary} !important;
            border-color: ${colors.primary} !important;
          }
        ` :
        ''
      }
      ${
        colors.danger ?
        `
          .cvio-ab-bg-danger, .cvio-ab-btn-danger {
            background-color: ${colors.danger} !important;
          }
          .cvio-ab-text-danger, .cvio-ab-link-danger, .cvio-ab-invalid-feedback {
            color: ${colors.danger} !important;
          }
          .cvio-ab-form-control.cvio-ab-is-invalid {
            border-color: ${colors.danger} !important;
          }
        ` :
        ''
      }
      ${
        colors.success ?
        `
          .cvio-ab-bg-success, .cvio-ab-btn-success {
            background-color: ${colors.success} !important;
          }
          .cvio-ab-text-success, .cvio-ab-link-success {
            color: ${colors.success} !important;
          }
        ` :
        ''
      }
    </style>
  `;
}
