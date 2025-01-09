import { Box } from "@mui/material";

import { Label } from "../../packages/component/Label";
import { blue, grey, red } from "@mui/material/colors";
import { usePathname } from "../../packages/hooks/usePathname";
import { getNavContent } from "./config";
import { useNavigate } from "react-router-dom";
import { Assets } from "../../config/register";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AvatarIcon from "../../packages/AvatarIcon";
export const AdminDashboard = ({ children, topComponent }) => {
  const navItems = getNavContent().filter((item) => item.show);
  return (
    <Box sx={styles.container}>
      <Box sx={styles.topNav}>
        <Box sx={styles.topNavLeft}>
          <img alt="" src={Assets.crestview} style={styles.logoImg} />
        </Box>
        <Box sx={styles.topNavRight}>
          <AvatarI name={"James mensah"} role={"Admin"} alias={"JM"} />
          <AlertCard />
        </Box>
        {/* <IconButton sx={styles.topNavMobileButton}></IconButton> */}
      </Box>

      <Box sx={styles.content}>
        <Box sx={styles.contentNav}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              title={item.title}
              path={item.path}
            />
          ))}
        </Box>
        <Box sx={styles.contentContainer}>
          {topComponent && topComponent}
          <Box sx={styles.contentBody}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};
const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    userSelect: "none",
    overflowY:'hidden'
  },
  topNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "60px",
    backgroundColor: "blue",
    padding: "5px 20px ",
    alignItems: "center",
  },
  content: {
    width: "100%",
    height: "calc(100vh - 60px)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentNav: {
    width: "270px",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 2,
    padding: 2,
    borderRightWidth: 1,
    borderRightStyles: "dashed",
    borderRightColor: grey[400],
  },
  contentContainer:{
    width: "calc(100% - 270px)",
    height: "100%",
    overflowY: "hide",
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  contentBody: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 5,
    paddingBottom:50,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
     scrollbarWidth: "thin"
  },
  topNavLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logoImg: {
    width: "auto",
    height: 30,
  },
  topNavRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
};

//*** common components */
const NavItem = ({ icon, title, path }) => {
  const navigate = useNavigate();
  const currentPath = usePathname();
  const isActive = currentPath.includes(path);
  const styles = itemStyles(isActive);
  const handleOnClick = () => {
    navigate(path);
  };
  return (
    <Box sx={styles.container} onClick={handleOnClick}>
      <Label sx={styles.itemLabel}> {icon} </Label>{" "}
      <Label sx={styles.itemLabel}>{title}</Label>
    </Box>
  );
};
const AlertCard = () => {
  const styles = alertStyles();
  return (
    <Box sx={styles.container}>
      <NotificationsNoneIcon />
      <Label sx={styles.alertIndicator}>4</Label>
    </Box>
  );
};
const AvatarI = ({ name, alias, img, role }) => {
  return (
    <Box sx={avatarStyles.container}>
      <AvatarIcon alias={alias} icon={img} />
      <Label sx={avatarStyles.name}>{name}</Label>
    </Box>
  );
};

const avatarStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: grey[50],
  },
};

const itemStyles = (isActive) => {
  return {
    container: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: isActive ? grey[200] : "transparent",
      borderRadius: 1,
      padding: "5px 10px",
      gap: 1.5,
      alignItems: "center",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      "&:hover": {
        backgroundColor: blue[50],
        color: blue[500],
      },
    },
    itemLabel: {
      fontSize: 15,
      fontWeight: "500",
      color: isActive ? grey[900] : grey[600],
    },
  };
};
const alertStyles = () => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      backgroundColor: grey[50],
      borderRadius: 3,
      padding: 0.5,
      cursor: "pointer",
      userSelect: "none",
    },
    alertIndicator: {
      backgroundColor: red[500],
      color: grey[50],
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: 20,
      height: 20,
      position: "absolute",
      marginTop: -1,
      marginLeft: 2,
      borderRadius: 3,
      fontSize: 13,
    },
  };
};
