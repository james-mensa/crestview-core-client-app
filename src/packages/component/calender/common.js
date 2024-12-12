
import dayjs from "dayjs";

export const contentRangeList = [

  {
    label: "One Day",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(1,'day'),
    },
  },
  {
    label: "Two Days",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(2,'day'),
    },
  },
  {
    label: "Three Days",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(3,'day'),
    },
  },
  {
    label: "Four Days",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(4,'day'),
    },
  },
  {
    label: "Five Days",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(5,'day'),
    },
  },
  {
    label: "One Week",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(6,'day'),
    },
  },
  {
    label: "Two Weeks",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(2,'week'),
    },
  },
  {
    label: "Three Weeks",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(3,'week'),
    },
  },
  {
    label: "One Month",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().add(1,'month'),
    },
  },
];




export const useUpdateDateRange =
  (upDateState,isCheckout=false) =>
  (pickedDate) => {
    upDateState((prevRange) => {
      if (prevRange.rangeEnd === null && prevRange.rangeStart === null) {
        return { ...prevRange, rangeStart: pickedDate };
      } else if (prevRange.rangeEnd === null) {
        if (pickedDate.isBefore(prevRange.rangeStart)) {
          return { rangeStart: pickedDate, rangeEnd: prevRange.rangeStart };
        } else {
          return { ...prevRange, rangeEnd: pickedDate };
        }
      } else if (prevRange.rangeStart && prevRange.rangeEnd) {
        if(isCheckout){
          return {...prevRange,rangeEnd: pickedDate };
        }
        return { rangeEnd: null, rangeStart: pickedDate };
      } else {
        return { ...prevRange };
      }
    });
  };

  export const useUpdateDateFocusRange =
  (upDateState,isCheckout=false) =>
  (pickedDate,reset) => {
    upDateState((prevRange) => {
      if(reset===true){
        return {...prevRange, focusDate: null};
      }
      if (prevRange.rangeEnd === null && prevRange.rangeStart === null) {
        return { ...prevRange };
      }
      if (pickedDate.isBefore(prevRange.rangeStart)) {
          return { ...prevRange, focusDate: prevRange.rangeStart };
        } else  {
          if(isCheckout){
          return { ...prevRange, focusDate: pickedDate };
          }
          return { ...prevRange};
        }
      
    });
  };
export const isDateWithinRange = (
  date,
  rangeStart,
  rangeEnd
) => {
    if(rangeStart && rangeEnd){
        return date.isAfter(rangeStart, "day") && date.isBefore(rangeEnd, "day");
    }

};

export const isRangePoint = (date, range) => {
  return date.isSame(range.rangeStart, "day") || date.isSame(range.rangeEnd, "day");
};
export const isRangeEndPoint = (date, endpoint) => {
  return date.isSame(endpoint, "day") 
};

export const  formattedDate=(date,helperText)=>{
  if(date==null || !date.isValid || !date.isValid()) return helperText?? '-- | --';
  return date.format('MMM D, YYYY');}