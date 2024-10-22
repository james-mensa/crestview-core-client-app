import toast from "react-hot-toast";
import { format, differenceInMinutes, isBefore, isEqual } from "date-fns";

export function FormatDate(inputDate) {
  const date = new Date(inputDate);
  const formattedDate = format(date, "EE LLL dd yyyy");

  return formattedDate;
}



export const PromptToastify = (message) => {
  toast.success(message, {
    duration: 7000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Custom Icon
    icon: "💬",
  });
};

export const showToastify = (type, message) => {
  switch (type) {
    case "SUCCESS":
      toast.success(message, {
        duration: 5000,
        position: "top-center",

        // Styling
        style: {},
        className: "",

        // Custom Icon
        icon: "✔️",
      });
      break;
    case "ERROR":
      toast.error(message, {
        duration: 4000,
        position: "top-center",

        // Styling
        style: {},
        className: "",

        // Custom Icon
        icon: "❌",
      });
      break;
    default:
      return null;
  }
};
export const shownewEmployeeP = (target, div) => {
  const showdiv = document.querySelector(`.${div}`);
  showdiv.classList.add("emploee_add_show");
  setTimeout(() => {
    showdiv.scrollIntoView({
      behavior: "smooth",
    });
  }, 500);
};
export const hideEmployeeP = (target, div) => {
  const showdiv = document.querySelector(`.${div}`);
  showdiv.classList.remove("emploee_add_show");
  setTimeout(() => {
    window.scrollTo(0,0)
  }, 500);
};

// Disable scrolling
export function disableScroll() {
  // Add styles to make the page fixed at the current scroll position
  document.body.style.position = "fixed";
}

// Enable scrolling
export function enableScroll() {
  // Get the previous scroll position from the style attribute
  var scrollPosition = parseInt(document.body.style.top, 10);
  // Remove the fixed positioning and restore the scroll position
  document.body.style.position = "";
  document.body.style.top = "";

  // Scroll back to the original position
  window.scrollTo(0, scrollPosition);
}

export function stayDays(startDate, endDate) {
  // Create Date objects for the two dates
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);

  // Calculate the time difference in milliseconds
  const timeDifference = date2.getTime() - date1.getTime();

  // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

export const lazyLoad = () => {
  const containerv = document.querySelectorAll(".layoutspacv");

  containerv.forEach((child, index) => {
    const prevSibling = child.previousElementSibling;

    if (index > 0 && prevSibling) {
      setInterval(() => {
        if (prevSibling.classList.contains("showspac")) {
          if (child.getBoundingClientRect().top < window.innerHeight) {
            if (!child.classList.contains("showspac")) {
              child.classList.add("showspac");
            }
          }
        }
      }, 500);
    } else {
      if (child.getBoundingClientRect().top < window.innerHeight) {
        if (!child.classList.contains("showspac")) {
          child.classList.add("showspac");
        }
      }
    }
  });

  window.addEventListener("scroll", () => {
    containerv.forEach((child, index) => {
      const prevSibling = child.previousElementSibling;

      if (index > 0 && prevSibling) {
        setInterval(() => {
          if (prevSibling.classList.contains("showspac")) {
            if (child.getBoundingClientRect().top < window.innerHeight) {
              if (!child.classList.contains("showspac")) {
                child.classList.add("showspac");
              }
            }
          }
        }, 500);
      } else {
        if (child.getBoundingClientRect().top < window.innerHeight) {
          if (!child.classList.contains("showspac")) {
            child.classList.add("showspac");
          }
        }
      }
    });
  });
};

export const DueTime = (date) => {
  var currentDate = date;
  // Add one hour
  currentDate.setHours(currentDate.getHours() + 1);
  return currentDate;
};

export const defaultDueTime = () => {
  var currentDate = new Date();

  // Add one hour
  currentDate.setHours(currentDate.getHours() + 1);
  return currentDate;
};

export function differenceBetween(startTime, endTime, price, options) {
  const startDate = new Date();
  const endDate = new Date();

  startDate.setHours(startTime.split(":")[0]);
  startDate.setMinutes(startTime.split(":")[1]);

  endDate.setHours(endTime.split(":")[0]);
  endDate.setMinutes(endTime.split(":")[1]);

  const duration = differenceInMinutes(endDate, startDate);
  const formatedPrice =
    parseFloat(((price * duration) / 60).toFixed(0)) + options * 20;
  return formatedPrice;
}

export function checkDueDate(targetDate) {
  const yourDate = new Date(targetDate);
  const currentDate = new Date();

  if (isBefore(yourDate, currentDate) || isEqual(yourDate, currentDate)) {
    return true;
  } else {
    return false;
  }
}
export function ReturnOrderByType(target, data) {
  const filterD = data.filter(
    (data) => data.room.room_type.charAt(0) === target.charAt(0)
  );

 
  return filterD;
}



/* GET NAME INITIALS */

export function getInitials(fullName) {
  return fullName
      .split(' ') // Split the full name into an array of words
      .map(name => name[0].toUpperCase()) // Take the first character of each word and convert it to uppercase
      .join(''); // Join the initials together
}