import * as React from "react";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
  PickersDay
} from "@mui/x-date-pickers";
import { Box, Button, Chip, Divider, Grid } from "@mui/material";

import { ActionButton } from "../ActionButton";
import CircleIcon from "@mui/icons-material/Circle";
import {contentRangeList, formattedDate, isDateWithinRange, isRangeEndPoint, isRangePoint, useUpdateDateRange } from "./common";
import { Label } from "../Label";
import { formatDate } from "../../../client/components/utils/common";
import { ColorTheme } from "../../../style/ColorTheme";
import { blue } from "@mui/material/colors";
import { useCloseModel } from "../../hooks/useCloseModel";

const CustomCalendarHeaderRoot = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "8px 16px",
  alignItems: "center",
});

export function XDateRangePicker({
  handleOnchange,
  value,
  label
}) {
  const initialRange= {
    rangeStart: value?.rangeStart ?? null,
    rangeEnd: value?.rangeEnd ?? null,
  };
  const [dateRange, updateDateRange] =React.useState(initialRange);

  const [fromMonth, updateMonth] = React.useState(dayjs());
  const updateDatehelper = useUpdateDateRange(updateDateRange);
  const [showModel, setModelState] = React.useState(false);
  const updateModelState = () => setModelState(true);

  const isInvalidDate =
    dateRange.rangeEnd == null || dateRange.rangeStart == null;
  const updatePropsState = () => {
    if (isInvalidDate) {
      return;
    }
    if (handleOnchange) handleOnchange(dateRange);
    setModelState(false);
  };
  return (
    <Box sx={styles.container}>


      <IconButton
        sx={{borderRadius:0, padding:0,width:'100%'}}
        onClick={updateModelState}
        
      >
      <Stack sx={styles.searchItem}  alignItems={"flex-start"} onClick={updateModelState}>
        <Label sx={styles.label}>{label}</Label>
        <Label sx={styles.title}>
              {formatDate(dateRange.rangeStart)} <ArrowRightAltIcon  color="action"/> {formatDate(dateRange.rangeEnd)}
              <KeyboardArrowDownIcon color={'action'} sx={styles.dateArrow}/> 
        </Label> 
      </Stack>
      </IconButton>

      <DatePickerModel open={showModel} close={()=>setModelState(false)}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
                  sx={styles.dateComponent}
                  disablePast	
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
              <Divider sx={{marginTop:2}}>
    <Chip label="Range Presets" size="small" />
  </Divider>
           <Grid container spacing={0.1}>
                 {contentRangeList.map((item, index) => {
                return (
                  <Grid item xs={4} sm={4} md={4} key={index}>
                  <TextRangePicker
                    key={index}
                    selected={item.value === dateRange}
                    title={item.label}
                    onClick={() => updateDateRange(item.value)}
                  />
                </Grid>
                );
              })}
          </Grid>
      
            <Box>
    

              <Stack
                sx={{ height: 72 }}
                direction={"row"}
                alignItems={"center"}
                paddingX={2}
              >
                <Stack direction={"row"} gap={1.5}>
                             <ActionButton title={"cancel"} varient="light" onClick={() => setModelState(false)}/>
                             <ActionButton title={"confirm"} varient="dark" onClick={updatePropsState}/>
                </Stack>
              </Stack>
            </Box>
       
        </LocalizationProvider>
      </DatePickerModel>
    </Box>
  );
}

const DatePickerModel = ({
  children,
  open,
  close
}) => {
    const modelRef=React.useRef(null);
    useCloseModel(modelRef,close);
   
  if (!open) return null;
  return (
    <Box sx={styles.model}>
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
        backgroundColor: ColorTheme.dark['550'],
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
      <Stack spacing={1} direction="row" alignItems={"center"} width={'100%'} justifyContent={'space-between'}>
        <IconButton onClick={selectPreviousMonth} title="Previous month">
          <ChevronLeft />
        </IconButton>
        <Typography variant="body2" fontWeight={"700"} fontSize={"16px"}>
        {currentMonth.format("MMMM YYYY")}
      </Typography>
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
          backgroundColor: selected? blue[100] : null,
          textTransform: "none",
          "&:hover": { backgroundColor: "#F5FAF4" },
        }}
      >
        <Label sx={{fontSize:13,fontWeight:selected ? 'bold':'500'}}> {title}</Label>
      </Button>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "100%",
  },

  dateComponent: {
    width: '100%',
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
      backgroundColor: `#030c25 !important`,
      color: "white",
      fontSize: "14px",
    },
  },
  model: {
    position: "absolute",
    marginTop: "80px",
    zIndex: 1000,
    marginLeft:-2.5,
    width: '92%',  
    transition: "all 0.3s ease-in-out",
    boxShadow: `0px 8px 8px -4px rgba(230, 227, 227,0.2)`,
    backgroundColor:"white",
    border: "1px #B7C1B6 solid",
    borderRadius: "8px",
  },
  searchItem:(theme)=>({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor:ColorTheme.background.light,
    borderRadius:'15px',
    borderWidth:'1px',
    borderColor:ColorTheme.grey[100], 
    
    overFlow:'hidden',
    [theme.breakpoints.down('sm')]: {
      width:'100%',
      padding:'10px 20px',
    },
    [theme.breakpoints.up('sm')]: {
      width:'60%',
      padding:2,
    },

    
}),
textRangePicker:{
  padding:'10px 10px',
}
,
label:{
  fontFamily: "Manrope",
  fontWeight: '600',
  color:ColorTheme.text.label,
},
title:{
  cursor:'pointer',
  fontFamily: "Manrope",
  fontWeight: '600'

}
};
