import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../../packages/component/ActionButton";
import { Label } from "../../../packages/component/Label";
import { AdminDashboard } from "../../layout/AdminDashBoard";
import { appRoutePaths } from "../../../config/routePaths";
import { Box, Button, Grid, Stack } from "@mui/material";
import { useRouteState } from "../../../hooks/useRouteState";
import { useEffect, useState } from "react";
import { suitTypeApis } from "../../../apis/suite/suiteTypeApi";
import { grey, red } from "@mui/material/colors";
import { formDialogStore } from "../../../mobx-store";
import AddLoungForm from "./AddLoungForm";

const SuiteTypeDetailPage = () => {
  const [data, setData] = useState(null);
  const [panel, setPanel] = useState(1);
  const { id } = useRouteState();

  useEffect(() => {
    const fetchInfo = async () => {
      if (!data && id) {
        const response = await suitTypeApis.getSuiteTypeById(id);
        if (response?.data) {
          setData(response.data);
        }
      }
    };
    fetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const appNavigation = useNavigate();
  const goAddSuiteTypePage = () => {
    appNavigation(appRoutePaths.admin.ADMIN_ADD_SUITE_TYPE_PATH);
  };
  const openAddRoomDialog = () => {
    formDialogStore.open(
      <AddLoungForm suiteTypeId={id}/>,
      false,
      true,
      `Add new room to ${data?.name}`
    );
  };

  const handleDeleteSuiteType = async () => {
    const res = await suitTypeApis.deleteSuiteTypeById(data._id);
    if (res.success) {
      appNavigation(appRoutePaths.admin.ADMIN_MANAGE_SUITE_PATH);
    }
  };
  return (
    <AdminDashboard
      topComponent={
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"93%"}
          paddingTop={1.5}
          borderBottom={"1px solid #e0e0e0"}
        >
          <Stack direction={"row"}>
            <ActionButton
              title={"Details"}
              varient={panel === 1 ? "active" : "inactive"}
              onClick={() => setPanel(1)}
            />
            <ActionButton
              title={"Rooms"}
              varient={panel === 2 ? "active" : "inactive"}
              onClick={() => setPanel(2)}
            />
          </Stack>

          <ActionButton
            title={"Add Room"}
            varient="dark"
            onClick={openAddRoomDialog}
          />
        </Stack>
      }
    >
      {panel === 1 ? (
        <SuiteTypeDetails
          data={data}
          handleDeleteSuiteType={handleDeleteSuiteType}
        />
      ) : (
        <Stack>
          <Label font={"semibold"}> {data?.name} Rooms</Label>
          <Stack direction={"row"} spacing={1}>
            <Label>Total : </Label> <Label font={"semibold"}>{data?.rooms?.length}</Label>
          </Stack>
          <Grid marginTop={5} container spacing={1.5} sx={styles.layout}>
            {data?.rooms.map((room, index) => {
              return (
                <Grid item xs={4} sm={4} md={2} key={index}>
                  <Box sx={styles.roomCard}>{room?.roomNumber}</Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      )}
    </AdminDashboard>
  );
};

const SuiteTypeDetails = ({ data, handleDeleteSuiteType }) => {
  return (
    <Stack spacing={1}>
      <div style={styles.photoContainer}>
        {data?.images.map((metaData, index) => (
          <img
            key={index}
            src={metaData.file}
            alt={`img-${index + 1}`}
            style={styles.image}
          />
        ))}
      </div>
      <Stack direction={"row"}></Stack>
      <Label font={"semibold"}>Info: {data?.name}</Label>
      <Label font={"semibold"}>Description</Label>
      <Label>{data?.description}</Label>
      <Label font={"semibold"}>Mattress Detail</Label>
      <Label>{data?.mattress}.</Label>
      <Label font={"semibold"}>Other Actions</Label>
      <Box width={100}>
        <Button
          variant="contained"
          sx={styles.deleteBtn}
          onClick={handleDeleteSuiteType}
        >
          Delete
        </Button>
      </Box>
    </Stack>
  );
};
const styles = {
  photoContainer: {
    display: "flex",
    gap: "10px",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    padding: "10px",
    scrollbarWidth: "thin",
    scrollbarColor: "#ccc transparent",
  },
  image: {
    height: "300px",
    flexShrink: 0,
    borderRadius: "10px",
    objectFit: "cover",
    scrollSnapAlign: "center",
  },
  roomCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: grey[700],
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: red[700],
    color: grey[100],
    textTransform: "none",
  },
};

export default SuiteTypeDetailPage;
