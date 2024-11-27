
import dayjs from "dayjs";

export const contentRangeList = [
  {
    label: "Yesterday",
    value: {
      rangeStart: dayjs().subtract(1, "day").startOf("day"),
      rangeEnd: dayjs().subtract(1, "day").endOf("day"),
    },
  },
  {
    label: "Today",
    value: {
      rangeStart: dayjs().startOf("day"),
      rangeEnd: dayjs().endOf("day"),
    },
  },
  {
    label: "Last Week",
    value: {
      rangeStart: dayjs().subtract(1, "week").startOf("week"),
      rangeEnd: dayjs().subtract(1, "week").endOf("week"),
    },
  },
  {
    label: "Last Month",
    value: {
      rangeStart: dayjs().subtract(1, "month").startOf("month"),
      rangeEnd: dayjs().subtract(1, "month").endOf("month"),
    },
  },
  {
    label: "Last Year",
    value: {
      rangeStart: dayjs().subtract(1, "year").startOf("year"),
      rangeEnd: dayjs().subtract(1, "year").endOf("year"),
    },
  },
  {
    label: "All time",
    value: {
      rangeStart: dayjs("1970-01-01"),
      rangeEnd: dayjs(),
    },
  },
];




export const useUpdateDateRange =
  (upDateState) =>
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
        return { rangeEnd: null, rangeStart: pickedDate };
      } else {
        return { ...prevRange };
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

export const  formattedDate=(date)=>{
  if(date==null) return '-- | --';
  return date.format('MMM D, YYYY');}