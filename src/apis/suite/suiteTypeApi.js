
import AuthApi from '../ApiClient/AuthApi';
export const AddSuiteType = async (data,images) => {


    try {
        const formData = new FormData();

    Array.from(images).forEach(image => {
      formData.append('images', image);
    });

    Object.keys(data).forEach(key => {
        if (key !== 'images') { 
          formData.append(key, data[key]);
        }
      });
  
      
      const response = await AuthApi.post('/suite/type', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });
  
        console.log({responsesssss:response})
    } catch (error) {
        console.error({ error });
        throw new Error(error?.response?.data?.message || error.message || "An error occurred while adding suite type");
    }
};
