export const defaultValue = {
    value: '',
    isValid: false,
    errorMessage: 'required',
  };
  
  export const transformForm = (form) => {
    const newForm = {};
  
    for (const key in form) {
      if (form.hasOwnProperty(key) && key !== 'submitAttempt') {
        const value = form[key].value;
        newForm[key] = value;
      }
    }
  
    return newForm;
  };