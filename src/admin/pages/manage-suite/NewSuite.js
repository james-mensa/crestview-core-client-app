import React, { useState } from "react";

import { Box, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { Label } from "../../../packages/component/Label";
import { InputText } from "../../../packages/InputText";
import { ActionButton } from "../../../packages/component/ActionButton";
import { FileUpload } from "../../common-ui/UploadFile";
// import { AddNewRoom } from "../../../services/actions/datacollection";
import useSelectHelper from '../../../hooks/useSelectFormHelper';
import useInputUpdateHelper from '../../../hooks/useInputFormHelper';
import { useFieldHasError } from "../../../hooks/useFormHasError";
import { SelectInput } from "../../../packages/SelectInput";
import { Amenities } from "../../utils/constants";

const __DEFAULT_VALUE = { isValid: false, value: "", errorMessage: 'required' };
const defaultState = {
name: __DEFAULT_VALUE,
description: __DEFAULT_VALUE,
price: __DEFAULT_VALUE,
tax: __DEFAULT_VALUE,
adult:__DEFAULT_VALUE,
children:__DEFAULT_VALUE,
mattress:__DEFAULT_VALUE,

submitAttempt:false
};

const NewSuite = () => {
  const notifications = useSelector((value) => value.notification);

  const [formData,upDateForm]=useState(defaultState)
  const handleItemUpdate = useSelectHelper(upDateForm);
  const handleInputUpdate = useInputUpdateHelper(upDateForm);
  const fieldHasError = useFieldHasError(formData);

  const [files, setFiles] = useState([]);
  const [amenities,setAmenities] = useState([]);


  const handleSelectItem = (data) => {
  const value=data.target.value;
    console.log({value})
    setAmenities((prev) => ([
      ...prev,
      value
    ]));
  };

  const handleSubmit =async () => {
    upDateForm((prev) => ({
      ...prev,
      submitAttempt: true,
    }));
    console.log({formData})
    const isValid = Object.values(formData).every((input) => !input.error);
    if (isValid) {

    } else {

    }
  };


  return (
    <Box sx={styles.container}>
    
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} width={"100%"} >
      <Label font={"semibold"} >New Type</Label> 
      <ActionButton title={"Add now"} varient="dark"  onClick={handleSubmit}/>
       </Stack>  
    <Box sx={styles.pageLayout}>
        <Stack  gap={3}>
             <Stack sx={styles.fieldLayout}>
                  <TextField 
                  name={"name"}
                  label={"Name"}
                  placeholder={"Enter suite type name"}
                  onChange={handleInputUpdate("name")}
                  error={fieldHasError('name')}
                  errorMessage={formData.name.errorMessage} />
                  
                <Stack gap={1} width={250}>
                  <Label>Capacity</Label>
                  <Stack direction={"row"} gap={1}>
                    <InputText 
                      onChange={handleInputUpdate('adult','number')}
                      error={fieldHasError('adult')}
                      errorMessage={formData.adult.errorMessage}
                      name={"adult"} 
                      placeholder={"adult"}/>
                    <InputText   
                        onChange={handleInputUpdate('children','number')}
                        error={fieldHasError('children')}
                        errorMessage={formData.children.errorMessage}
                        name={"children"} 
                        placeholder={"children"}/>
                  </Stack>
                </Stack>
          
        </Stack>
        
        <Stack sx={styles.fieldLayout}>
                  <TextField 
                  name={"mattress"}
                  label={"Mattress"}
                  placeholder={"mattress description"}
                  onChange={handleInputUpdate('mattress')}
                  error={fieldHasError('mattress')}
                  errorMessage={formData.mattress.errorMessage}

                  />
                  
                <Stack gap={1} width={250}>
                  <Label>Price * ($)</Label>
                  <Stack direction={"row"} gap={1}>
                    <InputText 
                      name={"price"}
                      onChange={handleInputUpdate('price')}
                      error={fieldHasError('price','number')}
                      errorMessage={formData.price.errorMessage}
                     placeholder={"price per stay"}
                     type="Number"/>
                    <InputText name={"tax"}  
                       type="number"
                       placeholder={"tax on utilities"}
                       onChange={handleInputUpdate('tax','number')}
                       error={fieldHasError('tax')}
                       errorMessage={formData.price.errorMessage}
                    
                    
                    />
                  </Stack>
                </Stack>
          
        </Stack>


        <Stack gap={1}  sx={styles.descriptionBox}>
          <Label>Desctiption</Label>
            <InputText multiline minRows={10} 
              name={"description"} 
              error={fieldHasError('description')}
              onChange={handleInputUpdate("description")}
              errorMessage={"field required"} 
              placeholder={"Enter suite type description"}/>
        </Stack>
        <Stack gap={1}  width={"50%"} height={200}>
          <Label>Amenities</Label>
          <Stack width={300} direction={"row"} gap={1} >
               <SelectInput  onChange={handleSelectItem} items={Amenities}   name={"amenities"} placeholder={"Add new amenities"}/>
              <Box marginTop={0.2}><ActionButton title={"Add"} varient="dark"/></Box> 
          </Stack>
           
        </Stack>
</Stack>
<Stack sx={styles.imagePickerBox}>


        <FileUpload files={files} setFiles={setFiles}/>
 

</Stack>
    </Box>

    </Box>
  );
};

export default NewSuite;



const TextField=({label,name,value,onChange,placeholder,error,errorMessage})=>{
  return (
    <Box sx={styles.fieldContainer}>
      <Label>{label}</Label>
      <InputText name={name}
             placeholder={placeholder}
             error={error}
             errorMessage={errorMessage}
             value={value}
             onChange={onChange}
      />


    </Box>
  )
}

const styles={

  container:{
    display:'flex',
    flexDirection:'column',
    gap:5

  },
  fieldContainer:{
    display:'flex',
    flexDirection:'column',
     width:350,
     gap:1
  },
  fieldLayout:{
    flexDirection:'row',
    gap:10

  },
  descriptionBox:(theme)=>({
  
    [theme.breakpoints.up('xl')]: {
 width:'100%'
    },
    [theme.breakpoints.down('xl')]: {
      width:700
     },
         [theme.breakpoints.down('lg')]: {
          width:'90%'
             },
             [theme.breakpoints.up('md')]: {
              width:'100%'
                 },
  }),
  pageLayout:(theme)=>({
    [theme.breakpoints.up('xl')]: {
      display:'flex',
      flexDirection:'row',
      gap:5
    },
    [theme.breakpoints.down('xl')]: {
      display:'flex',
      flexDirection:'column',
      gap:2
    },
  }),
  imagePickerBox:(theme)=>({

    [theme.breakpoints.up('xl')]: {
      width:'100%'
         },
         [theme.breakpoints.down('xl')]: {
           width:700
          },
              [theme.breakpoints.down('lg')]: {
               width:'90%'
                  },
                  [theme.breakpoints.up('md')]: {
                   width:'100%'
                      },
  })
}

