export default class ValidationError extends Error {
  constructor(validations) {
    super('Validation error');
    this.validations = validations;
  }

  getValidations() {
    return this.validations;
  }
}
