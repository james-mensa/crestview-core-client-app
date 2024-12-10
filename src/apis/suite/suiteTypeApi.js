import { crudService } from '../crud.service';
export const AddSuiteType = async (data,images) => {

  const formData = new FormData();

  Array.from(images).forEach(image => {
    formData.append('images', image);
  });
  Object.keys(data).forEach(key => {
      if (key !== 'images') { 
        formData.append(key, data[key]);
      }
    });

  return crudService.apiRequest("post",'/suite/type',formData,{
    'Content-Type': 'multipart/form-data'
  })
};

export const getSuiteTypes = async () => {
  return crudService.apiRequest("get",'/suite/type')
};





export const suitTypeApis={
  AddSuiteType,
  getSuiteTypes
}