const useFieldHasError = (form) => {
    return (key) => {
      const field = form[key];
      const submitAttempt = form['submitAttempt'];
      return !field?.isValid && submitAttempt;
    };
  };
  
  export { useFieldHasError };
  