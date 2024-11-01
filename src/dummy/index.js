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

const roomsTypeData=[
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
        Assets.premium1,
        Assets.premium2,
        Assets.premium3
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
        Assets.president1,
        Assets.president2,
        Assets.president3
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
        Assets.pent1,
        Assets.pent2,
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
        Assets.econ1,
        Assets.econ2,
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
        Assets.fam1,
        Assets.fam2,
        Assets.fam3
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
        Assets.standard1,
        Assets.standard2,
        Assets.standard3
    ]
    },

    
]

export const facilities=[
    {
        id:21324554,
        name:'Conference rooms',
        description:'For those seeking event and meeting facilities, our versatile spaces are perfect for hosting everything from intimate gatherings to corporate conferences. Our conference rooms are equipped with the latest technology and can be configured to meet your specific needs. Our professional event planning team is on hand to assist you in creating a seamless and memorable occasion.',
        images:[
            Assets.conference1,
            Assets.conference2,
            Assets.conference3
        ]
    },
    {
        id:21324555,
        name:'High-End Movie Theater',
        description:'Accessible to our clients /n Indulge in the latest blockbusters and timeless classics in our cutting-edge, private movie theater. Immerse yourself in crystal-clear visuals and immersive sound, all while reclining in the comfiest seats in town.',
        images:[
            Assets.theater1,
            Assets.theater2,
        ]
    },
    {
        id:21324556,
        name:'Gourmet Dining',
        description:'Accessible to our clients /n Savor a world of culinary delights at our renowned restaurants. From sumptuous breakfast buffets to exquisite dinners, our talented chefs ensure that every meal is a feast for the senses.',
        images:[
            Assets.dinning1,
            Assets.dinning2,
            Assets.dinning3
        ]
    },
    {
        id:21324557,
        name:'Rooftop Bar',
        description:`Sip on signature cocktails while enjoying panoramic views of the city from our rooftop bar with comes with our Excecutive suite rooms. It's the perfect spot to unwind after a thrilling movie night.`,
        images:[
            Assets.rooftop1,
            Assets.rooftop2,
            Assets.rooftop3
        ]
    },
    {
        id: 213242453,
        name: 'Gym',
        description: `Stay fit and energized during your stay with our state-of-the-art gym facilities. Equipped with modern workout machines and free weights, it's the perfect space to maintain your fitness routine while enjoying panoramic views of the city.`,
        images: [
            Assets.gym1,
            Assets.gym2
        ]
    }
]

const suiteImages=[
    Assets.rm1,
    Assets.rm12,
    Assets.rm13,
]

const itemsList = [
    {
        title:"Exceptional \nfood and drink",
        description:"From sourcing fresh ingredients to the inventiveness of our chefs to the range of options across different cuisines, we make every meal a profound pleasure.",
        image: Assets.food1
    },
    {
        title:"Family fun",
        description:"We create extraordinary family experiences. Our fully supervised kids clubs allow kids to learn, have fun and make friends while you unwind.",
        image:Assets.family1
    },
    {
        title:"A world of sports \n and activity",
        description:"Chill out with yoga, raise your heart rate in our gyms, stretch your legs on the golf course or take to the air on a kite surf. You set your limits... if you have them.",
        image:Assets.sport1
    },
    {
        title:"World class \nspa and wellness",
        description:"From beauty treatments to saunas, steam rooms and spa baths to massages and reflexology: get pampered and feel wonderful in exactly the way you want.",
        image:Assets.spa1
    },
    {
        title:"Spectacular \nentertainment",
        description:"Shows, spectacles and performances: from larger scale to more intimate, from music to magic, from dance to humour to regional and international culture. Discover and enjoy, then discover some more."
   ,
        image:Assets.entertainment1
     }
]


export const  dummyData={
    itemsList,
    suiteImages,
    roomsTypeData
}