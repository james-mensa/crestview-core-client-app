import { fieldValidation } from "../config/types";

/**
 * Validates a password based on the following criteria:
 * - At least 8 characters long
 * - Contains at least one uppercase letter
 * - Contains at least one lowercase letter
 * - Contains at least one number
 *
 * @param {string} password - The password to validate
 * @returns {{ isValid: boolean, errorMessage?: string }}
 */
export function validatePassword(password) {
    const lengthRequirement = /.{8,}/;
    const uppercaseRequirement = /[A-Z]/;
    const lowercaseRequirement = /[a-z]/;
    const numberRequirement = /[0-9]/;
  
    if (!lengthRequirement.test(password)) {
      return { isValid: false, errorMessage: 'Password must be at least 8 characters long.' };
    }
    if (!uppercaseRequirement.test(password)) {
      return { isValid: false, errorMessage: 'Password must contain at least one uppercase letter.' };
    }
    if (!lowercaseRequirement.test(password)) {
      return { isValid: false, errorMessage: 'Password must contain at least one lowercase letter.' };
    }
    if (!numberRequirement.test(password)) {
      return { isValid: false, errorMessage: 'Password must contain at least one number.' };
    }
  
    return { isValid: true };
}

export function isFormFiiled(form, requiredFields) {
    return requiredFields.every((field) => {
      const data = form[field];
      return data.value?.trim() !== "" || !data.isValid;
    });
}

export function isFormFilled(form, requiredFields, excludeFields) {
    return Object.entries(form).every(([field, data]) => {
      const value = data.value?.trim() ?? data;
      const isValid = data.isValid !== undefined ? data.isValid : true;
      const check = value !== "" && isValid;

      if (excludeFields && excludeFields.includes(field)) {
        return true;
      }

      if (requiredFields && requiredFields.includes(field)) {
        return check;
      }

      return check;
    });
}

/**
 * Validates an email address based on standard criteria.
 *
 * @param {string} email - The email address to validate
 * @returns {{ isValid: boolean, errorMessage?: string }}
 */
export function validateEmail(email) {
  const emailRequirement = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRequirement.test(email)) {
    return { isValid: false, errorMessage: 'Invalid email format.' };
  }

  return { isValid: true };
}

export function validateNumber(value) {
  const numberRequirement = /^[0-9]+(\.[0-9]+)?$/;

  if (!numberRequirement.test(value.trim())) {
    return { isValid: false, errorMessage: 'Value must be a valid number.' };
  }

  return { isValid: true };
}

export function validateString(value) {
  if (typeof value !== 'string' || value.trim() === '') {
    return { isValid: false, errorMessage: 'Value must be a non-empty string.' };
  }

  return { isValid: true };
}

export function validateBoolean(value) {
  if (typeof value !== 'boolean') {
    return { isValid: false, errorMessage: 'Value must be a boolean.' };
  }

  return { isValid: true };
}

export function validateField(input, fieldType) {
  switch (fieldType) {
    case fieldValidation.EMIAL:
      return validateEmail(input);
    case fieldValidation.NUMBER:
      return validateNumber(input);
    case fieldValidation.PASSWORD:
      return validatePassword(input);
    case fieldValidation.STRING:
      return validateString(input);
    case fieldValidation.BOOLEAN:
      return validateBoolean(input);
    default:
      return validateString(input);
  }
}
