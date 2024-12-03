import { validateField } from "../libs/validators";

const useSelectHelper = (updateForm) => {
 
  return (key, fieldType) => (event) => {
    const value=event.target?.value || event
    updateForm((prev) => ({
      ...prev,
      [key]: {...validateField(value, fieldType) }
    }));
  };
};

export default useSelectHelper;
