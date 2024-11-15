import { validateField } from "../libs/validators";



const useInputUpdateHelper = (updateForm) => {
  
  return (key, fieldType) => (event) => {
    console.log({key, fieldType,event})
    updateForm((prev) => ({
      ...prev,
      [key]: {
        value: event.target.value,
        ...validateField(event.target.value, fieldType),
      },
    }));
  };
};

export default useInputUpdateHelper;
