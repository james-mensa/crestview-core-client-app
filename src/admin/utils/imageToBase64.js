
export const uriToBase64 = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blobToBase64(blob);
  };
  
  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const base64String = reader.result 
        resolve(base64String.split(',')[1]);
      };
      reader.readAsDataURL(blob);
    });
  };
  

  export const imageFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result.split(',')[1]); 
      };
      reader.onerror = (error) => {
        reject('Error reading file: ' + error);
      };
      reader.readAsDataURL(file); 
    });
  };