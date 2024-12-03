
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
  
 export function transformToItemList(amenities) {
    return Object.entries(amenities).map(([key, value]) => ({
      value: value,
      label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
    }));
  }
  