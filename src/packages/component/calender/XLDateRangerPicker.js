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
import { Box, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CircleIcon from "@mui/icons-material/Circle";
import {
  contentRangeList,
  formattedDate,
  isDateWithinRange,
  isRangeEndPoint,
  isRangePoint,
  useUpdateDateFocusRange,
  useUpdateDateRange,
} from "./common";
import { Label } from "../Label";
import { ColorTheme } from "../../../style/ColorTheme";
import { grey } from "@mui/material/colors";
import { ActionButton } from "../ActionButton";
import { useCloseModel } from "../../hooks/useCloseModel";
const CustomCalendarHeaderRoot = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 16px",
  alignItems: "center",
});

export function XLDateRangerPicker({
  handleOnchange,
  value,
  label,
  title,
  isCheckout=false
}) {
  const initialRange= {
    rangeStart: value?.rangeStart ?? null,
    rangeEnd: value?.rangeEnd ?? null,
    focusDate:null
  };
  // eslint-disable-next-line no-unused-vars
  const [dateRange, __] =React.useState(initialRange);

  const [fromMonth, updateMonth] = React.useState(dayjs());
  const updateDatehelper = useUpdateDateRange(handleOnchange,isCheckout);
  const updateDateFocusHelper = useUpdateDateFocusRange(handleOnchange,isCheckout)
  const [showModel, setModelState] = React.useState(false);
  const updateModelState = () => {
    handleOnchange(p=>({...p,focusDate:null}))
    setModelState(true)};

  const isInvalidDate =
    dateRange.rangeEnd == null || dateRange.rangeStart == null;
  const resetPropsState = () => {
    if (isInvalidDate) {
      return;
    }
    if (handleOnchange) handleOnchange(dateRange);
    handleOnchange(p=>({...p,focusDate:null}))
    setModelState(false);
  };

  return (
    <Box sx={styles.container}>
      <IconButton
        sx={{borderRadius:0}}
        onClick={updateModelState}
      >
      <Stack  alignItems={"flex-start"} onClick={updateModelState} width={125}>
        <Label sx={styles.label}>{title}</Label>
        <Label sx={styles.title}>
              {formattedDate(label,'Pick a date')}
              <KeyboardArrowDownIcon color={'action'} /> 
        </Label>
      </Stack>
      </IconButton>

      <DatePickerModel open={showModel} close={updateModelState}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack direction={"row"} >
            <Box sx={styles.rangeBox}>
              <Box sx={styles.textRangePicker}>
                <CalenderLabel title="Range Presets" fontWeight="700" />
              </Box>
              {contentRangeList.map((item, index) => {
                return (
                  <TextRangePicker
                    key={index}
                    selected={item.value === value}
                    title={item.label}
                    onClick={() => handleOnchange(item.value)}
                  />
                );
              })}
            </Box>
            <Box width={656} sx={styles.mainDatePickerContainer}>
              <Stack direction={"row"}  >
                <DateCalendar
                  sx={styles.dateComponent}
                  disablePast	
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
                        updateDateFocusHelper,
                        dateRange:value,
                      }),
                  }}
                />
                <DateCalendar
                  sx={styles.dateComponent}
                  disablePast
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
                        updateDateFocusHelper,
                        dateRange:value,

                      }),
                  }}
                />
              </Stack>
              <Stack
                sx={{ height: 72}}
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
              
                    <Label>{formattedDate(dateRange.rangeStart)}</Label>
                  </Box>
                  <RemoveIcon />
                  <Box height={40} sx={styles.dateLable}>
                    <Label>{formattedDate(dateRange.rangeEnd)}</Label>
                  </Box>
                </Stack>
                <Stack direction={"row"} gap={1.5}>
                  <ActionButton title={"cancel"} varient="light" onClick={resetPropsState}/>
                  <ActionButton title={"confirm"} varient="dark" onClick={() => setModelState(false)}/>
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
  close,
}) => {
  const modelRef=React.useRef(null);
  useCloseModel(modelRef,close,"mousedown");
  
  if (!open) return null;
  return (
    <Box width={848} sx={styles.model} ref={modelRef}>
      {children}
    </Box>
  );
};

function CustomDayDate({
  props,
  updateDatehelper,
  updateDateFocusHelper,
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
          backgroundColor: ColorTheme.dark['550'],
          borderRadius: "1px",
        }
      : {};

  const withinRangeFocusStyles =
      isDateWithinRange(day, dateRange.rangeStart, dateRange.focusDate)? {backgroundColor: grey[200],borderRadius: "1px"} : {};
  const rangeEndPointIndicatorStyle = isRangeEndPoint(day, dateRange.rangeEnd)
    ? {color: "white"}: { display: "none",};

  const handleFocus=()=>updateDateFocusHelper(day);
  const resetState=()=>updateDateFocusHelper(day,true)
  return (
    <Box sx={styles.dayPickerContainer} >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        selected={isRangePoint(day, dateRange)}
        onClick={onClick}
        onMouseEnter={handleFocus}
        onMouseOver={handleFocus}
        onMouseLeave={resetState}
        sx={[styles.dayContainer,withinRangeFocusStyles, withinRangeStyles]}

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
        <Label sx={{fontSize:13,fontWeight:selected ? 'bold':'500'}}><CheckIcon
            sx={{
              visibility: selected ? "visible" : "hidden",
              width: 20,
              height: 20,
            }}
          /> {title}</Label>
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
    backgroundColor:'white'
  },
  dateWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainDatePickerContainer: {
    borderLeft: "1px #B7C1B6 solid",
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
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
    fontFamily: "Clash Grotesk",
    fontWeight:'500',
    "&.MuiPickersDay-root.Mui-selected": {
      backgroundColor: `#030c25 !important`,
      color: "white",
      fontSize: "14px",
      fontWeight:'500'
    },

  },
  model: {
    position: "absolute",
    marginTop: "80px",
    marginLeft: "-20px",
    zIndex: 1000,
    transition: "all 0.3s ease-in-out",
    boxShadow: `0px 8px 8px -4px rgba(230, 227, 227)`,
    backgroundColor:grey[50],
    border: "1px #B7C1B6 solid",
    borderRadius: "8px",
    opacity: 1,
    transform: "translateY(0)",
  },


  label:{
    fontFamily: "Manrope",
    fontWeight: '600',
    color:ColorTheme.text.label,

  },
  title:{
    cursor:'pointer',
    fontFamily: "Manrope",
    fontWeight: '600',

  }
};
