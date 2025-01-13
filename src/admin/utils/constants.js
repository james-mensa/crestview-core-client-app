import { transformToItemList } from ".";

const AMENITIES = {
  SwimmingPool: "swimmingPool",
  Gym: "gym",
  Spa: "spa",
  Shuttle: "shuttle",
  Wifi: "wifi",
  Breakfast: "breakfast",
  Safe: "safe",
  Pet: "pet",
};

export const Amenities = transformToItemList(AMENITIES);

export const suiteHousekeepingStatus = [
  {
    value: "clean",
    label: "Clean",
  },
  {
    value: "dirty",
    label: "Dirty",
  },
  {
    value: "inspection",
    label: "Inspection",
  },
];
export const suiteStatus = [
  {
    value: "available",
    label: "Available",
  },
  {
    value: "occupied",
    label: "Occupied",
  },
  {
    value: "reserved",
    label: "Reserved",
  },
];
