import { transformToItemList } from ".";

 const AMENITIES={
    SwimmingPool : "swimmingPool",
    Gym : "gym",
    Spa : "spa",
    Shuttle : "shuttle",
    Wifi : "wifi",
    Breakfast : "breakfast",
    Safe : "safe",
    Pet : "pet",
  }

 export const Amenities = transformToItemList(AMENITIES);