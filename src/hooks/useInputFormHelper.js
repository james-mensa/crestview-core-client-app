import { validateField } from "../libs/validators";



const useInputUpdateHelper = (updateForm) => {
  
  return (key, fieldType) => (event) => {
   const value=event.target ? event.target.value : event
    updateForm((prev) => ({
      ...prev,
      [key]: {
        ...validateField(value, fieldType),
      },
    }));
  };
};

export default useInputUpdateHelper;
