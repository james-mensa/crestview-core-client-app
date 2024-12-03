import { validateField } from "../libs/validators";

export const useFormRemoveListItem = (updateForm) => {
    return (key, fieldType, item)=> {
      updateForm((prev) => {
        const existingList = prev[key]?.value;
        const updatedList = existingList.filter((listItem) => listItem !== item);
  
        return {
          ...prev,
          [key]: {
            ...prev[key],
            value: updatedList,
            ...validateField(updatedList, fieldType), 
          },
        };
      });
    };
  };