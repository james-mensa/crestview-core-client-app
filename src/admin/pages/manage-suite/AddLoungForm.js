import React, { useState } from "react";

import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Label } from "../../../packages/component/Label";
import { InputText } from "../../../packages/InputText";
import useInputUpdateHelper from "../../../hooks/useInputFormHelper";
import { useFieldHasError } from "../../../hooks/useFormHasError";
import { SelectInput } from "../../../packages/SelectInput";
import { AmenitiesCard } from "../../component/AmenitiesCard";
import { updateListField } from "../../../hooks/useUpdateListField";
import { useFormRemoveListItem } from "../../../hooks/useFormRemoveListItem";
import { validateForm } from "../../../libs/validators";
import { useNavigate } from "react-router-dom";
import { appRoutePaths } from "../../../config/routePaths";
import { suiteHousekeepingStatus, suiteStatus } from "../../utils/constants";
import { ActionButton } from "../../../packages/component/ActionButton";
import { formDialogStore } from "../../../mobx-store";
import { grey } from "@mui/material/colors";
import { suitTypeApis } from "../../../apis/suite/suiteTypeApi";

const __DEFAULT_VALUE = { isValid: false, value: "", errorMessage: "required" };
const defaultState = {
  roomNumber: __DEFAULT_VALUE,
  status: __DEFAULT_VALUE,
  floorNumber: { isValid: true, value: 1 },
  housekeepingStatus: __DEFAULT_VALUE,
  tags: { isValid: true, value: [] },
  submitAttempt: false,
};

const AddLoungForm = ({suiteTypeId}) => {
  const [formData, upDateForm] = useState(defaultState);
  const handleInputUpdate = useInputUpdateHelper(upDateForm);
  const handleListFieldUpdate = updateListField(upDateForm);
  const handleRemoveListItem = useFormRemoveListItem(upDateForm);
  const fieldHasError = useFieldHasError(formData);
  const [inProgress, setInProgress] = useState(false);
  const [inputTag, setInputTag] = useState("");
  const addTagsFromInput = () => {
    handleListFieldUpdate("tags", "list", inputTag)();
  };
  const handleSubmit = async () => {
    upDateForm((prev) => ({
      ...prev,
      submitAttempt: true,
    }));
    setInProgress(true);

    const isValid = validateForm(formData);
    if (isValid) {
      const requestBody = {
        roomNumber: formData.roomNumber.value,
        status: formData.status.value,
        floorNumber: Number(formData.floorNumber.value),
        housekeepingStatus: formData.housekeepingStatus.value,
        tags: formData.tags.value,
        suiteTypeId
      };
      const response= await suitTypeApis.AddRoom(requestBody)
      console.log({ response });
      
    }
    setInProgress(false)
  };

  const appNavigation = useNavigate();
  const goAddSuiteTypePage = () =>
    appNavigation(appRoutePaths.admin.ADMIN_MANAGE_SUITE_PATH);
  const handleClose = () => {
    formDialogStore.close();
  };
  return (
    <Box>
      <AppBar sx={{ position: "static" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Label sx={{ flexGrow: 1, color: grey[100] }} font={"semibold"}>
            {formDialogStore.headerTitle}
          </Label>

          {inProgress && formData.submitAttempt ? (
            <CircularProgress size={13} sx={{ color: grey[200] }} />
          ) : (
            <Button autoFocus color="inherit" onClick={handleSubmit}>save</Button>
          )}
        </Toolbar>
      </AppBar>
      <Box sx={styles.container}>
        <Stack gap={1.5}>
          <Stack sx={styles.fieldLayout}>
            <TextField
              name={"floorNumber"}
              label={"Floor Number"}
              placeholder={"Enter floor number"}
              onChange={handleInputUpdate("floorNumber")}
              error={fieldHasError("floorNumber")}
              value={formData.floorNumber.value}
              errorMessage={formData.floorNumber.errorMessage}
            />
            <TextField
              name={"roomNumber"}
              label={"Room Number"}
              placeholder={"Enter room number"}
              onChange={handleInputUpdate("roomNumber")}
              error={fieldHasError("roomNumber")}
              value={formData.roomNumber.value}
              errorMessage={formData.roomNumber.errorMessage}
            />
          </Stack>

          <Box>
            <Label>House keeping status</Label>
            <SelectInput
              value={formData.housekeepingStatus.value}
              onChange={handleInputUpdate("housekeepingStatus")}
              items={suiteHousekeepingStatus}
              name={"housekeepingStatus"}
              placeholder={"select house keeping status"}
              errorMessage={formData.housekeepingStatus.errorMessage}
              error={fieldHasError("housekeepingStatus")}
            />
          </Box>
          <Box>
            <Label>Room Status</Label>
            <SelectInput
              value={formData.status.value}
              onChange={handleInputUpdate("status")}
              items={suiteStatus}
              name={"status"}
              placeholder={"select room  status"}
            />
          </Box>

          <Stack direction={"row"} gap={1}>
            <InputText
              label={"loung tag"}
              placeholder={"Enter loung  tag"}
              onChange={(event) => setInputTag(event?.target?.value)}
            />
            <Box marginTop={0.3}>
              <ActionButton onClick={addTagsFromInput} title={"Add tag"} />
            </Box>
          </Stack>

          <Grid
            container
            spacing={1}
            sx={styles.amenitiesContainer}
            width={400}
          >
            {formData?.tags?.value.map((item, index) => (
              <Grid item xs={6} sm={6} md={4} key={index}>
                <AmenitiesCard
                  title={item}
                  onClick={() => handleRemoveListItem("tags", "list", item)}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddLoungForm;

const TextField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  errorMessage,
}) => {
  return (
    <Box gap={1}>
      <Label>{label}</Label>
      <InputText
        name={name}
        placeholder={placeholder}
        error={error}
        errorMessage={errorMessage}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    padding: 5,
    minWidth: 250,
  },
  fieldContainer: {
    flexDirection: "column",
    width: 200,
    gap: 1,
  },
  fieldLayout: {
    flexDirection: "row",
    gap: 2,
  },
  descriptionBox: (theme) => ({
    [theme.breakpoints.up("xl")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xl")]: {
      width: 700,
    },
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  }),
  pageLayout: (theme) => ({
    [theme.breakpoints.up("xl")]: {
      display: "flex",
      flexDirection: "row",
      gap: 5,
    },
    [theme.breakpoints.down("xl")]: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
    },
  }),

  amenitiesContainer: (theme) => ({
    [theme.breakpoints.up("xl")]: {},

    [theme.breakpoints.down("xl")]: {
      marginTop: -2,
    },
  }),
};
