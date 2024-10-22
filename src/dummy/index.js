import { Assets } from "../config/register"

const  amenities=[
    {
      "_id": "64ec0e5f95e1b02ab5bc1f10",
      "name": "Free Wi-Fi",
      "description": "Unlimited high-speed internet access throughout your stay.",
      "icon": Assets.wifi,

      "isAvailable": true
    },
    {
      "_id": "64ec0e5f95e1b02ab5bc1f12",
      "name": "Breakfast Included",
      "description": "Complimentary breakfast served daily in the dining area.",
      "icon": Assets.breakfast,
      "isAvailable": true
    },
    // {
    //   "_id": "64ec0e5f95e1b02ab5bc1f13",
    //   "name": "Swimming Pool",
    //   "description": "Outdoor heated swimming pool with lounge chairs and a poolside bar.",
    //   "icon":Assets.pool,
    //   "isAvailable": true
    // },
    // {
    //   "_id": "64ec0e5f95e1b02ab5bc1f14",
    //   "name": "Gym/Fitness Center",
    //   "description": "Fully equipped gym with cardio machines, weights, and personal trainers on request.",
    //   "icon": Assets.gym,
    //   "isAvailable": true
    // },
    // {
    //   "_id": "64ec0e5f95e1b02ab5bc1f15",
    //   "name": "Spa Services",
    //   "description": "Relaxing spa treatments including massages, facials, and steam baths.",
    //   "icon": Assets.spa,
    //   "isAvailable": true
    // },
    // {
    //   "_id": "64ec0e5f95e1b02ab5bc1f16",
    //   "name": "Airport Shuttle",
    //   "description": "Convenient airport transfer service available upon request.",
    //   "icon": Assets.shuttle,
    //   "isAvailable": true
    // },
    // {
    //   "_id": "64ec0e5f95e1b02ab5bc1f17",
    //   "name": "Pet-Friendly",
    //   "description": "Pet-friendly rooms with additional pet amenities and a designated pet area.",
    //   "icon": Assets.pet,
    //   "isAvailable": true
    // },

    // {
    //   "_id": "64ec0e5f95e1b02ab5bc1f20",
    //   "name": "Laundry Service",
    //   "description": "On-site laundry service with same-day dry cleaning and ironing.",
    //   "icon":Assets.laundry,
    //   "isAvailable": true
    // },
  //   {
  //     "_id": "64ec0e5f95e1b02ab5bc1f21",
  //     "name": "Conference Room",
  //     "description": "Fully equipped conference room with audio-visual equipment and high-speed internet.",
  //     "icon": "https://example.com/icons/conference-room.png",
  //     "isAvailable": true
  //   },
  //   {
  //     "_id": "64ec0e5f95e1b02ab5bc1f22",
  //     "name": "Parking",
  //     "description": "Secure on-site parking with valet service available.",
  //     "icon": "https://example.com/icons/parking.png",
  //     "isAvailable": true
  //   },
  //   {
  //     "_id": "64ec0e5f95e1b02ab5bc1f23",
  //     "name": "Tea/Coffee Maker",
  //     "description": "In-room tea and coffee maker with complimentary supplies.",
  //     "icon": "https://example.com/icons/coffee.png",
  //     "isAvailable": true
  //   },
    {
      "_id": "64ec0e5f95e1b02ab5bc1f24",
      "name": "Air Conditioning",
      "description": "In-room air conditioning with adjustable temperature settings.",
      "icon": Assets.airCondition,
      "isAvailable": true
    },
    {
      "_id": "64ec0e5f95e1b02ab5bc1f27",
      "name": "In-Room Safe",
      "description": "Electronic safe to secure your valuables during your stay.",
      "icon": Assets.safe,
      "isAvailable": true
    },
  ]

export const roomsTypeData=[
    {
        name:'One Bedroom Premium Suite',
        pricePerNight:900,
        tax:1,
        maxOccupancy:4,
        amenities,
        description: "A luxurious room with a stunning city view.",
        rooms:{
            total:10,
            data:[
            ]

    },
    pictures:[
        Assets.rm1,
        Assets.rm12,
        Assets.rm13,Assets.test
    ]
    },



    {
        name:'Presidential Suite',
        pricePerNight:900,
        tax:1,
        maxOccupancy:5,
        amenities,
        description: "The Presidential Suite is the epitome of luxury and space, featuring a large living room, dining area, and a master bedroom with a king-sized bed. Guests can enjoy a private balcony with panoramic views, personalized butler service, and exclusive amenities such as a private jacuzzi, steam room, and home theater system. The suite also includes a full kitchen with a private dining area and a complimentary premium minibar, making it ideal for VIPs, celebrities, or those seeking the highest level of comfort and exclusivity.",
        rooms:{
            total:10,
            data:[
            ]
    },
    pictures:[
        Assets.rm1,
        Assets.rm12,
        Assets.rm13
    ]
    },
    {
        name:'Penthouse Suite',
        pricePerNight:900,
        tax:1,
        maxOccupancy:5,
        amenities,
        description: "The Penthouse Suite is a spacious top-floor retreat, showcasing modern design and luxurious furnishings. It features floor-to-ceiling windows that offer stunning city or ocean views, along with a private rooftop terrace for an exclusive experience. The suite includes an open-plan living room and a bedroom with a king-sized bed, in-room spa services, and high-speed internet with a smart TV. Guests also enjoy complimentary access to the executive lounge, making it an ideal choice for high-end travelers, couples, or special celebrations.",
        rooms:{
            total:10,
            data:[
            ]
    },    pictures:[
        Assets.rm1,
        Assets.rm12,
        Assets.rm13
    ]
    },



    {
        name:'Economy Single Room',
        pricePerNight:900,
        tax:1,
        maxOccupancy:5,
        amenities,
        description: "The Economy Single Room is a compact space equipped with essential amenities, perfect for solo travelers on a budget. It features a comfortable single bed, a compact work desk with a chair, and a private bathroom with a shower. Guests can enjoy basic toiletries, fresh towels, free Wi-Fi, and air conditioning, making it an ideal option for solo travelers, backpackers, or those seeking a short and affordable stay.",
        rooms:{
            total:10,
            data:[
            ]
    },    pictures:[
        Assets.rm1,
        Assets.rm12,
        Assets.rm13
    ]
    },

    {
        name:'Family Suite',
        pricePerNight:900,
        tax:1,
        maxOccupancy:5,
        amenities,
        description: "The Family Suite is a spacious accommodation tailored for families, offering multiple sleeping areas and a shared living space. It includes two bedrooms—one with a king bed and another with twin beds—alongside a cozy living area with a sofa bed. The suite features a kitchenette equipped with a microwave and refrigerator, as well as a play area for children. Guests can also enjoy a complimentary breakfast for the entire family, making it an ideal choice for families with young children or larger groups seeking comfort and convenience.",
        rooms:{
            total:10,
            data:[
            ]
    },    pictures:[
        Assets.rm1,
        Assets.rm12,
        Assets.rm13
    ]
    },

    



    {
        name:'Standard Suite',
        pricePerNight:900,
        tax:1,
        maxOccupancy:5,
        amenities,
        description: "The Standard Double Room offers a cozy space with essential comforts, perfect for single or double occupancy. It features a choice of a double bed or twin beds, a flat-screen TV with cable channels, and a desk with a chair for work. Guests can enjoy an en-suite bathroom with a shower, complimentary Wi-Fi, and tea and coffee making facilities, making it an ideal option for budget-conscious travelers or business guests.",
        rooms:{
            total:10,
            data:[
            ]
    },    pictures:[
        Assets.rm1,
        Assets.rm12,
        Assets.rm13
    ]
    },

    
]

