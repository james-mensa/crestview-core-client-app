import React from "react";
import { alpha, FormControl, InputBase } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Label } from "./component/Label";

export const InputText = ({
  placeholder,
  handleOnChange,
  type = "text",
  name,
  value,
  errorMessage,
  error,
  isSmall = false,
  ...props
}) => {
  const styles = getStyles(isSmall);
  
  return (
    <FormControl variant="standard">
      <InputBase
        {...props}
        name={name}
        type={type === "text" || type === "password" ? type : "text"}
        onChange={(el) => {
          handleOnChange(el.target.value);
        }}
        value={value}
        error={error}
        placeholder={placeholder}
        sx={styles.input}
      />
     <Label sx={styles.errorMessage}>{error && errorMessage}</Label>
    </FormControl>
  );
};

const getStyles = (isSmall) => {
  return {
    input: (theme) => ({
      "& input::placeholder": { fontSize: "13px" },
      "& .MuiInputBase-input": {
        borderRadius: isSmall ? 1 : 2,
        position: "relative",
        backgroundColor: isSmall ? 'transparent' : theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
        border: "1px solid",
        borderColor: theme.palette.mode === "light" 
          ? isSmall 
            ? grey[400] 
            : "#E0E3E7" 
          : isSmall 
            ? grey[700] 
            : "#2D3843",
        fontSize: 16,
        width: isSmall ? '300px' : "100%",
        padding: isSmall ? "8px 12px" : "10px 12px",
        transition: theme.transitions.create([
          "border-color",
          "background-color",
          "box-shadow",
        ]),
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
          boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
          borderColor: theme.palette.primary.main,
        },
      },
    }),
    errorMessage: {
      color: "red",
      fontSize: "13px",
      height: "20px",
      marginLeft: "20px",
      marginTop: "5px",
    },
  };
};
