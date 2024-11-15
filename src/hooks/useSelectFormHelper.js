import { validateField } from "../libs/validators";

const useSelectHelper = (updateForm) => {
  return (key, fieldType) => (event) => {
    updateForm((prev) => ({
      ...prev,
      [key]: { value: event.target.value, ...validateField(event.target.value, fieldType) }
    }));
  };
};

export default useSelectHelper;
