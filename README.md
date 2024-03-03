# Form Validation Library

This is a lightweight JavaScript library for form validation in web applications. It allows developers to easily define validation rules for form fields and validate entire form data.

## Installation

You can install the Form Validation Library via npm:

```bash
npm install form-validation-library
```

## Usage

1. Import the `FormValidator` class into your JavaScript file:

```javascript
const FormValidator = require('form-validation-library');
```

2. Create a new instance of `FormValidator`:

```javascript
const validator = new FormValidator();
```

3. Add validation rules for form fields using the `addRule` method:

```javascript
validator.addRule('username', value => value.length >= 3, 'Username must be at least 3 characters long');
validator.addRule('email', value => /\S+@\S+\.\S+/.test(value), 'Invalid email address');
// Add more rules as needed
```

4. Validate the entire form data using the `validateForm` method:

```javascript
const formData = {
  username: 'john_doe',
  email: 'john@example.com'
};

const isValid = validator.validateForm(formData);

if (isValid) {
  console.log('Form data is valid');
} else {
  console.log('Form data is invalid');
  // Retrieve validation errors for specific fields
  console.log(validator.getErrorsForField('username'));
  console.log(validator.getErrorsForField('email'));
}
```

## API

### `addRule(fieldName, validationFunction, errorMessage)`

Adds a validation rule for the specified form field.

- `fieldName`: The name of the form field.
- `validationFunction`: A function that returns `true` if the field value passes validation, `false` otherwise.
- `errorMessage`: The error message to display if validation fails.

### `validateForm(formData)`

Validates the entire form data.

- `formData`: An object containing key-value pairs representing form field names and values.

### `getErrorsForField(fieldName)`

Retrieves validation errors for a specific form field.

- `fieldName`: The name of the form field.

## Example

```javascript
const validator = new FormValidator();

validator.addRule('username', value => value.length >= 3, 'Username must be at least 3 characters long');
validator.addRule('email', value => /\S+@\S+\.\S+/.test(value), 'Invalid email address');

const formData = {
  username: 'john_doe',
  email: 'john@example.com'
};

const isValid = validator.validateForm(formData);

if (isValid) {
  console.log('Form data is valid');
} else {
  console.log('Form data is invalid');
  console.log(validator.getErrorsForField('username'));
  console.log(validator.getErrorsForField('email'));
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
