import * as React from "react";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import CheckIcon from "@mui/icons-material/Check";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers";
import { Avatar, Box, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

import CircleIcon from "@mui/icons-material/Circle";
import {
  contentRangeList,
  formattedDate,
  isDateWithinRange,
  isRangeEndPoint,
  isRangePoint,
  useUpdateDateRange,
} from "./common";
import { Assets } from "../../../config/register";
const CustomCalendarHeaderRoot = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 16px",
  alignItems: "center",
});

export function DateRangerPicker({
  handleOnchange,
  value,
}) {
  const initialRange= {
    rangeStart: value?.rangeStart ?? null,
    rangeEnd: value?.rangeEnd ?? null,
  };
  const [dateRange, updateDateRange] =
    React.useState(initialRange);

  const [fromMonth, updateMonth] = React.useState(dayjs());
  const updateDatehelper = useUpdateDateRange(updateDateRange);
  const [showModel, setModelState] = React.useState(false);
  const [dateRangeText, setDateRangeText] = React.useState("Select dates");
  const updateModelState = () => setModelState(true);

  const isInvalidDate =
    dateRange.rangeEnd == null || dateRange.rangeStart == null;
  const updatePropsState = () => {
    if (isInvalidDate) {
      return;
    }
    if (handleOnchange) handleOnchange(dateRange);
    setDateRangeText(
      `${formattedDate(dateRange.rangeStart)} - ${formattedDate(
        dateRange.rangeEnd
      )}`
    );
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
            <Box sx={styles.rangeBox}>
              <Box sx={styles.textRangePicker}>
                <CalenderLabel title="Range Presets" fontWeight="700" />
              </Box>
              {contentRangeList.map((item, index) => {
                return (
                  <TextRangePicker
                    key={index}
                    selected={item.value === dateRange}
                    title={item.label}
                    onClick={() => updateDateRange(item.value)}
                  />
                );
              })}
            </Box>
            <Box width={656} sx={styles.mainDatePickerContainer}>
              <Stack direction={"row"}>
                <DateCalendar
                  sx={styles.dateComponent}
                  showDaysOutsideCurrentMonth
                  fixedWeekNumber={6}
                  slots={{
                    calendarHeader: (props) =>
                      CustomCalendarHeader({
                        props,
                        fromMonth,
                        updateMonth,
                      }),
                    day: (props) =>
                      CustomDayDate({
                        props,
                        updateDatehelper,
                        dateRange,
                      }),
                  }}
                />
                <DateCalendar
                  sx={styles.dateComponent}
                  showDaysOutsideCurrentMonth
                  fixedWeekNumber={6}
                  slots={{
                    calendarHeader: (props) =>
                      CustomCalendarHeader({
                        props,

                        fromMonth,
                        updateMonth,
                        next: true,
                      }),
                    day: (props) =>
                      CustomDayDate({
                        props,
                        updateDatehelper,
                        dateRange,
                      }),
                  }}
                />
              </Stack>
              <Stack
                sx={{ height: 72 }}
                direction={"row"}
                alignItems={"center"}
                paddingX={2}
              >
                <Stack
                  width={"100%"}
                  direction={"row"}
                  alignItems={"center"}
                  paddingLeft={1}
                >
                  <Box height={40} sx={styles.dateLable}>
                    <CalenderLabel
                      title={formattedDate(dateRange.rangeStart)}
                    />
                  </Box>
                  <RemoveIcon />
                  <Box height={40} sx={styles.dateLable}>
                    <CalenderLabel title={formattedDate(dateRange.rangeEnd)} />
                  </Box>
                </Stack>
                <Stack direction={"row"} gap={1.5}>
            
             <Button label={"cancel"}  onClick={() => setModelState(false)}/>
                  <Button label={"confirm"} onClick={updatePropsState}/>
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
    <Box width={848} sx={styles.model}>
      {children}
    </Box>
  );
};

function CustomDayDate({
  props,
  updateDatehelper,
  dateRange,
}) {
  const { outsideCurrentMonth, day, ...other } = props;

  const onClick = () => {
    if (outsideCurrentMonth) {
      return;
    }
    updateDatehelper(day);
  };

  const withinRangeStyles =
    isDateWithinRange(day, dateRange.rangeStart, dateRange.rangeEnd) &&
    !outsideCurrentMonth
      ? {
          backgroundColor: "#f5faf4",
          borderRadius: "1px",
        }
      : {};

  const rangeEndPointIndicatorStyle = isRangeEndPoint(day, dateRange.rangeEnd)
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
        selected={isRangePoint(day, dateRange)}
        onClick={onClick}
        sx={[styles.dayContainer, withinRangeStyles]}
      />
      <CircleIcon
        sx={[styles.pickedDayIndicator, rangeEndPointIndicatorStyle]}
      />
    </Box>
  );
}

const CustomCalendarHeader = ({
  props,
  fromMonth,
  updateMonth,
  next,
}) => {
  const { currentMonth, onMonthChange } = props;

  const selectNextMonth = () => {
    onMonthChange(fromMonth.add(next ? 2 : 1, "month"), "left");
    updateMonth(fromMonth.add(1, "month"));
  };

  const selectPreviousMonth = () => {
    onMonthChange(fromMonth.subtract(next ? 2 : 1, "month"), "right");
    updateMonth(fromMonth.subtract(1, "month"));
  };

  React.useEffect(() => {
    onMonthChange(fromMonth.add(next ? 1 : 0, "month"), "right");
  }, []);
  return (
    <CustomCalendarHeaderRoot>
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
    </CustomCalendarHeaderRoot>
  );
};

const TextRangePicker = ({
  selected,
  title,
  onClick,
}) => {
  return (
    <Box sx={styles.textRangePicker}>
      <Button
        onClick={onClick}
        sx={{
          textTransform: "none",
          "&:hover": { backgroundColor: "#F5FAF4" },
        }}
      >
        <Typography
          fontFamily={"Inter"}
          fontSize={14}
          fontWeight={600}
          noWrap
          width={280}
          textAlign={"left"}
          paddingLeft={2}
        >
          <CheckIcon
            sx={{
              visibility: selected ? "visible" : "hidden",
              width: 20,
              height: 20,
            }}
          />{" "}
          {title}
        </Typography>
      </Button>
    </Box>
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
  dateWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainDatePickerContainer: {
    borderLeft: "1px #B7C1B6 solid",
  },
  dateComponent: {
    borderBottom: "1px #B7C1B6 solid",
    width: 328,
  },
  dateLable: {
    width: "145px",
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
  rangeBox: {
    width: 192,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "20px 16px",
  },
  textRangePickerLabel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 40,
  },
  textRangePicker: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 40,
    cursor: "pointer",
    "& hover": {
      backgroundColor: "red",
    },
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
