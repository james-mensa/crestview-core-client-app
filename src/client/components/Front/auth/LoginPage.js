"use client";
import {
  Box,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import { blue, grey } from "@mui/material/colors";


import { useState } from "react";
import { Label } from "../../../../packages/component/Label";
import { InputText } from "../../../../packages/InputText";
import { GoogleAuth } from "./GoogleAuth";
import { useSelector } from "react-redux";
import { AuthButton, ProviderButton } from "../../../../packages/component/Button";
import { ColorTheme } from "../../../../style/ColorTheme";



export default function LoginPage() {
  const initData = useSelector((value) => value.initAuth);
  const initialState = {
    email: { value: initData?.email??"", error: initData?.email? false:true },
    password: { value: "", error: true },
  };
  
  const [state, setState] = useState(initialState);
  const [isLoading,setLoading]=useState(false)

  const handleChange = (key) => (value) => {
    setState((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key]),
        value: value,
        error: value.length < 1,
      },
    }));
  };
  const handleSubmit =async () => {
    const isValid = Object.values(state).every((input) => !input.error);
    if (isValid) {
      setLoading(true);
 
    } else {
      setState((prev) => ({
        ...prev,
        submissionAttempt: true,
      }));
    //   scrollTo({ top: 0, left: 0 });
    }
  };
  return (
    <Container maxWidth={'md'} sx={styles.container}>
      <Box sx={styles.leftComponent}>
        <img style={styles.authLogo} src="/assets/images/login.jpg" alt="roxel hotel logo"/>
    <Box sx={styles.descriptionWrapper}>
    
    <Label sx={styles.description}>
         <RemoveIcon sx={styles.listBullet}/> Welcome to Crestview Lodge secure portal. Sign in or create an    account to access exclusive offers, manage your reservations, and enjoy personalized experiences.
        </Label>
        <Label sx={styles.description}>
        <RemoveIcon sx={styles.listBullet}/> Your privacy and security are our top priorities. Get started with your email or continue using your preferred social account.
        </Label>


    </Box>
 
      </Box>
      <Box sx={styles.rightComponent}>
        <Label sx={styles.title}>Continue to Login with your email</Label>
        <InputText
          name="email"
          placeholder="Enter your email address"
          error={state.submissionAttempt && state.email.error}
          errorMessage={"email is required"}
          value={state.email.value}
          handleOnChange={handleChange("email")}
        />
        <InputText
          name="password"
          type="password"
          placeholder="Enter your password"
          error={state.submissionAttempt && state.password.error}
          errorMessage={"Please enter your password"}
          value={state.password.value}
          handleOnChange={handleChange("password")}
        />
        <AuthButton label="Sign in" onClick={handleSubmit}  loading={isLoading}/>
        <Stack
          sx={{ width: "100%" }}
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
            <Label sx={styles.forgot_password}>Forgot Password?</Label>
        </Stack>

        <Stack
          width={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Divider sx={styles.divider} />
          <Label sx={styles.indicator}>or continue with</Label>
          <Divider sx={styles.divider} />
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
      
        <GoogleAuth/>
        <ProviderButton icon={"/assets/images/facebook.png"} label={"Facebook"}/>
    
        </Stack>
      </Box>
    </Container>
  );
}

const styles = {
  container: (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      paddingTop: 10,
    },
    
    [theme.breakpoints.up("xl")]: {
      flexDirection: "row",
      paddingTop: 25,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      paddingTop: 5,
      gap: 3,
    },
  }),

  welcome: (theme) => ({
    fontWeight: "bold",
    fontStyle: "italic",
    color: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      fontSize: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  }),
  subtitle_container: (theme) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
  }),
  subtitle: (theme) => ({
    fontWeight: "bold",
    color: theme.palette.mode === "dark" ? grey[500] : grey[600],

    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  }),

  leftComponent: (theme) => ({
    height:500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      backgroundColor:grey[100],

    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "center",
    },
  }),
  authLogo:{
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  
  },
  leftIcon: (theme) => ({
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      position: "absolute",
      width: "50%",
    },
  }),
  img_m: (theme) => ({
    width: "150px",
    height: "150px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }),
  img: (theme) => ({
    width: "250px",
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginLeft: 50,
      marginTop: -20,
    },
  }),
  rightComponent: (theme) => ({
    width: "40%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 1.5,

    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }),
  forgot_password: (theme) => ({
    fontSize: "14px",
    color: theme.palette.mode === "dark" ? blue[500] : blue[400],
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.down("sm")]: {},
  }),
  divider: {
    borderStyle: "dashed",
    width: "30%",
    height: "2px",
    borderColor:ColorTheme.dark[500]
  },
  indicator: {
    color: grey[600],
    fontSize: 13,
    fontWeight: 600, 
  },
  title:{
    fontWeight:'600'
  },
  descriptionWrapper:{
  padding: 2,
  display:'flex',
  flexDirection: 'column',
    gap: 2,
    width:'95%'
  },
  description:{
    fontSize: 13,
    fontWeight:'500',
  
  },
  listBullet:{
    fontSize: 13,
    color: grey[600],
    marginLeft:-2
  }
};
