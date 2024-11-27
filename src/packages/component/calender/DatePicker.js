import * as React from "react";
import { Dayjs } from "dayjs";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Assets } from "../../../config/register";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import {
  PickersDay
} from "@mui/x-date-pickers";
import { Avatar, Box } from "@mui/material";

import { ContainedButton, OutlinedButton } from "../Button/AppButton";

import CircleIcon from "@mui/icons-material/Circle";
import { formattedDate } from "./common";

const CustomCalendarHeaderRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "8px 16px",
  alignItems: "center",
});

export function DatePicker({
  handleOnchange,
  value,
}) {
  const initialRange= value ?? null;

  const [datePicked, updateDatePicked] = React.useState<Dayjs | null>(
    initialRange
  );
  const updateDatehelper = (date) => updateDatePicked(date);

  const [showModel, setModelState] = React.useState(false);
  const [dateRangeText, setDateRangeText] = React.useState("Select dates");
  const updateModelState = () => setModelState(true);

  const isInvalidDate = datePicked == null;

  const updatePropsState = () => {
    if (isInvalidDate) {
      return;
    }
    if (handleOnchange) handleOnchange(datePicked);
    setDateRangeText(`${formattedDate(datePicked)}`);
    setModelState(false);
  };

  return (
    <Box sx={styles.container}>
      <IconButton
        sx={{ height: "40px" }}
        size="small"
        onClick={updateModelState}
      >
        <Box sx={styles.labelContainer}>
          <Avatar
            src={
              Assets.icons[
                isInvalidDate? "calender_icon":"calender_fill"
              ]
            }
            sx={{ width: 20, height: 20 }}
          />
          <CalenderLabel
            title={dateRangeText}
            fontWeight="600"
            color="#63705F"
          />
        </Box>
      </IconButton>

      <DatePickerModel open={showModel}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack direction={"row"}>
            <Box>
              <DateCalendar
                sx={styles.dateComponent}
                showDaysOutsideCurrentMonth
                fixedWeekNumber={6}
                slots={{
                  calendarHeader: (props) =>
                    CustomCalendarHeader(props, datePicked),
                  day: (props) =>
                    CustomDayDate({
                      props,
                      updateDatehelper,
                      datePicked,
                    }),
                }}
              />

              <Stack
                sx={{ height: 72 }}
                direction={"row"}
                alignItems={"center"}
                paddingX={2}
              >
                <Stack direction={"row"} gap={1.5}>
                  <OutlinedButton
                    width={142}
                    title="cancel"
                    onClick={() => setModelState(false)}
                  />
                  <ContainedButton
                    width={142}
                    title="confirm"
                    onClick={updatePropsState}
                  />
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </LocalizationProvider>
      </DatePickerModel>
    </Box>
  );
}

const DatePickerModel = ({
  children,
  open,
}) => {
  if (!open) return null;
  return (
    <Box width={328} sx={styles.model}>
      {children}
    </Box>
  );
};

function CustomDayDate({
  props,
  updateDatehelper,
  datePicked,
}) {
  const { outsideCurrentMonth, day, ...other } = props;

  const onClick = () => {
    if (outsideCurrentMonth) {
      return;
    }
    updateDatehelper(day);
  };

  const IndicatorStyle = datePicked?.isSame(day, "day")
    ? {
        color: "white",
      }
    : {
        display: "none",
      };
  return (
    <Box sx={styles.dayPickerContainer}>
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        onClick={onClick}
        sx={styles.dayContainer}
      />
      <CircleIcon sx={[styles.pickedDayIndicator, IndicatorStyle]} />
    </Box>
  );
}

const CustomCalendarHeader = (
  props,
  datePicked
) => {
  const { currentMonth, onMonthChange } = props;

  const selectNextMonth = () => {
    onMonthChange(currentMonth.add(1, "month"), "left");
  };
  const selectPreviousMonth = () => {
    onMonthChange(currentMonth.subtract(1, "month"), "right");
  };

  return (
    <CustomCalendarHeaderRoot>
      <Stack
        width={"100%"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack spacing={1} direction="row">
          <IconButton onClick={selectPreviousMonth} title="Previous month">
            <ChevronLeft />
          </IconButton>
        </Stack>
        <Typography variant="body2" fontWeight={"700"} fontSize={"16px"}>
          {currentMonth.format("MMMM YYYY")}
        </Typography>
        <Stack spacing={1} direction="row">
          <IconButton onClick={selectNextMonth} title="Next month">
            <ChevronRight />
          </IconButton>
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        gap={1.5}
        width={"95%"}
        justifyContent={"space-between"}
      >
        <Box height={40} sx={styles.dateLable}>
          <CalenderLabel title={formattedDate(datePicked)} />
        </Box>
        <OutlinedButton title="Next" onClick={() => {}} />
      </Stack>
    </CustomCalendarHeaderRoot>
  );
};

const CalenderLabel = ({
  fontWeight = "500",
  title,
  color,
}) => {
  return (
    <Typography
      fontFamily={"Inter"}
      fontSize={14}
      fontWeight={fontWeight}
      color={color ?? "#455042"}
      noWrap
      textAlign={"center"}
    >
      {title}
    </Typography>
  );
};
const styles = {
  container: {
    display: "flex",
  },

  dateComponent: {
    borderBottom: "1px #B7C1B6 solid",
    width: 328,
  },
  dateLable: {
    width: "204px",
    height: "40px",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px #B7C1B6 solid",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    justifyContent: "center",
    cursor: "pointer",
    paddingLeft: "8px",
  },

  labelContainer: {
    height: "40px",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px #B7C1B6 solid",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    justifyContent: "center",
    cursor: "pointer",
    padding: "0 16px",
  },
  pickedDayIndicator: {
    width: 5,
    height: 5,
    position: "absolute",
    marginTop: 3.2,
    marginLeft: 2.2,
    zIndex: 10,
  },
  dayPickerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  dayContainer: {
    "&.MuiPickersDay-root.Mui-selected": {
      backgroundColor: `#04BB47 !important`,
      color: "white",
      fontSize: "14px",
    },
  },
  model: {
    position: "absolute",
    marginTop: "56px",
    zIndex: 1000,
    transition: "all 0.3s ease-in-out",
    boxShadow: `0px 8px 8px -4px rgba(230, 227, 227)`,
    border: "1px #B7C1B6 solid",
    borderRadius: "8px",
  },
};
