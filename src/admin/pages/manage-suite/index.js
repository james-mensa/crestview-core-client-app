import React, { useEffect } from "react";
import { useSuiteState } from "../../../hooks/useSuiteTypes";
import { lazyLoad } from "../../../client/libs/viewHelpers";
import RoomPreview from "../../../packages/component/RoomPreview";
import { AdminDashboard } from "../../layout/AdminDashBoard";
import { Label } from "../../../packages/component/Label";
import { Box, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { appRoutePaths } from "../../../config/routePaths";
import { ActionButton } from "../../../packages/component/ActionButton";
import { CardSlider } from "../../../packages/component/CardSlider";
function Rooms() {
  const { suiteList } = useSuiteState();

  useEffect(() => {
    window.addEventListener("scroll", lazyLoad());
  });
  const loadingSkeletons = Array.from({ length: 4 }); // Number of skeletons to show while loading
 
  const appNavigation = useNavigate();
  const goDetailPage=(id)=>{
    appNavigation(appRoutePaths.admin.ADMIN_SUITE_TYPE_DETAIL_PATH,{state:{id}});
  }
  const getCards = suiteList.map((data, index) => {
    return <RoomPreview data={data} btnTitle="Details" onPrimaryBtnOnClick={goDetailPage} />;
  });
 
  const goAddSuiteTypePage = () =>
    appNavigation(appRoutePaths.admin.ADMIN_ADD_SUITE_TYPE_PATH);
  return (
    <AdminDashboard
      topComponent={
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          paddingX={5}
          paddingY={1.5}
          borderBottom={"1px dashed #bdbdbd"}
        >
          <Label font={"semibold"}> Suite types List</Label>
          <ActionButton
            title={"Add new suite type"}
            varient="dark"
            onClick={goAddSuiteTypePage}
          />
        </Stack>
      }
    >
      <Box>
        <Box sx={styles.gridContainer}>
          <Box sx={styles.desktopWrapper}>
            <Grid container spacing={2} sx={styles.layout}>
              {suiteList.map((data, index) => {
                return (
                  <Grid item xs={11} sm={11} md={6} key={index}>
                    <RoomPreview data={data} btnTitle="Details"  onPrimaryBtnOnClick={goDetailPage}/>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Box sx={styles.mobileWrapper}>
            <CardSlider cards={getCards} />
          </Box>
          {suiteList.length === 0 && (
            <Box sx={styles.emptyListCard}>
              <Label sx={styles.subtitle} className="header-style">
                No suite type added yet
              </Label>
            </Box>
          )}
        </Box>
      </Box>
    </AdminDashboard>
  );
}
export default Rooms;

const styles = {
  desktopWrapper: (theme) => ({
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }),
  mobileWrapper: (theme) => ({
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  }),

  headerStyle: (theme) => ({
    fontWeight: "600",
    fontSize: 30,
    width: "95%",
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  }),

  list: {
    width: "95%",
    justifyContent: "center",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  },
  emptyListCard: {
    width: "100%",
    height: "50vh",
    border: "1px solid rgba(230, 227, 227)",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};
