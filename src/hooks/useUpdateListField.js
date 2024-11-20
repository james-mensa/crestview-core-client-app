import { validateField } from "../libs/validators";

export const updateListField = (upDateForm) => {

    return (key, fieldType,item) => (event) => {
     const value=event?.target?.value??item
        upDateForm((prev) => {
            const existingList = prev[key].value;
           
            if (!existingList.includes(value)) {
              return {
                ...prev,
                [key]: {
                  ...prev[key],
                  ...validateField([...existingList, value], fieldType)
                }
              };
            }
            return prev; 
          });
      };




  };


