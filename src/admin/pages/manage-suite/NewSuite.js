import React, { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Label } from "../../../packages/component/Label";
import { InputText } from "../../../packages/InputText";
import { ActionButton } from "../../../packages/component/ActionButton";
import { FileUpload } from "../../common-ui/UploadFile";
// import { AddNewRoom } from "../../../services/actions/datacollection";


const defaultState = {
name: { value: "", error: true },
description: { value: "", error: true },
price: { value: 0, error: true },
tax: { value: 0, error: true },
adult:{ value: 0, error: true },
children:{ value: 0, error: true },
mattress:{ value: "", error: true },
amenities:{ value: [""], error: true },
};

const NewSuite = () => {
  const notifications = useSelector((value) => value.notification);

  const [formData,upDateForm]=useState(defaultState)
  const [files, setFiles] = useState([]);


  const handleChange = (key) => (value) => {
    upDateForm((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key]),
        value: value,
        error: value.length < 1,
      },
    }));
  };

  const handleSubmit =async () => {
    const isValid = Object.values(formData).every((input) => !input.error);
    if (isValid) {

 
    } else {
      upDateForm((prev) => ({
        ...prev,
        submissionAttempt: true,
      }));
    }
  };

  const isEmpty=(key)=>{
    return formData.submissionAttempt && formData[key].error
  }
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
                  onChange={handleChange("name")}

                  placeholder={"Enter suite type name"}
                  isError={isEmpty("name")}
                  errorMessage={"Name is required"}
                  />
                  
                <Stack gap={1} width={250}>
                  <Label>Capacity</Label>
                  <Stack direction={"row"} gap={1}>
                    <InputText error={isEmpty("adult")}
                      errorMessage={"valid is required"} handleOnChange={handleChange("adult")}  name={"adult"} placeholder={"adult"}/>
                    <InputText   error={isEmpty("children")} errorMessage={"valid is required"} handleOnChange={handleChange("children")}  name={"children"} placeholder={"children"}/>
                  </Stack>
                </Stack>
          
        </Stack>

        <Stack sx={styles.fieldLayout}>
                  <TextField 
                  name={"mattress"}
                  label={"Mattress"}
  
                  onChange={handleChange("mattress")}
                  placeholder={"mattress description"}
                  />
                  
                <Stack gap={1} width={250}>
                  <Label>Price * (dollar)</Label>
                  <Stack direction={"row"} gap={1}>
                    <InputText name={"price"}
                     error={isEmpty("price")}  
                     errorMessage={"field required"}      
                     handleOnChange={handleChange("price")} 
                     placeholder={"price per stay"}
                     type="Number"/>
                    <InputText name={"tax"}  
                    error={isEmpty("tax")}
                    errorMessage={"field required"} 
                    type="number"
                    handleOnChange={handleChange("tax")} 
                    placeholder={"tax on utilities"}/>
                  </Stack>
                </Stack>
          
        </Stack>

        <Stack gap={1}  sx={styles.descriptionBox}>
          <Label>Desctiption</Label>
            <InputText multiline minRows={10} 
             error={isEmpty("description")} handleOnChange={handleChange("description")} errorMessage={"field required"}  name={"description"} placeholder={"Enter suite type description"}/>
        </Stack>
</Stack>
<Stack sx={styles.imagePickerBox}>


        <FileUpload files={files} setFiles={setFiles}/>
        <Stack gap={1}  width={"50%"} height={200}>
          <Label>Amenities</Label>
          <Stack width={300} direction={"row"} gap={1} >
               <InputText   onChange={handleChange("amenities")}   name={"amenities"} placeholder={"Add new amenities"}/>
              <Box marginTop={0.2}><ActionButton title={"Add"} varient="dark"/></Box> 
          </Stack>
           
        </Stack>

</Stack>
    </Box>

    </Box>
  );
};

export default NewSuite;



const TextField=({label,name,value,onChange,placeholder,isError,errorMessage})=>{
  return (
    <Box sx={styles.fieldContainer}>
      <Label>{label}</Label>
      <InputText name={name}
             placeholder={placeholder}
             error={isError}
             errorMessage={errorMessage}
             value={value}
             handleOnChange={onChange}
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

