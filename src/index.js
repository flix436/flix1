// form-validation-library.js

class FormValidator {
  constructor() {
    this.validationRules = {};
    this.validationErrors = {};
  }

  // Add validation rules for a form field
  addRule(fieldName, validationFunction, errorMessage) {
    if (!this.validationRules[fieldName]) {
      this.validationRules[fieldName] = [];
    }
    this.validationRules[fieldName].push({ validationFunction, errorMessage });
  }

  // Validate the entire form
  validateForm(formData) {
    this.validationErrors = {};

    for (const fieldName in this.validationRules) {
      const fieldValue = formData[fieldName];
      const fieldRules = this.validationRules[fieldName];

      for (const rule of fieldRules) {
        if (!rule.validationFunction(fieldValue)) {
          if (!this.validationErrors[fieldName]) {
            this.validationErrors[fieldName] = [];
          }
          this.validationErrors[fieldName].push(rule.errorMessage);
        }
      }
    }

    return Object.keys(this.validationErrors).length === 0;
  }

  // Get validation errors for a specific field
  getErrorsForField(fieldName) {
    return this.validationErrors[fieldName] || [];
  }
}

// Export the FormValidator class
module.exports = FormValidator;