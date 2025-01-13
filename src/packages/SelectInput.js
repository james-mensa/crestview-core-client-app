import React from "react";
import { alpha, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Label } from "./component/Label";

export const SelectInput = ({
  placeholder,
  onChange,
  name,
  value,
  errorMessage,
  error,
  isSmall = false,
  items = [],
  ...props
}) => {
  const styles = getStyles(isSmall);

  const isAvailable = items.find((item) => item.value === value);

  const renderValue = (value) => {
    if (!value) {
      return <Typography color="gray">{placeholder}</Typography>;
    }
    return isAvailable ? value : "";  
  };

  const inputValue = isAvailable ? value : '';

  return (
    <FormControl variant="standard" {...props}>
      <Select
        name={name}
        value={inputValue}
        onChange={onChange}
        error={error}
        placeholder={placeholder}
        renderValue={renderValue}
        defaultValue=""
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        disableUnderline
        sx={styles.input}
      >
        {items.map((data) => (
          <MenuItem value={data.value} key={data.value}> 
            <Typography fontFamily={"Inter"} fontWeight={400} fontSize={16} color={"#667085"}>
              {data.label}
            </Typography>
          </MenuItem>
        ))}
      </Select>
      {error && <Label sx={styles.errorMessage}>{errorMessage}</Label>}
    </FormControl>
  );
};

const getStyles = (isSmall) => ({
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
      width: isSmall ? '100%' : "400px",
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
});

