import swat_banner from "../public/assets/IMAGES/tour-packages/swat-valley-pk-09/banner.jpg";
import swat_place_1 from "../public/assets/Iternaries/swat/pakage-detail-img2.jpg";
import hunza_iternaries from "../public/assets/Iternaries/hunza/iternary-badsahi-mosque.jpg";
import fairy_iternaries from "../public/assets/Iternaries/hunza/fairy-madows-iternary.jpg";
import hunza_iternaries2 from "../public/assets/Iternaries/hunza/iternary-hunza2.jpg";
import autumn_iternaries from "../public/assets/Iternaries/hunza/lahore-autumn-iternary.jpg";
import chitral_iternary from "../public/assets/Iternaries/chitral/iterniry.jpg";
import skardu_iternary from "../public/assets/Iternaries/skardu/skardu-photography-iternary.jpg";

import banner2 from "../public/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/cover-photo.jpg"

export const CATEGORIES = {
  main: "main",
  home: "home",
  hunza: "hunza",
  skardu: "skardu",
  swat: "swat",
  chitral: "chitral",
  naran: "naran",
  fairy: "fairy",
  lahore: "lahore",
  islamabad: "islamabad",
  karakoram: "karakoram",
};

export const TOUR_PAKAGE = [
  // =========================================================
  //  BR Around Karakoram
  // =========================================================

  // Journey Around Karakoram
  { 
    category: [CATEGORIES.home, CATEGORIES.naran, CATEGORIES.karakoram],
    id: "journey-around-karakoram-paki-10",
    title: "Journey Around Karakoram",
    service_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/banner-2.jpg",
    bg_position: "bottom",
    link: "package-tour/journey-around-karakoram-paki-10",
    provincesCovered: "Gilgit Baltistan",
    price: "$1,800",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether you talk about landscape, food, culture or our traditions. Islamabad is the capital of Pakistan where our journey starts, Islamabad is surrounded by beautiful Margalla Hills which are the start of our mountain ranges. In the extreme North-East of Pakistan, at an altitude of 8200 ft., Skardu District is located in Gilgit-Baltistan and is the center of trekking, trailing and climbing journeys.",
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "",
      // weather: "40",
      bestTime: "May → October",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/banner.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_1.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_3.jpg",
          title: "Shangri-La Resorts in the Lower Kachura Lake",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_10.jpg",
          title: "Dawn and dusks at Indus River",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_7.jpg",
          title: "The land of Giants, Deosai plains",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_6.jpg",
          title: "Khaplu fort and Shigar fort",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Highlights(1).jpg",
          title: "Hashupi bagh",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Highlight .jpg",
          title: "Katpana Desert sand dunes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Shangrila.jpg",
          title: "Serenity of Satpara Lake",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Highlights.jpg",
          title: "Heritage & History of Skardu & Hunza",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_9.jpg",
          title: "Baltit and Altit fort",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 5.jpg",
          title: "Boating at Atabad Lake",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Starry night in Skardu.jpg",
          title: "Traditional musical night",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Highlight-2.jpg",
          title: "Amazing food country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_1.jpg",
        description: "KhushAmdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North's representatives and transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Today is a rest day to settle in and relax after your international flight. You may wish to head out and enjoy a cup of local chai and sweets. A welcome dinner will be served at a fine dining restaurant handpicked by Facing North where you will meet your Resident Director. A brief introduction will also be given to help you prepare for the upcoming tours.",
        title: "Arrival at Islamabad",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Marriott Hotel (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 2.jpg",
        description: "Early morning flight from Karachi to Skardu, Flight is approx. 2 hours which will leave a lifetime impact, the flight will cross some of the high-altitude peaks and highest mountain ranges & 9th Highest peak in the world Nanga Parbat also known as the killer mountain. Arriving at Skardu airport, we will depart to Hunza valley, which will be a 5 to 6 hours drive via crossing Gilgit city. Short stopovers at different viewpoints including Rakaposhi view point and 3 mountain ranges colliding point. upon arrival transfer to the hotel. overnight stay.",
        title: "Karachi to Skardu → Hunza",
        deluxeHotel: "Greenpak Resort (Quality stay at a more economical rate)",
        premiumHotel: "Serena Hotel (Offers enhanced comfort and facilities)",
        activities: "Drive from Skardu Airport to Hunza",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 3.jpeg",
        description: "Today, we will explore the culture and traditions of Hunza valley, it has so much to offer. We will start a short heritage walk from Karimabad bazar to Baltit fort, which is located on the top of Karimabad bazar. We will take a tour of Baltit Fort to learn about the history, culture, traditions of Hunza Valley. We'll walk back to Karimabad Bazar, an excursion to Altit Fort, another stunning piece of architecture and history. Tour of Altit fort. There is a small hidden café in Altit called Khabasi Café which is operated by females only, an amazing initiative taken by Prince Agha Khan to uplift women empowerment. Evening walk in Altit royal gardens, return to Karimabad, some free shopping time. Transfer to hotel. Rest till the next morning.",
        title: "Karimabad, Baltit and Altit Fort",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café.",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 4.jpeg",
        description: "Morning breakfast will be served, departure to Attabad lake. Continue to drive to the famous Hussaini suspension bridge. You will have to walk downhill for 15 minutes to reach the bridge. Photography and sightseeing. Head towards Borith lake, have freshly cooked snacks by the lake and enjoy the view. Short 20 minutes drive to Zero Point from where we will start our Passu glacier hike. It is a 40 minute hike which has a beautiful panoramic view of Passu Cones and Passu Glacier. Return to Attabad Lake, check into the hotel. Enjoy the beautiful views of the lake resort. Head to the boating area for jet skiing and boating. Return to the Resort. Leisure and dinner by the lake. Overnight stay.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith lake",
        premiumHotel: "Luxus Atabad Lake Resort (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake.",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 5.jpg",
        description: "Our day will start with a majestic view of Attabad Lake in the background. Breakfast will be served with the lake view, after which we will head to Sost with stopovers at different villages for photography. We will visit Sost Dry Port. Excursion to Khunjerab pass which is situated at an elevation of 4,693m. Then we will head back to Passu, visit Yak Grill for lunch where you can try local Yak meat dishes. Head to Glacier Breeze café for scrumptious organic Apricot cake and tea with the sunset on Passu cones. Return to the hotel and rest for a while. Visit Moksha Resort for a BBQ Dinner with local traditional music and a bonfire. Return to the hotel. Overnight stay.",
        title: "Passu, Sost & Khunjerab Pass",
        deluxeHotel: "Famree Resort (Quality stay at a more economical rate)",
        premiumHotel: "Lodges By Baron (Offers enhanced comfort and facilities)",
        activities: "Khunjerab pass, Bonfire & musical night.",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_6.jpg",
        description: "Early morning breakfast and departure to Gilgit. Drive to Minapin, one of the oldest villages in Nagar valley. Take a garden walk and enjoy fresh fruits from the orchards if there is a season for it or enjoy blossom. Take a tea break by a water stream. 4x4 Jeep ride to Bikchum Ghutum, a hidden gem at the foothills of Rakaposhi. Short trek to a glacier to taste organic ice. Lunch at Bikchum Ghutum. Return to Minapin, change to a coaster bus for the journey to Gilgit. Rest of the day at leisure.",
        title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk.",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_7.jpg",
        description: "After breakfast, depart early to Shigar which will be a drive of 4.5 hours, crossing Jaglot town from where we will turn towards deep in the mountains which will take us to Baltistan region. We will first visit Kachura lakes. Visit upper Kachura lake first which has a short 15 minute trek, where you can go speed boating  and even take a Ice cold dip in the beautiful Turquoise blue water. Return to lower Kachura lake where Shangrila resort is situated as well. a good spot to have your lunch by the lake. Excursion to Soq valley which is 45 minutes from Kachura. Explore this hidden gem. Return to your resort. overnight stay.",
        title: "Gilgit to Skardu",
        deluxeHotel: "Khoj Resorts (Quality stay at a more economical rate)",
        premiumHotel: "Shangrila Resort (Offers enhanced comfort and facilities)",
        activities: "Drive to Skardu, Upper Kachura Lake, Lower Kachura & Soq Valley.",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_8.jpg",
        description: "After early morning breakfast, Adventure tour and jeep safaris to the Deosai Plains which is at a jeep ride of approx 2 hours from Skardu city. Deosai plains are the second highest in the world (at 4,100 m or 13,500 feet) after the Chang Tang in Tibet, in local Balti language, meaning ‘summer place’. With an area of approximately 3,000 square kilometers, the plains extend all the way to Ladakh and provide habitat for snow leopards, ibex, Tibetan brown bears and wild horses. Visit Bara Pani and Sheosar lake. return to Skardu,  Overnight Stay.",
        title: "Deosai Plains & Sheosar lake",
        deluxeHotel: "Khoj Resorts (Quality stay at a more economical rate)",
        premiumHotel: "Shangrila Resorts (Offers enhanced comfort and facilities)",
        activities: "Jeeps safari, Deosai plains, wildlife, sheosar lake",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_9.jpg",
        description: "After breakfast. Today we will first visit Shigar valley and Darfaranga cold desert. Departure to Shigar valley, crossing Sarfaranga cold desert. The gateway to the great mountain peaks of the Karakorum, Gasherbrum & K-2. The wooden mosque in the middle of the town was built by Kashmiri carpenters several hundred years ago. The town of Shigar is the largest settlement in the valley. Shigar was formerly an administrative sub-division of Skardu District but is now a district. Visit to Shigar fort which is restored by Agha khan foundation & Serena hotels. Tour of Shigar fort, visit Hashupi Bagh. We will return to Skardu, transfer to the Hotel. Dinner will be served. Overnight stay.",
        title: "Shigar Valley & Cold Desert",
        deluxeHotel: "Khoj Resorts (Quality stay at a more economical rate)",
        premiumHotel: "Shangrila Resorts (Offers enhanced comfort and facilities)",
        activities: "Sarfaranga desert, Tour of Shigar fort, Blind Lake",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_10.jpg",
        description: "Breakfast will be served at the hotel. Morning flight to Islamabad. Transfer to Airport, depart to Lahore via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Visit Pakistan Monument, Lok Virsa museum and Faisal Masjid. Dinner at a fine restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu  to Islamabad",
        premiumHotel: "Ramada hotel (Offers enhanced comfort and facilities)",
        activities: "Short tour and shopping in Islamabad",
      },
      {
        id: 10,
        iternaries_img: swat_place_1.src,
        description: "Breakfast will be served at the hotel. Leisure for the day. a farewell dinner at Bukhara restaurant. Check out from the  Transfer to the Airport with lots of memories to cherish forever.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Departure to your country",
      }
    ],
    includes: {
      services: [
        "Transportation",
        "one way Flight ISB→ KDU",
        "Meals",
        "2 Nights Islamabad ",
        "4 Nights Skardu",
        "2 Nights Khaplu",
        "2 Nights Fairy Meadows",
        "1 Night Naran",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      deluxePackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Dynasty Resort",
        "Serena Khaplu",
        "Fairy Meadows Cottages",
        "Northern Retreat",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Best Western Premier",
        "Khoj Resort",
        "Serena Khaplu",
        "Raikot Sarai",
        "The Sarai",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverage and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: [
        "8-10 pax",
        "12-16 pax",
      ],
      deluxePackage: [
        "$2,400",
        "$2,000",
      ],
    },
    // accommodation: "Hotels on Double Occupancy",
    // essential:"",

    // mapImage: "",
  },
  // BR Around Karakoram PK24-10
  {
    id: "br-around-karakoram-pk24-10",
    title: "Journey through the Karakoram",
    service_img: banner2,
    link: "package-tour/br-around-karakoram-pk24-10",
    category: [CATEGORIES.naran],
    provincesCovered: "Gilgit Baltistan",
    price: "$1,800",
    days: "15",
    description:
      "Pakistan is a country full of diversity in every means whether you talk about landscape, food, culture or our traditions. Islamabad is the capital of Pakistan where our journey starts, Islamabad is surrounded by beautiful Margalla Hills which are the start of our mountain ranges. In the extreme North-East of Pakistan, at an altitude of 8200 ft., Skardu District is located in Gilgit-Baltistan and is the center of trekking, trailing and climbing journeys. In an epitome of beauty of its lakes, rivers and waterfalls, serenity of valleys and wilderness of the mountains",
    overview: {
      location: "",
      people: "",
      // weather: "40",
      bestTime: "May → October",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Highlights(1).jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Shangri-La Resorts in the Lower Kachura Lake",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Dawn and dusks at Indus River",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "The land of Giants, Deosai plains",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Khaplu fort and Shigar fort",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Highlights(1).jpg",
          title: "Hashupi bagh",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Highlight .jpg",
          title: "Katpana Desert sand dunes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Shangrila.jpg",
          title: "Serenity of Satpara Lake",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Highlights.jpg",
          title: "Heritage & History of Skardu & Hunza",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_9.jpg",
          title: "Baltit and Altit fort",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day 5.jpg",
          title: "Boating at Atabad Lake",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Starry night in Skardu.jpg",
          title: "Traditional musical night",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Highlight-2.jpg",
          title: "Amazing food country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
        description: "KhushAmdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North's representatives and transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Today is a rest day to settle in and relax after your international flight. You may wish to head out and enjoy a cup of local chai and sweets. A welcome dinner will be served at a fine dining restaurant handpicked by Facing North where you will meet your Resident Director. A brief introduction will also be given to help you prepare for the upcoming tours.",
        title: "Arrival at Islamabad",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_2.jpg",
        description: "Early morning breakfast at the hotel. Depart early morning for Naran. Today we will drive for approx. 8 hours through the Hazara Motorway and Balakot-Naran road. Your journey will consist of small stopovers at different tourist points like Kiwai waterfall where lunch can be taken. Continue journey to Naran. Transfer to the hotel, check in and settle down. Your hotel will be located at a higher level than main Naran, where white water streams will be passing by. Head out to the Bazaar. Visit Naran Bazaar, have a short walk, enjoy the roadside snacks, and hot beverages. Return to the hotel. Overnight stay.",
        title: "Islamabad to Naran",
        deluxeHotel: "Northern Retreat (Quality stay at a more economical rate)",
        premiumHotel: "The Sarai (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
        description: "Morning breakfast will be served, leisure and sightseeing in Naran. The resort is located at the top of a mountain which gives you a panoramic view of the valley and surrounding peaks. Excursion to Lake Saif-ul-Malook which is only accessible through 4x4 jeeps. It is going to be a journey of 1 hour which will take us to a scenic lake. Sightseeing and relaxation boating can be done. Return to Naran. Visit Kunhar river for white water rafting. Return to resort, rest and leisure for the evening. Overnight stay.",
        title: "Naran & Lake Saif ul Malook",
        deluxeHotel: "Northern Retreat (Quality stay at a more economical rate)",
        premiumHotel: "The Sarai (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip to Saif ul Malook & White water rafting",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_4.jpg",
        description: "After breakfast, departing early in the morning for Skardu, we will cross the Lulusar National park, stop over at Lulusar lake and Babusar top, which is at an elevation of 4,173m. After crossing Babusar top we will enter Diamir valley which will connect us to the Silk road. Stop over at Nanga Parbat viewpoint and a unique point where 3 mountain ranges collide. From Jaglot we will take Skardu road which will lead us to the heart of Karakoram known as Baltistan region. Overnight stay in Shigar Fort Serena.",
        title: "Naran to Skardu",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Lulusar lake, Babusar top, 3 mountain ranges, colliding points and many photo stops.",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day 5.jpg",
        description: "A beautiful morning in Shigar, enjoy the stunning views with a healthy breakfast. Today we will explore the Kachura lakes, Shangri-La, and Soq valley. Kachura Lakes which are 1 hour away from your resort, where we will also visit the famous Shangri-La Resort on Lower Kachura Lake. Lunch will be served at Shangri-La resort. Excursion to Soq valley which is 40 minutes from Kachura. Explore this hidden gem. Return to Shigar, freshen up and relax at the resort. Dinner will be served. Overnight stay.",
        title: "Kachura Lakes & Soq Valley",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley.",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
        description: "After an early morning breakfast, we'll visit a sailing village and fish farms in Ghanche District before taking an excursion to Khaplu. This beautiful valley of the Shyok River is 103 km east of Skardu and the starting point for many trekking and climbing expeditions. Visit the Chaqchan Mosque, one of the earliest mosques in Baltistan (1504 AD) attributed to Syed Ali Hamdani. Transfer to Khaplu Fort, restored by the Agha Khan Cultural Service and Serena Hotels, and take a tour of Khaplu Valley before returning to Skardu for an overnight stay.",
        title: "Ghanche District & Khaplu",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Ghanche district, Khaplu fort, Chaqchan Mosque & sailing village tour.",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
        description: "After breakfast, we will embark on an adventure tour and jeep safari to Deosai Plains, the second highest in the world, at 4,100m or 13,500 ft. Covering an area of approximately 3,000 square kilometers, the plains extend to Ladakh and provide habitat for snow leopards, ibex, Tibetan brown bears, and wild horses. We will visit Bara Pani and Sheosar lake, have a picnic lunch in Deosai, and return to Skardu for dinner at the hotel and an overnight stay.",
        title: "Deosai Plains & Sheosar Lake",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Jeep safari, Deosai plains, wildlife, Sheosar lake and picnic.",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_8.jpg",
        description: "After breakfast, depart early to Hunza valley which will be a drive of 5 hours, crossing Gilgit city and Nagar district. We will have a stop over at Gilgit or Hunza road for Lunch. Continue to drive towards Hunza. Visit the old silk route point, stop over at Rakaposhi view point to get the complete view of the highest peak of the Nagar Hunza district. Excursion to Karimabad. check in to your resort, enjoy your sunset and evening at the resort. Dinner will be served and a short briefing by the guides about Hunza. Overnight stay.",
        title: "Skardu to Hunza",
        deluxeHotel: "Darbar Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Drive to Hunza valley, visit Rakaposhi viewpoint.",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_9.jpg",
        description: "Today, we will explore the culture and traditions of Hunza valley. We will start a short heritage walk from Karimabad bazar to Baltit fort, which is located on the top of Karimabad bazar. We will take a tour of Baltit Fort to learn about the history, culture, traditions of Hunza Valley. We'll walk back to Karimabad Bazar, an excursion to Altit Fort, another stunning piece of architecture and history. Tour of Altit fort. Evening walk in Altit royal gardens, return to Karimabad, some free shopping time. Transfer to hotel. Rest till the next morning.",
        title: "Karimabad, Baltit and Altit Fort",
        deluxeHotel: "Darbar Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, Khabasi Café.",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
        description: "Morning breakfast will be served, departure to Attabad lake. Continue to drive to the famous Hussaini suspension bridge. You will have to walk downhill for 15 minutes to reach the bridge. Photography and sightseeing. Head towards Borith lake, have freshly cooked snacks by the lake and enjoy the view. Short 20 minutes drive to Zero Point from where we will start our Passu glacier hike. It is a 40 minute hike which has a beautiful panoramic view of Passu Cones and Passu Glacier. Return to Attabad Lake, check into the hotel. Enjoy the beautiful views of the lake resort. Head to the boating area for jet skiing and boating. Return to the Resort. Leisure and dinner by the lake. Overnight stay.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        deluxeHotel: "Famree Resort (Quality stay at a more economical rate)",
        premiumHotel: "Luxus Atabad (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake.",
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_11.jpg",
        description: "Our day will start with a majestic view of Attabad Lake in the background. Breakfast will be served with the lake view, after which we will head to Sost with stopovers at different villages for photography. We will visit Sost Dry Port. Excursion to Khunjerab Pass which is situated at an elevation of 4,693m. Then we will head back to Passu, visit Yak Grill for lunch where you can try local Yak meat dishes. Head to Glacier Breeze café for scrumptious organic Apricot cake and tea with the sunset on Passu cones. Return to the hotel and rest for a while. Visit Moksha Resort for a BBQ Dinner with local traditional music and a bonfire. Return to the hotel. Overnight stay.",
        title: "Passu, Sost & Khunjerab Pass",
        deluxeHotel: "Famree Resort (Quality stay at a more economical rate)",
        premiumHotel: "Luxus Atabad (Offers enhanced comfort and facilities)",
        activities: "Khunjerab pass, Bonfire & musical night.",
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_12.jpg",
        description: "Early morning breakfast and departure to Gilgit. Drive to Minapin, one of the oldest villages in Nagar valley. Take a garden walk and enjoy fresh fruits from the orchards. Take a tea break by a water stream. 4x4 Jeep ride to Bikchum Ghutum, a hidden gem at the foothills of Rakaposhi. Short trek to a glacier to taste organic ice. Lunch at Bikchum Ghutum. Return to Minapin, change to a coaster bus for the journey to Gilgit. Rest of the day at leisure.",
        title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum",
        deluxeHotel: "Mandarin Inn (Quality stay at a more economical rate)",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk.",
      },
      {
        id: 12,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_13.jpg",
        description: "Early morning breakfast will be served. Today will be a long drive back to Naran crossing Babusar top. It will be an 8 hour drive with scenic views and you'll experience the change of mountain terrain from the Karakoram to the Himalayas. Lunch stop at Moon Restaurant Besar—a beautiful sight to have lunch, relax and freshen up. Continue the journey towards Naran. Transfer to the hotel and leisure for the rest of the day. Overnight stay.",
        title: "Gilgit to Naran",
        deluxeHotel: "Northern Retreat (Quality stay at a more economical rate)",
        premiumHotel: "The Sarai (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 13,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_14.jpg",
        description: "Early morning breakfast will be served. Departure to Islamabad via Mansehra-Balakot road. It will be a 7 hour drive. Lunch stop on the motorway. Continue journey to Islamabad. Transfer to the hotel, rest for a while, perhaps freshen up and head out for a farewell dinner at a nice restaurant in Islamabad. Overnight stay.",
        title: "Naran to Islamabad",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Marriott Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 14,
        iternaries_img: swat_place_1.src,
        description: "Breakfast will be served in the morning. Quick last minute shopping in Islamabad. Transfer to the airport with lots of memories to cherish forever.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],
    includes: {
      services: [
        "Transportation",
        "one way Flight ISB→ KDU",
        "Meals",
        "2 Nights Islamabad ",
        "4 Nights Skardu",
        "2 Nights Khaplu",
        "2 Nights Fairy Meadows",
        "1 Night Naran",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      deluxePackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Dynasty Resort",
        "Serena Khaplu",
        "Fairy Meadows Cottages",
        "Northern Retreat",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Best Western Premier",
        "Khoj Resort",
        "Serena Khaplu",
        "Raikot Sarai",
        "The Sarai",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverage and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: [
        "8-10 pax",
        "12-16 pax",
      ],
      deluxePackage: [
        "$2,400",
        "$2,000",
      ],
    },
    // accommodation: "Hotels on Double Occupancy",
    // essential:"",

    // mapImage: "",
  },

  // BR Around Karakoram SP26-01 Jonas
  {
    id: "br-around-karakoram-SP26-01-jonas",
    title: "Journey Through the Heart of Karakoram",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/banner.jpeg",
    link: "package-tour/br-around-karakoram-SP26-01-jonas",
    category: [CATEGORIES.naran],
    provincesCovered: "Gilgit Baltistan",
    price: "$2,300",
    singleOccupancy: "$650",
    days: "10",
    hosted: true,
    description:
      "Journey Through the Heart of Karakoram – A Co-Hosted Adventure. This spring, we embark to the majestic north of Pakistan for an unforgettable 10-day journey through Hunza and Skardu, co-hosted with some of the world's most inspiring travel creators. This trip isn't just about landscapes, it's about connection, culture, and community. Together, we'll wander through ancient valleys, share stories under starlit skies, and capture moments that celebrate the spirit of exploration. From the turquoise lakes of Hunza to the serene valleys of Skardu, every day promises a perfect blend of adventure, creativity, and meaningful human connection.",
    
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "8+",
      bestTime: "April (Spring - Blossom)",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/overview.jpg"
    },
    pdf: "/assets/PDFS/SP26-03-around-karakoram-Jonas.pdf",

    internationalFlights: {
      routes: [
        {
          country: "UNITED STATES",
          cities: [
            {
              from: "New York",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK12", date: "08APR", route: "JFK to IST", time: "0025 1715" },
                { code: "TK710", date: "08APR", route: "IST to ISB", time: "2110 0355+1" },
                { code: "TK751", date: "18APR", route: "ISB to IST", time: "0855 1225" },
                { code: "TK1", date: "18APR", route: "IST to JFK", time: "1410 1800" }
              ]
            },
            {
              from: "Houston",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK34", date: "08APR", route: "IAH to IST", time: "2100 1705+1" },
                { code: "TK710", date: "09APR", route: "IST to ISB", time: "2110 0355+1" },
                { code: "TK751", date: "18APR", route: "ISB to IST", time: "0855 1225" },
                { code: "TK33", date: "18APR", route: "IST to IAH", time: "1410 1915" }
              ]
            },
            {
              from: "Chicago",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK6W", date: "08APR", route: "ORD to IST", time: "1950 1440+1" },
                { code: "TK710", date: "09APR", route: "IST to ISB", time: "2110 0355+1" },
                { code: "TK751", date: "18APR", route: "ISB to IST", time: "0855 1225" },
                { code: "TK5W", date: "18APR", route: "IST to ORD", time: "1445 1815" }
              ]
            }
          ]
        },
        {
          country: "UNITED KINGDOM",
          cities: [
            {
              from: "London",
              airline: "Qatar Airways",
              flights: [
                { code: "QR10", date: "08APR", route: "LHR to DOH", time: "1050 1945" },
                { code: "QR632", date: "08APR", route: "DOH to ISB", time: "2030 0150+1" },
                { code: "QR633", date: "18APR", route: "ISB to DOH", time: "0330 0530" },
                { code: "QR7", date: "18APR", route: "DOH to LHR", time: "0845 1410" }
              ]
            }
          ]
        },
        {
          country: "CANADA",
          cities: [
            {
              from: "Toronto",
              airline: "Etihad Airways",
              flights: [
                { code: "EY22", date: "08APR", route: "YYZ to AUH", time: "1510 1230+1" },
                { code: "EY300", date: "09APR", route: "AUH to ISB", time: "1410 1825" },
                { code: "EY301", date: "18APR", route: "ISB to AUH", time: "1935 2200" },
                { code: "EY21", date: "19APR", route: "AUH to YYZ", time: "0215 0900" }
              ]
            }
          ]
        },
        {
          country: "GERMANY",
          cities: [
            {
              from: "Frankfurt",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK1594", date: "08APR", route: "FRA to IST", time: "1900 2305" },
                { code: "TK750", date: "09APR", route: "IST to ISB", time: "0040 0725" },
                { code: "TK711", date: "18APR", route: "ISB to IST", time: "0525 0855" },
                { code: "TK1591", date: "18APR", route: "IST to FRA", time: "1125 1340" }
              ]
            },

            {
              from: "Munich",
              airline: "Etihad Airways",
              flights: [
                { code: "EY128", date: "08APR", route: "MUC to AUH", time: "2235 0630+1" },
                { code: "EY300", date: "09APR", route: "AUH to ISB", time: "1410 1825" },
                { code: "EY301", date: "18APR", route: "ISB to AUH", time: "1935 2200" },
                { code: "EY125", date: "19APR", route: "AUH to MUC", time: "0215 0640" }
              ]
            },

            {
              from: "Berlin",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK1724", date: "08APR", route: "BER to IST", time: "1915 2305" },
                { code: "TK750", date: "09APR", route: "IST to ISB", time: "0040 0725" },
                { code: "TK711", date: "18APR", route: "ISB to IST", time: "0525 0855" },
                { code: "TK1729", date: "18APR", route: "IST to BER", time: "1005 1200" }
              ]
            }
          ]
        }
      ]
    },

    experiences: {
      hideExepriences: true,
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Guided experiences across Islamabad, Hunza, Nagar, Gilgit, and Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Heritage walks, fort tours, local artisan visits & glacial viewpoints ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "4x4 ride to Bikchum Ghutum, boating on Attabad Lake, hike to Passu Glacier ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Visits to Shigar Fort, Khaplu, Sarfaranga Cold Desert, and Kachura Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Ambiance, Zen by the Lake, and K2 GreenPak ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Professional ground support, local guides, and immersive cultural storytelling",
        },
      ],
    },
    

    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
        description: "Khushamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned The Lost Tribe with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the roof top hill, your dinner experience tonight at The Lost Tribe will be a great introduction to Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 2.jpg",
        description: "The adventure continues with an early morning departure from Islamabad, taking one of the world's most breathtaking flights to Skardu. The 1-hour journey offers panoramic aerial views of majestic peaks, including the legendary Nanga Parbat. Upon landing, we begin a scenic 6-hour road trip towards Hunza Valley, passing through dramatic mountain landscapes and the historic city of Gilgit. A mid-day lunch break is planned at Ramada Gilgit, offering a comfortable and hygienic stop with warm hospitality and panoramic views. Along the way, we'll enjoy a short photo stop at the Rakaposhi Viewpoint, a perfect moment to capture the grandeur of the Karakoram. By evening, we check into our Hunza resort, where a cozy dinner awaits at the property, surrounded by the valley's enchanting night sky and mountain silhouettes, a peaceful close to a day immersed in natural beauty.",
        title: "Into the Mountains – Skies, Peaks & Valleys",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip & Heritage walk",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 4.jpg",
        description: "After a hearty breakfast, the day begins with a scenic journey towards Attabad Lake, one of Pakistan's most breathtaking turquoise wonders. We continue towards the thrilling Hussaini Suspension Bridge, known for its daring planks and stunning backdrop reached via a short downhill walk. After some time for photos and exploration, we head to the peaceful Borith Lake for freshly prepared local snacks enjoyed by the water. From there, a short drive takes us to Zero Point, the starting point for our Passu Glacier Hike, a rewarding 40-minute trek offering panoramic views of the Passu Cones and the majestic glacier. We return to Attabad Lake and check into a lakeside resort where the rest of the evening is all about leisure and lakeside adventure. Jet skiing and boating await in the serene setting, followed by a peaceful dinner by the lake. Overnight stay at the resort.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        premiumHotel: "Zen By The Lake (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 5.jpg",
        description: "We begin the day with an early breakfast before departing for Gilgit, passing through lush valleys and winding roads. A highlight stop awaits in Minapin, one of the oldest and most picturesque villages of the Nagar Valley. Surrounded by orchards, visitors can enjoy a peaceful garden walk and, depending on the season, taste fresh local fruits or take in the colorful blossoms. From here, a jeep adventure takes us to the breathtaking Miacher KOH viewpoint offering sweeping panoramic views of the Rakaposhi Range and the dramatic ice ridge connecting Rakaposhi to Diran Peak. This is a dream spot for photography and drone footage. After returning to Minapin, we indulge in an authentic local dining experience at Osho Thang, known for its traditional flavors. The day ends with a scenic drive to Gilgit for an overnight stay.",
        title: "Mountain Majesty & Village Charm",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 6.jpg",
        description: "After breakfast, we set off on a scenic 4 hours journey to Skardu, venturing deep into the mountains of the majestic Baltistan region, passing through the historic Jaglot town. Our first stop is the enchanting Upper Kachura Lake, reached by a short 15-minute trek. Here, thrill-seekers can enjoy speed boating or take a daring dip in the ice-cold turquoise waters. We then head down to the serene Lower Kachura Lake, home to the iconic Shangrila Resort, where we'll enjoy lunch by the lake. In the afternoon, we venture to Soq Valley, a hidden gem just 45 minutes away, offering untouched beauty and peaceful surroundings. After soaking in the valley's charm, we return to the resort in Shigar for a relaxed evening and overnight stay.",
        title: "Lakeside Serenity & Hidden Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 7.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 8.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Spring landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of blossom and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Spring Landscapes & Mountain Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 9.jpg",
        description: "Breakfast will be served at the hotel. Transfer to Airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Leisure and stroll in the shopping centres. Farewell dinner at a hand picked restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu to Islamabad",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
        description: "Breakfast will be served in the morning. Free time for leisure till your flight departure. transfer to the airport with lots of memories to cherish forever. departure to your respective country.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],

    includes: {
      services: [
        "Meals",
        "Transportation",
        "ISB→ KDU Return Flight",
        "2 Nights Islamabad",
        "Premium Package",
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Gilgit",
        "3 Nights Skardu",
      ],
      premiumPackage: [
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "Ambiance Resort (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "GreenPak Resort (Deluxe Rooms)",
      ],
      premium: {
        meals: "3 Meals/Daily",
        transportation: "Toyota Coaster & 4x4 Jeeps",
        groupSizeMin: "8",
        groupSizeMax: "12 pax",
      }
    },

    notIncluded: [
        "Round Trip international flight to Islamabad",
        "Visa application and fees",
        "Cancellation / Travel Insurance and Emergency Medical Insurance",
        "Photographic insurance",
        "Alcoholic beverage and soft drinks",
        "Personal expenses",
    ],

    cost: {
      size: [
        "Double Occupancy",
      ],
      deluxePackage: [
        "$2,300",
      ],
    },
  },
  {
    id: "br-around-karakoram-SP26-01-meths",
    title: "Journey Through the Heart of Karakoram",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/banner.jpg",
    link: "package-tour/br-around-karakoram-SP26-01-meths",
    category: [CATEGORIES.naran],
    provincesCovered: "Gilgit Baltistan",
    price: "$2,300",
    singleOccupancy: "$650",
    days: "10",
    hosted: true,
    description:
      "Journey Through the Heart of Karakoram – A Co-Hosted Adventure. This spring, we embark to the majestic north of Pakistan for an unforgettable 10-day journey through Hunza and Skardu, co-hosted with some of the world's most inspiring travel creators. This trip isn't just about landscapes, it's about connection, culture, and community. Together, we'll wander through ancient valleys, share stories under starlit skies, and capture moments that celebrate the spirit of exploration. From the turquoise lakes of Hunza to the serene valleys of Skardu, every day promises a perfect blend of adventure, creativity, and meaningful human connection.",
    
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "8+",
      bestTime: "April (Spring - Blossom)",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/overview.jpg"
    },
    pdf: "/assets/PDFS/SP26-01-around-karakoram-marius.pdf",
    internationalFlights: {
      routes: [
        {
          country: "UNITED STATES",
          cities: [
            {
              from: "New York",
              airline: "Qatar Airways",
              flights: [
                { code: "QR 702", date: "01APR", route: "JFK to DOH", time: "2200 1725+1" },
                { code: "QR 632", date: "02APR", route: "DOH to ISB", time: "2025 0150+1" },
                { code: "QR 633", date: "11APR", route: "ISB to DOH", time: "0330 0515" },
                { code: "QR 701", date: "11APR", route: "DOH to JFK", time: "0800 1510" }
              ]
            },
            {
              from: "Houston",
              airline: "Qatar Airways",
              flights: [
                { code: "QR 714", date: "01APR", route: "IAH to DOH", time: "1810 1645+1" },
                { code: "QR 632", date: "02APR", route: "DOH to ISB", time: "2025 0150+1" },
                { code: "QR 633", date: "11APR", route: "ISB to DOH", time: "0330 0515" },
                { code: "QR 713", date: "11APR", route: "DOH to IAH", time: "0755 1550" }
              ]
            },
            {
              from: "Chicago",
              airline: "Qatar Airways",
              flights: [
                { code: "QR 726", date: "01APR", route: "ORD to DOH", time: "1920 1650+1" },
                { code: "QR 632", date: "02APR", route: "DOH to ISB", time: "2025 0150+1" },
                { code: "QR 633", date: "11APR", route: "ISB to DOH", time: "0330 0515" },
                { code: "QR 725", date: "11APR", route: "DOH to ORD", time: "0800 1505" }
              ]
            }
          ]
        },
        {
          country: "GERMANY",
          cities: [
            {
              from: "Frankfurt",
              airline: "Turkish Airways",
              flights: [
                { code: "TK1594", date: "01APR", route: "FRA to IST", time: "1900 2305" },
                { code: "TK 750", date: "02APR", route: "IST to ISB", time: "0040 0725" },
                { code: "TK 711", date: "11APR", route: "ISB to IST", time: "0525 0855" },
                { code: "TK1591", date: "11APR", route: "IST to FRA", time: "1125 1340" }
              ],
            },
            {
              from: "Munich",
              airline: "Saudi Airlines",
              flights: [
                { code: "SV174", date: "01APR", route: "MUC to JED", time: "1625 2250" },
                { code: "SV722", date: "02APR", route: "JED to ISB", time: "0150 0910" },
                { code: "SV727", date: "11APR", route: "ISB to JED", time: "0300 0610" },
                { code: "SV175", date: "11APR", route: "JED to MUC", time: "1020 1455" }
              ]
            },
            {
              from: "Berlin",
              airline: "Turkish Airways",
              flights: [
                { code: "TK1726", date: "01APR", route: "BER to IST", time: "1510 1910" },
                { code: "TK 710", date: "02APR", route: "IST to ISB", time: "2110 0355+1" },
                { code: "TK 711", date: "11APR", route: "ISB to IST", time: "0525 0855" },
                { code: "TK1729", date: "11APR", route: "IST to BER", time: "1005 1200" }
              ]
            }
          ]
        },
        {
          country: "UNITED KINGDOM",
          cities: [
            {
              from: "London",
              airline: "Qatar Airways",
              flights: [
                { code: "QR8", date: "01APR", route: "LHR to DOH", time: "1600 0050+1" },
                { code: "QR 614", date: "02APR", route: "DOH to ISB", time: "0215 0740" },
                { code: "QR 633", date: "11APR", route: "ISB to DOH", time: "0330 0515" },
                { code: "QR 109", date: "11APR", route: "DOH to LHR", time: "0850 1405" }
              ]
            }
          ]
        },
        {
          country: "CANADA",
          cities: [
            {
              from: "Toronto",
              airline: "Etihad Airways",
              flights: [
                { code: "EY 22", date: "01APR", route: "YYZ to AUH", time: "1510 1230+1" },
                { code: "EY300", date: "02APR", route: "AUH to ISB", time: "1410 1825" },
                { code: "EY301", date: "11APR", route: "ISB to AUH", time: "1935 2200" },
                { code: "EY21", date: "12APR", route: "AUH to YYZ", time: "0215 0900" }
              ]
            }
          ]
        }
      ]
    },

    experiences: {
      hideExepriences: true,
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Guided experiences across Islamabad, Hunza, Nagar, Gilgit, and Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Heritage walks, fort tours, local artisan visits & glacial viewpoints ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "4x4 ride to Bikchum Ghutum, boating on Attabad Lake, hike to Passu Glacier ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Visits to Shigar Fort, Khaplu, Sarfaranga Cold Desert, and Kachura Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Ambiance, Zen by the Lake, and K2 GreenPak ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Professional ground support, local guides, and immersive cultural storytelling",
        },
      ],
    },

    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
        description: "Khushamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned The Lost Tribe with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the roof top hill, your dinner experience tonight at The Lost Tribe will be a great introduction to Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 2.jpg",
        description: "The adventure continues with an early morning departure from Islamabad, taking one of the world's most breathtaking flights to Skardu. The 1-hour journey offers panoramic aerial views of majestic peaks, including the legendary Nanga Parbat. Upon landing, we begin a scenic 6-hour road trip towards Hunza Valley, passing through dramatic mountain landscapes and the historic city of Gilgit. A mid-day lunch break is planned at Ramada Gilgit, offering a comfortable and hygienic stop with warm hospitality and panoramic views. Along the way, we'll enjoy a short photo stop at the Rakaposhi Viewpoint, a perfect moment to capture the grandeur of the Karakoram. By evening, we check into our Hunza resort, where a cozy dinner awaits at the property, surrounded by the valley's enchanting night sky and mountain silhouettes, a peaceful close to a day immersed in natural beauty.",
        title: "Into the Mountains – Skies, Peaks & Valleys",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip & Heritage walk",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 4.jpg",
        description: "After a hearty breakfast, the day begins with a scenic journey towards Attabad Lake, one of Pakistan's most breathtaking turquoise wonders. We continue towards the thrilling Hussaini Suspension Bridge, known for its daring planks and stunning backdrop reached via a short downhill walk. After some time for photos and exploration, we head to the peaceful Borith Lake for freshly prepared local snacks enjoyed by the water. From there, a short drive takes us to Zero Point, the starting point for our Passu Glacier Hike, a rewarding 40-minute trek offering panoramic views of the Passu Cones and the majestic glacier. We return to Attabad Lake and check into a lakeside resort where the rest of the evening is all about leisure and lakeside adventure. Jet skiing and boating await in the serene setting, followed by a peaceful dinner by the lake. Overnight stay at the resort.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        premiumHotel: "Zen By The Lake (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 5.jpg",
        description: "We begin the day with an early breakfast before departing for Gilgit, passing through lush valleys and winding roads. A highlight stop awaits in Minapin, one of the oldest and most picturesque villages of the Nagar Valley. Surrounded by orchards, visitors can enjoy a peaceful garden walk and, depending on the season, taste fresh local fruits or take in the colorful blossoms. From here, a jeep adventure takes us to the breathtaking Miacher KOH viewpoint offering sweeping panoramic views of the Rakaposhi Range and the dramatic ice ridge connecting Rakaposhi to Diran Peak. This is a dream spot for photography and drone footage. After returning to Minapin, we indulge in an authentic local dining experience at Osho Thang, known for its traditional flavors. The day ends with a scenic drive to Gilgit for an overnight stay.",
        title: "Mountain Majesty & Village Charm",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 6.jpg",
        description: "After breakfast, we set off on a scenic 4 hours journey to Skardu, venturing deep into the mountains of the majestic Baltistan region, passing through the historic Jaglot town. Our first stop is the enchanting Upper Kachura Lake, reached by a short 15-minute trek. Here, thrill-seekers can enjoy speed boating or take a daring dip in the ice-cold turquoise waters. We then head down to the serene Lower Kachura Lake, home to the iconic Shangrila Resort, where we'll enjoy lunch by the lake. In the afternoon, we venture to Soq Valley, a hidden gem just 45 minutes away, offering untouched beauty and peaceful surroundings. After soaking in the valley's charm, we return to the resort in Shigar for a relaxed evening and overnight stay.",
        title: "Lakeside Serenity & Hidden Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 7.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 8.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Spring landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of blossom and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Spring Landscapes & Mountain Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 9.jpg",
        description: "Breakfast will be served at the hotel. Transfer to Airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Leisure and stroll in the shopping centres. Farewell dinner at a hand picked restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu to Islamabad",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
        description: "Breakfast will be served in the morning. Free time for leisure till your flight departure. transfer to the airport with lots of memories to cherish forever. departure to your respective country.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],

    includes: {
      services: [
        "Meals",
        "Transportation",
        "ISB→ KDU Return Flight",
        "2 Nights Islamabad",
        "Premium Package",
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Gilgit",
        "3 Nights Skardu",
      ],
      premiumPackage: [
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "Ambiance Resort (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "GreenPak Resort (Deluxe Rooms)",
      ],
      premium: {
        meals: "3 Meals/Daily",
        transportation: "Toyota Coaster & 4x4 Jeeps",
        groupSizeMin: "8",
        groupSizeMax: "12 pax",
      }
    },

    notIncluded: [
        "Round Trip international flight to Islamabad",
        "Visa application and fees",
        "Cancellation / Travel Insurance and Emergency Medical Insurance",
        "Photographic insurance",
        "Alcoholic beverage and soft drinks",
        "Personal expenses",
    ],

    cost: {
      size: [
        "Double Occupancy",
      ],
      deluxePackage: [
        "$2,300",
      ],
    },
  },
  {
    id: "br-around-karakoram-SP26-01-lukas",
    title: "Journey Through the Heart of Karakoram",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/banner.jpg",
    link: "package-tour/br-around-karakoram-SP26-01-lukas",
    category: [CATEGORIES.naran],
    provincesCovered: "Gilgit Baltistan",
    price: "$2,300",
    singleOccupancy: "$650",
    days: "10",
    hosted: true,
    description:
      "Journey Through the Heart of Karakoram – A Co-Hosted Adventure. This spring, we embark to the majestic north of Pakistan for an unforgettable 10-day journey through Hunza and Skardu, co-hosted with some of the world's most inspiring travel creators. This trip isn't just about landscapes, it's about connection, culture, and community. Together, we'll wander through ancient valleys, share stories under starlit skies, and capture moments that celebrate the spirit of exploration. From the turquoise lakes of Hunza to the serene valleys of Skardu, every day promises a perfect blend of adventure, creativity, and meaningful human connection.",
    
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "8+",
      bestTime: "April (Spring - Blossom)",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/overview.jpg"
    },
    pdf: "/assets/PDFS/SP26-04-around-karakoram-lukas.pdf",

    internationalFlights: {
      routes: [
        {
          country: "UNITED STATES",
          cities: [
            {
              from: "New York",
              airline: "Qatar Airways",
              flights: [
                { code: "QR 702", date: "01APR", route: "JFK to DOH", time: "2200 1725+1" },
                { code: "QR 632", date: "02APR", route: "DOH to ISB", time: "2025 0150+1" },
                { code: "QR 633", date: "11APR", route: "ISB to DOH", time: "0330 0515" },
                { code: "QR 701", date: "11APR", route: "DOH to JFK", time: "0800 1510" }
              ]
            },
            {
              from: "Houston",
              airline: "Qatar Airways",
              flights: [
                { code: "QR 714", date: "01APR", route: "IAH to DOH", time: "1810 1645+1" },
                { code: "QR 632", date: "02APR", route: "DOH to ISB", time: "2025 0150+1" },
                { code: "QR 633", date: "11APR", route: "ISB to DOH", time: "0330 0515" },
                { code: "QR 713", date: "11APR", route: "DOH to IAH", time: "0755 1550" }
              ]
            },
            {
              from: "Chicago",
              airline: "Qatar Airways",
              flights: [
                { code: "QR 726", date: "01APR", route: "ORD to DOH", time: "1920 1650+1" },
                { code: "QR 632", date: "02APR", route: "DOH to ISB", time: "2025 0150+1" },
                { code: "QR 633", date: "11APR", route: "ISB to DOH", time: "0330 0515" },
                { code: "QR 725", date: "11APR", route: "DOH to ORD", time: "0800 1505" }
              ]
            }
          ]
        },
        {
          country: "GERMANY",
          cities: [
            {
              from: "Frankfurt",
              airline: "Turkish Airways",
              flights: [
                { code: "TK1594", date: "01APR", route: "FRA to IST", time: "1900 2305" },
                { code: "TK 750", date: "02APR", route: "IST to ISB", time: "0040 0725" },
                { code: "TK 711", date: "11APR", route: "ISB to IST", time: "0525 0855" },
                { code: "TK1591", date: "11APR", route: "IST to FRA", time: "1125 1340" }
              ],
            },
            {
              from: "Munich",
              airline: "Saudi Airlines",
              flights: [
                { code: "SV174", date: "01APR", route: "MUC to JED", time: "1625 2250" },
                { code: "SV722", date: "02APR", route: "JED to ISB", time: "0150 0910" },
                { code: "SV727", date: "11APR", route: "ISB to JED", time: "0300 0610" },
                { code: "SV175", date: "11APR", route: "JED to MUC", time: "1020 1455" }
              ]
            },
            {
              from: "Berlin",
              airline: "Turkish Airways",
              flights: [
                { code: "TK1726", date: "01APR", route: "BER to IST", time: "1510 1910" },
                { code: "TK 710", date: "02APR", route: "IST to ISB", time: "2110 0355+1" },
                { code: "TK 711", date: "11APR", route: "ISB to IST", time: "0525 0855" },
                { code: "TK1729", date: "11APR", route: "IST to BER", time: "1005 1200" }
              ]
            }
          ]
        },
        {
          country: "UNITED KINGDOM",
          cities: [
            {
              from: "London",
              airline: "Qatar Airways",
              flights: [
                { code: "QR8", date: "01APR", route: "LHR to DOH", time: "1600 0050+1" },
                { code: "QR 614", date: "02APR", route: "DOH to ISB", time: "0215 0740" },
                { code: "QR 633", date: "11APR", route: "ISB to DOH", time: "0330 0515" },
                { code: "QR 109", date: "11APR", route: "DOH to LHR", time: "0850 1405" }
              ]
            }
          ]
        },
        {
          country: "CANADA",
          cities: [
            {
              from: "Toronto",
              airline: "Etihad Airways",
              flights: [
                { code: "EY 22", date: "01APR", route: "YYZ to AUH", time: "1510 1230+1" },
                { code: "EY300", date: "02APR", route: "AUH to ISB", time: "1410 1825" },
                { code: "EY301", date: "11APR", route: "ISB to AUH", time: "1935 2200" },
                { code: "EY21", date: "12APR", route: "AUH to YYZ", time: "0215 0900" }
              ]
            }
          ]
        }
      ]
    },

    experiences: {
      hideExepriences: true,
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Guided experiences across Islamabad, Hunza, Nagar, Gilgit, and Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Heritage walks, fort tours, local artisan visits & glacial viewpoints ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "4x4 ride to Bikchum Ghutum, boating on Attabad Lake, hike to Passu Glacier ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Visits to Shigar Fort, Khaplu, Sarfaranga Cold Desert, and Kachura Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Ambiance, Zen by the Lake, and K2 GreenPak ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Professional ground support, local guides, and immersive cultural storytelling",
        },
      ],
    },

    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
        description: "Khushamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned The Lost Tribe with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the roof top hill, your dinner experience tonight at The Lost Tribe will be a great introduction to Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 2.jpg",
        description: "The adventure continues with an early morning departure from Islamabad, taking one of the world's most breathtaking flights to Skardu. The 1-hour journey offers panoramic aerial views of majestic peaks, including the legendary Nanga Parbat. Upon landing, we begin a scenic 6-hour road trip towards Hunza Valley, passing through dramatic mountain landscapes and the historic city of Gilgit. A mid-day lunch break is planned at Ramada Gilgit, offering a comfortable and hygienic stop with warm hospitality and panoramic views. Along the way, we'll enjoy a short photo stop at the Rakaposhi Viewpoint, a perfect moment to capture the grandeur of the Karakoram. By evening, we check into our Hunza resort, where a cozy dinner awaits at the property, surrounded by the valley's enchanting night sky and mountain silhouettes, a peaceful close to a day immersed in natural beauty.",
        title: "Into the Mountains – Skies, Peaks & Valleys",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip & Heritage walk",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 4.jpg",
        description: "After a hearty breakfast, the day begins with a scenic journey towards Attabad Lake, one of Pakistan's most breathtaking turquoise wonders. We continue towards the thrilling Hussaini Suspension Bridge, known for its daring planks and stunning backdrop reached via a short downhill walk. After some time for photos and exploration, we head to the peaceful Borith Lake for freshly prepared local snacks enjoyed by the water. From there, a short drive takes us to Zero Point, the starting point for our Passu Glacier Hike, a rewarding 40-minute trek offering panoramic views of the Passu Cones and the majestic glacier. We return to Attabad Lake and check into a lakeside resort where the rest of the evening is all about leisure and lakeside adventure. Jet skiing and boating await in the serene setting, followed by a peaceful dinner by the lake. Overnight stay at the resort.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        premiumHotel: "Zen By The Lake (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 5.jpg",
        description: "We begin the day with an early breakfast before departing for Gilgit, passing through lush valleys and winding roads. A highlight stop awaits in Minapin, one of the oldest and most picturesque villages of the Nagar Valley. Surrounded by orchards, visitors can enjoy a peaceful garden walk and, depending on the season, taste fresh local fruits or take in the colorful blossoms. From here, a jeep adventure takes us to the breathtaking Miacher KOH viewpoint offering sweeping panoramic views of the Rakaposhi Range and the dramatic ice ridge connecting Rakaposhi to Diran Peak. This is a dream spot for photography and drone footage. After returning to Minapin, we indulge in an authentic local dining experience at Osho Thang, known for its traditional flavors. The day ends with a scenic drive to Gilgit for an overnight stay.",
        title: "Mountain Majesty & Village Charm",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 6.jpg",
        description: "After breakfast, we set off on a scenic 4 hours journey to Skardu, venturing deep into the mountains of the majestic Baltistan region, passing through the historic Jaglot town. Our first stop is the enchanting Upper Kachura Lake, reached by a short 15-minute trek. Here, thrill-seekers can enjoy speed boating or take a daring dip in the ice-cold turquoise waters. We then head down to the serene Lower Kachura Lake, home to the iconic Shangrila Resort, where we'll enjoy lunch by the lake. In the afternoon, we venture to Soq Valley, a hidden gem just 45 minutes away, offering untouched beauty and peaceful surroundings. After soaking in the valley's charm, we return to the resort in Shigar for a relaxed evening and overnight stay.",
        title: "Lakeside Serenity & Hidden Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 7.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 8.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Spring landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of blossom and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Spring Landscapes & Mountain Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 9.jpg",
        description: "Breakfast will be served at the hotel. Transfer to Airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Leisure and stroll in the shopping centres. Farewell dinner at a hand picked restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu to Islamabad",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
        description: "Breakfast will be served in the morning. Free time for leisure till your flight departure. transfer to the airport with lots of memories to cherish forever. departure to your respective country.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],

    includes: {
      services: [
        "Meals",
        "Transportation",
        "ISB→ KDU Return Flight",
        "2 Nights Islamabad",
        "Premium Package",
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Gilgit",
        "3 Nights Skardu",
      ],
      premiumPackage: [
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "Ambiance Resort (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "GreenPak Resort (Deluxe Rooms)",
      ],
      premium: {
        meals: "3 Meals/Daily",
        transportation: "Toyota Coaster & 4x4 Jeeps",
        groupSizeMin: "8",
        groupSizeMax: "12 pax",
      }
    },

    notIncluded: [
        "Round Trip international flight to Islamabad",
        "Visa application and fees",
        "Cancellation / Travel Insurance and Emergency Medical Insurance",
        "Photographic insurance",
        "Alcoholic beverage and soft drinks",
        "Personal expenses",
    ],

    cost: {
      size: [
        "Double Occupancy",
      ],
      deluxePackage: [
        "$2,300",
      ],
    },
  },
  {
    id: "br-around-karakoram-SP26-01-ogik",
    title: "Journey Through the Heart of Karakoram",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/banner.jpg",
    link: "package-tour/br-around-karakoram-SP26-01-ogik",
    category: [CATEGORIES.naran],
    provincesCovered: "Gilgit Baltistan",
    price: "$2,300",
    singleOccupancy: "$650",
    days: "10",
    hosted: true,
    description:
      "Journey Through the Heart of Karakoram – A Co-Hosted Adventure. This spring, we embark to the majestic north of Pakistan for an unforgettable 10-day journey through Hunza and Skardu, co-hosted with some of the world's most inspiring travel creators. This trip isn't just about landscapes, it's about connection, culture, and community. Together, we'll wander through ancient valleys, share stories under starlit skies, and capture moments that celebrate the spirit of exploration. From the turquoise lakes of Hunza to the serene valleys of Skardu, every day promises a perfect blend of adventure, creativity, and meaningful human connection.",
    
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "8+",
      bestTime: "April (Spring - Blossom)",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/overview.jpg"
    },
    pdf: "/assets/PDFS/SP26-04-around-karakoram-ogik.pdf",
    
    internationalFlights: {
      routes: [
        {
          country: "UNITED STATES",
          cities: [
            {
              from: "New York",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK12", date: "08APR", route: "JFK to IST", time: "0025 1715" },
                { code: "TK710", date: "08APR", route: "IST to ISB", time: "2110 0355+1" },
                { code: "TK751", date: "18APR", route: "ISB to IST", time: "0855 1225" },
                { code: "TK1", date: "18APR", route: "IST to JFK", time: "1410 1800" }
              ]
            },
            {
              from: "Houston",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK34", date: "08APR", route: "IAH to IST", time: "2100 1705+1" },
                { code: "TK710", date: "09APR", route: "IST to ISB", time: "2110 0355+1" },
                { code: "TK751", date: "18APR", route: "ISB to IST", time: "0855 1225" },
                { code: "TK33", date: "18APR", route: "IST to IAH", time: "1410 1915" }
              ]
            },
            {
              from: "Chicago",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK6W", date: "08APR", route: "ORD to IST", time: "1950 1440+1" },
                { code: "TK710", date: "09APR", route: "IST to ISB", time: "2110 0355+1" },
                { code: "TK751", date: "18APR", route: "ISB to IST", time: "0855 1225" },
                { code: "TK5W", date: "18APR", route: "IST to ORD", time: "1445 1815" }
              ]
            }
          ]
        },
        {
          country: "UNITED KINGDOM",
          cities: [
            {
              from: "London",
              airline: "Qatar Airways",
              flights: [
                { code: "QR10", date: "08APR", route: "LHR to DOH", time: "1050 1945" },
                { code: "QR632", date: "08APR", route: "DOH to ISB", time: "2030 0150+1" },
                { code: "QR633", date: "18APR", route: "ISB to DOH", time: "0330 0530" },
                { code: "QR7", date: "18APR", route: "DOH to LHR", time: "0845 1410" }
              ]
            }
          ]
        },
        {
          country: "CANADA",
          cities: [
            {
              from: "Toronto",
              airline: "Etihad Airways",
              flights: [
                { code: "EY22", date: "08APR", route: "YYZ to AUH", time: "1510 1230+1" },
                { code: "EY300", date: "09APR", route: "AUH to ISB", time: "1410 1825" },
                { code: "EY301", date: "18APR", route: "ISB to AUH", time: "1935 2200" },
                { code: "EY21", date: "19APR", route: "AUH to YYZ", time: "0215 0900" }
              ]
            }
          ]
        },
        {
          country: "GERMANY",
          cities: [
            {
              from: "Frankfurt",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK1594", date: "08APR", route: "FRA to IST", time: "1900 2305" },
                { code: "TK750", date: "09APR", route: "IST to ISB", time: "0040 0725" },
                { code: "TK711", date: "18APR", route: "ISB to IST", time: "0525 0855" },
                { code: "TK1591", date: "18APR", route: "IST to FRA", time: "1125 1340" }
              ]
            },

            {
              from: "Munich",
              airline: "Etihad Airways",
              flights: [
                { code: "EY128", date: "08APR", route: "MUC to AUH", time: "2235 0630+1" },
                { code: "EY300", date: "09APR", route: "AUH to ISB", time: "1410 1825" },
                { code: "EY301", date: "18APR", route: "ISB to AUH", time: "1935 2200" },
                { code: "EY125", date: "19APR", route: "AUH to MUC", time: "0215 0640" }
              ]
            },

            {
              from: "Berlin",
              airline: "Turkish Airlines",
              flights: [
                { code: "TK1724", date: "08APR", route: "BER to IST", time: "1915 2305" },
                { code: "TK750", date: "09APR", route: "IST to ISB", time: "0040 0725" },
                { code: "TK711", date: "18APR", route: "ISB to IST", time: "0525 0855" },
                { code: "TK1729", date: "18APR", route: "IST to BER", time: "1005 1200" }
              ]
            }
          ]
        }
      ]
    },

    experiences: {
      hideExepriences: true,
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Guided experiences across Islamabad, Hunza, Nagar, Gilgit, and Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Heritage walks, fort tours, local artisan visits & glacial viewpoints ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "4x4 ride to Bikchum Ghutum, boating on Attabad Lake, hike to Passu Glacier ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Visits to Shigar Fort, Khaplu, Sarfaranga Cold Desert, and Kachura Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Ambiance, Zen by the Lake, and K2 GreenPak ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Professional ground support, local guides, and immersive cultural storytelling",
        },
      ],
    },

    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
        description: "Khushamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned The Lost Tribe with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the roof top hill, your dinner experience tonight at The Lost Tribe will be a great introduction to Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/Day 2.jpg",
        description: "The adventure continues with an early morning departure from Islamabad, taking one of the world's most breathtaking flights to Skardu. The 1-hour journey offers panoramic aerial views of majestic peaks, including the legendary Nanga Parbat. Upon landing, we begin a scenic 6-hour road trip towards Hunza Valley, passing through dramatic mountain landscapes and the historic city of Gilgit. A mid-day lunch break is planned at Ramada Gilgit, offering a comfortable and hygienic stop with warm hospitality and panoramic views. Along the way, we'll enjoy a short photo stop at the Rakaposhi Viewpoint, a perfect moment to capture the grandeur of the Karakoram. By evening, we check into our Hunza resort, where a cozy dinner awaits at the property, surrounded by the valley's enchanting night sky and mountain silhouettes, a peaceful close to a day immersed in natural beauty.",
        title: "Into the Mountains – Skies, Peaks & Valleys",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip & Heritage walk",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/Day 4.jpg",
        description: "After a hearty breakfast, the day begins with a scenic journey towards Attabad Lake, one of Pakistan's most breathtaking turquoise wonders. We continue towards the thrilling Hussaini Suspension Bridge, known for its daring planks and stunning backdrop reached via a short downhill walk. After some time for photos and exploration, we head to the peaceful Borith Lake for freshly prepared local snacks enjoyed by the water. From there, a short drive takes us to Zero Point, the starting point for our Passu Glacier Hike, a rewarding 40-minute trek offering panoramic views of the Passu Cones and the majestic glacier. We return to Attabad Lake and check into a lakeside resort where the rest of the evening is all about leisure and lakeside adventure. Jet skiing and boating await in the serene setting, followed by a peaceful dinner by the lake. Overnight stay at the resort.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        premiumHotel: "Zen By The Lake (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/Day 5.jpg",
        description: "We begin the day with an early breakfast before departing for Gilgit, passing through lush valleys and winding roads. A highlight stop awaits in Minapin, one of the oldest and most picturesque villages of the Nagar Valley. Surrounded by orchards, visitors can enjoy a peaceful garden walk and, depending on the season, taste fresh local fruits or take in the colorful blossoms. From here, a jeep adventure takes us to the breathtaking Miacher KOH viewpoint offering sweeping panoramic views of the Rakaposhi Range and the dramatic ice ridge connecting Rakaposhi to Diran Peak. This is a dream spot for photography and drone footage. After returning to Minapin, we indulge in an authentic local dining experience at Osho Thang, known for its traditional flavors. The day ends with a scenic drive to Gilgit for an overnight stay.",
        title: "Mountain Majesty & Village Charm",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/Day 6.jpg",
        description: "After breakfast, we set off on a scenic 4 hours journey to Skardu, venturing deep into the mountains of the majestic Baltistan region, passing through the historic Jaglot town. Our first stop is the enchanting Upper Kachura Lake, reached by a short 15-minute trek. Here, thrill-seekers can enjoy speed boating or take a daring dip in the ice-cold turquoise waters. We then head down to the serene Lower Kachura Lake, home to the iconic Shangrila Resort, where we'll enjoy lunch by the lake. In the afternoon, we venture to Soq Valley, a hidden gem just 45 minutes away, offering untouched beauty and peaceful surroundings. After soaking in the valley's charm, we return to the resort in Shigar for a relaxed evening and overnight stay.",
        title: "Lakeside Serenity & Hidden Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/Day 7.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/Day 8.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Spring landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of blossom and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Spring Landscapes & Mountain Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-ogik/Day 9.jpg",
        description: "Breakfast will be served at the hotel. Transfer to Airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Leisure and stroll in the shopping centres. Farewell dinner at a hand picked restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu to Islamabad",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
        description: "Breakfast will be served in the morning. Free time for leisure till your flight departure. transfer to the airport with lots of memories to cherish forever. departure to your respective country.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],

    includes: {
      services: [
        "Meals",
        "Transportation",
        "ISB→ KDU Return Flight",
        "2 Nights Islamabad",
        "Premium Package",
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Gilgit",
        "3 Nights Skardu",
      ],
      premiumPackage: [
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "Ambiance Resort (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "GreenPak Resort (Deluxe Rooms)",
      ],
      premium: {
        meals: "3 Meals/Daily",
        transportation: "Toyota Coaster & 4x4 Jeeps",
        groupSizeMin: "8",
        groupSizeMax: "12 pax",
      }
    },

    notIncluded: [
        "Round Trip international flight to Islamabad",
        "Visa application and fees",
        "Cancellation / Travel Insurance and Emergency Medical Insurance",
        "Photographic insurance",
        "Alcoholic beverage and soft drinks",
        "Personal expenses",
    ],

    cost: {
      size: [
        "Double Occupancy",
      ],
      deluxePackage: [
        "$2,300",
      ],
    },
  },

  // ADVENTURE Around Karakoram AT26-02 Jonas
  {
    id: "br-around-karakoram-AT26-02-jonas",
    title: "Adventure Across Mountains & Meadows",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/banner.jpg",
    link: "package-tour/br-around-karakoram-AT26-02-jonas",
    category: [CATEGORIES.karakoram],
    provincesCovered: "Gilgit Baltistan",
    price: "$2,400",
    singleOccupancy: "$650",
    days: "12",
    hosted: true,
    description:
      "Journey Through the Heart of Karakoram – A Co-Hosted Adventure. This spring, we embark to the majestic north of Pakistan for an unforgettable 10-day journey through Hunza and Skardu, co-hosted with some of the world's most inspiring travel creators. This trip isn't just about landscapes, it's about connection, culture, and community. Together, we'll wander through ancient valleys, share stories under starlit skies, and capture moments that celebrate the spirit of exploration. From the turquoise lakes of Hunza to the serene valleys of Skardu, every day promises a perfect blend of adventure, creativity, and meaningful human connection.",
    
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "8+",
      bestTime: "October (Autumn – Golden Season)",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/overview.jpeg"
    },
    pdf: "/assets/PDFS/AT26-02-around-karakoram-jonas.pdf",

    experiences: {
      hideExepriences: true,
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Guided experiences across Islamabad, Hunza, Nagar, Gilgit, and Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Heritage walks, fort tours, local artisan visits & glacial viewpoints ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "4x4 ride to Bikchum Ghutum, boating on Attabad Lake, hike to Passu Glacier ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Visits to Shigar Fort, Khaplu, Sarfaranga Cold Desert, and Kachura Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Ambiance, Zen by the Lake, and K2 GreenPak ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Professional ground support, local guides, and immersive cultural storytelling",
        },
      ],
    },
    

    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 1.png",
        description: "Khushamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned The Lost Tribe with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the roof top hill, your dinner experience tonight at The Lost Tribe will be a great introduction to Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 2.jpg",
        description: "After an early breakfast, transfer to the airport for your Islamabad → Skardu flight, one of the world’s most spectacular aerial journeys offering sweeping views of the Karakoram. On arrival, begin your scenic drive toward Hunza Valley, passing terraced fields, cliffside roads, and dramatic autumn colours. Upon reaching Karimabad, check in at Ambiance Hunza and enjoy the rest of the day at leisure, taking in the golden hues of fall across the valley.",
        title: "Into the Mountains – Skies, Peaks & Valleys",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip & Heritage walk",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 4.jpg",
        description: "After a hearty breakfast, the day begins with a scenic journey towards Attabad Lake, one of Pakistan's most breathtaking turquoise wonders. We continue towards the thrilling Hussaini Suspension Bridge, known for its daring planks and stunning backdrop reached via a short downhill walk. After some time for photos and exploration, we head to the peaceful Borith Lake for freshly prepared local snacks enjoyed by the water. From there, a short drive takes us to Zero Point, the starting point for our Passu Glacier Hike, a rewarding 40-minute trek offering panoramic views of the Passu Cones and the majestic glacier. We return to Attabad Lake and check into a lakeside resort where the rest of the evening is all about leisure and lakeside adventure. Jet skiing and boating await in the serene setting, followed by a peaceful dinner by the lake. Overnight stay at the resort.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        premiumHotel: "Zen By The Lake (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 5.jpg",
        description: "We begin the day with an early breakfast before departing for Gilgit, passing through lush valleys and winding roads. A highlight stop awaits in Minapin, one of the oldest and most picturesque villages of the Nagar Valley. Surrounded by orchards, visitors can enjoy a peaceful garden walk and, depending on the season, taste fresh local fruits or take in the colorful blossoms. From here, a jeep adventure takes us to the breathtaking Miacher KOH viewpoint offering sweeping panoramic views of the Rakaposhi Range and the dramatic ice ridge connecting Rakaposhi to Diran Peak. This is a dream spot for photography and drone footage. After returning to Minapin, we indulge in an authentic local dining experience at Osho Thang, known for its traditional flavors. The day ends with a scenic drive to Gilgit for an overnight stay.",
        title: "Mountain Majesty & Village Charm",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 6.jpg",
        description: "After breakfast, depart Gilgit toward Raikot Bridge via the Karakoram Highway. Transfer into 4x4 jeeps for the thrilling ascent to Tato Village, followed by a scenic 2.5–3 hour trek through forests glowing with warm fall colours. Arrive at Fairy Meadows and settle into your wooden cabins facing the mighty Nanga Parbat. Enjoy tea with spectacular views before a cozy dinner around a fireplace under the clear Himalayan sky.",
        title: "Journey To Fairy Meadows & Trek Into The Pines",
        // premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        // activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 7.jpg",
        description: "Wake up to sunrise on the ninth highest mountain in the world, one of the most majestic morning views anywhere. After breakfast, choose to relax at the meadows or embark on an optional trek to Beyal Camp, offering closer views of Nanga Parbat and the Raikot Glacier. Enjoy a peaceful afternoon amid meadows, forests, and golden autumn scenery before dinner and another night in the mountains.",
        title: "Fairy Meadows & Optional Beyal Camp Trek",
        // premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        // activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 8.png",
        description: "After breakfast, we set off on a scenic 4 hours journey to Skardu, venturing deep into the mountains of the majestic Baltistan region, passing through the historic Jaglot town. Our first stop is the enchanting Upper Kachura Lake, reached by a short 15-minute trek. Here, thrill-seekers can enjoy speed boating or take a daring dip in the ice-cold turquoise waters. We then head down to the serene Lower Kachura Lake, home to the iconic Shangrila Resort, where we'll enjoy lunch by the lake. In the afternoon, we venture to Soq Valley, a hidden gem just 45 minutes away, offering untouched beauty and peaceful surroundings. After soaking in the valley's charm, we return to the resort in Shigar for a relaxed evening and overnight stay.",
        title: "Lakeside Serenity & Hidden Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 9.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 10.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Autumn landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of fall and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Autumn Landscapes & Mountain Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 11.jpg",
        description: "Breakfast will be served at the hotel. Transfer to Airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Leisure and stroll in the shopping centres. Farewell dinner at a hand picked restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu to Islamabad",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-jonas/Day 12.jpg",
        description: "Breakfast will be served in the morning. Free time for leisure till your flight departure. transfer to the airport with lots of memories to cherish forever. departure to your respective country.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],

    includes: {
      services: [
        "Meals",
        "Transportation",
        "ISB→ KDU Return Flight",
        "2 Nights Islamabad",
        "Premium Package",
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Gilgit",
        "3 Nights Skardu",
      ],
      premiumPackage: [
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "Ambiance Resort (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "GreenPak Resort (Deluxe Rooms)",
      ],
      premium: {
        meals: "3 Meals/Daily",
        transportation: "Toyota Coaster & 4x4 Jeeps",
        groupSizeMin: "8",
        groupSizeMax: "12 pax",
      }
    },

    notIncluded: [
        "Round Trip international flight to Islamabad",
        "Visa application and fees",
        "Cancellation / Travel Insurance and Emergency Medical Insurance",
        "Photographic insurance",
        "Alcoholic beverage and soft drinks",
        "Personal expenses",
    ],

    cost: {
      size: [
        "Double Occupancy",
      ],
      deluxePackage: [
        "$2,400",
      ],
    },
  },
  // ADVENTURE Around Karakoram AT26-02 Lukas
  {
    id: "br-around-karakoram-AT26-02-lukas",
    title: "Adventure Across Mountains & Meadows",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/banner.jpg",
    link: "package-tour/br-around-karakoram-AT26-02-lukas",
    category: [CATEGORIES.karakoram],
    provincesCovered: "Gilgit Baltistan",
    price: "$2,400",
    singleOccupancy: "$650",
    days: "12",
    hosted: true,
    description:
      "Journey Through the Heart of Karakoram – A Co-Hosted Adventure. This spring, we embark to the majestic north of Pakistan for an unforgettable 12-day journey through Hunza and Skardu, co-hosted with some of the world's most inspiring travel creators. This trip isn't just about landscapes, it's about connection, culture, and community. Together, we'll wander through ancient valleys, share stories under starlit skies, and capture moments that celebrate the spirit of exploration. From the turquoise lakes of Hunza to the serene valleys of Skardu, every day promises a perfect blend of adventure, creativity, and meaningful human connection.",
    
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "8+",
      bestTime: "October (Autumn – Golden Season)",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/overview.jpeg"
    },
    pdf: "/assets/PDFS/AT26-02-around-karakoram-lukas.pdf",

    experiences: {
      hideExepriences: true,
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Guided experiences across Islamabad, Hunza, Nagar, Gilgit, and Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Heritage walks, fort tours, local artisan visits & glacial viewpoints ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "4x4 ride to Bikchum Ghutum, boating on Attabad Lake, hike to Passu Glacier ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Visits to Shigar Fort, Khaplu, Sarfaranga Cold Desert, and Kachura Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Ambiance, Zen by the Lake, and K2 GreenPak ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Professional ground support, local guides, and immersive cultural storytelling",
        },
      ],
    },
    

    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 1.png",
        description: "Khushamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned The Lost Tribe with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the roof top hill, your dinner experience tonight at The Lost Tribe will be a great introduction to Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 2.jpg",
        description: "After an early breakfast, transfer to the airport for your Islamabad → Skardu flight, one of the world’s most spectacular aerial journeys offering sweeping views of the Karakoram. On arrival, begin your scenic drive toward Hunza Valley, passing terraced fields, cliffside roads, and dramatic autumn colours. Upon reaching Karimabad, check in at Ambiance Hunza and enjoy the rest of the day at leisure, taking in the golden hues of fall across the valley.",
        title: "Into the Mountains – Skies, Peaks & Valleys",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 3.jpeg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip & Heritage walk",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 4.jpeg",
        description: "After a hearty breakfast, the day begins with a scenic journey towards Attabad Lake, one of Pakistan's most breathtaking turquoise wonders. We continue towards the thrilling Hussaini Suspension Bridge, known for its daring planks and stunning backdrop reached via a short downhill walk. After some time for photos and exploration, we head to the peaceful Borith Lake for freshly prepared local snacks enjoyed by the water. From there, a short drive takes us to Zero Point, the starting point for our Passu Glacier Hike, a rewarding 40-minute trek offering panoramic views of the Passu Cones and the majestic glacier. We return to Attabad Lake and check into a lakeside resort where the rest of the evening is all about leisure and lakeside adventure. Jet skiing and boating await in the serene setting, followed by a peaceful dinner by the lake. Overnight stay at the resort.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        premiumHotel: "Zen By The Lake (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 5.jpg",
        description: "We begin the day with an early breakfast before departing for Gilgit, passing through lush valleys and winding roads. A highlight stop awaits in Minapin, one of the oldest and most picturesque villages of the Nagar Valley. Surrounded by orchards, visitors can enjoy a peaceful garden walk and, depending on the season, taste fresh local fruits or take in the colorful blossoms. From here, a jeep adventure takes us to the breathtaking Miacher KOH viewpoint offering sweeping panoramic views of the Rakaposhi Range and the dramatic ice ridge connecting Rakaposhi to Diran Peak. This is a dream spot for photography and drone footage. After returning to Minapin, we indulge in an authentic local dining experience at Osho Thang, known for its traditional flavors. The day ends with a scenic drive to Gilgit for an overnight stay.",
        title: "Mountain Majesty & Village Charm",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 6.jpg",
        description: "After breakfast, depart Gilgit toward Raikot Bridge via the Karakoram Highway. Transfer into 4x4 jeeps for the thrilling ascent to Tato Village, followed by a scenic 2.5–3 hour trek through forests glowing with warm fall colours. Arrive at Fairy Meadows and settle into your wooden cabins facing the mighty Nanga Parbat. Enjoy tea with spectacular views before a cozy dinner around a fireplace under the clear Himalayan sky.",
        title: "Journey To Fairy Meadows & Trek Into The Pines",
        // premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        // activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 7.jpeg",
        description: "Wake up to sunrise on the ninth highest mountain in the world, one of the most majestic morning views anywhere. After breakfast, choose to relax at the meadows or embark on an optional trek to Beyal Camp, offering closer views of Nanga Parbat and the Raikot Glacier. Enjoy a peaceful afternoon amid meadows, forests, and golden autumn scenery before dinner and another night in the mountains.",
        title: "Fairy Meadows & Optional Beyal Camp Trek",
        // premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        // activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 8.jpg",
        description: "After breakfast, we set off on a scenic 4 hours journey to Skardu, venturing deep into the mountains of the majestic Baltistan region, passing through the historic Jaglot town. Our first stop is the enchanting Upper Kachura Lake, reached by a short 15-minute trek. Here, thrill-seekers can enjoy speed boating or take a daring dip in the ice-cold turquoise waters. We then head down to the serene Lower Kachura Lake, home to the iconic Shangrila Resort, where we'll enjoy lunch by the lake. In the afternoon, we venture to Soq Valley, a hidden gem just 45 minutes away, offering untouched beauty and peaceful surroundings. After soaking in the valley's charm, we return to the resort in Shigar for a relaxed evening and overnight stay.",
        title: "Lakeside Serenity & Hidden Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 9.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 10.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Autumn landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of fall and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Autumn Landscapes & Mountain Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 11.jpg",
        description: "Breakfast will be served at the hotel. Transfer to Airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Leisure and stroll in the shopping centres. Farewell dinner at a hand picked restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu to Islamabad",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-lukas/Day 12.jpg",
        description: "Breakfast will be served in the morning. Free time for leisure till your flight departure. transfer to the airport with lots of memories to cherish forever. departure to your respective country.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],

    includes: {
      services: [
        "Meals",
        "Transportation",
        "ISB→ KDU Return Flight",
        "2 Nights Islamabad",
        "Premium Package",
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Gilgit",
        "3 Nights Skardu",
      ],
      premiumPackage: [
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "Ambiance Resort (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "GreenPak Resort (Deluxe Rooms)",
      ],
      premium: {
        meals: "3 Meals/Daily",
        transportation: "Toyota Coaster & 4x4 Jeeps",
        groupSizeMin: "8",
        groupSizeMax: "12 pax",
      }
    },

    notIncluded: [
        "Round Trip international flight to Islamabad",
        "Visa application and fees",
        "Cancellation / Travel Insurance and Emergency Medical Insurance",
        "Photographic insurance",
        "Alcoholic beverage and soft drinks",
        "Personal expenses",
    ],

    cost: {
      size: [
        "Double Occupancy",
      ],
      deluxePackage: [
        "$2,400",
      ],
    },
  },
  // ADVENTURE Around Karakoram AT26-02 Marius
  {
    id: "br-around-karakoram-AT26-02-marius",
    title: "Adventure Across Mountains & Meadows",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/banner.jpeg",
    link: "package-tour/br-around-karakoram-AT26-02-marius",
    category: [CATEGORIES.karakoram],
    provincesCovered: "Gilgit Baltistan",
    price: "$2,400",
    singleOccupancy: "$650",
    days: "12",
    hosted: true,
    description:
      "Journey Through the Heart of Karakoram – A Co-Hosted Adventure. This spring, we embark to the majestic north of Pakistan for an unforgettable 10-day journey through Hunza and Skardu, co-hosted with some of the world's most inspiring travel creators. This trip isn't just about landscapes, it's about connection, culture, and community. Together, we'll wander through ancient valleys, share stories under starlit skies, and capture moments that celebrate the spirit of exploration. From the turquoise lakes of Hunza to the serene valleys of Skardu, every day promises a perfect blend of adventure, creativity, and meaningful human connection.",
    
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "8+",
      bestTime: "October (Autumn – Golden Season)",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/overview.jpeg"
    },
    pdf: "/assets/PDFS/AT26-02-around-karakoram-marius.pdf",

    experiences: {
      hideExepriences: true,
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Guided experiences across Islamabad, Hunza, Nagar, Gilgit, and Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Heritage walks, fort tours, local artisan visits & glacial viewpoints ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "4x4 ride to Bikchum Ghutum, boating on Attabad Lake, hike to Passu Glacier ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Visits to Shigar Fort, Khaplu, Sarfaranga Cold Desert, and Kachura Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Ambiance, Zen by the Lake, and K2 GreenPak ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Professional ground support, local guides, and immersive cultural storytelling",
        },
      ],
    },
    

    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 1.png",
        description: "Khushamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned The Lost Tribe with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the roof top hill, your dinner experience tonight at The Lost Tribe will be a great introduction to Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 2.jpg",
        description: "After an early breakfast, transfer to the airport for your Islamabad → Skardu flight, one of the world’s most spectacular aerial journeys offering sweeping views of the Karakoram. On arrival, begin your scenic drive toward Hunza Valley, passing terraced fields, cliffside roads, and dramatic autumn colours. Upon reaching Karimabad, check in at Ambiance Hunza and enjoy the rest of the day at leisure, taking in the golden hues of fall across the valley.",
        title: "Into the Mountains – Skies, Peaks & Valleys",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 3.jpeg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip & Heritage walk",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 4.jpg",
        description: "After a hearty breakfast, the day begins with a scenic journey towards Attabad Lake, one of Pakistan's most breathtaking turquoise wonders. We continue towards the thrilling Hussaini Suspension Bridge, known for its daring planks and stunning backdrop reached via a short downhill walk. After some time for photos and exploration, we head to the peaceful Borith Lake for freshly prepared local snacks enjoyed by the water. From there, a short drive takes us to Zero Point, the starting point for our Passu Glacier Hike, a rewarding 40-minute trek offering panoramic views of the Passu Cones and the majestic glacier. We return to Attabad Lake and check into a lakeside resort where the rest of the evening is all about leisure and lakeside adventure. Jet skiing and boating await in the serene setting, followed by a peaceful dinner by the lake. Overnight stay at the resort.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        premiumHotel: "Zen By The Lake (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 5.jpg",
        description: "We begin the day with an early breakfast before departing for Gilgit, passing through lush valleys and winding roads. A highlight stop awaits in Minapin, one of the oldest and most picturesque villages of the Nagar Valley. Surrounded by orchards, visitors can enjoy a peaceful garden walk and, depending on the season, taste fresh local fruits or take in the colorful blossoms. From here, a jeep adventure takes us to the breathtaking Miacher KOH viewpoint offering sweeping panoramic views of the Rakaposhi Range and the dramatic ice ridge connecting Rakaposhi to Diran Peak. This is a dream spot for photography and drone footage. After returning to Minapin, we indulge in an authentic local dining experience at Osho Thang, known for its traditional flavors. The day ends with a scenic drive to Gilgit for an overnight stay.",
        title: "Mountain Majesty & Village Charm",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 6.jpg",
        description: "After breakfast, depart Gilgit toward Raikot Bridge via the Karakoram Highway. Transfer into 4x4 jeeps for the thrilling ascent to Tato Village, followed by a scenic 2.5–3 hour trek through forests glowing with warm fall colours. Arrive at Fairy Meadows and settle into your wooden cabins facing the mighty Nanga Parbat. Enjoy tea with spectacular views before a cozy dinner around a fireplace under the clear Himalayan sky.",
        title: "Journey To Fairy Meadows & Trek Into The Pines",
        // premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        // activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 7.jpg",
        description: "Wake up to sunrise on the ninth highest mountain in the world, one of the most majestic morning views anywhere. After breakfast, choose to relax at the meadows or embark on an optional trek to Beyal Camp, offering closer views of Nanga Parbat and the Raikot Glacier. Enjoy a peaceful afternoon amid meadows, forests, and golden autumn scenery before dinner and another night in the mountains.",
        title: "Fairy Meadows & Optional Beyal Camp Trek",
        // premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        // activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 8.jpg",
        description: "After breakfast, we set off on a scenic 4 hours journey to Skardu, venturing deep into the mountains of the majestic Baltistan region, passing through the historic Jaglot town. Our first stop is the enchanting Upper Kachura Lake, reached by a short 15-minute trek. Here, thrill-seekers can enjoy speed boating or take a daring dip in the ice-cold turquoise waters. We then head down to the serene Lower Kachura Lake, home to the iconic Shangrila Resort, where we'll enjoy lunch by the lake. In the afternoon, we venture to Soq Valley, a hidden gem just 45 minutes away, offering untouched beauty and peaceful surroundings. After soaking in the valley's charm, we return to the resort in Shigar for a relaxed evening and overnight stay.",
        title: "Lakeside Serenity & Hidden Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 9.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 10.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Autumn landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of fall and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Autumn Landscapes & Mountain Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 11.jpg",
        description: "Breakfast will be served at the hotel. Transfer to Airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Leisure and stroll in the shopping centres. Farewell dinner at a hand picked restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu to Islamabad",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-marius/Day 12.jpg",
        description: "Breakfast will be served in the morning. Free time for leisure till your flight departure. transfer to the airport with lots of memories to cherish forever. departure to your respective country.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],

    includes: {
      services: [
        "Meals",
        "Transportation",
        "ISB→ KDU Return Flight",
        "2 Nights Islamabad",
        "Premium Package",
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Gilgit",
        "3 Nights Skardu",
      ],
      premiumPackage: [
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "Ambiance Resort (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "GreenPak Resort (Deluxe Rooms)",
      ],
      premium: {
        meals: "3 Meals/Daily",
        transportation: "Toyota Coaster & 4x4 Jeeps",
        groupSizeMin: "8",
        groupSizeMax: "12 pax",
      }
    },

    notIncluded: [
        "Round Trip international flight to Islamabad",
        "Visa application and fees",
        "Cancellation / Travel Insurance and Emergency Medical Insurance",
        "Photographic insurance",
        "Alcoholic beverage and soft drinks",
        "Personal expenses",
    ],

    cost: {
      size: [
        "Double Occupancy",
      ],
      deluxePackage: [
        "$2,400",
      ],
    },
  },
  // ADVENTURE Around Karakoram AT26-02 Ogik
  {
    id: "br-around-karakoram-AT26-02-ogik",
    title: "Adventure Across Mountains & Meadows",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/banner.jpg",
    link: "package-tour/br-around-karakoram-AT26-02-ogik",
    category: [CATEGORIES.karakoram],
    provincesCovered: "Gilgit Baltistan",
    price: "$2,400",
    singleOccupancy: "$650",
    days: "12",
    hosted: true,
    description:
      "Journey Through the Heart of Karakoram – A Co-Hosted Adventure. This spring, we embark to the majestic north of Pakistan for an unforgettable 10-day journey through Hunza and Skardu, co-hosted with some of the world's most inspiring travel creators. This trip isn't just about landscapes, it's about connection, culture, and community. Together, we'll wander through ancient valleys, share stories under starlit skies, and capture moments that celebrate the spirit of exploration. From the turquoise lakes of Hunza to the serene valleys of Skardu, every day promises a perfect blend of adventure, creativity, and meaningful human connection.",
    
    overview: {
      location: "Islamabad, Hunza & Skardu",
      people: "8+",
      bestTime: "October (Autumn – Golden Season)",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/overview.jpg"
    },
    pdf: "/assets/PDFS/AT26-02-around-karakoram-ogik.pdf",

    experiences: {
      hideExepriences: true,
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_1.jpg",
          title: "Guided experiences across Islamabad, Hunza, Nagar, Gilgit, and Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "Heritage walks, fort tours, local artisan visits & glacial viewpoints ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_3.jpg",
          title: "4x4 ride to Bikchum Ghutum, boating on Attabad Lake, hike to Passu Glacier ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_10.jpg",
          title: "Visits to Shigar Fort, Khaplu, Sarfaranga Cold Desert, and Kachura Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_7.jpg",
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Ambiance, Zen by the Lake, and K2 GreenPak ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/br-around-karakoram-pk24-10/Day_6.jpg",
          title: "Professional ground support, local guides, and immersive cultural storytelling",
        },
      ],
    },
    

    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 1.png",
        description: "Khushamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned The Lost Tribe with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the roof top hill, your dinner experience tonight at The Lost Tribe will be a great introduction to Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 2.png",
        description: "After an early breakfast, transfer to the airport for your Islamabad → Skardu flight, one of the world’s most spectacular aerial journeys offering sweeping views of the Karakoram. On arrival, begin your scenic drive toward Hunza Valley, passing terraced fields, cliffside roads, and dramatic autumn colours. Upon reaching Karimabad, check in at Ambiance Hunza and enjoy the rest of the day at leisure, taking in the golden hues of fall across the valley.",
        title: "Into the Mountains – Skies, Peaks & Valleys",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Ambiance Resort (Offers enhanced comfort and facilities)",
        activities: "Relaxation, Day trip & Heritage walk",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 4.jpg",
        description: "After a hearty breakfast, the day begins with a scenic journey towards Attabad Lake, one of Pakistan's most breathtaking turquoise wonders. We continue towards the thrilling Hussaini Suspension Bridge, known for its daring planks and stunning backdrop reached via a short downhill walk. After some time for photos and exploration, we head to the peaceful Borith Lake for freshly prepared local snacks enjoyed by the water. From there, a short drive takes us to Zero Point, the starting point for our Passu Glacier Hike, a rewarding 40-minute trek offering panoramic views of the Passu Cones and the majestic glacier. We return to Attabad Lake and check into a lakeside resort where the rest of the evening is all about leisure and lakeside adventure. Jet skiing and boating await in the serene setting, followed by a peaceful dinner by the lake. Overnight stay at the resort.",
        title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith Lake",
        premiumHotel: "Zen By The Lake (Offers enhanced comfort and facilities)",
        activities: "Attabad lake, Passu Cones, Gulmit village walk, Passu Glacier Walk and Borith lake",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 5.png",
        description: "We begin the day with an early breakfast before departing for Gilgit, passing through lush valleys and winding roads. A highlight stop awaits in Minapin, one of the oldest and most picturesque villages of the Nagar Valley. Surrounded by orchards, visitors can enjoy a peaceful garden walk and, depending on the season, taste fresh local fruits or take in the colorful blossoms. From here, a jeep adventure takes us to the breathtaking Miacher KOH viewpoint offering sweeping panoramic views of the Rakaposhi Range and the dramatic ice ridge connecting Rakaposhi to Diran Peak. This is a dream spot for photography and drone footage. After returning to Minapin, we indulge in an authentic local dining experience at Osho Thang, known for its traditional flavors. The day ends with a scenic drive to Gilgit for an overnight stay.",
        title: "Mountain Majesty & Village Charm",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 6.jpg",
        description: "After breakfast, depart Gilgit toward Raikot Bridge via the Karakoram Highway. Transfer into 4x4 jeeps for the thrilling ascent to Tato Village, followed by a scenic 2.5–3 hour trek through forests glowing with warm fall colours. Arrive at Fairy Meadows and settle into your wooden cabins facing the mighty Nanga Parbat. Enjoy tea with spectacular views before a cozy dinner around a fireplace under the clear Himalayan sky.",
        title: "Journey To Fairy Meadows & Trek Into The Pines",
        // premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        // activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 7.jpg",
        description: "Wake up to sunrise on the ninth highest mountain in the world, one of the most majestic morning views anywhere. After breakfast, choose to relax at the meadows or embark on an optional trek to Beyal Camp, offering closer views of Nanga Parbat and the Raikot Glacier. Enjoy a peaceful afternoon amid meadows, forests, and golden autumn scenery before dinner and another night in the mountains.",
        title: "Fairy Meadows & Optional Beyal Camp Trek",
        // premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        // activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 8.jpg",
        description: "After breakfast, we set off on a scenic 4 hours journey to Skardu, venturing deep into the mountains of the majestic Baltistan region, passing through the historic Jaglot town. Our first stop is the enchanting Upper Kachura Lake, reached by a short 15-minute trek. Here, thrill-seekers can enjoy speed boating or take a daring dip in the ice-cold turquoise waters. We then head down to the serene Lower Kachura Lake, home to the iconic Shangrila Resort, where we'll enjoy lunch by the lake. In the afternoon, we venture to Soq Valley, a hidden gem just 45 minutes away, offering untouched beauty and peaceful surroundings. After soaking in the valley's charm, we return to the resort in Shigar for a relaxed evening and overnight stay.",
        title: "Lakeside Serenity & Hidden Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 9.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 10.png",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Autumn landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of fall and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Autumn Landscapes & Mountain Valleys",
        premiumHotel: "K-2 GreenPak (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 11.jpg",
        description: "Breakfast will be served at the hotel. Transfer to Airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Leisure and stroll in the shopping centres. Farewell dinner at a hand picked restaurant. Return to the hotel, Overnight stay.",
        title: "Skardu to Islamabad",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops, farewell Dinner",
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-AT26-02-ogik/Day 12.jpg",
        description: "Breakfast will be served in the morning. Free time for leisure till your flight departure. transfer to the airport with lots of memories to cherish forever. departure to your respective country.",
        title: "Day of Departure",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Airport transfer, end of tour",
      }
    ],

    includes: {
      services: [
        "Meals",
        "Transportation",
        "ISB→ KDU Return Flight",
        "2 Nights Islamabad",
        "Premium Package",
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Gilgit",
        "3 Nights Skardu",
      ],
      premiumPackage: [
        "Daily 3 Meals",
        "Toyota Coaster New Shape & Prado (2007)",
        "Yes",
        "Ambiance Resort (Premier Rooms)",
        "Ambiance Resort (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "GreenPak Resort (Deluxe Rooms)",
      ],
      premium: {
        meals: "3 Meals/Daily",
        transportation: "Toyota Coaster & 4x4 Jeeps",
        groupSizeMin: "8",
        groupSizeMax: "12 pax",
      }
    },

    notIncluded: [
        "Round Trip international flight to Islamabad",
        "Visa application and fees",
        "Cancellation / Travel Insurance and Emergency Medical Insurance",
        "Photographic insurance",
        "Alcoholic beverage and soft drinks",
        "Personal expenses",
    ],

    cost: {
      size: [
        "Double Occupancy",
      ],
      deluxePackage: [
        "$2,400",
      ],
    },
  },

  // =========================================================
  //  Chitral & Swat
  // =========================================================

  // Exploring Swat Valley
  {
    id: "swat-valley-pk-09",
    title: "Exploring Swat Valley, Kalam & Islamabad",
    category: [CATEGORIES.main, CATEGORIES.swat, CATEGORIES.chitral],
    service_img: swat_banner,
    link: "package-tour/swat-valley-pk-09",
    provincesCovered: "KPK & Federal",
    price: "$700",
    days: "8",
    description:
      "Pakistan is a country full of diversity in every means whether that’s the landscape, food, culture or our traditions. Swat is known as the Switzerland of Pakistan. The river Swat is a clear water river, starting from the Ushu range of mountains to the valley of Swat. It is one of the greenest valleys of Northern Pakistan and is well connected to the rest of the country. The valley of Swat is in the foothills of the Hindu Kush mountain range. The main town of the valley is Mingora and Saidu Sharif.",
    overview: {
      title: "Swat Valley ",
      location: " Islamabad, Fizagat, Kalam & Taxila",
      // people: "4",
      // weather: "40",
      bestTime: "All year round",
      // recommendation: "Highly recommended",
      desc: "Pakistan is a country full of diversity in every means whether that’s the landscape, food, culture or our traditions. Swat is known as the Switzerland of Pakistan. The river Swat is a clear water river, starting from the Ushu range of mountains to the valley of Swat. It is one of the greenest valleys of Northern Pakistan and is well connected to the rest of the country. The valley of Swat is in the foothills of the Hindu Kush mountain range. The main town of the valley is Mingora and Saidu Sharif.",
      overviewImg: "/assets/IMAGES/tour-packages/swat-valley-pk-09/overview.jpg"
    },
    experiences: {
      experience_points: [
        // { pic: swat_place_1, title: "Serenity of Mohdand & Saifullah Lake" },
        // {
        //   pic: swat_place_1,
        //   title: "Some of the most delicious food the country has to offer ",
        // },
        { pic: "/assets/IMAGES/tour-packages/swat-valley-pk-09/h-dawn.jpeg", title: "Dawn and dusks in the Hindukush range" },
        { pic: "/assets/IMAGES/tour-packages/swat-valley-pk-09/h-malam.jpeg", title: "Malam Jabba Ski Resort" },
        // { pic: swat_place_1, title: "Snow covered mountains" },
        { pic: "/assets/IMAGES/tour-packages/swat-valley-pk-09/h-kalam.jpeg", title: "Serenity of Kalam & Ushu " },
        { pic: swat_place_1, title: "Jeep Safari " },
        // { pic: swat_place_1, title: "Culture of different provinces" },
        {
          pic: "/assets/IMAGES/tour-packages/swat-valley-pk-09/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
      ],
    },
    iternaries_img: swat_place_1.src,
    iternaries: [
      {
        id: 0,
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. There will be time to settle in and relax after your international flight. You may wish to take a quick half day city tour.  Dinner will be served at the renowned Monal Restaurant with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the hill of the Potohar, nestled against the pristine Margalla Hills, Monal Restaurant is voted as one of the most romantic restaurants in Islamabad. Your dinner experience tonight at Monal will be a great introduction to Pakistani cuisine. A brief introduction will also be given to prepare you for the upcoming tour. Activities: Quick tour of Islamabad",
        iternaries_img: "/assets/IMAGES/tour-packages/swat-valley-pk-09/Day 1.png",
        title: "Arrival at Islamabad",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Quick tour of Islamabad",
      },
      {
        id: 1,
        description:
          " Early morning departure from Islamabad to Fizaghat, it’s a four hour journey passing through Mardan, Takht-e-Bahi and Batkhaila. We will have short stopovers in between for snacks and photo-ops. We will reach Saidu Sharif, transfer to a hotel, after which lunch will be served. Half-day city tour covering the White Palace and Stupas. Return to the hotel. Dinner will be served. Overnight stay. Activities: Long drive, Photo-ops",
        iternaries_img: "/assets/IMAGES/tour-packages/swat-valley-pk-09/Day 2.jpg",
        title: "Islamabad to Fizaghat",
        deluxeHotel: "Hotel White Palace (Quality stay at a more economical rate)",
        premiumHotel: " Serena Swat (Offers enhanced comfort and facilities)",
        activities: "Long drive, Photo-ops",
      },
      {
        id: 2,
        description:
          "After breakfast, we will depart early in the morning for Kalam Valley. Our journey will be approx. three hours travelling along the Swat River. The main attraction in Upper Swat is Kalam. Enroute, we will make short stopovers at Bahrain and Madyan for trout farms, where lunch will be served. After lunch, we will continue our journey to Kalam. There will be free time for leisure. Dinner will be served. Overnight stay. Activities: Madyan trout farm, Photo-ops  ",
        iternaries_img: "/assets/IMAGES/tour-packages/swat-valley-pk-09/Day 3.jpg",
        title: "Fizaghat to Kalam",
        deluxeHotel: " Hotel Greens (Quality stay at a more economical rate)",
        premiumHotel: "Walnut Heights (Offers enhanced comfort and facilities)",
        activities: "Madyan trout farm, Photo-ops",
      },
      {
        id: 3,
        description:
          "Early morning breakfast will be served. Today we will explore the beauty of Kalam in a jeep safari. We will start our journey with Ushu forest, do some sightseeing and stop for photo-ops. Next we will head towards Mohdand lake where we will do some boating and water sports. In between we will stop at Mitaltian waterfall. After spending the afternoon at Mohdand, we will head to Saifullah lake. Then we will return to Kalam, where a BBQ dinner will be served with a bonfire. Overnight stay. Activities: Ushu forest walk, Mitaltian waterfall, boating in Mahodand lake and Saifullah lake.",
        iternaries_img: "/assets/IMAGES/tour-packages/swat-valley-pk-09/Day 4.jpg",
        title:
          "Mahodand lake, Ushu Forest, Mitaltian Waterfall & Saifullah lake ",
        deluxeHotel: "Hotel Greens (Quality stay at a more economical rate)",
        premiumHotel: "Walnut Heights (Offers enhanced comfort and facilities)",
        activities: "Ushu forest walk, Mitaltian waterfall, boating in Mahodand lake and Saifullah lake",
      },
      {
        id: 4,
        description:
          "Early morning breakfast will be served, after which we will depart for Malam Jabba. Located near Fizaghat, it’s a four hour journey with short stopovers in between. Lunch will be served on the way. After our day in Malam Jabba, we will transfer to the hotel. Rest and leisure for the rest of the day. Dinner will be served in the hotel.  Activities: Drive to Malam Jabba & Ski Resort  ",
        iternaries_img: "/assets/IMAGES/tour-packages/swat-valley-pk-09/Day 5.jpg",
        title: "Kalam to Malam Jabba",

        deluxeHotel: "Mountain view Resort (Quality stay at a more economical rate)",
        premiumHotel: "PC Malam Jabba (Offers enhanced comfort and facilities)",
        activities: "Drive to Malam Jabba & Ski Resort",
      },
      {
        id: 5,
        description:
          "After breakfast, we will explore the beautiful Malam Jabba, we will take the chair lift all the way to the top of the mountain. Zip lining can be done as well. Lunch will be served, after which there will be  free time to relax and embrace nature. Dinner will be served in the hotel. Overnight stay. Activities: Malam Jabba, ski resort, chair lift & zip lining.",
        iternaries_img: "/assets/IMAGES/tour-packages/swat-valley-pk-09/Day 6.jpg",
        title: "Malam Jabba & Ski Resort ",
        deluxeHotel: "Mountain view Resort (Quality stay at a more economical rate)",
        premiumHotel: "PC Malam Jabba (Offers enhanced comfort and facilities)",
        activities: "Malam Jabba, ski resort, chair lift & zip lining.",
      },
      {
        id: 6,
        description:
          "Early morning breakfast will be served after which we will depart for Islamabad. We will travel 235 km back to the capital city through the motorway. Lunch will be served on the way. Upon arrival and after checking into the hotel, the remainder of the day will be at leisure to allow you one last opportunity to experience the city on your own or do some last-minute shopping in Islamabad. Tonight, a farewell dinner will be served at Nadia, Marriott.Activities: Short stopovers, long road journey, farewell Dinner",
        iternaries_img: "/assets/IMAGES/tour-packages/swat-valley-pk-09/Day 7.jpg",
        title: "Malam Jabba to Islamabad",
        deluxeHotel: "",
        premiumHotel: "Best Western Hotel (Offers enhanced comfort and facilities)",
        activities: "Short stopovers, long road journey, farewell Dinner",
      },
      {
        id: 7,
        description:
          "Breakfast will be served at the hotel. Free time for leisure and shopping in local handicraft shops, malls and marketplaces. Lunch will be served in yet another fine dining restaurant in Islamabad before you are transferred to the airport for your returning flight home.Activities: Departure to your country ",
        iternaries_img: "/assets/IMAGES/tour-packages/swat-valley-pk-09/Day 8.jpg",
        title: "Day of Departure ",
        deluxeHotel: "",
        premiumHotel: "",
        activities: "Departure to your country",
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Meals",
        "2 Nights Islamabad",
        "1 Night Fizagat Swat",
        "2 Nights Kalam",
        "2 Nights Malam Jabba",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts and other activity",
      ],
      deluxePackage: [
        "Toyota Grand Cabin & Jeeps",
        "3 Meals/Daily",
        "Roomy Signature",
        "White Palace Hotel",
        "Hotel Greens by Roomy",
        "Mountain view Resort",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Grand Cabin & Jeeps",
        "3 meals/Daily",
        "Serena or Marriott",
        "Serena Swat",
        "Walnut Heights by Roomy",
        "PC Malam Jabba",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,100", "$1,000", "$900", "$800", "$700"],
      premiumPackage: ["$1,350", "$1,250", "$1,150", "$1,050", "$950"],
    },
    accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },
  // Wonders of Hindukush
  {
    id: "wonders-of-hindukush",
    title: "Traversing the Wonders of the Hindukush",
    service_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/banner.jpg",
    category: [CATEGORIES.home, CATEGORIES.chitral, CATEGORIES.swat],
    link: "package-tour/wonders-of-hindukush",
    provincesCovered: "KPK, Federal & Punjab",
    price: "$1,100",
    days: "10",
    description:
      "Pakistan is a country full of diversity in every means whether that’s the landscape, food, culture or our traditions. Lying in the mountains of the Hindu Kush, Chitral is famous for its rich culture, traditions and beautiful valleys. The town of Chitral is the main town in the district and serves as its capital. It is situated on the west bank of the Chitral River (also known as the Kunar River) at the foot of Tirich Mir which at 7,708 m (25,289 ft) is the highest peak of the Hindu Kush.",
    overview: {
      location: "Islamabad, Chitral & Lahore",
      // people: "4",
      // weather: "40",
      bestTime: "March → November",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/wonders-of-hindukush/overview.jpg"
    },
    experiences: {
      experience_points: [
        { pic: "/assets/IMAGES/tour-packages/wonders-of-hindukush/h-islamabad.jpg", title: "Serenity of the capital city Islamabad" },
        {
          pic: "/assets/IMAGES/tour-packages/wonders-of-hindukush/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
        { pic: "/assets/IMAGES/tour-packages/wonders-of-hindukush/h-dawn.jpeg", title: "Dawn and dusks in Hindukush range" },
        {
          pic: "/assets/IMAGES/tour-packages/wonders-of-hindukush/h-culture.jpeg",
          title: "Culture, religion & traditions of Kalash",
        },
        { pic: "/assets/IMAGES/tour-packages/wonders-of-hindukush/h-festivity.jpg", title: "Festivity of Kalash valley" },
        { pic: "/assets/IMAGES/tour-packages/wonders-of-hindukush/h-hospitality.jpeg", title: "Hospitality of Chitral " },
        { pic: "/assets/IMAGES/tour-packages/wonders-of-hindukush/h-land.jpeg", title: "Vast lands of Shandur and Mastuj  " },
        { pic: swat_place_1, title: "Jeep Safari " },
        { pic: "/assets/IMAGES/tour-packages/wonders-of-hindukush/h-province.jpg", title: "Culture of different provinces" },
      ],
    },
    iternaries_img: chitral_iternary.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 1.png",
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. There will be time to settle in and relax after your international flight. You may wish to take a quick half-day city tour.  Dinner will be served at the renowned Monal Restaurant with a stunning panoramic view of Islamabad and Rawalpindi.",
        title: "Arrival at Islamabad",
        premiumHotel: "Ramada (Offers enhanced comfort and facilities)",
        // deluxeHotel: "Villa Ayun", //If deluxe is availab (Quality stay at a more economical rate)le
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 2.jpeg",
        description:
          "Early morning departure from Islamabad to Chitral by road. It will be an approx. 9 hours drive crossing Swat Motorway to Dir, and then Lowari tunnel will lead us to the Chitral district. We will continue to drive till Ayun which will be our base for the next two days. Upon arrival we will check into the hotel. Enjoy the panoramic view of the entire town from their observation deck. Overnight stay.",
        title: "Islamabad to Ayun",
        premiumHotel: "Villa Ayun (Offers enhanced comfort and facilities)",
        activities: "Long drive from Islamabad to Ayun",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 3.jpeg",
        description:
          "Early morning breakfast will be served. Departure to Kalash valley, where first we will visit the most famous village Bumburet. There are many festivals in Kalash that you can enjoy such as Chillum Joshi. Lunch will be served at a local restaurant. Tour and sightseeing—there are small streets and narrow roads which have many heritage sites. After the tour of Bumburet, we will return to Ayun valley and transfer to a hotel. Dinner will be served with a bonfire. Overnight stay.",
        title: "Kalash valley, Bumburet",
        premiumHotel: "Villa Ayun (Offers enhanced comfort and facilities)",
        activities: "Bamburet tour, Chillum Joshi Festival, Ayun Valley ",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 4.jpeg",
        description:
          "Early morning breakfast will be served. We will be heading to Upper Chitral for the next two nights to explore the rugged beauty of the Hindu Kush region. Our road journey will be mostly off-roading for three hours to Mastuj valley. On our way, we will take a tour of Booni and Qaqlasht meadows. Qaqlasht meadows, nestled in the Hindu Kush mountain range, offer a picturesque and serene escape for nature enthusiasts and outdoor enthusiasts. These verdant pastures, boasting panoramic views of snow-capped peaks and lush greenery, are a must-visit destination for those seeking an unspoiled wilderness experience in Upper Chitral. Then we will head to Mastuj where we will be staying in Mastuj Fort Residences—beautiful chalets surrounded with centuries old Chinar trees. Dinner will be served. Overnight stay.Activities: Off-roading to Mastuj & Qaqlasht Meadows tour",
        title: " Booni & Qaqlasht meadows",
        premiumHotel: "Mastuj Heights (Offers enhanced comfort and facilities)",
        activities: "Off-roading to Mastuj & Qaqlasht Meadows tour",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 5.jpg",
        description:
          "Early morning breakfast will be served. Day tour of Shandur Pass which is an off-road drive to the highest Polo ground in the world. It's a drive of about 1.5 hours. Shandur National Park, located in the Ghizer district of Gilgit-Baltistan, offers a breathtaking landscape of alpine meadows, glaciers, and diverse wildlife. The park is best known for hosting the annual Shandur Polo Festival. Enjoy your afternoon at the Polo and return back to Mastuj. Explore the surroundings of Mastuj. Dinner will be served at the resort. Overnight stay.Activities:  Shandur polo ground, Mastuj fort, Tout farms & jeep safari",
        title: "Mastuj valley and Shandur polo ground",
        premiumHotel: "Mastuj Heights (Offers enhanced comfort and facilities)",
        activities:
          "Shandur polo ground, Mastuj fort, Tout farms & jeep safari",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 6.jpeg",
        description:
          "Early morning breakfast will be served. Departure to Chitral city, which is going to be a three hour journey. Today we will explore Chitral Town. We will visit Chitral Fort, the capital of the ancient kingdom of Chitral—the region was ruled from this fort. Later, we will visit the Shahi Mosque of Chitral which is on the premises of the fort. We will then travel to Birmoglasht which is on the mountain top. It offers a bird eye view of the valley. If we’re lucky, we might even have a sighting of Markhor that are indigenous to this region. We will have lunch at Birmoglasht on this day. If there is an ongoing polo match in Chitral Town, we will visit the polo ground and experience the thrilling event. Later we will explore Chitral Bazar. Dinner will be served in the hotel. Activities: Chitral city tour, Birmoglasht, Shahi Mosque & Chitral fort",
        title: "Chitral ",
        premiumHotel: "Hindukush Heights (Offers enhanced comfort and facilities)",
        activities:
          "Chitral city tour, Birmoglasht, Shahi Mosque & Chitral fort",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 7.jpg",
        description:
          "Early morning breakfast will be served. We’ll take a short trip to Gol National Park, do a sightseeing and walking tour of the park. Then we will head to Garam Chashma, another valley in Chitral known for its sulphur springs and trout fish—lunch will be served there. Upon return to Chitral spend your evening in a hotel with a mesmerizing view of Tirch Mir, the highest peak of Hindu Kush range overshadowing the valley of Chitral. Dinner will be served in the hotel with local music. Overnight stay.Activities: Gol national park walking tour, Garam Chashma, Sulphur springs & Trout fish.",
        title: "Gol National park & Garam Chashma",
        premiumHotel: "Hindukush Heights (Offers enhanced comfort and facilities)",
        activities:
          "Gol national park walking tour, Garam Chashma, Sulphur springs & Trout fish",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 8.jpeg",
        description:
          "Morning breakfast will be served at the resort. Departure to Malam Jabba which will be a 9 hours drive. In between we will stop for lunch. We will visit the ski slope and chair lift point. Enjoy the luxury of PC Malam Jabba. Overnight stay. Activities: drive to Malam Jabba, Leisure and relax for the day. ",
        title: "Chitral to Malam Jabba",
        premiumHotel: "Pearl Continental (Offers enhanced comfort and facilities)",
        activities: "drive to Malam Jabba, Leisure and relax for the day.",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 9.jpg",
        description:
          "As our tour is coming to an end, we are taking a slower pace to allow you more time for leisure. After breakfast, we will depart for Islamabad, which will be a five hour drive. Upon arrival and after checking into the hotel, we’ll go for a half-day tour of Islamabad, visit Faisal Masjid and the Pakistan Monument. The remainder of the day will be at leisure to allow you one last opportunity to experience the city on your own or do some last-minute shopping in Islamabad. Tonight, a farewell dinner will be at Monal restaurant, overlooking Islamabad city. Overnight stay in islamabad.Activities: Flight safari, Saidpur Village, Lok Virsa Museum",
        title: "Islamabad",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Flight safari, Saidpur Village, Lok Virsa Museum",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/wonders-of-hindukush/Day 10 .jpg",
        description:
          "Breakfast will be served at the hotel. Free time for leisure and shopping in local handicraft shops, malls and marketplaces. Lunch will be served in yet another fine dining restaurant in Islamabad before you are transferred to the airport for your return flight home. Activities: Departure to your country",
        title: "Day of Departure",
        activities: "Departure to your country",
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Meals",
        "2 Nights Islamabad ",
        "2 Nights Ayun",
        "2 Nights Central Chitral",
        "2 Nights Upper Chitral",
        "1 Night Malam Jabba",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      // deluxePackage: [],
      premiumPackage: [
        "Toyota Coaster & Jeeps",
        "3 meals/Daily",
        "Marriott Hotel",
        "Vila Ayun",
        "Hindukush Heights",
        "Mastuj Heights",
        "Pc Malam jabba",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      // Note: if premium exist
      premium: {
        transportation: "Toyota Coaster & Jeeps",
        meals: "3 meals/Daily",
        groupSizeMin: "4",
        groupSizeMax: "18",
      },
      // Note: if deluxe exist
      // deluxe: {
      //   transportation: "Toyota Coaster & Jeeps",
      //   meals: "3 meals/Daily"
      // }
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Alcoholic beverage and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      // deluxePackage: [],
      premiumPackage: ["$1,500", "$1,400", "$1,300", "$1,200", "$1,100"],
    },
    accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },

  // =========================================================
  //  Hunza
  // =========================================================

  // An Escape to Hunza PK23-01
  {
    id: "an-escape-to-hunza-pk23-01",
    title: "An Escape to Hunza",
    service_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/banner.jpg",
    category: [CATEGORIES.home, CATEGORIES.hunza, CATEGORIES.naran],
    link: "package-tour/an-escape-to-hunza-pk23-01",
    provincesCovered: "KPK & GB",
    price: "$1,100",
    days: "12",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture, or traditions. Islamabad is the capital of Pakistan where our journey starts. Experience the breathtaking beauty of Hunza Valley with our exciting 12-day itinerary. Explore the rich culture and history of the region as you visit ancient forts, royal baths, and unique mosques. Enjoy thrilling off-road drives to hidden gems and taste organic ice from the thousands of years old glacier. Witness the border ceremony between India and Pakistan at Wagah Border and take an hour-long air safari over the majestic Karakoram and Kaghan region.",
    overview: {
      location: "Hunza & Naran",
      // people: "4",
      // weather: "40",
      bestTime: "May → October",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/overview.jpg"
    },
    experiences: {
      experience_points: [
        { pic: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-luxary.jpg", title: "Luxury accommodations" },
        {
          pic: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-dawn.jpg",
          title: "Dawn and dusks in the Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-heritage.jpg", title: "Heritage of Hunza" },
        {
          pic: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-dance.jpeg",
          title: "Bonfire BBQ with traditional music and dance",
        },
        {
          pic: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-moon.jpg",
          title:
            "Brightening moon at Karimabad and all the way to the Attabad lake ",
        },
        { pic: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-attabad.jpg", title: "Serenity of Attabad and Borith Lake" },
        { pic: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-culture.jpg", title: "Culture diversity of Hunza" },
        {
          pic: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 1.jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North's representatives and transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Today is a rest day to settle in and relax after your international flight. You may wish to head out and enjoy a cup of local chai and sweets. A welcome dinner will be served at a fine dining restaurant handpicked by Facing North where you will meet your Resident Director. A brief introduction will also be given to help you prepare for the upcoming tours.",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Best Western Hotel (Offers enhanced comfort and facilities)",
        activities: "Quick Tour of Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 2.jpg",
        title: "Islamabad to Naran",
        description:
          "Early morning breakfast at the hotel. Depart early morning for Naran. Today we will drive for approx. 8 hours through the Hazara Motorway and Balakot-Naran road. Your journey will consist of small stopovers at different tourist points like Kiwai waterfall where lunch can be taken. Continue journey to Naran. Transfer to the hotel, check in and settle down. Your hotel will be located at a higher level than main Naran, where white water streams will be passing by. Head out to the Bazaar. Visit Naran Bazaar, have a short walk, enjoy the roadside snacks, and hot beverages. Return to the hotel. Overnight stay.",
        deluxeHotel: "Northern Retreat (Quality stay at a more economical rate)",
        premiumHotel: "The Sarai Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 3.jpg",
        title: "Naran & Lake Saif ul Malook",
        description:
          "Morning breakfast will be served, leisure and sightseeing in Naran. The resort is located at the top of a mountain which gives you a panoramic view of the valley and surrounding peaks. Excursion to Lake Saif-ul-Malook which is only accessible through 4x4 jeeps. It is going to be a journey of 1 hour which will take us to a scenic lake. Sightseeing and relaxation boating can be done. Return to Naran. Visit Kunhar river for white water rafting. Return to resort, rest and leisure for the evening. Overnight stay.",
          deluxeHotel: "Northern Retreat (Quality stay at a more economical rate)",
          premiumHotel: "The Sarai (Offers enhanced comfort and facilities)",
          activities: "Relaxation, and day trip to Saif ul Malook & White water rafting"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 4.jpg",
        title: "Naran to Hunza",
        description:
          "After breakfast, depart early in the morning for Hunza. We will cross the Lulusar National park, stop over at Lulusar lake and Babusar top, which is at an elevation of 4,173m. After crossing Babusar top we will enter Diamir valley which will connect us to the Silk Road. Stop over at Nanga Parbat viewpoint—a unique point where three mountain ranges collide. Our next stopover will be at Rakaposhi viewpoint which is the highest peak of Hunza district with an elevation of 7,778m. From there we will continue our journey to Hunza. Transfer to hotel, settle down. Your resort will have an outstanding view of Diran Peak, Rakaposhi Peak and Ultar Sar. Overnight stay.",
          deluxeHotel: "Darbar Hotel (Quality stay at a more economical rate)",
          premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
          activities: "Lulusar lake, Babusar top, 3 mountain ranges colliding point, Rakaposhi viewpoint and many photo stops."
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 5 .jpg",
        title: "Karimabad, Baltit and Altit Fort",
        description:
          "Today, we will explore the culture and traditions of Hunza valley. It has much to offer! We will start with a short heritage walk from Karimabad bazaar to Baltit fort. We will take a tour of Baltit Fort to know about the history, culture, and traditions of Hunza Valley. We'll walk all the way back to Karimabad bazaar. Chill at the local cafes with a view of Rakaposhi and other peaks which surround you, perhaps head out for shopping in the local markets. Excursion to Altit Fort, another stunning piece of architecture and history. There is a small hidden café in Altit called Khabasi Café which is operated by females only, an amazing initiative taken by Prince Aga Khan to uplift women empowerment. Today we will be preparing local Hunzai cuisine for lunch in an old local house to give an experience of the Karakoram. Sunset at Eagles Nest (Duiker point) observes sunset on 5 peaks above 7,000 meters. Return to hotel, leisure for the evening. Overnight stay.",
          deluxeHotel: "Darbar Hotel (Quality stay at a more economical rate)",
          premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
          activities: "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café."
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/day 6 .jpg",
        title: "Minapin & Bikchum Ghutum",
        description:
          "Early morning breakfast. Day trip to Minapin which is one of the oldest villages of Nagar valley. Garden walk at Minapin. Fresh fruit picking from the orchards. Tea will be served next to the water stream. We will depart to Bikchum Ghutum, which means enclosed ground, through 4x4 jeeps. It's a 45 minute bumpy ride which takes us to a hidden pearl, a ground situated right on the footsteps of the mighty Rakaposhi, known as the mother of mist. Picnic lunch can be arranged upon request. Short trek to the upper pastures near the Rakaposhi peak. Enjoy the mighty view of Rakaposhi. Return to Minapin. Drive back to Karimabad. Visit Karimabad bazaar to enjoy the nightlife. Overnight stay.",
          deluxeHotel: "Darbar Hotel (Quality stay at a more economical rate)",
          premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
          activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and trek to upper pastures near Rakaposhi"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 7 .jpg",
        title:
          "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith lake",
        description:
          "Morning breakfast will be served, departure to Attabad lake. Continue to drive to the famous Hussaini suspension bridge. You will have to walk downhill for 15 minutes to reach the bridge. Photography and sightseeing. Head towards Borith lake, have freshly cooked snacks by the lake and enjoy the view. Short 20 minutes drive to Zero Point from where we will start our Passu glacier hike. It is a 40 minute hike which has a beautiful panoramic view of Passu Cones and Passu Glacier. Return to Attabad Lake, check into the hotel. Enjoy the beautiful views of the lake resort. Head to the boating area for jet skiing and boating. Return to the Resort. Leisure and dinner by the lake. Overnight stay.",
          deluxeHotel: "Famree Resort (Quality stay at a more economical rate)",
          premiumHotel: "Luxus Atabad (Offers enhanced comfort and facilities)",
          activities: "Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake."
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 8.jpg",
        title: "Passu, Sost & Khunjerab Pass",
        description:
          "Our day will start with a majestic view of Attabad Lake in the background. Breakfast will be served with the lake view, after which we will head to Sost with stopovers at different villages for photography. We will visit Sost Dry Port. Excursion to Khunjerab pass which is situated at an elevation of 4,693m. Then we will head back to Passu, visit Yak Grill for lunch where you can try local Yak meat dishes. Head to Glacier Breeze café for scrumptious organic Apricot cake and tea with the sunset on Passu cones. Return to the hotel and rest for a while. Visit Moksha Resort for a BBQ Dinner with local traditional music and a bonfire. Return to the hotel. Overnight stay.",
          deluxeHotel: "Famree Resort (Quality stay at a more economical rate)",
          premiumHotel: "Luxus Atabad (Offers enhanced comfort and facilities)",
          activities: "Khunjerab pass, Bonfire & musical night."
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/h-attabad.jpg",
        title: "Attabad to Gilgit (Naltar valley)",
        description:
          "Early morning breakfast will be served after which we will drive towards Gilgit. Day trip to Naltar valley. From Nomal town, we take an off road to Naltar, which will be a 1.5 hour jeep ride to lush green high altitude pastures on mountain tops. Short trek to Satrangi lake. Sit by the beautiful alpine lake. We’ll also visit the snow leopard held captive in Naltar. Return to Nomal and drive to Gilgit. Transfer to Hotel. Leisure for the evening. Overnight stay.",
          deluxeHotel: "Mandarin Inn (Quality stay at a more economical rate)",
          premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
          activities: "Jeep Ride, Naltar view points, snow leopard observation, satrangi lake"
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 10.jpg",
        title: "Gilgit  to Naran",
        description:
          "Early morning breakfast will be served. Today will be a long drive back to Naran crossing Babusar top. It will be an 8 hour drive with scenic views and you'll experience the change of mountain terrain from the Karakoram to the Himalayas. Lunch stop at Moon Restaurant Besar—a beautiful sight to have lunch, relax and freshen up. Continue the journey towards Naran. Transfer to the hotel and leisure for the rest of the day. Overnight stay.",
          deluxeHotel: "Northern Retreat (Quality stay at a more economical rate)",
          premiumHotel: "The Sarai (Offers enhanced comfort and facilities)",
          activities: "Long Drive, Photo stops"
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 11.jpg",
        title: "Naran to Islamabad",
        description:
          "Early morning breakfast will be served. Departure to Islamabad via Mansehra-Balakot road. It will be a 7 hour drive. Lunch stop on the motorway. Continue journey to Islamabad. Transfer to the hotel, rest for a while, perhaps freshen up and head out for a farewell dinner at a nice restaurant in Islamabad. Overnight stay.",
          deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
          premiumHotel: "Best Western Hotel (Offers enhanced comfort and facilities)",
          activities: "Long Drive, Photo stops, farewell Dinner"
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 12.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served in the morning. Quick last minute shopping in Islamabad. Transfer to the airport with lots of memories to cherish forever.",
          activities: "Airport transfer, end of tour"
      },
    ],
    includes: {
      services: [
        "Meals",
        "2 Nights Islamabad",
        "3 Nights Naran",
        "3 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "1 Night Gilgit",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or any other activity",
      ],
      deluxePackage: [
        "3 Meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Northern Retreat",
        "Roomy Dastaan",
        "Famree Hotel",
        "The Mandarin inn",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Yes",
        "No",
      ],
      premiumPackage: [
        "3 meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "The Sarai",
        "Offto Resort",
        "Luxus Atabad Resort",
        "Gilgit Serena",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["6 Pax", "8 Pax", "12 Pax", "16 Pax", "20 Pax"],
      deluxePackage: ["$1,400", "$1,500", "$1,300", "$1,200", "$1,100"],
      premiumPackage: ["$1,700", "$1,600", "$1,500", "$1,400", "$1,300"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },

  // Journey to the Silk Route (By Air) PK23-02
  {
    id: "air-journey-to-silk-route-pk23-02",
    title: "Journey to the Silk Route",
    service_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/banner.jpg",
    category: [CATEGORIES.home, CATEGORIES.hunza, CATEGORIES.naran],
    link: "package-tour/air-journey-to-silk-route-pk23-02",
    provincesCovered: " KPK & GB",
    price: "$1,100",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether that’s the landscape, food, culture, or our traditions. Islamabad is the capital of Pakistan where our journey starts. Islamabad is surrounded by the beautiful Margalla Hills which are the beginning of our mountain ranges. In the North-East of Pakistan, at an altitude of 8200 ft,. lies Hunza District in Gilgit-Baltistan. An epitome of beauty, its lakes, rivers and waterfalls, serenity of valleys and wilderness of the mountains make it the center of trekking, trailing, and climbing journeys. Kaghan Valley is situated far north of KPK province, which connects to Gilgit-Baltistan through Babusar Top. It is different from snow-covered mountains which are 4000 meters higher than the ocean level. It contains about 370 large and small villages. ",
    overview: {
      location: "Islamabad, Naran & Hunza",
      // people: "4",
      // weather: "40",
      bestTime: "May → June",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/overview.jpg"
    },
    experiences: {
      experience_points: [
        { pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-luxary.jpg", title: "Luxury accommodations" },
        {
          pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-dawn.jpg",
          title: "Dawn and dusks in the Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-heritage.jpg", title: "Heritage of Hunza" },
        {
          pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-dance.jpg",
          title: "Bonfire BBQ with traditional music and dance",
        },
        {
          pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-moon.jpg",
          title:
            "Brightening moon at Karimabad and all the way to the Attabad lake ",
        },
        { pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-borith.jpg", title: "Serenity of Attabad and Borith Lake" },
        { pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-culture.jpg", title: "Culture diversity of Hunza" },
        {
          pic: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-food.jpg",
          title:
            "Some of the most delicious food the country has to offer from the northern region",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/Day 1 .jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North's representatives and transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Today is a rest day to settle in and relax after your international flight. You may wish to head out and enjoy a cup of local chai and sweets. A welcome dinner will be served at a fine dining restaurant handpicked by Facing North where you will meet your Resident Director. A brief introduction will also be given to prepare you for the upcoming tours.",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Quick tour of Islamabad"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/Day 2.jpg",
        title: "Islamabad to Gilgit",
        description:
          "Early morning breakfast. Transfer to Islamabad airport for the flight to Gilgit, which is approx. 1 hour. Try to get the seat on the right side of the plane. The flight will cross some of the high-altitude peaks like Nanga Parbat and beautiful mountain ranges. Arrival at Gilgit surrounded by high altitude peaks. Meet and greet with your Guide/Driver. Visit Kargah Buddha also known as Buddha De Yasheni. Kargah Buddha is an archaeological site located about 6 miles outside of Gilgit. It is a carved image of a large standing Buddha, some 50 ft high, in the cliff-face in Kargah Nala. We will take the road to Hunza Valley from there. Our first stop will be the Rakaposhi viewpoint. Sightseeing and Photography. Excursion to central Hunza and then transfer to the hotel. Freshen up and hit the heritage market of Karimabad for some good local meals and nightlife. Overnight stay.",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Kargah Buddha, Sightseeing at Rakaposhi, Old Silk route view point"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/Day 3.jpg",
        title: "Karimabad, Baltit and Altit Fort",
        description:
          "Today we will explore the culture and traditions of Hunza valley which has much to offer. We will start with a short heritage walk from Karimabad bazaar to Baltit fort. We will take a tour of Baltit Fort to know about the history, culture, and traditions of Hunza Valley. Then, we’ll walk all the way back to Karimabad bazaar. Chill at the local cafes with a view of Rakaposhi and other peaks which surround you, perhaps head out for shopping in the local markets. Then, we will move to Altit Fort, another stunning piece of architecture and history. There is a small hidden café in Altit called Khabasi Café which is operated by females only, an amazing initiative taken by Prince Aga Khan to uplift women empowerment. Today we will be preparing local Hunzai cuisine for lunch in an old local house to give an experience of the Karakoram. Sunset at Eagles Nest (Duiker point) observes sunset on 5 peaks above 7,000 meters. Return to hotel, leisure for the evening. Overnight stay.",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, Khabasi Café"

      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/day 4.jpeg",
        title: "Minapin & Bikchum Ghutum",
        description:
          "Early morning breakfast. Day trip to Minapin which is one of the oldest villages of Nagar valley. Garden walk at Minapin, and fresh fruit picking from the orchards. Tea will be served next to the stream. We will depart to Bikchum Ghutum, which means enclosed ground, in 4x4 jeeps. It's a 45 minute bumpy ride which takes us to a hidden pearl, a ground situated right on the footsteps of the mighty Rakaposhi, known as the mother of mist. Picnic lunch can be arranged upon request. Short trek to the upper pastures near the Rakaposhi peak. Enjoy the mighty view of Rakaposhi. Return to Minapin. Drive back to Karimabad. Visit Karimabad bazaar to enjoy the nightlife. Overnight stay.",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Minapin garden walk, 4x4 ride, Bikchum Ghutum and trek to upper pastures near Rakaposhi"

      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/day 5.jpg",
        title:
          "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith lake",
        description:
          "Morning breakfast will be served, departure to Attabad lake crossing tunnels. Continue to drive to the famous Hussaini suspension bridge. Photography and sightseeing. Head towards Borith lake, have freshly cooked snacks by the lake and enjoy the view. Short 20 minutes drive to Zero Point from where we will start our Passu Glacier hike. It is a 40 minute hike which has a beautiful panoramic view of Passu cones and Passu glacier. Return to Attabad Lake, and check into the hotel. Enjoy the beautiful views of the lake resort. Head to the boating area for jet skiing and boating. Return to the Resort. Leisure and dinner by the lake. Overnight stay.",
        "deluxeHotel": "Famree Hotel",
        "premiumHotel": "Luxus Atabad",
        "activities": "Attabad Lake watersports, Hussaini bridge and Passu cones"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/Day 6 .jpeg",
        title: "Passu, Sost & Khunjerab Pass.",
        description:
          "Our day will start with a majestic view of Attabad Lake in the background, breakfast will be served with the lake view. Then, we will have an excursion to Sost with stopovers at different villages for photography where we will visit Sost Dry port. Next we’ll head to Khunjerab pass which is situated at an elevation of 4,693m. Return to Passu, visit Yak Grill for lunch where you can try local Yak meat dishes. Head to Glacier Breeze café for scrumptious organic Apricot cake and tea with the sunset on Passu cones. Return to the hotel. Rest for a while. Visit Moksha resort for BBQ Dinner with local traditional music and a bonfire. Return to resort, overnight stay.",
        "deluxeHotel": "Famree Hotel",
        "premiumHotel": "Luxus Atabad",
        "activities": "Scenic drive to Khunjerab pass, Passu cones, Batura glacier & BBQ dinner and traditional musical night"

      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/Day 7.jpg",
        title: "Attabad to Gilgit (Naltar valley)",
        description:
          "Early morning breakfast will be served, after which we will drive towards Gilgit. Day trip to Naltar valley. From Nomal town, we take an off-road to Naltar, which will be a 1.5 hour jeep ride to lush green high altitude pastures on mountain tops. Short trek to Satrangi lake. Sit by the beautiful alpine lake. Visit to the snow leopard held captive in Naltar. Return to Nomal and drive to Gilgit. Transfer to Hotel. Leisure for the evening. Overnight stay.",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Long drive, stop over at viewpoints"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/Day 8.jpg",
        title: "Gilgit to Naran",
        description:
          "Early Morning breakfast will be served. Day trip to Naltar valley. From Nomal town, we take an off-road to Naltar, which will be a 1.5 hour jeep ride to lush green high altitude pastures on mountain tops. Short trek to Satrangi lake. Sit by the beautiful alpine lake. Visit to the snow leopard held captive in Naltar. Return to Nomal and drive to Gilgit. Transfer to Hotel. Leisure for the evening. Overnight stay.",
        "deluxeHotel": "Northern Retreat",
        "premiumHotel": "The Sarai",
        "activities": "Long Drive, Photo stops"
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/Day 9.jpg",
        title: "Naran & Lake Saif ul Malook",
        description:
          "Morning breakfast will be served. Leisure and sightseeing in Naran. The resort is located at the top of a mountain which gives you a panoramic view of the valley and surrounding peaks. Excursion to Lake Saif-ul-Malook which is only accessible through 4x4 jeeps. It is going to be a journey of 1 hour which will take us to a scenic lake. Sightseeing and relaxation boating can be done. Return to Naran. Visit Kunhar river for white water rafting. Return to resort, rest and leisure for the evening. Overnight stay.",
        "deluxeHotel": "Northern Retreat",
        "premiumHotel": "The Sarai",
        "activities": "Relaxation, and day trip to Saif ul Malook & White water rafting"
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/h-islamabad.jpg",
        title: "Naran to Islamabad",
        description:
          "Early Morning breakfast will be served. Departure to Islamabad via Mansehra-Balakot road. It will be a 7 hour drive. Lunch stop on the motorway. Continue journey to Islamabad. Transfer to the hotel, rest for a while, perhaps freshen up and head out for a farewell dinner at a nice restaurant in Islamabad. Overnight stay.",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Long Drive, farewell Dinner"
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/air-journey-to-silk-route-pk23-02/Day 11.png",
        title: "Day of Departure",
        description:
          "Breakfast will be served. Quick last minute shopping in Islamabad. Transfer to the airport with lots of memories to cherish forever.",

        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "airport transfer, end of tour"
      },
    ],
    includes: {
      services: [
        "Transportation",
        "One-Way Flight ISB→ GLT",
        "Meals",
        "2 Nights Islamabad ",
        "2 Nights Naran",
        "3 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "1 Night Gilgit",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      deluxePackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomt Signature",
        "Hotel Demanchi or Similar",
        "Darbar Resort",
        "Famree Hotel",
        "The Mandarin inn",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Marriott Hotel",
        "The Sarai",
        "Ambiance Hotel",
        "Luxus Atabad Resort",
        "Ramada Gilgit",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,500", "$1,400", "$1,300", "$1,200", "$1,100"],
      premiumPackage: ["$1,800", "$1,700", "$1,600", "$1,500", "$1,400"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. The rest of the country will have moderate weather.",

    // mapImage: "",
  },
  // Hunza & Fairy Meadows
  {
    id: "hunza-fairy-meadows",
    title: "Hunza & Fairy Meadows",
    service_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/banner.jpg",
    category: [CATEGORIES.hunza, CATEGORIES.fairy],
    link: "package-tour/hunza-fairy-meadows",
    provincesCovered: "Punjab & GB ",
    price: "$1,500",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether that’s landscape, food, culture or our traditions. Islamabad is the capital of Pakistan where our journey starts. Islamabad is surrounded by the beautiful Margalla Hills which are the start of our mountain ranges. In the North-East of Pakistan, at an altitude of 8200 ft. lies Hunza District in Gilgit-Baltistan. An epitome of beauty, its lakes, rivers and waterfalls",
    overview: {
      location: "Hunza & Fairy Meadows",
      // people: "4",
      // weather: "40",
      bestTime: "June → October",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/h-islamabad.png",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/h-dawn.jpg",
          title: "Dawn and dusks in Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/h-attabad.jpg", title: "Serenity of Attabad and Borith Lake " },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/h-camp.jpg",
          title:
            "Trek to Fairy Meadows and Nanga Parbat base camp (World’s 9th highest mountain – Elevation 8126m)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/h-culture.jpg",
          title:
            "Cultural insight of Hunza Valley, the most popular destination of Pakistan ",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/h-glacier.jpeg",
          title:
            "Visit beautiful lakes, mightiest mountains, and some of the world’s largest glaciers",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/h-local.jpeg",
          title: "Meet the lovely locals and enjoy the local music.",
        },
      ],
    },
    iternaries_img: fairy_iternaries.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 1.jpg",
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half-day city tour. Dinner will be served at the renowned Monal Restaurant with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the hills of Potohar, nestled against the pristine Margalla Hills, Monal Restaurant is voted as one of the most romantic restaurants in Islamabad. Your dinner experience tonight at Monal will be a great introduction to Pakistani cuisine. A brief introduction will also be given to prepare you for the upcoming tour.",
        title: "Arrival at Islamabad",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 2.jpg",
        description:
          "After breakfast, we will depart early in the morning for Gilgit. You will be transferred to the airport in time for your flight, which will take approximately 45 minutes and will cross some of the high-altitude peaks and highest mountain ranges in the world. Arrival at Gilgit airport, departure to Hunza. The drive will take approximately 2.5 hours and on the way in, we will stop at various viewpoint locations for you to rest and take some really nice photographs. You will be able to see the remains of the Old Silk Road which was constructed by cutting stones manually back in the day. Another viewpoint stop will be Rakaposhi where we will have a buffet lunch and will spend time by the stream. We will do a short excursion to Karimabad then transfer to a hotel. The rest of the afternoon will be at leisure in Karimabad. Explore the main market and try out some local organic walnut cake from Café De Hunza. In the late afternoon, we will leave for Eagles Nest, a short 30 minute drive from the hotel. At Eagles Nest, you will witness a stunning sunset projecting over the Hunza Valley.",
        title: "Karimabad & Rakaposhi viewpoint",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Remains of Old silk route, Rakaposhi viewpoint, Café De Hunza & sunset at Duiker (Eagles Nest)"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 3.jpg",
        description:
          "After breakfast, we will explore the culture and traditions of Hunza valley. It has so much to offer. We will start a short heritage walk from Karimabad bazaar to Baltit fort. We will take a tour of Baltit Fort to learn about the history, culture, and traditions of Hunza Valley. After the visit to Baltit Fort, we will walk back to Karimabad bazaar to take another excursion to Altit Fort, a stunning piece of architecture and history. After the tour, we will stop at a small hidden café in Altit called Khabasi Café. Khabasi Café is operated by an all-female team as a result of an amazing initiative taken by Prince Aga Khan to uplift women empowerment. Evening walk in Altit royal gardens, return to Karimabad bazaar where you will have some free shopping time. Transfer to hotel, dinner will be served at the hotel with traditional dance and music.",
        title: "Baltit and Altit Fort",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café and traditional music and dances."

      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 4.jpg",
        description:
          "After breakfast, we will leave for Attabad lake, crossing some mind-blowing tunnels leading us to one of the largest lakes of Pakistan. At Attabad Lake, you have options to participate in different kinds of water sports or do some sightseeing in Gulmit village. After Attabad Lake, we will head to Borith lake where lunch will be served at a lake viewing restaurant. We will leave for a glacier hike which is approx. 2 hours of trekking with an amazing view of Passu cones and Passu peak. Relax at the most scenic and beautiful place in Upper Hunza valley. Return to Attabad lake, transfer to resort. Dinner will be arranged at the Moksha Resort with music.",
        title: "Attabad Lake, Gulmit & Borith Lake",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake."

      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 5 .jpg",
        description:
          "Our day will start with a majestic view of Attabad Lake and Passu Cones in the background, breakfast will be served with the lake view. Excursion to Sost with stopovers at different villages for photography. We will take a tour of the famous Hussaini suspension bridge. Lunch will be served in Sost. We will visit Sost Dry port. Excursion to Khunjerab pass which is situated at an elevation of 4,693m. Return to Attabad Lake, in between stop over at Glacier Breeze café for scrumptious organic Apricot cake and tea. Free time at Attabad. Dinner will be served. Overnight stay.",
        title: "Sost, Passu & Khunjerab Pass",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Sost dry port, Khunjerab pass, Bonfire & musical night."

      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 6 .jpg",
        description:
          "Today we will be heading to Gilgit via Minapin. Minapin is one of the oldest villages of Nagar valley. The drive to Minapin will be approximately one hour and upon arrival, we will have time to do a garden walk. You may wish to pick some fresh fruits from the orchards. Tea will be served next to the water stream during the break. After the tea break, we will change to 4x4 jeeps for an exciting off-road drive to Bikchum Ghutum. The ride to Bikchum Ghutum will take approximately 45 minutes and it will lead us to a hidden pearl, a ground situated right on the footsteps of the mighty Rakaposhi, known as the Mother of Mist. In Bikchum, you can take a short trek towards a glacier where you will have the opportunity to taste organic ice which is thousands of years old. Lunch is served at Bikchum Ghutum. After lunch, we will return to Minapin where we change our vehicle again to a coaster bus and continue our journey to Gilgit. At leisure for the rest of the day in Gilgit.",
        title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk."

      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 7.jpg",
        description:
          "Breakfast will be served at the hotel. Departure to Raikot bridge which is approx. 1 hour & 20 mins drive from Gilgit. We will take jeeps from Raikot to Fairy point. Fairy point is the point from where our trek will start to Fairy Meadows. 4 hours of trekking, crossing water streams and forests. Arrival at Fairy Meadows. Lunch will be served. From Fairy meadows, our view will be the widest face of one of the mightiest mountains in the world called Nanga Parbat. Rest for a while, dinner will be served with live music and bonfire.",
        title: "Raikot, Tattu Village & Fairy Meadows",
        "deluxeHotel": "",
        "premiumHotel": "Raikot Sarai",
        "activities": "Jeeps safari to Fairy point, trek to Fairy Meadows, local music & Bonfire"

      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 8 .jpg",
        description:
          "Breakfast will be served at the hotel, day trip to Bayal camp and Viewpoint. 2 hours of trekking crossing beautiful forests & countless water streams. Lunch will be at Bayal camp. Excursion to Viewpoint or base camp (optional), return to Fairy Meadows, afternoon walk of Fairy Meadows. Dinner will be served with bonfire.",
        title: "Fairy Meadows, Bayal camp & Nanga Parbat Viewpoint",
        "deluxeHotel": "",
        "premiumHotel": "Raikot Sarai",
        "activities": "Jeeps safari to Fairy point, trek to Fairy Meadows, local music & Bonfire"

      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 9.jpg",
        description:
          "A beautiful morning in Fairy Meadows with a mesmerizing view of Nanga Parbat from your resort. Breakfast will be served. Early morning departure to Naran. Our journey will consist of 2 hours of trek to Fairy Point and 1.5 hours of jeep ride to Raikot. Excursion to Babusar Top. Lunch will be at Moon Restaurant. Continue driving to Naran and transfer to the hotel. The remainder of the day will be at leisure or rest. Dinner will be served at a nearby restaurant. Rest till tomorrow.",
        title: "Fairy Meadows to Naran",
        "deluxeHotel": "Northern Retreat",
        "premiumHotel": "The Sarai",
        "activities": "Long Drive, Photo stops"

      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 10.jpg",
        description:
          "Early morning breakfast will be served. Departure to Islamabad via Mansehra-Balakot road which will be a 7 hour drive. Lunch stop on the motorway. Continue journey to Islamabad. Transfer to the hotel, rest for a while, perhaps freshen up and head out for a farewell dinner at a nice restaurant in Islamabad. Overnight stay.",
        title: "Naran to Islamabad",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Long Drive, Photo stops"
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-fairy-meadows/Day 11.jpg",
        description:
          "Breakfast will be served at the hotel. Free time for leisure and shopping in local handicraft shops, malls and marketplaces. Lunch will be served in a fine dining restaurant in Islamabad before you are transferred to the airport for your return flight home.",
        title: "Day of Departure",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Departure to your country"
      },
    ],
    includes: {
      services: [
        "Meals",
        "2 Nights Islamabad ",
        "2 Nights Fairy Meadows",
        "2 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "1 Night Gilgit",
        "1 Night Naran ",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      deluxePackage: [
        "3 Meals/Daily",
        "Roomy Signature",
        "Raikot Sarai",
        "Darbar Hotel",
        "Famree Hotel",
        "The Mandarin inn",
        "Northern Retreat",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "3 meals/Daily",
        "Marriott Hotel",
        "Raikot Sarai",
        "Ambiance Hotel",
        "Luxus Atabad Resort",
        "Ramada Gilgit",
        "The Sarai",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,500", "$1,400", "$1,300", "$1,200", "$1,100"],
      premiumPackage: ["$1,800", "$1,700", "$1,600", "$1,500", "$1,400"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan, the weather will be moderate in the rest of the country.",

    // mapImage: "",
  },
  // Hunza & Lahore Autumn
  {
    id: "hunza-lahore-autumn",
    title: "Hunza & Lahore Autumn",
    service_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/banner-2.jpg",
    bg_position: "bottom",
    category: [CATEGORIES.hunza, CATEGORIES.lahore],
    link: "package-tour/hunza-lahore-autumn",
    provincesCovered: "Punjab & GB",
    price: "$1,100",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether that’s the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. Experience the breathtaking beauty of Hunza Valley in Autumn with our exciting 11-day itinerary. Explore the rich culture and history of the region as you visit ancient forts, royal baths, and unique mosques. Enjoy thrilling off-road drives to hidden gems and taste the organic ice from the thousand-year-old glacier.",
    overview: {
      location: "Islamabad, Hunza & Lahore",
      // people: "4",
      // weather: "40",
      bestTime: "September → November",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/banner.jpeg"
    },
    experiences: {
      experience_points: [
        // { pic: swat_place_1, title: "Luxury accommodations" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/h-dawn.jpg",
          title: "Dawn and dusks in Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/h-heritage.jpg", title: "Heritage of Hunza" },
        { pic: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/h-borith.jpg", title: "Serenity of Attabad and Borith Lake" },
        { pic: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/h-culture.jpg", title: "Culture & traditions of Hunza Valley" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: autumn_iternaries.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 1 .png",
        description:
          "KhushAmdeed! Upon arrival in Islamabad, you'll be met by Facing North representatives and transferred to your hotel, a 30-minute drive away. After settling in, you'll enjoy a half-day city tour, exploring some of the highlights of the city. In the evening, you'll experience a delicious dinner at Monal Restaurant, which offers stunning panoramic views of Islamabad and Rawalpindi and is considered the best restaurant in Islamabad. This dinner will provide a great introduction to Pakistani cuisine. A brief introduction to your upcoming tour will also be provided.",
        title: "Arrival at Islamabad",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 2 .jpg",
        description:
          "Depart for Gilgit after breakfast. Transfer to the airport for a 45-minute flight across the world's highest mountain ranges. Upon arrival, drive to Nomal village (30 minutes) and switch to a 4x4 Jeep for a 2-hour off-road drive to the beautiful Naltar valley. Explore one or two of the seven lakes and lush green forests. Return to Nomal and drive back to Gilgit for dinner and overnight stay at the hotel.",
        title: "Gilgit & Naltar valley",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Short Gilgit city tour, Jeep ride to Naltar, Visit lakes and Skiing resort of Naltar"

      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 3.jpg",
        description:
          "After breakfast at the hotel with a view of the Karakoram mountain range, check out around noon and depart for Karimabad, a 2.5-hour drive. Along the way, make several stops at various viewpoints, including Rakaposhi, where you will enjoy a buffet lunch and spend time by the water stream. In Karimabad, explore the market and try out some local organic walnut cake from Café De Hunza. Later, drive 30 minutes to Eagles Nest for a stunning panoramic view of the Hunza Valley and witness a mesmerizing sunset. Return to the hotel for dinner and overnight stay.",
        title: "Karimabad & Rakaposhi viewpoint",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Remains of Old silk route, Rakaposhi viewpoint, Café De Hunza & sunset at Duiker (Eagles Nest)"

      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 4.jpg",
        description:
          "After breakfast, take a short heritage walk from Karimabad bazaar to Baltit Fort, located on top of the bazaar. Tour the fort to learn about Hunza Valley's history, culture, and traditions. Walk back to Karimabad bazaar to visit Altit Fort, another stunning piece of architecture and history. Stop for a refreshment at Khabasi Café, run by an all-female team as part of an initiative for women empowerment. Take an evening walk in Altit Royal Gardens and enjoy some free shopping time in Karimabad bazaar. Return to the hotel for dinner and overnight stay.",
        title: "Baltit and Altit Fort",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café and traditional music and dances"

      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 5.jpg",
        description:
          "After breakfast, we will head to Attabad lake, one of the largest lakes in Pakistan, crossing some stunning tunnels en route. You will have the option to participate in water sports or explore the Gulmit village. Next, we will visit Borith lake where lunch will be served with a scenic view. We will then go for a 2-hour glacier hike with a stunning view of the Passu cones and Passu peak. Later, we will relax at the beautiful Upper Hunza valley before returning to Attabad lake and transferring to Moksha Resort for dinner with music.",
        title: "Attabad Lake, Gulmit & Borith Lake",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake"
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 6.jpg",
        description:
          "We will start with breakfast overlooking Attabad Lake and Passu Cones. Then, we'll visit different villages for photography before touring the famous Hussaini suspension bridge and having lunch in Sost. We'll also visit Sost Dry port and Khunjerab Pass. On the way back to Attabad Lake, we'll stop at Glacier Breeze café for apricot cake and tea. The rest of the evening is free. Dinner and overnight stay at the resort.",
        title: "Sost, Passu & Khunjerab Pass",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Sost dry port, Khunjerab pass, Bonfire & musical night"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 7.jpg",
        description:
          "Early morning breakfast and departure to Gilgit. Drive to Minapin, one of the oldest villages in Nagar valley. Take a garden walk and enjoy fresh fruits from the orchards. Take a tea break by a water stream. 4x4 Jeep ride to Bikchum Ghutum, a hidden gem at the foothills of Rakaposhi. Short trek to a glacier to taste organic ice. Lunch at Bikchum Ghutum. Return to Minapin, change to a coaster bus for the journey to Gilgit. Rest of the day at leisure.",
        title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk"
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 8.jpg",
        description:
          "After breakfast at the hotel, we'll take a morning flight to Lahore and transfer to the airport. The flight will take us over the breathtaking Karakoram and Kaghan regions during an hour-long air safari. Upon arrival in Lahore, we'll be transferred to our hotel. We'll then embark on an excursion to the Wagah Border, which is just a 45-minute drive away. Here, we'll witness the border ceremony between India and Pakistan. We'll return to the hotel for a buffet dinner at Bukhara restaurant, followed by an overnight stay.",
        title: "GLT-LHR",
        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Air Safari, drive to lahore"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 9.jpg",
        description:
          "Breakfast at the hotel followed by a tour of the Walled City of Lahore. Starting from Delhi Gate, we'll take a mostly walking tour through the ancient walled city, beginning with a visit to the royal baths of Shahi Hammam. Next up is the Wazir Khan Mosque, known for its unique and beautiful paintings carved and engraved on the walls. We'll also stop to try some local street food, including smoked corn and falooda. Then, we'll explore the ancient Badshahi Masjid, Red Fort, Lahore Fort, and the one-of-a-kind Sheesh Mahal with its beautiful glass inlays. Dinner will be served at Haveli or Andaaz restaurant, offering a great view of Badshahi Masjid. Overnight stay in Lahore.",
        title: "Lahore city tour",
        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Badshah-e-Masjid tour, Minar-e-Pakistan, Red fort and Lahore Food Street"
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 10.jpg",
        description:
          "Enjoy a nourishing breakfast at the hotel to start your day. We'll visit some shopping areas and art galleries during the day. For lunch, we'll try out a renowned restaurant in Lahore. After lunch, we'll visit the Pakistan Army Museum. The evening will be at your leisure to explore the city on your own. For dinner, we'll dine at a fine dining restaurant or at the hotel. Spend the night at the hotel.",
        title: "Shopping and food Experiences",
        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Shopping, art galleries visit and museum"
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-autumn/Day 11.jpg",
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight departure. Transfer to the airport with lots of memories to cherish forever. Departure to your home country.",
        title: "Day of Departure",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Departure to your country"
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ GLT",
        "Meals",
        "1 Night Islamabad ",
        "2 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "2 Nights Gilgit",
        "3 Nights Lahore",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      deluxePackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Ramada or Roomy ",
        "Roomy Dastaan or Similar",
        "Famree Resort",
        "The Mandarin inn",
        "Luxus Grand Hotel",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Marriott or Similar",
        "Offto.pk",
        "Luxus Atabad Resort",
        "Gilgit Serena",
        "Nishat Hotel or Similar",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,750", "$1,650", "$1,550", "$1,450", "$1,350"],
      premiumPackage: ["$2,000", "$1,900", "$1,800", "$1,700", "$1,600"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. Weather in the rest of the country will be moderate.",

    // mapImage: "",
  },
  // Hunza Autumn
  {
    id: "hunza-autumn",
    title: "Hunza Autumn",
    service_img: "/assets/IMAGES/tour-packages/hunza-autumn/banner.jpeg",
    category: [CATEGORIES.hunza],
    link: "package-tour/hunza-autumn",
    provincesCovered: "Punjab & GB",
    price: "$1,000",
    days: "9",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. Islamabad is surrounded by the beautiful Margalla Hills which are the start of our mountain ranges. In the North-East of Pakistan, at an altitude of 8200 ft. lies Hunza District in Gilgit-Baltistan. An epitome of beauty, its lakes, rivers and waterfalls, serenity of valleys and wilderness of the mountains make it the center of trekking, trailing and climbing journeys.",
    overview: {
      location: "Islamabad & Hunza",
      // people: "4",
      // weather: "40",
      bestTime: "March → May",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/hunza-autumn/overiew.jpeg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/hunza-autumn/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-autumn/h-dawn.jpg",
          title: "Dawn and dusks in Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-autumn/h-heritage.jpg", title: "Heritage of Hunza" },
        { pic: "/assets/IMAGES/tour-packages/hunza-autumn/h-borith.jpg", title: "Serenity of Attabad and Borith Lake" },
        { pic: "/assets/IMAGES/tour-packages/hunza-autumn/h-culture.jpg", title: "Culture & traditions of Hunza Valley" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-autumn/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: autumn_iternaries.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 1 .png",
        title: "Arrival at Islamabad",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Quick Tour Islamabad, Dinner at Monal Restaurant",
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half-day city tour. Dinner will be served at the renowned Monal Restaurant with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the hill of Potohar, nestled against the pristine Margalla Hills, Monal Restaurant is voted as one of the most romantic restaurants in Islamabad. Your dinner experience tonight at Monal will be a great introduction to Pakistani cuisine. A brief introduction will also be given to help you prepare for the upcoming tour. Accommodation: Marriott or Ambiance Hotel. Transport: Coaster or Grand Cabin. Meals: Dinner.",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 2 .jpg",
        title: "Gilgit & Naltar valley",
        description:
          "After breakfast, we’ll depart early in the morning for Gilgit. You will be transferred to the airport in time for your flight to Gilgit. The flight will take approximately 45 minutes and will cross some of the high-altitude peaks and highest mountain ranges in the world. Upon arrival, we will depart to Nomal village. The drive takes about 30 minutes and we will switch vehicles to 4x4 jeeps for some off-road driving to Naltar Valley. This scenic drive will take approximately 2 hours and will bring you to a stunning valley of lakes and lush green forest. Naltar Valley has seven lakes out of which we will cover one or two. Return to Nomal and drive back to Gilgit. Dinner will be served at the hotel. Overnight stay.",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Short Gilgit city tour, Jeep ride to Naltar, Visit lakes and Skiing resort of Naltar"

      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 3.jpg",
        title: "Karimabad & Rakaposhi viewpoint",
        description:
          "This morning, you will wake up to a view surrounded by the mighty Karakoram. You will have plenty of time to enjoy your breakfast with the view after which we will check out of the hotel at around noon and leave for Karimabad. The drive will take approximately 2.5 hours. On the way in, we will stop at various viewpoint locations for you to rest and take some really nice pictures. You will be able to see the remains of the old silk road which was constructed by cutting stones manually back in the days. Another viewpoint stop will be Rakaposhi where we will have a buffet lunch and spend time by the stream. We will do a short excursion to Karimabad then transfer to a hotel. The rest of the afternoon will be at leisure in Karimabad. Explore the main market and try out some local organic walnut cake from Café De Hunza. In the late afternoon, we will leave for Eagles Nest, a short 30 minute’s drive from the hotel. At Eagles Nest, you will witness a stunning sunset projecting over the Hunza Valley.",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Remains of Old Silk Route, Rakaposhi viewpoint, Café De Hunza, Sunset at Duiker (Eagles Nest)"

      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 4.jpg",
        title: "Baltit and Altit Fort",
        description:
          "After breakfast, we will explore the culture and traditions of Hunza valley which has much to offer. We will start with a short heritage walk from Karimabad bazar to Baltit fort. We will take a tour of Baltit Fort to learn about the history, culture and traditions of Hunza Valley. After the visit to Baltit Fort, we will walk back to Karimabad bazaar to take another excursion to Altit Fort, another stunning piece of architecture and history. After the tour to Altit Fort, we will stop at a small hidden café in Altit called Khabasi Café. Khabasi Café is operated by an all-female team as a result of an amazing initiative taken by Prince Aga Khan to uplift women empowerment. Evening walk in Altit royal gardens, return to Karimabad bazaar where you will have some free shopping time. Transfer to the hotel where dinner will be served with traditional dance and music.",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, Khabasi Café, Traditional music and dances"
      },
      // {
      //   id: 4,
      //   iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/",
      //   title: "Hopper Valley & small-scale factories",
      //   description:
      //     "This morning, we will head to Hoper valley. The drive will be approximately 1.5 hours from the hotel. Hopper Valley is well known for its high-altitude mountain peaks and one of a kind glaciers which lies below the valley. We will take a short trek to the glacier and you will have a chance to get close and personal with the thousand-year-old glacier ice. After the visit to Hopper Valley, we will return to Karimabad for a short tour of a local craft art studio where wooden cutlery and other handicrafts are made. We will also visit several carpet factories to see how this ancient carpet making technique is preserved and how handmade carpets are made.",

      // },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 5.jpg",
        title: "Attabad Lake, Gulmit & Borith Lake",
        description:
          "After breakfast, we will leave for Attabad lake, crossing some mind-blowing tunnels leading us to one of the largest lakes of Pakistan. At Attabad Lake, you have options to participate in different kinds of water sports or do some sightseeing in Gulmit village. After Attabad Lake, we will head to Borith lake where lunch will be served at a lake viewing restaurant. We will leave for a glacier hike which is approx. 2 hours of trekking with an amazing view of Passu cones and Passu peak. Relax at the most scenic and beautiful place in Upper Hunza valley. Return to Attabad lake, transfer to resort. Dinner will be arranged at the Moksha Resort with music.",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake"

      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 6.jpg",
        title: "Sost, Passu & Khunjerab Pass",
        description:
          "Our day will start with a majestic view of Attabad Lake and Passu Cones in the background, breakfast will be served with the lake view. Excursion to Sost with stopovers at different villages for photography. We will take a tour of the famous Hussaini suspension bridge. Lunch will be served in Sost. We will visit Sost Dry port. Excursion to Khunjerab pass which is situated at an elevation of 4,693m. Return to Attabad Lake, in between stop over at Glacier Breeze café for scrumptious organic Apricot cake and tea. Free time at Attabad. Dinner will be served. Overnight stay.",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Sost dry port, Khunjerab pass, Bonfire & musical night"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 7.jpg",
        title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum",
        description:
          "Today we will be heading to Gilgit via Minapin. Minapin is one of the oldest villages of Nagar valley. The drive to Minapin will be approximately one hour and upon arrival, we will have time to do a garden walk. You may wish to pick some fresh fruits from the orchards. Tea will be served next to the stream during the break. After the tea break, we will change to 4x4 Jeep for an exciting off-road drive to Bikchum Ghutum. The ride to Bikchum Ghutum will take approximately 45 minutes and it will lead us to a hidden pearl, a ground situated right on the footsteps of the mighty Rakaposhi, known as the Mother of Mist. In Bikchum, you can take a short trek towards a glacier where you will have the opportunity to taste organic ice which is thousands of years old. Lunch is served at Bikchum Ghutum. After lunch, we will return to Minapin where we change our vehicle again to a coaster bus and continue our journey to Gilgit. At leisure for the rest of the day in Gilgit.",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk"
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 8.jpg",
        title: "Gilgit to Islamabad",
        description:
          "Breakfast will be served at the hotel. Morning flight to Islamabad. Transfer to airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakoram and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Visit Pakistan Monument, Lok Virsa museum and Faisal Masjid. Buffet dinner at a fine dining restaurant. Return to the hotel. Overnight stay.",
        "deluxeHotel": "Ambiance Hotel ",
        "premiumHotel": "Ramada Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-autumn/Day 9.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight departure. Transfer to the airport with lots of memories to cherish forever.",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Departure to home country"
      },
    ],
    includes: {
      services: [
        "Meals",
        "2 Nights Islamabad ",
        "3 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "2 Nights Gilgit",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
      ],
      deluxePackage: [
        "3 Meals/Daily",
        "Roomy Signature",
        "Roomy Dastaan",
        "Famree Hotel",
        "The Mandarin inn",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "3 meals/Daily",
        "Marriott Hotel",
        "Offto Resort",
        "Luxus Atabad Resort",
        "Gilgit Serena",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,400", "$1,300", "$1,200", "$1,100", "$1,000"],
      premiumPackage: ["$1,800", "$1,700", "$1,600", "$1,500", "$1,400"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },

  // Hunza & Lahore Springs
  {
    id: "hunza-lahore-springs",
    title: "Hunza & Lahore Springs",
    service_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/banner.jpg",
    category: [CATEGORIES.hunza, CATEGORIES.lahore],
    link: "package-tour/hunza-lahore-springs",
    provincesCovered: "Punjab & GB",
    price: "$1,450",
    days: "11 ",
    description:
      "Pakistan is a country full of diversity in every means whether that’s the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. Islamabad is surrounded by the beautiful Margalla Hills which are the start of our mountain ranges. In the North-East of Pakistan, at an altitude of 8200 ft. lies Hunza District in Gilgit-Baltistan. An epitome of beauty, its lakes, rivers and waterfalls, serenity of valleys and wilderness of the mountains make it the center of trekking, trailing and climbing journeys.",
    overview: {
      location: "Islamabad, Hunza & Lahore",
      // people: "4",
      // weather: "40",
      bestTime: "March → May",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/hunza-lahore-springs/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/hunza-lahore-springs/h-islamabad.png",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-lahore-springs/h-dawn.jpeg",
          title: "Dawn and dusks in the Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-lahore-springs/h-heritage.jpg", title: "Heritage of Hunza" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-lahore-springs/h-dance.jpg",
          title: "Bonfire BBQ with traditional music and dance",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-lahore-springs/h-attabad.jpg", title: "Serenity of Attabad and Borith Lake" },
        { pic: "/assets/IMAGES/tour-packages/hunza-lahore-springs/h-culture.jpg", title: "Culture & Traditions of Hunza Valley" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-lahore-springs/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 1.jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half-day city tour. Dinner will be served at the renowned Monal Restaurant with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the hill of Potohar, nestled against the pristine Margalla Hills, Monal Restaurant is voted as one of the most romantic restaurants in Islamabad. Your dinner experience tonight at Monal will be a great introduction to Pakistani cuisine. A brief introduction will also be given to help prepare you for the upcoming tour.",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 2.jpg",
        title: "Gilgit & Naltar valley",
        description:
          "After breakfast, we’ll depart early in the morning for Gilgit. You will be transferred to the airport in time for your flight to Gilgit which will take approximately 45 minutes and will cross some of the high-altitude peaks and highest mountain ranges in the world. Upon arrival, we will depart to Nomal village. The drive takes about 30 minutes after which we will switch vehicles to 4x4 Jeep for some off-road driving to Naltar valley. This scenic drive will take approximately 2 hours and will bring you to a stunning valley of lakes and lush green forest. Naltar Valley has 7 lakes and we will cover one or two of them. Return to Nomal. Dinner will be served at the hotel. Overnight stay.",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "short Gilgit city tour, Jeep ride to Naltar, Visit lakes and Skiing resort of Naltar"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 3.jpg",
        title: "Karimabad & Rakaposhi viewpoint",
        description:
          "This morning, you will wake up to a view surrounded by the mighty Karakoram. You will have plenty of time to enjoy your breakfast with the view. After breakfast and a break, we will check out of the hotel at around noon and leave for Karimabad. The drive will take approximately 2.5 hours and on the way in, we will stop at various viewpoint locations for you to rest and take some really nice photographs. You will go through one of the original silk roads and you will be able to see the remains which were constructed by cutting stones manually back in the days. Another viewpoint stop will be Rakaposhi where we will have a buffet lunch and spend time by the stream. We will do a short excursion to Karimabad then transfer to a hotel. The rest of the afternoon will be at leisure in Karimabad. Explore the main market and try out some local organic walnut cake from Café De Hunza. In the late afternoon, we will leave for Eagles Nest, a short 30 minutes’ drive from the hotel. At Eagles Nest, you will witness a stunning sunset projecting over the Hunza Valley.",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Remains of Old silk route, Rakaposhi viewpoint, Café De Hunza & sunset at Duiker (Eagles Nest)"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 4 .jpg",
        title: "Baltit and Altit Fort",
        description:
          "After breakfast, we will explore the culture and traditions of Hunza valley. It has so much to offer. We will start a short heritage walk from Karimabad bazaar to Baltit fort. We will take a tour of Baltit Fort to learn about the history, culture, and traditions of Hunza Valley. After the visit to Baltit Fort, we will walk back to Karimabad bazaar to take another excursion to Altit Fort, a stunning piece of architecture and history. After the tour to Altit Fort, we will stop at a small hidden café in Altit called Khabasi Café. Khabasi Café is operated by an all-female team as a result of an amazing initiative taken by Prince Aga Khan to uplift women empowerment. Evening walk in Altit royal gardens, return to Karimabad bazaar where you will have some free shopping time. Transfer to hotel, dinner will be served at the hotel with traditional dance and music.",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café and traditional music and dances"

      },
      // {
      //   id: 4,
      //   iternaries_img: swat_place_1.src,
      //   title: "Day 5: Hoper Valley & small-scale factories",
      //   description:
      //     "This morning, we will head to Hoper valley. The drive will be approximately 1.5 hours from the hotel. Hoper Valley is well known for its high-altitude mountain peaks and one of a kind glaciers which lie below the valley. We will take a short trek to the glacier and you will have a chance to get close and personal with the thousand-year-old glacier ice. After the visit to Hoper Valley, we will return to Karimabad for a short tour of a local craft studio where wooden cutlery and other handicrafts are made. We will also visit several carpet factories to see how this ancient carpet making technique is preserved and how handmade carpets are made.",
      // },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 5.jpg",
        title: "Attabad Lake, Gulmit & Borith Lake",
        description:
          "After breakfast, we will leave for Attabad lake, crossing some mind-blowing tunnels leading us to one of the largest lakes of Pakistan. At Attabad Lake, you have the option to participate in different kinds of water sports or do some sightseeing at Gulmit village. After Attabad Lake, we will head to Borith lake where lunch will be served at a lake viewing restaurant. We will leave for a glacier hike which is approx. 2 hours of trekking with an amazing view of Passu cones and Passu peak. Relax at the most scenic and beautiful place in the upper Hunza valley. Return to Attabad lake, transfer to resort. Dinner will be arranged at the Moksha Resort with music.",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake"

      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 6.jpg",
        title: "Sost, Passu & Khunjerab Pass",
        description:
          "Our day will start with a majestic view of Attabad Lake and Passu Cones in the background. Breakfast will be served with the lake view. Excursion to Sost with stopovers at different villages for photography. We will take a tour of the famous Hussaini suspension bridge. Lunch will be served in Sost. We will visit Sost Dry port. Excursion to Khunjerab pass which is situated at an elevation of 4,693m. Return to Attabad Lake, in between we’ll stop over at Glacier Breeze café for some scrumptious organic Apricot cake and tea. Free time at Attabad. Dinner will be served. Overnight stay.",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Sost dry port, Khunjerab pass, Bonfire & musical night"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 7.jpeg",
        title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum",
        description:
          "Today we will be heading to Gilgit via Minapin. Minapin is one of the oldest villages of Nagar valley. The drive to Minapin will be approximately one hour and upon arrival, we will have time to do a garden walk. You may wish to pick some fresh fruits from the orchards. Tea will be served next to the water stream during the break. After the tea break, we will change to 4x4 jeeps for an exciting off-road drive to Bikchum Ghutum. The ride to Bikchum Ghutum will take approximately 45 minutes and it will lead us to a hidden pearl, a ground situated right on the footsteps of the mighty Rakaposhi, known as the Mother of Mist. In Bikchum, you can take a short trek towards a glacier where you will have the opportunity to taste organic ice which is thousands of years old. Lunch is served at Bikchum Ghutum. After lunch, we will return to Minapin where we change our vehicle again to a coaster bus and continue our journey to Gilgit. At leisure for the rest of the day in Gilgit.",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk"
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 8.jpg",
        title: "GLT-LHR",
        description:
          "Breakfast will be served at the hotel. Morning flight to Lahore. Transfer to airport, depart to Lahore via flight. An hour-long air safari, flying over the mighty Karakoram and Kaghan region. Arrival at Lahore, transfer to hotel. Excursion to Wagah Border which is at a 45 minutes’ drive to witness the border ceremony between India and Pakistan. Return to hotel, buffet dinner at Bukhara restaurant. Overnight stay.",
        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Air Safari, drive to lahore"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 9.jpeg",
        title: "Lahore city tour",
        description:
          "Breakfast will be served at the hotel. We will head towards the Walled city of Lahore. We will start our tour from Delhi Gate, and mostly walk through the ancient walled city. Our first sight will be Shahi Hammam where we will take a tour of the ancient royal baths. Excursion to the next sight which is Wazir Khan Mosque where beautiful paintings have been carved and engraved on walls, a true marvel of art which makes the mosque so unique. After the mosque we will direct ourselves to some local street food like smoked corn, Falooda and other unique food stalls which are a must try. We will move towards the beautiful ancient mosque, Badshahi Masjid, Red Fort, Lahore Fort and Sheesh Mahal—coated with beautiful glass which reflects light making it one of a kind palace in the world. Ancient art can be explored in the Palaces. Dinner will be served at Haveli or Andaaz Restaurant with a great view of Badshahi Masjid. Overnight stay in Lahore.",
        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Badshah-e-Masjid tour, Minar-e-Pakistan, Red fort and Lahore Food Street"

      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 10.jpg",
        title: "Shopping and food experiences",
        description:
          "Start your day with a healthy breakfast at the hotel. Day visit to shopping areas and some art galleries. For lunch we will visit a handpicked restaurant famous in Lahore. Visit the Pakistan Army Museum. Leisure for the evening. Dinner at a fine dining restaurant or at the hotel. Overnight stay.",
        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Shopping, art galleries visit and museum"
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-lahore-springs/Day 11.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight departure. Transfer to the airport with lots of memories to cherish forever.",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Departure to your country"
      },
    ],
    includes: {
      services: [
        " Meals",
        "1 Night Islamabad ",
        "3 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "2 Nights Gilgit",
        "3 Nights Lahore",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      deluxePackage: [
        "3 Meals/Daily",
        "Roomy Signature",
        "Roomy Dastaan",
        "Famree Hotel",
        "The Mandarin inn",
        "Luxus Grand ",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Yes",
        "Yes",
        "No",
      ],
      premiumPackage: [
        "3 meals/Daily",
        "Marriott Hotel",
        "Offto Resort",
        "Luxus Atabad Resort",
        "Gilgit Serena",
        "Nishat Hotel",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,750", "$1,650", "$1,550", "$1,450"],
      premiumPackage: ["$2,000", "$1,900", "$1,800", "$1,700"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },
  // Hunza Springs
  {
    id: "hunza-springs",
    title: "Hunza Springs",
    service_img: "/assets/IMAGES/tour-packages/hunza-springs/banner.jpeg",
    category: [CATEGORIES.hunza],
    link: "package-tour/hunza-springs",
    provincesCovered: "Punjab & GB",
    price: "$1,000",
    days: "9",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. Islamabad is surrounded by the beautiful Margalla Hills which are the start of our mountain ranges. In the North-East of Pakistan, at an altitude of 8200 ft. lies Hunza District in Gilgit-Baltistan. An epitome of beauty, its lakes, rivers and waterfalls, serenity of valleys and wilderness of the mountains make it the center of trekking, trailing and climbing journeys.",
    overview: {
      location: " Islamabad & Hunza",
      // people: "4",
      // weather: "40",
      bestTime: "March → May",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/hunza-springs/overview.jpeg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/hunza-springs/h-islamabad.png",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-springs/h-dawn.jpeg",
          title: "Dawn and dusks in the Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-springs/h-heritage.jpg", title: "Heritage of Hunza" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-springs/h-dance.jpg",
          title: "Bonfire BBQ with traditional music and dance",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-springs/h-attabad.jpg", title: "Serenity of Attabad and Borith Lake" },
        { pic: "/assets/IMAGES/tour-packages/hunza-springs/h-culture.jpg", title: "Culture & Traditions of Hunza Valley" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-springs/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 1.jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half-day city tour. Dinner will be served at the renowned Monal Restaurant with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the hill of Potohar, nestled against the pristine Margalla Hills, Monal Restaurant is voted as one of the most romantic restaurants in Islamabad. Your dinner experience tonight at Monal will be a great introduction to Pakistani cuisine. A brief introduction will also be given to help you prepare for the upcoming tour. Accommodation: Marriott or Ambiance Hotel. Transport: Coaster or Grand Cabin. Meals: Dinner.",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 2.jpg",
        title: "Gilgit & Naltar Valley",
        description:
          "After breakfast, we’ll depart early in the morning for Gilgit. You will be transferred to the airport in time for your flight to Gilgit. The flight will take approximately 45 minutes and will cross some of the high-altitude peaks and highest mountain ranges in the world. Upon arrival, we will depart to Nomal village. The drive takes about 30 minutes, and we will switch vehicles to 4x4 jeeps for some off-road driving to Naltar Valley. This scenic drive will take approximately 2 hours and will bring you to a stunning valley of lakes and lush green forest. Naltar Valley has seven lakes out of which we will cover one or two. Return to Nomal and drive back to Gilgit. Dinner will be served at the hotel. Overnight stay. Activities: Short Gilgit city tour, Jeep ride to Naltar, visit lakes, and skiing resort of Naltar.",
        "deluxeHotel": " Mandarin Inn",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Short Gilgit city tour, Jeep ride to Naltar, Visit lakes and Skiing resort of Naltar"

      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 3.jpg",
        title: "Karimabad & Rakaposhi Viewpoint",
        description:
          "This morning, you will wake up to a view surrounded by the mighty Karakoram. You will have plenty of time to enjoy your breakfast with the view after which we will check out of the hotel at around noon and leave for Karimabad. The drive will take approximately 2.5 hours. On the way in, we will stop at various viewpoint locations for you to rest and take some really nice pictures. You will be able to see the remains of the old silk road which was constructed by cutting stones manually back in the days. Another viewpoint stop will be Rakaposhi where we will have a buffet lunch and spend time by the stream. We will do a short excursion to Karimabad then transfer to a hotel. The rest of the afternoon will be at leisure in Karimabad. Explore the main market and try out some local organic walnut cake from Café De Hunza. In the late afternoon, we will leave for Eagles Nest, a short 30 minutes drive from the hotel. At Eagles Nest, you will witness a stunning sunset projecting over the Hunza Valley. Activities: Remains of Old silk route, Rakaposhi viewpoint, Café De Hunza & sunset at Duiker (Eagles Nest)",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Remains of Old silk route, Rakaposhi viewpoint, Café De Hunza & sunset at Duiker (Eagles Nest)"

      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 4 .jpg",
        title: "Baltit and Altit Fort",
        description:
          "After breakfast, we will explore the culture and traditions of Hunza valley which has much to offer. We will start with a short heritage walk from Karimabad bazar to Baltit fort. We will take a tour of Baltit Fort to learn about the history, culture and traditions of Hunza Valley. After the visit to Baltit Fort, we will walk back to Karimabad bazaar to take another excursion to Altit Fort, another stunning piece of architecture and history. After the tour to Altit Fort, we will stop at a small hidden café in Altit called Khabasi Café. Khabasi Café is operated by an all-female team as a result of an amazing initiative taken by Prince Aga Khan to uplift women empowerment. Evening walk in Altit royal gardens, return to Karimabad bazaar where you will have some free shopping time. Transfer to the hotel where dinner will be served with traditional dance and music. Activities: Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, Khabasi Café, and traditional music and dances.",
        "deluxeHotel": "Darbar Hotel",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café and traditional music and dances"

      },
      // {
      //   id: 4,
      //   iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/",
      //   title: "Hopper Valley & Small-scale Factories",
      //   description:
      //     "This morning, we will head to Hoper valley. The drive will be approximately 1.5 hours from the hotel. Hopper Valley is well known for its high-altitude mountain peaks and one of a kind glaciers which lies below the valley. We will take a short trek to the glacier, and you will have a chance to get close and personal with the thousand-year-old glacier ice. After the visit to Hopper Valley, we will return to Karimabad for a short tour of a local craft art studio where wooden cutlery and other handicrafts are made. We will also visit several carpet factories to see how this ancient carpet making technique is preserved and how handmade carpets are made. Activities: Hopper valley, Hopper glacier, small-scale factories of handicrafts and carpet.",
      // },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 5.jpg",
        title: "Attabad Lake, Gulmit & Borith Lake",
        description:
          "After breakfast, we will leave for Attabad Lake, crossing some mind-blowing tunnels leading us to one of the largest lakes of Pakistan. At Attabad Lake, you have options to participate in different kinds of water sports or do some sightseeing in Gulmit village. After Attabad Lake, we will head to Borith Lake where lunch will be served at a lake-viewing restaurant. We will leave for a glacier hike which is approx. 2 hours of trekking with an amazing view of Passu cones and Passu peak. Relax at the most scenic and beautiful place in Upper Hunza valley. Return to Attabad Lake, transfer to resort. Dinner will be arranged at the Moksha Resort with music. Activities: Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake.",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake"

      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 6.jpg",
        title: "Sost, Passu & Khunjerab Pass",
        description:
          "Our day will start with a majestic view of Attabad Lake and Passu Cones in the background, breakfast will be served with the lake view. Excursion to Sost with stopovers at different villages for photography. We will take a tour of the famous Hussaini suspension bridge. Lunch will be served in Sost. We will visit Sost Dry port. Excursion to Khunjerab pass which is situated at an elevation of 4,693m. Return to Attabad Lake, in between stopover at Glacier Breeze café for scrumptious organic Apricot cake and tea. Free time at Attabad. Dinner will be served. Overnight stay.",
        "deluxeHotel": "Famree Resort",
        "premiumHotel": "Luxus Atabad",
        "activities": "Sost dry port, Khunjerab pass, Bonfire & musical night"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 7.jpeg",
        title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum",
        description:
          "Today we will be heading to Gilgit via Minapin. Minapin is one of the oldest villages of Nagar valley. The drive to Minapin will be approximately one hour and upon arrival, we will have time to do a garden walk. You may wish to pick some fresh fruits from the orchards. Tea will be served next to the stream during the break. After the tea break, we will change to 4x4 Jeep for an exciting off-road drive to Bikchum Ghutum. The ride to Bikchum Ghutum will take approximately 45 minutes and it will lead us to a hidden pearl, a ground situated right on the footsteps of the mighty Rakaposhi, known as the Mother of Mist. In Bikchum, you can take a short trek towards a glacier where you will have the opportunity to taste organic ice which is thousands of years old. Lunch is served at Bikchum Ghutum. After lunch, we will return to Minapin where we change our vehicle again to a coaster bus and continue our journey to Gilgit. At leisure for the rest of the day in Gilgit. ",
        "deluxeHotel": "Mandarin Inn",
        "premiumHotel": "Ramada Hotel",
        "activities": "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk"
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 8.jpg",
        title: "Gilgit to Islamabad",
        description:
          "Breakfast will be served at the hotel. Morning flight to Islamabad. Transfer to airport, depart to Islamabad via flight. An hour air safari, flying over the mighty Karakoram and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Visit Pakistan Monument, Lok Virsa museum and Faisal Masjid. Buffet dinner at a fine dining restaurant. Return to the hotel. Overnight stay.",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Ramada Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-springs/Day 9.jpeg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight departure. Transfer to the airport with lots of memories to cherish forever. ",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Departure to home country"
      },
    ],
    includes: {
      services: [
        "Meals",
        "2 Nights Islamabad",
        "3 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "2 Nights Gilgit",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or any other activity",
      ],
      deluxePackage: [
        "3 Meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Darbar Resort",
        "Famree Hotel",
        "Ramada Hotel",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Yes",
        "No",
      ],
      premiumPackage: [
        "3 meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Ambiance Hotel",
        "Luxus Atabad Resort",
        "Serena Hotel",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,400", "$1,300", "$1,200", "$1,100", "$1,000"],
      premiumPackage: ["$1,800", "$1,700", "$1,600", "$1,500", "$1,400"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },

  // =========================================================
  //  Photography Workshop
  // =========================================================

  // Beyond the Frame in Hunza & Islamabad - Hunza Workshop
  {
    id: "hunza-photography-workshop-pk23-04",
    title: "Hunza Photography Workshop",
    service_img: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/banner.jpg",
    link: "package-tour/hunza-photography-workshop-pk23-04",
    provincesCovered: "Punjab & GB",
    price: "$1950",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts, Islamabad is surrounded by beautiful Margalla Hills which are the start of our mountain ranges. In the North-East of Pakistan, at an altitude of 8200 ft., Hunza District lies in Gilgit-Baltistan. An epitome of beauty, its lakes, rivers and waterfalls, serenity of valleys and wilderness of the mountains make it the center for trekking, trailing and climbing journeys.",
    overview: {
      //   location: "Islamabad & Skardu",
      // people: "",
      // weather: "40",
      bestTime: "June → September",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/overview.jpeg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/h-dawn.jpeg",
          title: "Dawn and dusks in the Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/h-heritage.jpeg", title: "Heritage of Hunza" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/h-moon.jpeg",
          title:
            "Brightening moon at Karimabad and all the way to the vast fields of Punjab",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/h-attabad.jpg", title: "Serenity of Attabad and Borith Lake " },
        { pic: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/h-culture.jpeg", title: "Culture of different provinces" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-photography-workshop-pk23-04/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 1.jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. On arrival at Islamabad Airport, please clear customs and collect your baggage before locating our representative. You will be transferred to your hotel, which is conveniently located at a 20-25 mins drive off the Airport Terminal. The rest of the day is free to spend as you may wish. Perhaps head out for some chai (local tea) or do some gear shopping. Your dinner will be served at a fine dining restaurant, after which you may rest. ",
        deluxeHotel: "Serena (Quality stay at a more economical rate)",
        premiumHotel: "Marriott Hotel (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 2.jpg",
        title: "Islamabad",
        description:
          "Breakfast will be served at the hotel. Your day will start with a great view of the Margalla hills, surrounding Islamabad. Then, we’ll have a short city tour of Islamabad, where we will cover the beautiful Pakistan Monument and Faisal Masjid for amazing afternoon photography. We will leave for Monal for sunset photography where you will get a panoramic view of Islamabad and Rawalpindi. Later dinner will be arranged at Monal restaurant. Return to the hotel. Rest till tomorrow.",
        deluxeHotel: "Serena (Quality stay at a more economical rate)",
        premiumHotel: "Marriott Hotel (Offers enhanced comfort and facilities)",
        activities: "City Tour Islamabad"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 3.jpg",
        title: "Gilgit & Minapin",
        description:
          "After breakfast, we’ll depart early in the morning for Gilgit. Transfer to the airport, where we’ll take a flight to Gilgit from Islamabad. Flight is approx. 45 minutes which will leave lifetime impact—the flight will cross some of the high-altitude peaks and highest mountain ranges. Arrival at Gilgit airport, transfer to Rakaposhi viewpoint which is our first sight for the afternoon photoshoot. Meet and greet with the instructor, a brief rundown about the landscape of Hunza by the tutor and a few instructions about the photoshoot. Lunch will be served at the viewpoint. Transfer to Minapin which is a 15 minute drive from the Rakaposhi viewpoint. Rest for a while. We will return to the Rakaposhi viewpoint for a spectacular sunset at the 27 th highest peak in the world with an elevation of 7788m. We will cover blue light photography there as well. Return to Minapin to freshen up. Dinner will be served with a post day review session with the instructor. Bonfire can be arranged. Rest till tomorrow.",
        deluxeHotel: "",
        premiumHotel: "Diran Guest House (Offers enhanced comfort and facilities)",
        activities: "Safari flight, afternoon, sunset & blue light shoot at Rakaposhi."
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 4.jpg",
        title: "Rakaposhi",
        description:
          "Early morning tea where we will set our eyes on Rakaposhi for a majestic sunrise. We can cover the shoot from various locations. Return to Minapin where breakfast will be served, rest for a while. For afternoon photoshoot we will leave for Bikchum Ghutum which is at a jeep ride of 40 minutes from Minapin. Capture the stunning view of Rakaposhi and Pisan glacier, where snacks will be served. Return to Minapin, rest for a while. We will depart to Rakaposhi viewpoint to capture sunset and blue light photo shoot. Return to the hotel. Dinner and review session with the instructor. Tutor will brief for tonight's night photography at Rakaposhi. Return to the hotel. Overnight stay.",
        deluxeHotel: "",
        premiumHotel: "Diran Guest House (Offers enhanced comfort and facilities)",
        activities: "Sunrise at Rakaposhi, afternoon shoot at Bikchum Ghutum, sunset & blue light at Rakaposhi"
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 5 .jpg",
        title: "Duiker Point / Eagles Nest",
        description:
          "Early morning breakfast, depart to Rehman Abad 15 minutes from Minapin for a stunning sunrise shoot at Rakaposhi from a different angle. Excursion to Duiker/Eagles nest, transfer to hotel. Rest for a while. Afternoon shoot at Eagles nest which gives a panoramic view of Hunza and Nagar which is surrounded by 7000+m peaks. Lunch will be served at Duiker. Sunset and blue light will be covered from Duiker/ Eagles nest. Dinner will be served followed by our daily review and brainstorming sessions. Overnight stay. ",
        deluxeHotel: "",
        premiumHotel: "Hard Rock resort (Offers enhanced comfort and facilities)",
        activities: "Sunrise from Rehman Abad, afternoon, sunset and blue light shoot at Eagles Nest."
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/day 6 .jpg",
        title: "Eagles Nest & Duiker",
        description:
          "As we will be staying at Duiker, our sunrise will be from there, covering sunrise on 5 different 7000+m peaks. Breakfast will be served. Rest for a while. For afternoon shoot we will leave for Hopper valley which is at 1.5-hour drive from Karimabad. Photoshoot at Hopper glacier, and several snow-covered peaks. Lunch will be served there. Return to Eagles Nest and prepare for the sunset photoshoot and blue light shoot on several peaks. Dinner and review session will be held followed by a bonfire and traditional musical night. We will do a night shoot from Duiker Point instructed by the tutor. Time-lapse can be done as well. Overnight stay. ",
        deluxeHotel: "",
        premiumHotel: "Hard Rock resort (Offers enhanced comfort and facilities)",
        activities: "Sunrise at Duiker point, afternoon session at Hopper, sunset, blue light and night shoot at Duiker/ Eagles Nest"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 7 .jpg",
        title: "Passu Cones",
        description:
          "Early breakfast, sunrise at Duiker point. We will depart to our next destination, the Passu Cathedral. Our base point will be Borith Lake resort. We will stop at Attabad lake for afternoon shoots.  Excursion to Borith Lake resort. Lunch will be served. We will capture the sunset from zero point which is a 10 minutes' drive from Borith. Sunset and blue light photography at Passu cones, Passu peak and Glacier. Return to Borith lake. Dinner will be served with a review session with the instructor. Night photography can be done at Borith. Overnight stay.",
        deluxeHotel: "",
        premiumHotel: "Luxus Grand Resort (Offers enhanced comfort and facilities)",
        activities: "Sunset at Duiker, afternoon shoot at Attabad Lake & sunset at Passu Cones "
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 8.jpg",
        title: "Passu Cones",
        description:
          "Early breakfast, sunrise will be captured from zero point to cover Passu cones and Passu glacier. Return to Borith, rest for a while. We will leave for Hussaini bridge which is 15 minutes away from Borith to cover the afternoon shoot of Passu Cones and Hussaini bridge. Excursion to Glacier Breeze Café where lunch and tea will be served. Take evening shots of Passu Cones from there. Return to Borith Lake to capture sunset on Passu Cathedral, Passu Peak and Glacier. Return to the resort and freshen up. Dinner will be served with a review session with the instructor. Bonfire and traditional music by the lake. Night shoot will be held. Overnight stay.",
        deluxeHotel: "",
        premiumHotel: "Borith Lake Resort (Offers enhanced comfort and facilities)",
        activities: "Sunrise at Passu, afternoon shoot at Passu & Hussaini Bridge, sunset and night shoot at Passu cones. "
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 10.jpg",
        title: "Gilgit & Karimabad",
        description:
          "Early morning breakfast will be served, sunrise at Passu cones from zero point, return to hotel. Today, we will explore the culture and traditions of Hunza valley. It has much to offer! Excursion to Karimabad which is a 1-hour drive from Borith.  We will start with a short heritage walk from Karimabad bazaar to Baltit fort, which is located on the top of Karimabad bazaar. We will take a tour of Baltit Fort to learn about the history, culture, traditions of Hunza Valley. We'll walk all the way back to Karimabad bazaar for some free shopping time. Departure to Gilgit which is a 2-hour drive from Karimabad. Transfer to hotel. A detailed review session will be held with the instructor. Dinner will be served. Overnight stay.",
        deluxeHotel: "",
        premiumHotel: "Gilgit Serena (Offers enhanced comfort and facilities)",
        activities: "Sunrise at Passu Cones, tour of Karimabad."
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 11.jpg",
        title: "Islamabad, Saidpur village and Monal",
        description:
          "Breakfast will be served at the hotel. Transfer to airport for our flight to Islamabad, flying over the majestic Himalayas and Karakoram range. Arrival at Islamabad, check-in at hotel. Short tour of Saidpur village and Lok Virsa museum, and some free time to explore. Dinner will be at a fancy restaurant in Islamabad. Overnight stay. ",
        deluxeHotel: "Marriott (Quality stay at a more economical rate)",
        premiumHotel: "Pearl Continental (Offers enhanced comfort and facilities)",
        activities: "Flight safari, Saidpur Village, Lok Virsa Museum and Monal."
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/journey-to-silk-route-pk23-01/Day 12.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Transfer to the Airport with lots of memories to cherish forever.",
        activities: "Departure to your country "
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ GLT",
        "Meals",
        "2 Nights Islamabad",
        "2 Nights Minapin",
        "3 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "1 Night Gilgit",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or any other activity",
      ],
      deluxePackage: [
        "Toyota Coaster & Jeeps",
        "3 Meals/Daily",
        "Ramada or Best Western",
        "Marriott Hotel",
        "Roomy Yurts",
        "Eagles Nest",
        "Famree Resort",
        "The Mandarin Inn",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Coaster & Jeeps",
        "3 meals/Daily",
        "Marriott Hotel",
        "PC Legacy",
        "Hard Rock Resort",
        "Luxus Atabad Resort",
        "Gilgit Serena",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    // cost: {
    //   size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
    //   deluxePackage: ["$1,600", "$1,500", "$1,400", "$1,300", "$1,200"],
    //   premiumPackage: ["$1,850", "$1,750", "$1,650", "$1,550", "$1,450"],
    // },
    // accommodation: "All Accommodations will be on double occupancy",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. Weather will be moderate in the rest of the country.",
    // mapImage: "",
  },
  // Hunza Photography Excursion PK23-04
  {
    id: "hunza-photography-excursion-pk23-04",
    title: "Hunza Photography Excursion",
    service_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/banner-2.jpg",
    category: [CATEGORIES.home],
    link: "package-tour/hunza-photography-excursion-pk23-04",
    provincesCovered: "Punjab & GB",
    price: "$2,600",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether that's the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. Our Hunza landscape photography excursion will take you on a journey through some of the most stunning locations in the region. You will have the opportunity to capture breathtaking shots of the Hunza Valley, Passu Cones, and Attabad Lake",
    overview: {
      //   location: "Islamabad & Skardu",
      people: "6+",
      // weather: "40",
      bestTime: "March → November",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/overview.jpeg"

    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/h-dawn.jpeg",
          title: "Dawn and dusks in the Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/h-heritage.jpeg", title: "Heritage of Hunza" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/h-moon.jpeg",
          title:
            "Brightening moon at Karimabad and all the way to the vast fields of Punjab",
        },
        { pic: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/h-attabad.jpg", title: "Serenity of Attabad and Borith Lake " },
        { pic: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/h-culture.jpeg", title: "Culture of different provinces" },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 1.jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAmdeed! Welcome to Islamabad, Pakistan's capital. Our representative will meet you at the airport and transfer you to your hotel, just 20-25 minutes away. Spend the day exploring or shopping, then join us for an arrival dinner where you'll meet your instructor and guide at a handpicked restaurant. After a pleasant evening, you may rest at your hotel.",
        "deluxeHotel": "Serena",
        "premiumHotel": "Marriott Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 2.jpg",
        title: "Gilgit & Minapin",
        description:
          "We’ll depart for Gilgit via a 45-minute flight from Islamabad early in the morning. The breathtaking flight offers views of high-altitude peaks and mountain ranges. Upon arrival, we’ll transfer to the Rakaposhi viewpoint for an afternoon photoshoot, followed by lunch. Later, we'll visit Minapin before returning to Rakaposhi for a spectacular sunset photoshoot. Afterward, return to Minapin for dinner and a review session with the instructor. Rest up for the next day's adventures.",
        "deluxeHotel": "PC Legacy",
        "premiumHotel": "Roomy Yurts",
        "activities": "Safari flight, afternoon, sunset & blue light shoot at Rakaposhi"

      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 3.jpeg",
        title: "Rakaposhi",
        description:
          "Enjoy an early morning sunrise shoot at Rakaposhi with various locations for capturing the majestic view. After breakfast, depart for Bikchum Ghutum, a 40-minute jeep ride from Minapin, to capture stunning views of Rakaposhi and Pisan glacier. Return to Minapin for rest before heading back to the Rakaposhi viewpoint for a sunset and blue light photoshoot. Dinner and review session with the instructor, followed by a night photography session at Rakaposhi. Return to the hotel for overnight stay.",
        "deluxeHotel": "PC Legacy",
        "premiumHotel": "Roomy Yurts",
        "activities": "Sunrise at Rakaposhi, afternoon shoot at Bikchum Ghutum, sunset & blue light at Rakaposhi"

      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 4.jpeg",
        title: "Duiker Point / Eagles Nest",
        description:
          "After a stunning sunrise shot at Rakaposhi from different angles, we will have breakfast. Then we will embark on an excursion to Duiker/Eagles Nest and transfer back to the hotel for some rest. In the afternoon, we will have a photoshoot at Eagles nest, which provides a panoramic view of Hunza and Nagar surrounded by 7000+m peaks. Lunch will be served at Duiker. We will cover the sunset and blue light photography from Duiker/Eagles Nest, followed by dinner and our daily review and brainstorming sessions. Overnight stay.",
        "deluxeHotel": "Hard Rock Resort",
        "premiumHotel": "Eagles Nest",
        "activities": "Sunrise from Rehman Abad, afternoon, sunset and blue light shoot at Eagles Nest"

      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 5.jpeg",
        title: "Duiker and Nagar Valley",
        description:
          "After a stunning sunrise shot at Duiker with views of 5 different 7000+m peaks, breakfast will be served. Rest for a while before departing for an afternoon shoot at Hopper valley in Nagar valley, a 1.5-hour drive from Karimabad. Photoshoot at hopper glacier and snow-covered peaks followed by lunch. Return to Eagles Nest for sunset and blue light photoshoot. Dinner and review session will be held followed by a bonfire and traditional musical night. A night shoot from the Duiker Point will be instructed by the tutor, with the option for time-lapse. Overnight stay.",
        "deluxeHotel": "Hard Rock Resort",
        "premiumHotel": "Eagles Nest",
        "activities": "Sunrise at Duiker Point, afternoon session at Hopper, sunset, blue light and night shoot at Duiker/Eagles Nest"

      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 6.jpeg",
        title: "Baltit and Altit Fort",
        description:
          "We will start the day with a heritage walk from Karimabad bazaar to Baltit Fort, where we will learn about Hunza Valley's history, culture, and traditions. After the tour, we will walk back to Karimabad bazaar for an excursion to Altit Fort, followed by a stop at Khabasi Café, an all-female-operated cafe. Later, we will take an evening walk in Altit Royal Gardens and return to Karimabad bazaar for some free shopping time. Dinner will be served at the hotel with traditional dance and music",
        "deluxeHotel": "",
        "premiumHotel": "Offto.pk",
        "activities": "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, Khabasi Café and traditional music and dances"

      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 7.jpg",
        title: "Upper Hunza",
        description:
          "Early breakfast after which we’ll depart for Passu Cathedral from Attabad lake. Check in at the resort. Afternoon photoshoot at Attabad lake, followed by a visit to Borith lake for a photoshoot of Ultar and Shispar Peak. Return for sunset and blue light photography at Passu cones, Passu peak and glacier. Dinner and review session with the instructor. Bonfire and traditional music by the lake. Overnight stay with the option for night photography at Attabad lake.",
        "deluxeHotel": "Luxus Attabad Resort",
        "premiumHotel": "Horizon Resort",
        "activities": "Sunset at Duiker, afternoon shoot at Attabad Lake & sunset at Passu Cones"

      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 8.jpeg",
        title: "Passu Cathedral & Khunjerab pass",
        description:
          "We will head out for a sunrise shoot from Zero Point to capture the stunning Passu cones and Passu glacier. After the shoot, we will return to the resort for breakfast and rest for a while. We will then embark on an excursion to Khunjerab Pass, the highest point of our journey, where we can capture breathtaking views of high pastures and peaks at a height of 5000m. On the way back, we will make a stop at Hussaini bridge to photograph the Passu Cones and bridge during the afternoon shoot. Later, we will visit the Glacier Breeze Cafe for lunch and tea, followed by evening shots of the Passu cones from there. After returning to the resort and freshening up, dinner will be served with a review session with the instructor. Night shoots will be held, and we will spend the night at the resort.",
        "deluxeHotel": "Luxus Atabad",
        "premiumHotel": "Famree",
        "activities": "Sunrise at Passu, afternoon shoot at Passu & Hussaini Bridge, sunset and night shoot at Passu Cones"

      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 9.jpg",
        title: "Upper Hunza to Gilgit",
        description:
          "We'll start the day with a sunrise shoot at Passu cones from Passu Village and Hussainabad before breakfast. After breakfast, we'll visit Gulmit village to explore the village life and cottage factories for carpets run by friendly women, an initiative taken by AKSDP for women empowerment in the region. We'll take a village to village walk from Gulmit to Ghulkin, capturing beautiful scenery along the way. We'll return to Attabad and depart for Gilgit, which is a 2.5-hour drive away. Upon arrival, we'll transfer to the hotel and hold a detailed review session with the instructor. Dinner will be served, followed by an overnight stay.",
        "premiumHotel": "Gilgit Serena",
        "activities": "Sunrise at Passu Cones and Village walk"
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 10.jpg",
        title: "Islamabad and Monal",
        description:
          "After breakfast, we’ll transfer to the airport and fly to Islamabad with stunning views of the Himalayas and Karakoram range. Check-in at the hotel and embark on a short city tour of Islamabad, including the Pakistan Monument and Faisal Masjid for afternoon photography. Then, we’ll visit Monal Margalla hills for a panoramic sunset photography of Islamabad and Rawalpindi. Enjoy dinner at Monal restaurant before returning to the hotel for an overnight stay.",
        "premiumHotel": "Marriott Hotel",
        "activities": "Flight safari, Islamabad city tour, Lok Virsa Museum and Monal"
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-photography-excursion-pk23-04/Day 11.png",
        title: "Day of Departure",
        description:
          "After breakfast, we’ll  transfer to the airport and fly to Islamabad with stunning views of the Himalayas and Karakoram range. Check-in at the hotel and embark on a short city tour of Islamabad, including the Pakistan Monument and Faisal Masjid for afternoon photography. Then, we’ll visit Monal Margalla hills for a panoramic sunset photography of Islamabad and Rawalpindi. Enjoy dinner at Monal restaurant before returning to the hotel for an overnight stay.",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Departure to your country"
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ GLT",
        "Meals",
        "2 Nights Islamabad",
        "2 Nights Minapin",
        "3 Nights Central Hunza",
        "2 Nights Upper Hunza",
        "1 Night Gilgit",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or any other activity",
      ],
      deluxePackage: [
        "Toyota Coaster & Jeeps",
        "3 Meals/Daily",
        "Roomy Islamabad",
        "Marriott Hotel",
        "PC Legacy",
        "Eagles Nest",
        "Famree Resort",
        "Ramada Gilgit",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Coaster & Jeeps",
        "3 meals/Daily",
        "Roomy Islamabad",
        "Marriott Hotel",
        "PC Legacy",
        "Hard Rock Resort",
        "Luxus Atabad Resort",
        "Gilgit Serena",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    // cost: {
    //   size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
    //   deluxePackage: ["$1,600", "$1,500", "$1,400", "$1,300", "$1,200"],
    //   premiumPackage: ["$1,850", "$1,750", "$1,650", "$1,550", "$1,450"],
    // },
    // accommodation: "All Accommodations will be on double occupancy",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. Weather will be moderate in the rest of the country.",
    // mapImage: "",
  },
  // Skardu Photography Excursion PK23-05
  {
    id: "skardu-photography-excursion-pk23-05",
    title: "Skardu Photography Excursion",
    service_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-dawn.jpeg",
    category: [CATEGORIES.home],
    link: "package-tour/skardu-photography-excursion-pk23-05",
    provincesCovered: "Punjab  & GB",
    price: "$2,600",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether that is the  landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts, surrounded by the beautiful Margalla Hills. Our Skardu landscape photography excursion offers a unique opportunity to capture the stunning natural beauty of Gilgit-Baltistan. Starting with a flight from Islamabad to Skardu.",
    overview: {
      location: "Skardu Valley",
      people: "6+",
      // weather: "40",
      bestTime: "June → September",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/overview.jpeg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-shangrila.jpg",
          title:
            "Shangri La Resorts in the Lower Kachura Lake and its fruit-filled gardens",
        },
        { pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-dawn.jpeg", title: "Dawn and dusks at the Indus River" },
        { pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-down.jpg", title: "Down the hills to visit Kharpocho Fort" },
        {
          pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-moon.jpg",
          title: "Brightening moon at Katpana Desert sand dunes",
        },
        { pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-lake.jpg", title: "Serenity of Satpara Lakes" },
        { pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-deosai.jpg", title: "Wildlife watch at Deosai National Park" },
        { pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-heritage.jpeg", title: "Heritage & History of Skardu " },
        { pic: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/h-food.jpg", title: "Amazing food the country has to offer" },
      ],
    },
    iternaries_img: skardu_iternary.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 1.png",
        title: "Arrival at Islamabad",
        description:
          "KhushAmdeed! Welcome to Islamabad, Pakistan's capital. Our representative will meet you at the airport and transfer you to your hotel, just 20-25 minutes away. Spend the day exploring or shopping, then join us for an arrival dinner where you'll meet your Instructor and Guide at a handpicked restaurant. After a pleasant evening, rest at the hotel for the next day.",
        "deluxeHotel": "Serena Hotel",
        "premiumHotel": "Marriott Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 2.jpg",
        title: "Islamabad to Skardu",
        description:
          "Early morning breakfast will be served. We’ll depart for Skardu via a 1-hour flight from Islamabad. Arrive at Skardu airport and transfer to Byarsa Resort. Meet with the instructor and receive instructions for the day. Visit Upper Kachura lake, a 30-minute trek with stunning views of the lake and mountains. Return to the resort for lunch, then head to Katpana to capture the sunset at Katpana lake and Kaptana cold desert, one of the highest in the world. After dinner, there will be a short review session with the instructor before returning to the resort for an overnight stay.",
        "premiumHotel": "Byarsa Hotel",
        "activities": "Air safari, afternoon and daylight shoot at upper & lower Kachura lake, sunset at Katpana desert"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 3.jpg",
        title: "Basho Valley",
        description:
          "Katpana Desert is a great spot for sunrise photography. The early morning light creates a beautiful and surreal atmosphere, with the sunlight casting a warm glow over the sand dunes and highlighting the unique textures and shapes of the rock formations. The rugged terrain provides an excellent opportunity to capture stunning shots of the dunes with the sun rising behind them. Breakfast will be served. Our location for today's shoot is Basho Valley. Basho valley is located in Roundu Division of Skardu District, Gilgit Baltistan. The Basho Valley, with its beauty, majestic snow-capped mountains, and primitive charm is ideal for Photography, offering a plethora of stunning subjects and picturesque settings. From the majestic peaks of the Himalayas to the serene glacial lakes, verdant terraced fields, and charming traditional villages, the valley is an endless source of photographic inspiration. Return to the hotel. Dinner followed by a review session. Overnight stay.",
        "premiumHotel": "Byarsa Hotel",
        "activities": "Sunrise at Katpana desert, Day shoot at Basho valley and off-roading jeep trails"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 4.jpg",
        title: "Indus River Banks to Deosai Plains",
        description:
          "Visit the Indus bank to capture the sunrise, return to the hotel and breakfast will be served. Excursion to Deosai plains which will be our next location to capture for the next two days. In between there will be a short stopover at Satpara Lake for a few quick shots. We’ll continue our journey to Deosai plains where we will be staying at Glamps for the next 2 nights. Deosai, the 'Land of Giants', offers a visual feast for photographers. Capture the vastness of its rolling grasslands, awe-inspiring peaks, and unique wildlife. Let your lens explore the beauty of Deosai, a world above the clouds. Our location of stay itself is perfect for sunset capture and for night photography. Dinner followed by a review session with the instructor. Overnight stay.",
        "premiumHotel": "Glamp Pakistan",
        "activities": "Sunrise shoot at Katpana, off-road journey to Deosai plains, Sunset and Night shoot from Glamps"
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 5.jpg",
        title: "Deosai plains",
        description:
          "Early morning sunrise shoot at Bara Pani and surrounding viewpoints. Breakfast will be served. Excursion to Sheosar Lake and Kala Pani. The turquoise waters of Sheosar Lake, surrounded by towering peaks and lush vegetation, make for a stunning photographic subject. Our instructor will guide us to the right points to capture the lake and Nanga Parbat in the background, the 9th highest peak in the world. Wildlife photography enthusiasts can look forward to capturing images of the plains' unique fauna, including the Himalayan brown bear, markhor, and snow leopard. Return to the Glamps, rest for a while. Deosai Plains offer an ideal location for night sky photography, with minimal light pollution providing a clear view of the stars and Milky Way.",
        "premiumHotel": "Glamp Pakistan",
        "activities": "Sunrise shoot, Day shoot at Kala Pani and Sheosar lake, Night photography"
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 6.jpg",
        title: "Shigar valley",
        description:
          "Breakfast will be served in the early morning after which we will be taking the morning shots from our resort and nearby spots. Today we will be returning to Skardu and head towards our next picturesque location. Shigar Valley is a prime location for photography enthusiasts, offering a diverse range of subjects like majestic mountain landscapes, glaciers, traditional villages, and rich cultural heritage for capturing stunning imagery in landscape, nature, cultural or documentary photography. Tour of and photoshoot at Shigar fort. Lunch will be served. We will head to Sarfaranga Desert for our sunset shoot and head back to the hotel. Review session will be conducted followed by Dinner. Overnight stay.",
        "premiumHotel": "Byarsa Hotel",
        "activities": "Sunrise shoot from the glamp site, afternoon shoot at Shigar viewpoint & sunset at Sarfaranga desert"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 7.jpg",
        title: "Ghanche District & Khaplu",
        description:
          "Early morning breakfast and excursion to a nearby view point to capture the sunrise. Return to the hotel for breakfast. Today we will be moving to Khaplu valley for the next 2 days. We will leave for Ghanche District where we will visit Bara Lake for photography. Continue journey towards Khaplu. Transfer to Khaplu fort, rest for a while. Trek to Thoksikhar mosque of around 40 mins to capture the sunset on Haldi cones. We will cover blue light shoots at Haldi cones. Return to Khaplu. Freshen up and dinner will be served. We will have a review session with the instructor and brainstorming for the next day's shoot. Overnight stay in Khaplu.",
        "premiumHotel": "Khaplu Serena",
        "activities": "Sunrise at Sarfaranga, afternoon shoot at Bara Lake & sunset at Haldi Cones"
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 8.jpeg",
        title: "Khaplu & Machlu Valley",
        description:
          "After an early morning breakfast, we’ll capture the sunrise from the bank of Shyok river on Haldi cones. Return to the resort for breakfast and to freshen up. We will move to our next location for a day trip. Machlu Valley in Pakistan is a hidden gem for photography enthusiasts, known for its picturesque landscapes, traditional way of life, and stunning waterfall. Located in the Karakoram mountain range, the valley is an ideal location for landscape, nature, and cultural photography. It offers a wide variety of subjects for photographers to capture, from traditional villages, mountain vistas to the daily life of the local communities. Excursion to Haldi cones to capture the beautiful sunset and blue light. Return to Khaplu fort. Dinner will be served, and a review session will be conducted. Overnight stay in Khaplu Serena.",
        "premiumHotel": "Khaplu Fort",
        "activities": "Sunrise at Shyok River, Day shoot in Machlu Valley & sunset at Haldi cones"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 9.jpg",
        title: "Shangrila & Soq Valley",
        description:
          "Early morning departure to Khaplu Broq which has a jeep trek of 40 minutes. We will cover a beautiful sunrise there. An optional trek can also be done to capture some amazing views. Return to Khaplu, where breakfast will be served. We will depart for Kharmang district for an afternoon shoot. In the month of September the water level of the Indus river decreases which gives us an opportunity to see the unique rocks. Photography can be done there. Return to Skardu which will take approx. 2 hours to reach back, and transfer to Lower Kachura lake. Time lapse and low filter photography at a nearby bridge while returning. To capture the sunset on Lower Kachura and Shangri-La resort we will hike towards a higher altitude, a short trek of 10 to 15 minutes.  Sunset and night shots can be captured here. A complete review session, where your photos will be reviewed by the instructor. Leisure time with traditional live music. Dinner will be served, overnight stay.",
        "premiumHotel": "Byarsa Hotel",
        "activities": "Indus rocks, Mehdi Abad & Shangri-La and Soq Valley"
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 10.jpg",
        title: "Islamabad and Monal",
        description:
          "Breakfast will be served at the hotel. Transfer to the airport for our  flight to Islamabad, flying over the majestic Himalayas and Karakoram range. Arrival at Islamabad and check in at the hotel.  A short city tour of Islamabad, where we will cover the beautiful Pakistan Monument and Faisal Masjid for amazing afternoon photography. We will leave for Monal for sunset photography where you will get a panoramic view of Islamabad and Rawalpindi. Later, dinner will be arranged at Monal restaurant. Return to the hotel. Overnight stay in Islamabad.",
        "premiumHotel": "Marriott Hotel",
        "activities": "Flight safari, Islamabad city tour, Lok Virsa Museum and Monal."
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/skardu-photography-excursion-pk23-05/Day 11.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. We’ll visit Saidpur Village and lunch will be served at a handpicked restaurant by our team. There will some time for shopping at Centaurus mall and later transfer to the airport with lots of memories to cherish forever.",
        "activities": "Departure to your country "
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ KDU",
        "Meals",
        "2 Nights Islamabad",
        "4 Nights Skardu",
        "2 Nights Deosai Plains",
        "2 Nights Khaplu Valley",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or any other activity",
      ],
      deluxePackage: [
        "Toyota Land Cruisers & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Dynasty Hotel",
        "Glamp Pakistan",
        "Serena Kahplu",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Land Cruisers & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Byarsa Hotel",
        "Glamp Pakistan",
        "Serena Khaplu",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },

  // =========================================================
  //  Religious Tours
  // =========================================================

  // PK23-13 Sikh Yatra
  {
    id: "pk23-13-sikh-yatra",
    title: "Sikh Yatra",
    service_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/cover.jpg",
    category: [CATEGORIES.home],
    link: "package-tour/pk23-13-sikh-yatra",
    provincesCovered: "Federal & Punjab",
    price: "$1,700",
    days: "8",
    description:
      "Pakistan is a mystical land of faith and heritage, and in the spiritual Punjab, history, religion, and culture converge beautifully. Travelling through Sheikhupura, Lahore, Hassan Abdal, and the fairy-tale regions of the snow-clad Himalayas, you will learn the history, experience the culture, and appreciate the influences of nature on the soul. Witness traditional Sikh ceremonies and experience ritualistic rites at temples, villages, and even at the residence of faithful followers.",
    overview: {
      //   location: "Islamabad & Skardu",
      people: "16",
      // weather: "40",
      bestTime: "September → May",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/h-dawn.jpg",
          title: "Dawn and dusks in the the Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/h-heritage.jpeg", title: "Heritage of Hunza, Lahore and Sindh" },
        {
          pic: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/h-moon.jpg",
          title: "Brightening moon at Karimabad and all the fields of Punjab",
        },
        { pic: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/h-attabad.jpg", title: "Serenity of Attabad and Borith Lake " },
        { pic: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/h-culture.jpeg", title: "Culture of different provinces" },
        {
          pic: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/h-food.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/Day 1.jpeg",
        title: "Arrival at Lahore",
        description:
          "KhushAmdeed! Welcome to Pakistan. Please pass customs and collect your luggage upon arrival at Lahore International Airport before seeking our agent. You will be taken to your hotel, which is conveniently located at a 20-25 minutes drive from the airport terminal. Transfer to the hotel, refresh yourself, and then travel out to see Gurdwara Dehra Sahib, Lahore Fort, and Samadhi Maharaja Ranjit Singh. Overnight stay in Lahore. Dinner will be served at a great restaurant, following which you may relax.",
        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Arrival Dinner"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/Day 2.jpeg",
        title: "Kartarpur (Gurdwara Darbar Sahib)",
        description:
          "The hotel will offer breakfast. After breakfast, proceed for the Gurdwara Yatra of Kartarpura. Gurdwara Darbar Sahib Kartarpur Sahib is a Gurdwara in Shakargarh, Narowal District. It is a popular tourist destination for those visiting Pakistan. The shrine is five kilometers from the India-Pakistan border. We’ll return to Lahore in the afternoon and visit Anarkali Bazaar. Anarkali has a distinct personality. It is named after a slave girl who, according to mythology, was drowned by Mughal Emperor Akbar for having an affair with his son Salim. The market is in the heart of Lahore. Later, we’ll head to a hotel in Lahore for supper and an overnight stay.",
        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Visit Gurdwara Darbar Sahib, visit places in Central Lahore"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/Day 3.jpg",
        title: "Nankana Sahib & Saucha Sheikhupura",
        description:
          "The hotel will offer breakfast. We’ll visit Mian Mir Tomb & Wagah Ceremony, Janam Asthan Guru Ram Das Ji, Bhai Taru Singh, and other local gurdwaras in Lahore for the entire day. Rather than shaving his hair or converting to Islam, Bhai Taru Singh, a well-known Sikh martyr, had his head scalped as a sign of his death for upholding Sikh principles. Lahore's Janam Asthan Guru Ram Das is a Gurdwara. Shrine of Mian Mir is a 17th-century shrine in Lahore dedicated to the Sufi mystic Mian Mir, the fourth Sikh Guru. The Gurdwara was constructed on the spot that is conventionally thought to be the birthplace and boyhood home of Guru Ram Das. The shrine is among the most well-known in Lahore and has long been held in high regard by Sikhs and Muslims alike. Since 1959, India and Pakistan's security forces have conducted a daily military ritual known as the Wagah Ceremony. It represents both the competition and the fraternity and collaboration between the two countries. Every evening, right before dusk, this ritual is held at the Wagah-Attari Border. Later, we’ll transfer to a hotel for dinner and overnight stay in Lahore.",

        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Visits of Gurdwaras and Janam Asthan Guru Ram Das Ji"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/Day 4.jpg",
        title: "Lahore → Islamabad",
        description:
          "After breakfast at the hotel, take a beautiful drive down the G.T. Road to Islamabad from Lahore. While travelling, stop at historical sites such as Lalo de Khoi at Eminabad, Gujranwala, Rohri Sahib and Chaki Sahib. Discover how the history of the town during Mughal Emperor Babar's time is connected to the presence of Guru Nanak at Gurdwara Rohri Sahib. See the importance of the Gurdwara Chakki Sahib, which honors the miraculous grinding of maize by Guru Nanak when he was held captive by the warriors of Babar. Visit Gurdwara Khuhi Bhai Lalo next, which is connected to the status of Guru Nanak in the 1500s. Proceed to Deena and, following lunch, see the UNESCO-listed Rohtas Fort, an outstanding example of Pashtun era architecture. Drive to Islamabad, check into the hotel, have dinner and spend the night there.",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Gurdwara Khuhi, Gurdwara Chakki"
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/Day 5.jpg",
        title: "Islamabad → Hasanabdal (Panja Sahib)",
        description:
          "Breakfast will be served at the hotel. Drive to Hassan Abdal, a historic town in Northern Punjab, Pakistan. It is located where the Grand Trunk Road meets the Karakoram Highway. In 1521, the founder of the Sikh faith, Guru Nanak arrived in Hassan Abdal, and a Gurdwara was built on the spot that he stayed containing a sacred rock that is believed to contain the handprint of Guru Nanak. Return to Islamabad. Short city tour of the capital city of Pakistan. Dinner at Monal restaurant with a panoramic view of the twin cities. Overnight stay.",
        "premiumHotel": "Ambiance Hotel",
        "activities": "Drive to Hasanabdal, excursion to Gurdwara Panja Sahib"
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/Day 6.jpg",
        title: "Islamabad → Lahore",
        description:
          "The hotel will offer breakfast. We will take a quick tour of Islamabad's city, stopping at the Faisal Mosque, Pakistan Monument and Saidpur village. Drive to Lahore, which is a 4 hour drive with a short stopover for lunch at Behra. Upon arrival at Lahore, transfer to your hotel. Head out for dinner and explore the nightlife of Lahore (optional). Overnight stay.",
        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Islamabad city tour, drive to Lahore & shopping"

      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/Day 7.jpg",
        title: "Lahore Exploration",
        description:
          "Enjoy breakfast at the hotel before seeing Lahore's extensive history. Discover the magnificent Badshahi Mosque, the pinnacle of Mughal construction, the magnificence of Lahore Fort, which is home to buildings like Moti Masjid and Sheesh Mahal, ancient structures, markets, and monuments of Lahore's Walled City as you immerse yourself in its cultural tapestry in the afternoon. Overnight stay in Lahore.",
        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Badshah-e-Masjid tour, Minar-e-Pakistan, Red fort and Lahore Food Street"
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/pk23-13-sikh-yatra/Day 8.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Free time for leisure and shopping in local handicraft shops, malls and marketplaces. Transfer to the airport with lots of memories to cherish forever.",
        "premiumHotel": "",
        "activities": "Departure to your country"
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Meals",
        "2 Nights Islamabad",
        "5 Nights Lahore",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum or any other activity",
      ],
      deluxePackage: [
        "Toyota Coaster",
        "3 Meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Luxus Grand Hotel",
        "Nishat Hotel",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "$1,700",
      ],
      premiumPackage: [
        "Toyota Coaster",
        "3 meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Luxus Grand Hotel",
        "Nishat Hotel",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "$1,900",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    // cost: {
    //   size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
    //   deluxePackage: ["$1,600", "$1,500", "$1,400", "$1,300", "$1,200"],
    //   premiumPackage: ["$1,850", "$1,750", "$1,650", "$1,550", "$1,450"],
    // },
    accommodation: "All Accommodations will be on double occupancy",
    // essential:
    //   "Warm Clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",
    // mapImage: "",
  },

  // PK24-14  Sacred Trails: Exploring the Gandhara Civilization
  // pending: true,
  // images_available: false,
  // {
  //   pending: true,
  //   images_available: false,
  //   id: "pk24-14-sacred-trails",
  //   title: "Exploring the Gandhara Civilization",
  //   service_img: hunza_banner,
  //   link: "package-tour/pk24-14-sacred-trails",
  //   provincesCovered: "Federal & KPK",
  //   price: "$1,500",
  //   days: "9",
  //   description:
  //     "Pakistan is a mystical land of faith and heritage. The tour starts in Islamabad and on to Taxila and Peshawar, where ancient Buddhist remains and artifacts are discovered. Once a major Buddhist center, Swat Valley presents a cultural tapestry made of Butkara Stupa and Udegram. A UNESCO World Heritage monument, Takht-i-Bahi represents the pinnacle of Gandharan devotion. ",
  //   overview: {
  //     people: "12-16",
  //     bestTime: "September → May",
  //     recommendation: "Highly recommended",
  //   },
  //   experiences: {
  //     experience_points: [
  //       {
  //         pic: swat_place_1,
  //         title: "Serenity of the capital of Pakistan (Islamabad)",
  //       },
  //       {
  //         pic: swat_place_1,
  //         title: "Explore the UNESCO World Heritage site of Taxila.",
  //       },
  //       {
  //         pic: swat_place_1,
  //         title: "Journey to Peshawar, a historical city linked to Gandhara.",
  //       },
  //       {
  //         pic: swat_place_1,
  //         title:
  //           "Discover Udegram and Butkara Stupa, revealing Swat's rich cultural heritage.",
  //       },
  //       {
  //         pic: swat_place_1,
  //         title: "Visit Takht-i-Bahi, a UNESCO World Heritage site.",
  //       },
  //       {
  //         pic: swat_place_1,
  //         title: "Immerse in local culture and archaeological sites.",
  //       },
  //       {
  //         pic: swat_place_1,
  //         title: "Experience the vibrant tapestry of modern communities.",
  //       },
  //     ],
  //   },
  //   iternaries_img: hunza_iternaries.src,
  //   iternaries: [
  //     {
  //       id: 0,
  //       iternaries_img: swat_place_1.src,
  //       title: "Arrival at Islamabad",
  //       description:
  //         "KhushAmdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. After a brief check-in, guests will go on a guided tour to Mankiala Stupa, a stupa constructed as a memorial to the Jataka stories about Buddha that is about a 45 minute drive from the hotel.",
  //       "premiumHotel": "Ambiance Hotel",
  //       "activities": "Arrival Dinner"
  //     },
  //     {
  //       id: 1,
  //       iternaries_img: swat_place_1.src,
  //       title: "Buddhist History in Taxila",
  //       description:
  //         "Breakfast will be served at the hotel. The visitors will head to the Taxila Museum, which is a 56 minute drive from the hotel. The museum is home to an extensive collection of artifacts that were gathered from the ancient Taxila ruins. In 300 BCE, Taxila was the provincial capital of the Mauryan empire, and literature from Sanskrit, Pali, Greek, Roman, and Chinese sources all make reference to it. The next destination is the Julian Monastery, a dilapidated Buddhist monastery about 17 minutes from the museum in Haripur District. Following their exploration of the monastery's Buddhist impact, the visitors will go to Sirkap, Taxila's second city.",
  //       "premiumHotel": "Ambiance Hotel",
  //       "activities": "Visit Taxila, UNESCO sites & Islamabad city tour"
  //     },
  //     {
  //       id: 2,
  //       iternaries_img: swat_place_1.src,
  //       title: "Buddhist Exploration in Peshawar",
  //       description:
  //         "The visitors will head to the Hund Museum after breakfast. This museum, which lies close to the Indus River, houses jewelry, coinage, and everyday objects from the Indo-Greek era. Alexander's crossing of the Indus River enroute to his conquest of India is marked by the museum. Our next trip is the Ranigat Buddhist Ruins, an archaeological site that served as a long-term cradle for Buddhist arts and culture. It takes us about an hour to get there by car. Poems, songs, folktales, and legends from the area frequently feature the location. Our tour guides are knowledgeable on the fascinating history of these locations, and their tales will pique your interest and leave you wanting more.",
  //       "deluxeHotel": "Serena Hotel",
  //       "premiumHotel": "Crossroads",
  //       "activities": "Explore the historical chapters of Buddhis, Visit Ranigat ruins and Buddhist sites"
  //     },
  //     {
  //       id: 3,
  //       iternaries_img: swat_place_1.src,
  //       title: "Trace Back to the Origins of Buddhism in Swat",
  //       description:
  //         "You will visit the Peshawar Museum after breakfast and then head to Swat. The visitors will have a stop at Takht-i- Bahi, an Indo-Parthian archaeological site with relics of an old Buddhist monastery, on the route to Swat. Explore the early years of one of the world's most popular faiths and learn about its beginnings via eye-catching visuals. Our next destination at Chakdara Bridge is about an hour and forty minutes away by car. Our tourists get the full Gandharan experience from this bridge, which is close to several Hindu Shahi and Buddhist monuments. Transfer to your hotel. Dinner will be served in all the traditional ways of the Swat region. Overnight stay.",
  //       "deluxeHotel": "Hotel White Palace",
  //       "premiumHotel": "Serena Hotel",
  //       "activities": "Dive into the most dominant religions in the world & trace back to the origins"

  //     },
  //     {
  //       id: 4,
  //       iternaries_img: swat_place_1.src,
  //       title: "Ruins of the Buddhist sites & Stupas",
  //       description:
  //         "Following breakfast, the visitors will go to the Butkara Stupa and the Swat Museum. The stupa was granted monument status due to its Hellenistic architectural accents, which are typical of Greco-Buddhist architecture. It is believed that the stupa was erected by the Mauryan King Ashoka. We will go to see Saidu Sharif after Butkara, a twenty-seven minute drive away. Witness the opulence of the White Palace Tourist Resort, a magnificent marvel constructed in 1940 for the previous Swat monarch out of white marble. We then proceed to Miandam Hill for a peaceful nature escape, swimming, and exciting canyoning.",
  //       "deluxeHotel": "Hotel White Palace",
  //       "premiumHotel": "Serena Hotel",
  //       "activities": "Witness the grandeur of white palace and UNESCO sites & Stupas"

  //     },
  //     {
  //       id: 5,
  //       iternaries_img: swat_place_1.src,
  //       title: "Fizaghat to Kalam",
  //       description:
  //         "After breakfast, depart early in the morning for Kalam valley. Our journey will be approx. 3 hours travelling along the Swat River. The main attraction in the Upper Swat is Kalam. Enroute we will make short stopovers at Bahrain and Madyan for trout farms, lunch will be at a trout farm. We will continue our journey to Kalam. Transfer to hotel, free time for leisure, where dinner will be served. Overnight stay.",
  //       "deluxeHotel": "Walnut Heights",
  //       "premiumHotel": "Greens",
  //       "activities": " Madyan Trout farm, Photo stops"

  //     },
  //     {
  //       id: 6,
  //       iternaries_img: swat_place_1.src,
  //       title:
  //         "Mahodand lake, Ushu Forest, Mitaltian waterfall & Saifullah lake",
  //       description:
  //         "Early morning breakfast will be served. Today we will explore the beauty of Kalam in a jeep safari. We will start our journey with Ushu forest, sightseeing and photo stops, and an excursion to Mohdand lake. In between, we will stop at Mitaltian waterfall, arrive at Mahodand lake, go boating and do some water sports. We will spend our afternoon on this beautiful lake. Excursion to Saifullah lake for a photo session. Return to Kalam. BBQ will be served for dinner with a bonfire. Overnight stay.",
  //       "deluxeHotel": "Walnut Heights",
  //       "premiumHotel": "Greens",
  //       "activities": " Ushu forest walk, Mitaltian waterfall, boating in Mahodand lake and Saifullah lake."
  //     },
  //     {
  //       id: 7,
  //       iternaries_img: swat_place_1.src,
  //       title: "Kalam to Islamabad",
  //       description:
  //         "Early morning breakfast will be served, after which we will depart for Islamabad. We will travel 235 km back to the capital city through the motorway. Lunch will be served on the way. Upon arrival and after check into the hotel, rest and leisure or perhaps head out for a farewell dinner. Overnight stay.",
  //       "deluxeHotel": "Walnut Heights",
  //       "premiumHotel": "Greens",
  //       "activities": "Short stopovers, Long road Journey, Farewell Dinner"

  //     },
  //     {
  //       id: 8,
  //       iternaries_img: swat_place_1.src,
  //       title: "Day of Departure",
  //       description:
  //         "Breakfast will be served at the hotel. Free time for leisure and shopping in local handicraft shops, malls and marketplaces before you are transferred to the airport for your returning flight home.",
  //       "deluxeHotel": "",
  //       "premiumHotel": "",
  //       "activities": "Departure to your country"
  //     },
  //   ],
  //   includes: {
  //     services: [
  //       "Transportation",
  //       "Meals",
  //       "3 Nights Islamabad",
  //       "1 Night Peshawar",
  //       "2 Nights Fizaghat",
  //       "2 Nights Kalam",
  //       "Souvenirs",
  //       "Arrival & Farewell Dinner",
  //       "Traditional Musical Night with BBQ Dinner",
  //       "English Speaking Guide",
  //       "Driver, Guide, Toll, Parking Expense",
  //       "Entry to all forts, Museum or any other activity",
  //     ],
  //     deluxePackage: [
  //       "Toyota Coaster",
  //       "3 Meals/Daily",
  //       "Roomy Signature",
  //       "Marriott Hotel",
  //       "Crossroads Hotel By Roomy",
  //       "White Palace Hotel",
  //       "Greens Hotel by Roomy",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "$1,500",
  //     ],
  //     premiumPackage: [
  //       "Toyota Coaster",
  //       "3 meals/Daily",
  //       "Roomy Signature",
  //       "Marriott Hotel",
  //       "Serena Hotel",
  //       "Serena Hotel",
  //       "Walnut Heights by Roomy",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "$1,800",
  //     ],
  //   },
  //   notIncluded: [
  //     "Round Trip international flight to Islamabad",
  //     "Visa application and fees",
  //     "Cancellation / Travel Insurance and Emergency Medical Insurance",
  //     "Photographic insurance",
  //     "Alcoholic beverages and soft drinks",
  //     "Personal expenses",
  //   ],
  //   accommodation: "All Accommodations will be on double occupancy",
  // },


  // =========================================================
  //  Skardu
  // =========================================================

  // Autumn in Skardu & Lahore
  {
    id: "autumn-in-skardu-and-lahore",
    title: "Autumn in Skardu & Lahore",
    category: [CATEGORIES.skardu, CATEGORIES.lahore],
    service_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/banner.jpg",
    link: "package-tour/autumn-in-skardu-and-lahore",
    provincesCovered: " Punjab, KPK & GB",
    price: "$1,150",
    days: "10",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. This travel itinerary offers a unique opportunity to explore the natural beauty, rich culture, and history of Pakistan. From the stunning Himalayan peaks of Skardu and Khaplu to the bustling streets and ancient sites of Lahore.",
    overview: {
      location: "Islamabad, Skardu & Lahore",
      //   people: "16",
      // weather: "40",
      bestTime: "September → October",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/banner-2.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-islamabad.jpeg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-lake.jpg",
          title:
            "Shangri-La Resorts in the Lower Kachura Lake and its fruit-filled gardens",
        },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-dawn.jpg", title: "Dawn and dusks at the Indus River" },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-down-hill.jpg", title: "Down the hills to visit Kharpocho Fort" },
        {
          pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-moon.jpg",
          title: "Brightening moon at Katpana Desert sand dunes",
        },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-satpara-lake.jpg", title: "Serenity of Satpara Lakes" },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-basho.jpg", title: "Basho and Chunda valley" },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-history.jpeg", title: "Heritage & History of Skardu " },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/h-food.jpeg", title: "Amazing food the country has to offer" },
      ],
    },
    iternaries_img: skardu_iternary.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 1.jpeg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Upon arrival in Islamabad, you'll be met by Facing North representatives and transferred to your hotel. After settling in and relaxing from your flight, you can take a half-day city tour. In the evening, you'll enjoy a delicious dinner at the renowned Monal Restaurant, which offers stunning panoramic views of Islamabad and Rawalpindi. Nestled against the pristine Margalla hills, this restaurant is considered the best in Islamabad and voted one of the most romantic restaurants in the city. You'll also receive a brief introduction to Pakistani cuisine and the upcoming tour. Activities: Quick Tour Islamabad",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Marriott Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 2.jpeg",
        title: "Islamabad to Skardu (Khaplu)",
        description:
          "After an early morning breakfast, depart for Skardu. You'll be transferred to the airport for your 1-hour flight from Islamabad, which offers breathtaking views of high-altitude peaks and mountain ranges, including Nanga Parbat, the 9th highest peak in the world. Upon arriving at Skardu airport, we’ll depart for Khaplu Valley, a drive of 3 hours. In between, we'll visit a sailing village and fish farms in Ghanche District before taking an excursion to Khaplu. This beautiful valley of the Shyok River is 103 km east of Skardu and the starting point for many trekking and climbing expeditions. Visit the Chaqchan Mosque, one of the earliest mosques in Baltistan (1504 AD) attributed to Syed Ali Hamdani. Upon arrival check into Khaplu Serena, you’ll get a short guided tour of Khaplu Fort. Leisure for the evening or perhaps explore the town. Dinner will be served at the resort. Overnight stay. Activities: Flight to Skardu, Ghanche district, Khaplu fort, Chaqchan Mosque & sailing village tour.",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": "Khoj Resorts",
        "activities": "Kharpocho Fort, air safari & Cold desert"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 6.jpeg",
        title: "Sailing and Machlu valley",
        description:
          "After an early morning breakfast, visit the scenic Sailing and Machlu valleys, known as the gems of Khaplu district, surrounded by snow-covered peaks, lush green valleys, and white-water streams. Enjoy leisurely relaxation and the beautiful autumn colors of Machlu. Return to Khaplu Fort, visit nearby viewpoints, and enjoy dinner. Stay overnight at Khaplu Serena. Activities: Sailing valley and Machlu valley",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": "Khoj Resorts",
        "activities": "Jeeps safari, Basho Valley"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 7.jpeg",
        title: "Manthoka waterfall, & Kharmang District",
        description:
          "After breakfast, visit Manthoka waterfall for sightseeing and a photo session. Visit Mehdi Abad and its beautiful water streams before returning to Skardu. Stop to see the Buddha carving rock and then transfer to Lower Kachura lake. Lunch at Shangrila resort. Visit Upper Kachura lake for some boating and leisure. Return to your hotel. Dinner will be served, overnight stay. Activities: Manthoka waterfall, Mehdi Abad & Shangri-La and Lower Kachura lake.",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": "Khoj Resorts",
        "activities": "Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar Fort"
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 3.jpg",
        title: "Basho Valley",
        description:
          "After an early morning breakfast, enjoy a day tour of Basho Valley, a 2-hours off-road drive from Skardu. Basho Valley offers picturesque views of the landscape and freshwater streams flowing down from snow-capped mountains. Take short walks and treks around the valley to experience the stunning autumn colours. Return to Skardu in the evening and enjoy leisure time for the night. Dinner will be served, and you'll spend the night at the hotel. Activities: Jeeps safari, Basho Valley",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": "Khoj Resorts",
        "activities": "Jeeps safari, Basho Valley"

      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 4.jpg",
        title: "Shigar valley",
        description:
          "After breakfast, depart for Shigar Valley, crossing the Sarfaranga cold desert, which serves as the gateway to the great mountain peaks of the Karakoram. Visit the wooden mosque in the town of Shigar, the largest settlement in the valley. See Shigar Fort, restored by the Aga Khan Foundation and Serena Hotels, and take an excursion to the Shigar Valley and Jarba Xho hike (optional). Return to Skardu in the evening, and enjoy dinner at the hotel before spending the night. Activities: Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": "Khoj Resorts",
        "activities": "Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar Fort"
      },

      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 5.jpg",
        title: "Ghanche District & Khaplu",
        description:
          "After an early morning breakfast, we'll visit a sailing village and fish farms in Ghanche District before taking an excursion to Khaplu. This beautiful valley of the Shyok River is 103 km east of Skardu and the starting point for many trekking and climbing expeditions. Visit the Chaqchan Mosque, one of the earliest mosques in Baltistan (1504 AD) attributed to Syed Ali Hamdani. Transfer to Khaplu Fort, restored by the Aga Khan Cultural Service and Serena Hotels, and take a tour of Khaplu Valley before returning to the fort for an overnight stay.",
        "deluxeHotel": "",
        "premiumHotel": "Khaplu Serena",
        "activities": "Jeep safari, Ghanche District, Khaplu Fort, Chaqchan Mosque & sailing village tour"

      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 8.jpeg",
        title: "KDU-LHR",
        description:
          "After breakfast, take a flight from Skardu to Lahore. Upon arrival, transfer to the hotel. Enjoy an air safari over the Karakoram and Kaghan regions. Later, visit Wagah Border for the famous border ceremony between India and Pakistan. Return to the hotel and enjoy a buffet dinner at Bukhara restaurant. Overnight stay at the hotel. Activities: Air Safari",

        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Air Safari, drive to Lahore, Wagah Border"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 9.jpg",
        title: "Lahore city tour",
        description:
          "After breakfast, we'll tour the Walled City of Lahore, starting from Delhi Gate. We'll visit Shahi Hammam, ancient royal baths, and then Wazir Khan Mosque, known for its unique art. Next, we'll try some local street food like smoked corn and Falooda. We'll also see the Badshahi Masjid, Red Fort, Lahore Fort, and Sheesh Mahal, coated with beautiful glass. Dinner will be at Haveli or Andaaz restaurant with a great view of Badshahi Masjid. Overnight stay in Lahore. Activities: Badshahi Masjid tour, Minar-e-Pakistan, Red fort and Lahore Food Street.",
        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Badshahi Masjid tour, Minar-e-Pakistan, Red Fort and Lahore Food Street"
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 10.jpg",
        title: "Shopping and food Experiences",
        description:
          "Have breakfast at the hotel and go shopping in Lahore, including visiting some art galleries. Have lunch at a renowned local restaurant and visit the Pakistan Army Museum. Enjoy the evening at leisure, then have dinner at a fine dining restaurant or at the hotel before an overnight stay. Activities: Shopping, art galleries visit and museum.",
        "deluxeHotel": "Luxus Grand",
        "premiumHotel": "Nishat Hotel",
        "activities": "Shopping, art galleries visit and museum"
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu-and-lahore/Day 11.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight departure. Transfer to the airport with lots of memories to cherish forever. Departure to your home country. Activities: Departure to your country",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Departure to your country"
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ KDU",
        "Meals",
        "1 Night Islamabad",
        "3 Nights Skardu",
        "2 Nights Khaplu",
        "3 Nights Lahore",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or any other activity",
      ],
      deluxePackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Legend Hotel",
        "Serena Khaplu",
        "Luxus Grand",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Marriott Hotel",
        "Byarsa Hotel",
        "Serena Khaplu",
        "Nishat Hotel",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,550", "$1,450", "$1,350", "$1,250", "$1,150"],
      premiumPackage: ["$1,950", "$1,850", "$1,750", "$1,650", "$1,550"],
    },
    accommodation: "Hotels (Double Occupancy)",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. Weather will be moderate in the rest of the country.",
    // mapImage: "",
  },
  // Autumn in Skardu
  {
    id: "autumn-in-Skardu",
    title: "Autumn in Skardu",
    service_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/banner.jpeg",
    category: [CATEGORIES.skardu],
    link: "package-tour/autumn-in-Skardu",
    provincesCovered: " Punjab, KPK & GB",
    price: "$1,200",
    days: "9",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. This travel itinerary offers a unique opportunity to explore the natural beauty, rich culture, and history of Pakistan.",
    overview: {
      location: "Islamabad, Skardu & Lahore",
      //   people: "16",
      // weather: "40",
      bestTime: "October → November",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/autumn-in-skardu/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-islamabad.jpeg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-lake.jpg",
          title:
            "Shangri-La Resorts in the Lower Kachura Lake and its fruit-filled gardens",
        },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-dawn.jpg", title: "Dawn and dusks at the Indus River" },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-down-hill.jpg", title: "Down the hills to visit Kharpocho Fort" },
        {
          pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-moon.jpg",
          title: "Brightening moon at Katpana Desert sand dunes",
        },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-satpara-lake.jpg", title: "Serenity of Satpara Lakes" },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-basho.jpg", title: "Basho and Chunda valley" },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-history.jpeg", title: "Heritage & History of Skardu " },
        { pic: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-food.jpeg", title: "Amazing food the country has to offer" },
      ],
    },
    iternaries_img: skardu_iternary.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/Day 1.jpeg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Upon arrival in Islamabad, you'll be met by Facing North representatives and transferred to your hotel. After settling in and relaxing from your flight, you can take a half-day city tour. In the evening, you'll enjoy a delicious dinner at the renowned Monal Restaurant, which offers stunning panoramic views of Islamabad and Rawalpindi. Nestled against the pristine Margalla hills, this restaurant is considered the best in Islamabad and voted one of the most romantic restaurants in the city. You'll also receive a brief introduction to Pakistani cuisine and the upcoming tour. Activities: Quick Tour Islamabad",
        activities: " Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/Day 2.jpeg",
        title: "Islamabad to Skardu",
        description:
          "After an early morning breakfast, depart for Skardu. You'll be transferred to the airport for your 1-hour flight from Islamabad, which offers breathtaking views of high-altitude peaks and mountain ranges, including Nanga Parbat, the 9th highest peak in the world. Upon arriving at Skardu airport, we'll explore Kharpocho Fort, the oldest remaining structure in Skardu, followed by an excursion to Katpana desert. Spend the evening in the cold dunes of Katpana before transferring to your hotel for dinner and an overnight stay. Activities: Kharpocho fort, air safari & Cold desert",
        activities: "  Kharpocho fort, air safari & Cold desert"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/Day 3.jpg",
        title: "Basho or Chunda valley",
        description:
          "After an early morning breakfast, enjoy a day tour of either Basho or Chunda Valley. It's a 1.5-hour off-road drive from Skardu, and both valleys offer picturesque views of the landscape and freshwater streams flowing down from snow-capped mountains. Take short walks and treks around the valley to experience the stunning autumn colors. Return to Skardu in the evening and enjoy leisure time for the night. Dinner will be served, and you'll spend the night at the hotel. Activities: Jeeps safari, Basho or Chunda valley",
        activities: " Jeeps safari, Basho or Chunda valley"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/Day 4.jpg",
        title: "Shigar valley",
        description:
          "After breakfast, depart for Shigar Valley, crossing the Sarfaranga cold desert, which serves as the gateway to the great mountain peaks of the Karakoram. Visit the wooden mosque in the town of Shigar, the largest settlement in the valley. See Shigar Fort, restored by the Aga Khan Foundation and Serena Hotels, and take an excursion to the Shigar Valley and Jarba Xho hike (optional). Return to Skardu in the evening, and enjoy dinner at the hotel before spending the night. Activities: Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort",
        activities: " Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort"
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/Day 5.jpg",
        title: "Ghanche District & Khaplu",
        description:
          "After an early morning breakfast, we'll visit a sailing village and fish farms in Ghanche District before taking an excursion to Khaplu. This beautiful valley of the Shyok River is 103 km east of Skardu and the starting point for many trekking and climbing expeditions. Visit the Chaqchan Mosque, one of the earliest mosques in Baltistan (1504 AD) attributed to Syed Ali Hamdani. Transfer to Khaplu Fort, restored by the Aga Khan Cultural Service and Serena Hotels, and take a tour of Khaplu Valley before returning to the fort for an overnight stay. Activities: Jeep safari, Ghanche district, Khaplu fort, Chaqchan Mosque & sailing village tour.",
        activities: " Jeep safari, Ghanche district, Khaplu fort, Chaqchan Mosque & sailing village tour. "
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/Day 6.jpeg",
        title: "Sailing and Machlu valley",
        description:
          "After an early morning breakfast, visit the scenic Sailing and Machlu valleys, known as the gems of Khaplu district, surrounded by snow-covered peaks, lush green valleys, and white-water streams. Enjoy leisurely relaxation and the beautiful autumn colors of Machlu. Return to Khaplu Fort, visit nearby viewpoints, and enjoy dinner. Stay overnight at Khaplu Serena. Activities: Sailing valley and Machlu valley",
        activities: " Sailing valley and Machlu valley"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/Day 7.jpeg",
        title: "Manthoka waterfall, & Kharmang District",
        description:
          "After breakfast, visit Manthoka waterfall for sightseeing and a photo session. Visit Mehdi Abad and its beautiful water streams before returning to Skardu. Stop to see the Buddha carved in rock and then transfer to Shangri-La resort on the shores of Lower Kachura lake. Enjoy leisure time with a bonfire and  traditional live BBQ dinner, and an overnight stay. Activities: Manthoka waterfall, Mehdi Abad & Shangri-La and lower Kachura lake.",
        activities: " Manthoka waterfall, Mehdi Abad & Shangri-La and lower Kachura lake."
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/autumn-in-skardu/h-islamabad.jpeg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight departure. Transfer to the airport with lots of memories to cherish forever. Activities: Departure to your country",
        activities: " Departure to your country"
      },
    ],
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ KDU",
        "Meals",
        "2 Nights Islamabad",
        "4 Nights Skardu",
        "2 Nights Khaplu",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or any other activity",
      ],
      deluxePackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Ambiance Hotel",
        "Marriott Hotel",
        "Dynasty Hotel",
        "Broq Hotel",
        "Serena Khaplu",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Marriott Hotel",
        "Byarsa Hotel",
        "Serena Khaplu",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,600", "$1,500", "$1,400", "$1,300", "$1,200"],
      premiumPackage: ["$1,850", "$1,750", "$1,650", "$1,550", "$1,450"],
    },
    accommodation: "Hotels (Double Occupancy)",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",
    // mapImage: "",
  },
  // Blossom in Lahore & Skardu
  {
    id: "blossom-in-lahore-and-skardu",
    title: "A Summer Expedition in Lahore and Baltistan",
    service_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/banner.jpg",
    bg_position: "center",
    category: [CATEGORIES.lahore, CATEGORIES.skardu, CATEGORIES.lahore],
    link: "package-tour/blossom-in-lahore-and-skardu",
    provincesCovered: "Punjab, KPK & GB",
    price: "$1,500",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. This travel itinerary offers a unique opportunity to explore the natural beauty, rich culture, and history of Pakistan. From the stunning Himalayan peaks of Skardu and Khaplu to the bustling streets and ancient sites of Lahore, you will experience the diversity and richness of Pakistan's landscapes and traditions.",
    overview: {
      location: "Islamabad, Skardu & Lahore",
      //   people: "16",
      // weather: "40",
      bestTime: "March → May",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-kachura-lake.jpg",
          title:
            "Shangri-La Resorts in the Lower Kachura Lake and its fruit-filled gardens",
        },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-dawn.jpeg", title: "Dawn and dusks at the Indus River" },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-down.jpg", title: "Down the hills to visit Kharpocho Fort" },
        {
          pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-moon.jpg",
          title: "Brightening moon at Katpana Desert sand dunes",
        },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-lake.jpg", title: "Serenity of Satpara Lakes" },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-valley.jpg", title: "Basho and Chunda valley" },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-history.jpg", title: "Heritage & History of Skardu " },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/h-food.jpg", title: "Amazing food the country has to offer" },
      ],
    },
    iternaries_img: skardu_iternary.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 1.jpg",
        description:
          "KhushAamdeed! Upon arrival in Islamabad, you'll be met by Facing North representatives and transferred to your hotel. After settling in and relaxing from your flight, you can take a half-day city tour. In the evening, you'll enjoy a delicious dinner at the renowned Monal Restaurant, which offers stunning panoramic views of Islamabad and Rawalpindi. Nestled against the pristine Margalla hills, this restaurant is considered the best in Islamabad and voted one of the most romantic restaurants in the city. You'll also receive a brief introduction to Pakistani cuisine and the upcoming tour.",
        title: "Arrival at Islamabad",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Marriott Hotel (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad"
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 2.jpg",
        description:
          "After an early morning breakfast, depart for Skardu. You'll be transferred to the airport for your 1-hour flight from Islamabad, which offers breathtaking views of high-altitude peaks and mountain ranges, including Nanga Parbat, the 9th highest peak in the world. Upon arriving at Skardu airport, we'll explore Kharpocho Fort, the oldest remaining structure in Skardu, followed by an excursion to Katpana desert. Spend the evening in the cold dunes of Katpana before transferring to your hotel for dinner and an overnight stay.",
        title: "Islamabad to Skardu",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Kharpocho fort, air safari & Cold desert"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 3.jpg",
        description:
          "After an early morning breakfast, enjoy a day tour of Basho Valley. A 1.5-hour off-road drive from Skardu, Basho Valley offers picturesque views of the landscape and freshwater streams flowing down from snow-capped mountains. Take short walks and treks around the valley to experience the stunning spring colors. Return to Skardu in the evening and enjoy leisure time for the night. Dinner will be served, and you'll spend the night at the hotel.",
        title: "Basho Valley",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Jeeps safari, Basho Valley"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 4.jpg",
        description:
          "After breakfast, depart for Shigar Valley, crossing the Sarfaranga cold desert, which serves as the gateway to the great mountain peaks of the Karakoram. Visit the wooden mosque in the town of Shigar, the largest settlement in the valley. See Shigar Fort, restored by the Aga Khan Foundation and Serena Hotels, and take an excursion to the Shigar Valley and Jarba Xho hike (optional). Return to Skardu in the evening, and enjoy dinner at the hotel before spending the night.",
        title: "Shigar Valley",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort"
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 5.jpg",
        description:
          "After an early morning breakfast, visit a sailing village and fish farms in Ghanche District before taking an excursion to Khaplu. This beautiful valley of the Shyok River is 103 km east of Skardu and the starting point for many trekking and climbing expeditions. Visit the Chaqchan Mosque, one of the earliest mosques in Baltistan (1504 AD) attributed to Syed Ali Hamdani. Transfer to Khaplu Fort, restored by the Aga Khan Cultural Service and Serena Hotels, and take a tour of Khaplu Valley before returning to the fort for an overnight stay.",
        title: "Ghanche District & Khaplu",
        deluxeHotel: "",
        premiumHotel: "Khaplu Serena (Offers enhanced comfort and facilities)",
        activities: "Jeep safari, Ghanche district, Khaplu fort, Chaqchan Mosque & sailing village tour."
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 6.jpeg",
        description:
          "After an early morning breakfast, visit the scenic Sailing and Machlu valleys, known as the gems of Khaplu district, surrounded by snow-covered peaks, lush green valleys, and white-water streams. Enjoy leisurely relaxation and the beautiful autumn colors of Machlu. Return to Khaplu Fort, visit nearby viewpoints, and enjoy dinner. Stay overnight at Khaplu Serena.",
        title: "Sailing and Machlu Valley",
        deluxeHotel: "",
        premiumHotel: "Khaplu Serena (Offers enhanced comfort and facilities)",
        activities: "Sailing valley and Machlu valley"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 7.jpg",
        description:
          "After breakfast, visit Manthoka waterfall for sightseeing and a photo session. Visit Mehdi Abad and its beautiful water streams before returning to Skardu. Stop to see the Buddha carving rock and then transfer to Shangri-La resort on the shores of Lower Kachura Lake. Enjoy leisure time with traditional live music, dinner, and an overnight stay.",
        title: "Manthoka Waterfall & Kharmang District",
        deluxeHotel: "Dynasty Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resort (Offers enhanced comfort and facilities)",
        activities: "Manthoka waterfall, Mehdi Abad & Shangri-La and Lower Kachura lake."
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 8.jpeg",
        description:
          "After breakfast, take a flight from Skardu to Lahore. Upon arrival, transfer to the hotel. Enjoy an air safari over the Karakoram and Kaghan regions. Later, visit Wagah Border for the famous border ceremony between India and Pakistan. Return to the hotel and enjoy a buffet dinner at Bukhara restaurant. Overnight stay at the hotel.",
        title: "Skardu to Lahore (KDU-LHR)",
        deluxeHotel: "Luxus Grand (Quality stay at a more economical rate)",
        premiumHotel: "Nishat Hotel (Offers enhanced comfort and facilities)",
        activities: "Air Safari, Wagah Border ceremony"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 9.jpg",
        description:
          "After breakfast, we'll tour the Walled City of Lahore, starting from Delhi Gate. We'll visit Shahi Hammam—ancient royal baths—and then Wazir Khan Mosque, known for its unique art. Next, we'll try some local street food like smoked corn and Falooda. We'll also see the Badshahi Masjid mosque, Lahore Fort, and Sheesh Mahal, coated with beautiful glass. Dinner will be at Haveli or Andaaz restaurant with a great view of Badshahi Masjid. Overnight stay in Lahore.",
        title: "Lahore City Tour",
        deluxeHotel: "Luxus Grand (Quality stay at a more economical rate)",
        premiumHotel: "Nishat Hotel (Offers enhanced comfort and facilities)",
        activities: "Badshah-e-Masjid tour, Minar-e-Pakistan, Red fort and Lahore Food Street"
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu-lahore/Day 10.jpg",
        description:
          "Have breakfast at the hotel and go shopping in Lahore, including visiting some art galleries. Have lunch at a renowned local restaurant and visit the Pakistan Army Museum. Enjoy the evening at leisure, then have dinner at a fine restaurant or at the hotel before an overnight stay.",
        title: "Shopping and Cultural Experiences in Lahore",
        deluxeHotel: "Luxus Grand (Quality stay at a more economical rate)",
        premiumHotel: "Nishat Hotel (Offers enhanced comfort and facilities)",
        activities: "Shopping, art galleries visit, museum visit"
      },
      {
        id: 10,
        iternaries_img: swat_place_1.src,
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight. Transfer to the airport with lots of memories to cherish forever.",
        title: "Day of Departure",
        activities: "Departure to your country"
      }
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ KDU",
        "Meals",
        "1 Night Islamabad ",
        "4 Nights Skardu",
        "2 Nights Khaplu",
        "3 Nights Lahore",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      deluxePackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Legend Hotel",
        "Serena Khaplu",
        "Luxus Grand ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Marriott Hotel",
        "Byarsa Hotel",
        "Serena Khaplu",
        "Nishat Hotel",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,900", "$1,800", "$1,700", "$1,600", "$1,500"],
      premiumPackage: ["$2,200", "$2,100", "$2,000", "$1,900", "$1,800"],
    },
    accommodation: "Hotels (Double Occupancy)",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",
    // mapImage: "",
  },
  // Blossom in Skardu
  {
    id: "blossom-in-skardu",
    title: "Land of Diverse Landscapes & Rich Culture",
    service_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/banner.jpg",
    category: [CATEGORIES.skardu],
    link: "package-tour/blossom-in-skardu",
    provincesCovered: "GB",
    price: "$1,200",
    days: "9",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. This travel itinerary offers a unique opportunity to explore the natural beauty, rich culture, and history of Pakistan.",
    overview: {
      location: "Islamabad & Skardu",
      //   people: "16",
      // weather: "40",
      bestTime: "March → April",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/blossom-in-skardu/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-kachura-lake.jpg",
          title:
            "Shangri-La Resorts in the Lower Kachura Lake and its fruit-filled gardens",
        },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-dawn.jpeg", title: "Dawn and dusks at the Indus River" },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-down.jpg", title: "Down the hills to visit Kharpocho Fort" },
        {
          pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-moon.jpg",
          title: "Brightening moon at Katpana Desert sand dunes",
        },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-lake.jpg", title: "Serenity of Satpara Lakes" },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-valley.jpg", title: "Basho and Chunda valley" },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-history.jpg", title: "Heritage & History of Skardu " },
        { pic: "/assets/IMAGES/tour-packages/blossom-in-skardu/h-food.jpg", title: "Amazing food the country has to offer" },
      ],
    },
    iternaries_img: skardu_iternary.src,
    iternaries: [
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 1.jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Upon arrival in Islamabad, you'll be met by Facing North representatives and transferred to your hotel. After settling in and relaxing from your international flight, you can take a half-day city tour. In the evening, you'll enjoy a delicious dinner at the renowned Monal Restaurant, which offers stunning panoramic views of Islamabad and Rawalpindi. Nestled against the pristine Margalla hills, this restaurant is considered the best in Islamabad and voted one of the most romantic restaurants in the city. You'll also receive a brief introduction to Pakistani cuisine and the upcoming tour. Activities: Quick Tour of Islamabad",
        "deluxeHotel": "Ambiance Hotel",
        "premiumHotel": "Marriott Hotel",
        "activities": "Quick Tour Islamabad"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 2.jpg",
        title: "Islamabad to Skardu",
        description:
          "After an early morning breakfast, depart for Skardu. You'll be transferred to the airport for your 1-hour flight from Islamabad, which offers breathtaking views of high-altitude peaks and mountain ranges, including Nanga Parbat, the 9th highest peak in the world. Upon arriving at Skardu airport, we'll explore Kharpocho Fort, the oldest remaining structure in Skardu, followed by an excursion to Katpana desert. Spend the evening in the cold dunes of Katpana before transferring to your hotel for dinner and overnight stay. Activities: Kharpocho fort, air safari & Cold desert",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": "Khoj Resorts",
        "activities": "Kharpocho Fort, air safari & Cold desert"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 3.jpg",
        title: "Basho valley",
        description:
          "After an early morning breakfast, enjoy a day tour of either Basho or Chunda Valley. It's a 1.5-hour off-road drive from Skardu, and both valleys offer picturesque views of the landscape and freshwater streams flowing down from snow-capped mountains. Take short walks and treks around the valley to experience the stunning spring colours. Return to Skardu in the evening and enjoy leisure time for the night. Dinner will be served, and you'll spend the night at the hotel. Activities: Jeeps safari, Basho or Chunda valley",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": "Khoj Resorts",
        "activities": "Jeeps safari, Basho Valley"
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 4.jpg",
        title: "Shigar valley",
        description:
          "After breakfast, depart for Shigar Valley, crossing the Sarfaranga cold desert, which serves as the gateway to the great mountain peaks of the Karakoram. Visit the wooden mosque in the town of Shigar, the largest settlement in the valley. See Shigar Fort, restored by the Aga Khan Foundation and Serena Hotels, and take an excursion to the Shigar Valley and Jarba Xho hike (optional). Return to Skardu in the evening, and enjoy dinner at the hotel before spending the night. Activities: Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort"
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 5.jpg",
        title: "Ghanche District & Khaplu",
        description:
          "After an early morning breakfast, we'll visit a sailing village and fish farms in Ghanche District before taking an excursion to Khaplu. This beautiful valley of the Shyok River is 103 km east of Skardu and the starting point for many trekking and climbing expeditions. Visit the Chaqchan Mosque, one of the earliest mosques in Baltistan (1504 AD) attributed to Syed Ali Hamdani. Transfer to Khaplu Fort, restored by the Aga Khan Cultural Service and Serena Hotels, and take a tour of Khaplu Valley before returning to the fort for an overnight stay. Activities: Jeep safari, Ghanche district, Khaplu fort, Chaqchan Mosque & sailing village tour.",
        "deluxeHotel": "",
        "premiumHotel": "Khaplu Serena",
        "activities": "Jeep safari, Ghanche District, Khaplu Fort, Chaqchan Mosque & sailing village tour"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 6.jpeg",
        title: "Sailing and Machlu valley",
        description:
          "After an early morning breakfast, visit the scenic Sailing and Machlu valleys, known as the gems of Khaplu district, surrounded by snow-covered peaks, lush green valleys, and white-water streams. Enjoy leisurely relaxation and the beautiful autumn colors of Machlu. Return to Khaplu Fort, visit nearby viewpoints, and enjoy dinner. Stay overnight at Khaplu Serena. Activities: Sailing valley and Machlu valley",
        "deluxeHotel": "",
        "premiumHotel": "Khaplu Serena",
        "activities": "Sailing Valley and Machlu Valley"
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 7.jpg",
        title: "Manthoka waterfall, & Kharmang District",
        description:
          "After breakfast, visit Manthoka waterfall for sightseeing and a photo session. Visit Mehdi Abad and its beautiful water streams before returning to Skardu. Stop to see the Buddha carving rock and then transfer to Shangri-La resort on the shores of Lower Kachura lake. Enjoy leisure time with traditional live music, dinner, and an overnight stay. Activities: Manthoka waterfall, Mehdi Abad & Shangri-La and lower Kachura lake.",
        "deluxeHotel": "Dynasty Hotel",
        "premiumHotel": "Khoj Resort",
        "activities": "Manthoka Waterfall, Mehdi Abad & Shangri-La and Lower Kachura Lake"
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 8.jpeg",
        title: "Skardu to Islamabad",
        description:
          "Breakfast will be served at the hotel. Morning flight to Islamabad. An hour air safari, flying over the mighty Karakoram range and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Visit Pakistan Monument, Lok Virsa museum and Faisal Masjid. Buffet dinner at a fine dining restaurant. Return to the hotel. Overnight stay",
        "deluxeHotel": "Dynasty Hotel",
        "premiumHotel": "Khoj Resort",
        "activities": "Air Safari & Islamabad Tour"
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/blossom-in-skardu/Day 9.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight departure. Transfer to the airport with lots of memories to cherish forever. Activities: Departure to your country",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Departure to your country"
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ KDU",
        "Meals",
        "2 Nights Islamabad",
        "4 Nights Skardu",
        "2 Nights Khaplu",
        "Souvenirs",
        "Arrival & Farewell Dinner",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or any other activity",
      ],
      deluxePackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Marriott Hotel",
        "Legend Hotel",
        "Byarsa Hotel",
        "Serena Khaplu",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Marriott Hotel",
        "Byarsa Hotel",
        "Serena Khaplu",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,600", "$1,500", "$1,400", "$1,300", "$1,200"],
      premiumPackage: ["$1,850", "$1,750", "$1,650", "$1,550", "$1,450"],
    },
    accommodation: "Hotels (Double Occupancy)",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",
    // mapImage: "",
  },
  // Fairy Meadows & Baltistan 
  {
    id: "fairy-meadows-baltistan",
    title: "Summer Escape in Fairy Meadows & Baltistan",
    service_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/cover.jpg",
    link: "package-tour/fairy-meadows-baltistan",
    category: [CATEGORIES.fairy, CATEGORIES.skardu],
    provincesCovered: "Punjab & GB",
    price: "$1,800",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. Embark on a journey of a lifetime and explore the breathtaking landscapes of Northern Pakistan on this 12-day tour. From the serene lakes of Skardu to the majestic mountains of Fairy Meadows, witness the beauty of nature in its purest form. Immerse yourself in the rich culture of the Balti people and indulge in local cuisine. With comfortable accommodations and experienced guides, this tour promises an unforgettable adventure.",
    overview: {
      location: "Skardu & Fairy Meadows",
      people: "",
      // weather: "40",
      bestTime: "May → September",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-shangrila.jpg",
          title: "Shangri-La Resorts in the Lower Kachura Lake and its fruit-filled gardens",
        },
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-dawn.jpeg",
          title: "Dawn and dusks at the Indus River",
        },
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-down.jpg",
          title: "Down the hills to visit Kharpocho Fort",
        },
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-moon.jpg",
          title: "Brightening moon at Katpana Desert sand dunes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-lake.jpg",
          title: "Serenity of Satpara Lakes",
        },
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-deosai.jpg",
          title: "Wildlife watch at Deosai National Park",
        },
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-heritage.jpeg",
          title: "Heritage & History of Skardu",
        },
        {
          pic: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/h-food.jpg",
          title: "Amazing food the country has to offer",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 1.png",
        description:
          "KhushAmdeed! Welcome to Islamabad! Our representatives from Facing North will meet you at the airport and transfer you to your hotel. The drive will take approximately 30 minutes. After settling in, you have the option to take a half-day city tour. Later, enjoy dinner at Monal Restaurant, known for its stunning panoramic view of Islamabad and Rawalpindi, as well as its reputation as the best restaurant in Islamabad. This is a great introduction to Pakistani cuisine and a brief introduction will be given about your upcoming tour.",
        title: "Arrival at Islamabad",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Best Western Premier (Offers enhanced comfort and facilities)",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 2.jpg",
        description:
          "After an early morning breakfast, depart for Skardu. You'll be transferred to the airport for your 1-hour flight from Islamabad, which offers breathtaking views of high-altitude peaks and mountain ranges, including Nanga Parbat, the 9th highest peak in the world. Upon arriving at Skardu airport, we'll explore Kharpocho Fort, the oldest remaining structure in Skardu, followed by an excursion to Katpana desert. Spend the evening in the cold dunes of Katpana before transferring to your hotel for dinner and an overnight stay.",
        title: "Islamabad to Skardu",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Kharpocho fort, air safari & Cold desert",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 3.jpg",
        description:
          "After breakfast, embark on an adventure tour and jeep safari to Deosai Plains, the second highest in the world, at 4,100m or 13,500 ft. Covering an area of approximately 3,000 square kilometers, the plains extend to Ladakh and provide habitat for snow leopards, ibex, Tibetan brown bears, and wild horses. Visit Bara Pani and Sheosar lake, have a picnic lunch in Deosai, and return to Skardu for dinner at the hotel and an overnight stay.",
        title: "Deosai Plains & Sheosar lake",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Jeeps safari, Deosai plains, wildlife, sheosar lake and picnic",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 4.jpg",
        description:
          "After breakfast, depart for Shigar Valley, crossing the Sarfaranga cold desert, which serves as the gateway to the great mountain peaks of the Karakoram. Visit the wooden mosque in the town of Shigar, the largest settlement in the valley. See Shigar Fort, restored by the Aga Khan Foundation and Serena Hotels, and take an excursion to the Shigar Valley and Jarba Xho hike (optional). Return to Skardu in the evening, and enjoy dinner at the hotel before spending the night.",
        title: "Shigar valley",
        deluxeHotel: "Dynasty Resort (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resorts (Offers enhanced comfort and facilities)",
        activities: "Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 5.jpg",
        description:
          "After an early morning breakfast, visit a sailing village and fish farms in Ghanche District before taking an excursion to Khaplu. Visit the Chaqchan Mosque, one of the earliest mosques in Baltistan (1504 AD) attributed to Syed Ali Hamdani. Transfer to Khaplu Fort, restored by the Aga Khan Cultural Service and Serena Hotels, and take a tour of Khaplu Valley before returning to the fort for an overnight stay.",
        title: "Ghanche District & Khaplu",
        premiumHotel: "Khaplu Serena (Offers enhanced comfort and facilities)",
        // premiumHotel: " (Offers enhanced comfort and facilities)",
        activities: "Jeep safari, Ghanche district, Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 6.jpg",
        description:
          "After an early morning breakfast, visit the scenic Sailing and Machlu valleys, known as the gems of Khaplu district. Enjoy leisurely relaxation and the beautiful autumn colors of Machlu. Return to Khaplu Fort, visit nearby viewpoints, and enjoy dinner. Stay overnight at Khaplu Serena.",
        title: "Sailing and Machlu valley",
        premiumHotel: "Khaplu Serena (Offers enhanced comfort and facilities)",
        // premiumHotel: " (Offers enhanced comfort and facilities)",
        activities: "Sailing valley and Machlu valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 7.jpg",
        description:
          "After breakfast, visit Manthoka waterfall for sightseeing and a photo session. Visit Mehdi Abad and its beautiful water streams before returning to Skardu. Stop to see the Buddha carving rock and then transfer to Shangri-La resort on the shores of lower Kachura lake. Enjoy leisure time with traditional live music, dinner, and an overnight stay.",
        title: "Manthoka waterfall & Kharmang District",
        deluxeHotel: "Dynasty Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Khoj Resort (Offers enhanced comfort and facilities)",
        activities: "Manthoka waterfall, Mehdi Abad & Shangri-La and Lower Kachura lake",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 8.jpg",
        description:
          "After breakfast at the hotel, depart for Raikot bridge. From there, take jeeps to Fairy point, the starting point of a 4-hour trek to Fairy Meadows. Upon arrival, enjoy lunch with a stunning view of Nanga Parbat. Relax before dinner served with local music and a bonfire.",
        title: "Raikot, Tattu Village & Fairy Meadows",
        premiumHotel: "Raikot Sarai (Offers enhanced comfort and facilities)",
        // premiumHotel: " (Offers enhanced comfort and facilities)",
        activities: "Jeeps safari to Fairy point, trek to Fairy Meadows, local music & Bonfire",
        transport: "4x4 jeeps & coaster",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 9.jpg",
        description:
          "After breakfast, trek to Bayal Camp and Viewpoint, crossing beautiful forests and water streams. Lunch at Bayal Camp, with an optional excursion to Viewpoint or Base Camp. Return to Fairy Meadows for an afternoon walk and dinner with bonfire.",
        title: "Fairy Meadows, Bayal camp & Nanga Parbat Viewpoint",
        premiumHotel: "Raikot Sarai (Offers enhanced comfort and facilities)",
        // premiumHotel: " (Offers enhanced comfort and facilities)",
        activities: "Jeeps safari to Fairy point, trek to Fairy Meadows, local music & Bonfire",
        transport: "Trekking & walking",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 10.jpg",
        description:
          "After breakfast, depart to Naran. Trek for 2 hours to Fairy Point, then a 1.5-hour jeep ride to Raikot. Visit Babusar Top and have lunch at Moon Restaurant. Continue to Naran for leisure time and dinner.",
        title: "Fairy Meadows to Naran",
        deluxeHotel: "Northern Retreat (Quality stay at a more economical rate)",
        premiumHotel: "The Sarai (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
        transport: "Coaster 4x4 Jeeps",
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 11.jpg",
        description:
          "After breakfast, depart to Islamabad via Mansehra-Balakot road, a 7-hour drive with a lunch stop on the motorway. Check-in at the hotel in Islamabad, freshen up, and head out for a farewell dinner. Overnight stay.",
        title: "Naran to Islamabad",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Marriott Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
        transport: "Coaster 4x4 Jeeps",
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/fairy-meadows-baltistan/Day 12.jpeg",
        description:
          "Breakfast at the hotel. Free time for leisure till your flight. Transfer to the airport with lots of memories to cherish forever.",
        title: "Day of Departure",
        activities: "Departure to your country"
      }
    ],
    includes: {
      services: [
        "Transportation",
        "one way Flight ISB→ KDU",
        "Meals",
        "2 Nights Islamabad ",
        "4 Nights Skardu",
        "2 Nights Khaplu",
        "2 Nights Fairy Meadows",
        "1 Night Naran",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
      ],
      deluxePackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Dynasty Resort",
        "Serena Khaplu",
        "Fairy Meadows Cottages",
        "Northern Retreat",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Best Western Premier",
        "Khoj Resort",
        "Serena Khaplu",
        "Raikot Sarai",
        "The Sarai",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverage and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: [
        "4 Pax",
        "6 Pax",
        "10 Pax",
        "14 Pax",
      ],
      deluxePackage: [
        "$1,700",
        "$1,600",
        "$1,500",
        "$1,400",
      ],
      premiumPackage: [
        "$2,100",
        "$2,000",
        "$1,900",
        "$1,800",
      ],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },
  // Throne of Karakoram Skardu
  {
    id: "throne-of-karakoram-skardu",
    title: "Throne of Karakoram Skardu",
    service_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/cover.jpg",
    link: "package-tour/throne-of-karakoram-skardu",
    category: [CATEGORIES.skardu, CATEGORIES.fairy],
    provincesCovered: "Punjab, KPK & GB",
    price: "$1,600",
    days: "10",
    description:
      "Pakistan is a country full of diversity in every means whether that is the landscape, food, culture or traditions. Islamabad is the capital of Pakistan where our journey starts. Islamabad is surrounded by the beautiful Margalla Hills which are the start of our mountain ranges. In the extreme North-East of Pakistan, at an altitude of 8200 ft., lies Skardu District in Gilgit-Baltistan and is the center of trekking, trailing and climbing journeys.",
    overview: {
      location: "Islamabad & Skardu",
      //   people: "16",
      // weather: "40",
      bestTime: "May → September",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-shangrila.jpg",
          title:
            "Shangri-La Resorts in the Lower Kachura Lake and its fruit-filled gardens",
        },
        { pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-dawn.jpeg", title: "Dawn and dusks at the Indus River" },
        { pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-down.jpg", title: "Down the hills to visit Kharpocho Fort" },
        {
          pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-moon.jpg",
          title: "Brightening moon at Katpana Desert sand dunes",
        },
        { pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-lake.jpg", title: "Serenity of Satpara Lakes" },
        { pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-deosai.jpg", title: "Wildlife watch at Deosai National Park" },
        { pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-heritage.jpeg", title: "Heritage & History of Skardu " },
        { pic: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/h-food.jpg", title: "Amazing food the country has to offer" },
      ],
    },
    iternaries_img: skardu_iternary.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 1.png",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed! Upon arrival in Islamabad, you'll be met by Facing North representatives and transferred to your hotel. After settling in and relaxing from your international flight, you can take a half-day city tour. In the evening, you'll enjoy a delicious dinner at the renowned Monal Restaurant, which offers stunning panoramic views of Islamabad and Rawalpindi. Nestled against the pristine Margalla hills, this restaurant is considered the best in Islamabad and voted one of the most romantic restaurants in the city. You'll also receive a brief introduction to Pakistani cuisine and the upcoming tour. Activities: Quick Tour of Islamabad",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Quick Tour of Islamabad ",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 2.jpg",
        title: "Islamabad to Skardu",
        description:
          "After an early morning breakfast, depart for Skardu. You'll be transferred to the airport for your 1-hour flight from Islamabad, which offers breathtaking views of high-altitude peaks and mountain ranges, including Nanga Parbat, the 9th highest peak in the world. Upon arriving at Skardu airport, we'll explore Kharpocho Fort, the oldest remaining structure in Skardu, followed by an excursion to Katpana desert. Spend the evening in the cold dunes of Katpana before transferring to your hotel for dinner and overnight stay. Activities: Kharpocho fort, air safari & Cold desert",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": " Khoj Resorts",
        "activities": "Kharpocho fort, air safari & Cold desert",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 3.jpg",
        title: "Deosai Plains & Sheosar lake",
        description:
          "After early morning breakfast, we’ll visit the Deosai Plains via jeep safari, the second highest in the world (at 4,100 m or 13,500 feet) known as Byarsa in the local Balti language. Home to snow leopards, ibex, Tibetan brown bears, and wild horses, the area extends all the way to Ladakh. Visit Bara Pani and Sheosar Lake, have a picnic lunch, and return to Skardu for dinner and an overnight stay at the hotel. Activities: Jeeps safari, Deosai plains, wildlife, sheosar lake and picnic",
        "deluxeHotel": "Dynasty Resort",
        "premiumHotel": "Khoj Resorts",
        "activities": "Jeeps safari, Basho Valley"
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 4.jpg",
        title: "Shigar valley",
        description:
          "After breakfast, depart for Shigar Valley, crossing the Sarfaranga cold desert, which serves as the gateway to the great mountain peaks of the Karakoram. Visit the wooden mosque in the town of Shigar, the largest settlement in the valley. See Shigar Fort, restored by the Aga Khan Foundation and Serena Hotels, and take an excursion to the Shigar Valley and Jarba Xho hike (optional). Return to Skardu in the evening, and enjoy dinner at the hotel before spending the night. Activities: Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort",
        "deluxeHotel": "",
        "premiumHotel": "",
        "activities": "Sarfaranga desert, Jarba Xho hike, Tour de Shigar & Shigar fort"

      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 5.jpg",
        title: "Ghanche District & Khaplu",
        description:
          "After an early morning breakfast, we'll visit a sailing village and fish farms in Ghanche District before taking an excursion to Khaplu. This beautiful valley of the Shyok River is 103 km east of Skardu and the starting point for many trekking and climbing expeditions. Visit the Chaqchan Mosque, one of the earliest mosques in Baltistan (1504 AD) attributed to Syed Ali Hamdani. Transfer to Khaplu Fort, restored by the Aga Khan Cultural Service and Serena Hotels, and take a tour of Khaplu Valley before returning to the fort for an overnight stay. Activities: Jeep safari, Ghanche district, Khaplu fort, Chaqchan Mosque & sailing village tour.",
        "deluxeHotel": "",
        "premiumHotel": "Khaplu Serena",
        "activities": "Jeep safari, Ghanche District, Khaplu Fort, Chaqchan Mosque & sailing village tour"

      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 6.jpg",
        title: "Sailing and Machlu valley",
        description:
          "After an early morning breakfast, visit the scenic Sailing and Machlu Valleys, known as the gems of Khaplu district, surrounded by snow-covered peaks, lush green valleys, and white-water streams. Enjoy leisurely relaxation and the beautiful autumn colors of Machlu. Return to Khaplu Fort, visit nearby viewpoints, and enjoy dinner. Stay overnight at Khaplu Serena. Activities: Sailing valley and Machlu valley",
        "deluxeHotel": "",
        "premiumHotel": "Khaplu Serena",
        "activities": "Sailing Valley and Machlu Valley"
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 7.jpg",
        title: "Manthoka waterfall, & Kharmang District",
        description:
          "After breakfast, visit Manthoka waterfall for sightseeing and a photo session. Visit Mehdi Abad and its beautiful water streams before returning to Skardu. Stop to see the Buddha carving rock and then transfer to Shangri-La resort on the shores of lower Kachura lake. Enjoy leisure time with traditional live music, dinner, and an overnight stay. Activities: Manthoka waterfall, Mehdi Abad & Shangri-La and lower Kachura lake.",
        "deluxeHotel": "Dynasty Hotel",
        "premiumHotel": "Khoj Resort",
        "activities": "Manthoka Waterfall, Mehdi Abad & Shangri-La and Lower Kachura Lake"
      },
      // {
      //   id: 7,
      //   iternaries_img: swat_place_1.src,
      //   title: "Upper Kachura and Soq Valley",
      //   description:
      //     "After breakfast, we will head to Soq Valley, famous for its picturesque landscape and water streams. A 45-minute off-road drive will take us there. The valley is the primary water source for upper and lower Kachura lake. After lunch in Soq Valley, we will trek for 30 minutes to Upper Kachura lake, where you can enjoy boating or even take a dip in the turquoise blue water. Return to the hotel, rest, and leisure till dinner. Overnight stay. Activities: Soq Valley, Upper Kachura lake",

      // },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 8.jpg",
        title: "Islamabad and Monal",
        description:
          "After a morning breakfast, take a flight to Islamabad and check into a hotel. Explore Islamabad's beautiful Pakistan Monument and the stunning Faisal Mosque on a short city tour. Head to Monal Margalla hills for sunset and a breathtaking panoramic view of Islamabad and Rawalpindi. Enjoy dinner at Monal restaurant before returning to the hotel for an overnight stay. Activities: Flight safari, Islamabad city tour, Lok Virsa Museum and Monal.",
        "deluxeHotel": "Dynasty Hotel",
        "premiumHotel": "Khoj Resort",
        "activities": "Flight safari, Islamabad city tour, Lok Virsa Museum and Monalr"

      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/throne-of-karakoram-skardu/Day 9.jpg",
        title: "Day of Departure",
        description:
          "Breakfast will be served at the hotel. Free time for leisure till your flight. Transfer to the airport with lots of memories to cherish forever.",
        "activities": "Departure to your country"

      },
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ KDU",
        "Meals",
        "2 Night Islamabad ",
        "5 Nights Skardu",
        "2 Nights Khaplu",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity",
      ],
      deluxePackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Legend Hotel",
        "Serena Khaplu",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      premiumPackage: [
        "Toyota Grand Cabin & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Marriott Hotel",
        "Byarsa Hotel",
        "Serena Khaplu",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: ["4 Pax", "6 Pax", "10 Pax", "14 Pax", "18 Pax"],
      deluxePackage: ["$1,600", "$1,500", "$1,400", "$1,300", "$1,200"],
      premiumPackage: ["$1,950", "$1,850", "$1,750", "$1,650", "$1,550"],
    },
    accommodation: "Hotels (Double Occupancy)",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country. ",
    // mapImage: "",
  },

  // =========================================================
  //  The Ultimate Food Experience
  // =========================================================

  {
    id: "pakistan-food-journey",
    title: "A Pakistan Food Journey",
    service_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/banner.jpg",
    link: "package-tour/pakistan-food-journey",
    provincesCovered: "Federal,Punjab & GB",
    price: "$1,800",
    days: "11",
    description:
      "Pakistan is a country full of diversity in every aspect, whether that’s landscape, food, culture or traditions. Islamabad, the capital, is where our journey starts. Islamabad is surrounded by the beautiful Margalla Hills which is where our mountain ranges begin. In the North-East of Pakistan, at an altitude of 8200 ft., lies Hunza District in Gilgit-Baltistan. An epitome of beauty are its lakes, rivers and waterfalls, serenity of valleys and wilderness of the mountain making it the center for trekking.",
    overview: {
      location: " Hunza, Lahore & Islamabad",
      people: " 10+",
      // weather: "40",
      bestTime: "March → November",
      // recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/pakistan-food-journey/Highlights.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 7.jpg",
          title: "Serenity of Islamabad, the capital of Pakistan",
        },
        {
          pic: "/assets/IMAGES/tour-packages/pakistan-food-journey/Highlights(1).jpg",
          title: "Dawn and dusks in the Karakoram and Himalayas",
        },
        { pic: "/assets/IMAGES/tour-packages/pakistan-food-journey/Badshahi Mosque Lahore.jpg", title: "Heritage of Hunza and Lahore " },
        {
          pic: "/assets/IMAGES/tour-packages/pakistan-food-journey/Rakaposhi 8.jpg",
          title: "Brightening moon at Karimabad and the fields of Punjab",
        },
        { pic: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 4.jpeg", 
          title: "Serenity of Attabad and Borith Lake " 
        },
        { pic: "/assets/IMAGES/tour-packages/pakistan-food-journey/main-header.jpg", 
          swat_place_1, title: "Culture of different provinces" 
        },
        {
          pic: "/assets/IMAGES/tour-packages/pakistan-food-journey/IMG_7399.jpg",
          title: "Some of the most delicious food the country has to offer",
        },
      ],
    },
    iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Highlights.jpg",
    iternaries: [
      {
        id: 0,
        description:
          "KhushAamdeed! Welcome to the capital of Pakistan. On arrival at Islamabad Airport, please clear customs and collect your baggage before locating our representative. You will be transferred to your hotel, which is conveniently located at a 20-25 mins drive from the airport terminal. The rest of the day is free for you  to spend as you may wish. Perhaps head out for some chai (tea) or do some gear shopping. Your dinner will be served at a fine restaurant, after which you may rest.",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day_1.jpg",
        title: "Arrival at Islamabad",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        activities: "Quick tour of Islamabad",
      },
      {
        id: 1,
        description:
          "After breakfast, we will depart early in the morning for Gilgit. Transfer to the airport for a flight to Gilgit from Islamabad. The flight is approx. 45 minutes long and crosses some of the high-altitude peaks and beautiful mountain ranges. Upon arriving at Gilgit, we will start our road journey towards Hunza. Our first stop will be the Rakaposhi viewpoint where we will try local street food with a majestic view of Rakaposhi, the highest altitude peak of Hunza valley with a height of 7788m. Taste the local organic fruits and a few local drinks which they will prepare live for you. Next we will continue on an excursion to Karimabad and transfer to the hotel. You may rest for a while or take a short walk through the heritage bazaar of Karimabad. Dinner will be served with local music and a bonfire. Overnight stay. ",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day_2.jpg",
        title: " Islamabad → Gilgit",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        deluxeHotel: "Darbar (Quality stay at a more economical rate)",
        activities: "Air Safari, drive to Hunza, local organic drinks made with fruit, local street food. Live Local music & Bonfire",
      },
      {
        id: 2,
        description:
          "Today, we will explore the culture and traditions of Hunza valley. We will start a short heritage walk from Karimabad bazaar to Baltit fort. We will take a tour of Baltit Fort to learn about the history, culture, and traditions of Hunza Valley.  On our way back we will stop at a local food stall where we will be given a demonstration of cooking techniques and some insights of their local spices, which helps the locals to live longer than the average age. We will walk all the way back to Karimabad Bazaar and have an excursion to Altit Fort, another stunning piece of architecture and history. There is a small hidden café in Altit Fort called Khabasi Café which is operated by females only, an amazing initiative taken by Prince Aga Khan to uplift women empowerment. Try some of the local food and cooking demonstrations by the locals. ",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 3 .jpeg",
        title: "Karimabad, Baltit and Altit Fort",
        premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
        deluxeHotel: "Darbar (Quality stay at a more economical rate)",
        activities: "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens & food demonstrations at khabasi Café",
      },
      {
        id: 3,
        description:
          "Breakfast will be served with local fresh fruit juices. Then, we will take a tour to a local handicraft workshop to see how the locals craft musical instruments, cutlery and other handicrafts made from wood. Short demonstrations will be given by the locals to carve the wood into cutlery. We will then leave for Attabad lake, crossing some mind-blowing tunnels leading us to one of the largest lakes of Pakistan, where we will do some water sports. Next is the excursion to Borith lake, where lunch will also be served. Try out some of the authentic local food made of Yak meat (local mountain cow). After lunch, local mountain tea will be served, which is said to be a cure for many illnesses. In the evening we will walk towards the Passu Cones to witness the beautiful sunset, and an excursion to Attabad lake. Transfer to Attabad, rest for a while. At night, BBQ will be arranged with local traditional music and bonfire. Enjoy your night.",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 4.jpeg",
        title: "Attabad Lake, Passu & Borith Lake",
        premiumHotel: "Luxus Attabad (Offers enhanced comfort and facilities)",
        deluxeHotel: "Famree Hotel (Quality stay at a more economical rate)",
        activities: "A local handicraft workshop demonstration, Attabad lake, Passu cones, local Yak meat food experience, local tea and Borith lake",
      },
      {
        id: 4,
        description:
          "Our day will start with a majestic view of Attabad Lake and Passu Cones in the background, breakfast will be served—enjoy the beautiful morning with a perfect view. Today we will keep it relaxed and enjoy the mountains. In the afternoon we will visit a local carpet workshop—a marvel of fine art. The workshop is operated by females to promote women empowerment. All the carpets are handmade and stitched. Demonstration and tour of the workshop will be given. For lunch, we will visit Moksha Resort where a couple will cook local food with spices organically grown in their gardens. Spend your evening at the cozy Moksha Resort, perhaps just read a book and embrace the mountains and their calmness. In the evening, we will return to the hotel. Dinner will be served, a bonfire and local live music will be arranged. Overnight stay.  ",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day_5.jpg",
        title: "Gulmit ",
        premiumHotel: "Luxus Attabad (Offers enhanced comfort and facilities)",
        deluxeHotel: "Famree Hotel (Quality stay at a more economical rate)",
        activities: "Local carpet workshop tour and demonstration, organic food experience, Gulmit village walk, leisure.",
      },
      {
        id: 5,
        description:
          "Today we will be heading to Gilgit via Minapin. Minapin is one of the oldest villages of Nagar valley. The drive to Minapin will be approximately one hour and upon arrival, we will have time to do a garden walk. You may wish to pick some fresh fruits from the orchards. Tea will be served next to a stream during the break. After the tea break, we will switch to 4x4 Jeeps for an exciting off-road drive to Bikchum Ghutum. The ride will take approximately 45 minutes and it will lead us to a hidden pearl—a ground situated right on the footsteps of the mighty Rakaposhi, known as the Mother of Mist. In Bikchum, you can take a short trek towards a glacier where you will have the opportunity to taste organic ice which is thousands of years old. Lunch will be served at Bikchum Ghutum. After lunch, we will return to Minapin, where we change our vehicle again to a coaster bus, and continue our journey to Gilgit. You’ll be at  leisure for the rest of the day in Gilgit.",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 6.jpg",
        title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum ",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        // deluxeHotel: " (Quality stay at a more economical rate)",
        activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk",
      },
      {
        id: 6,
        description:
          "Breakfast will be served at the hotel, after which we’ll take a  flight to Islamabad, over the majestic Himalayas and Karakoram range. After we check-in to the hotel, we’ll take a short tour of Saidpur village, explore the remains of the village and preserved artifacts. After a few days in the north, we will head towards a fine dining restaurant to surprise our taste buds with some scrumptious food. Visit local art galleries or a local art event depending on the time. Free time in Islamabad or rest and leisure in the hotel. Dinner will be at a fancy restaurant in Islamabad. Overnight stay in Islamabad.",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 7.jpg",
        title: "Islamabad, Saidpur village and Monal",
        premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
        deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
        activities: "Flight safari, Saidpur Village, Lok Virsa Museum and Monal",
      },
      {
        id: 7,
        description:
          "Breakfast will be served at the hotel. Then, we will depart for Khewra to visit the second largest salt mines in the world. This will take us approximately two hours to reach by motorway. We will enter the mine through a small train which will take us deep inside. The art of molding salt into monuments and mosques can be seen inside, a full tour of the mine will be given. We will head back on the road, and head to Lahore which will take us two hours. In between we will stop at a rest area for lunch. Transfer to hotel, rest for a while. Lahore is well known in Pakistan for its amazing food and culture. We will visit Bundu Khan for an amazing BBQ experience, and later visit Lakshmi Chowk for some amazing desserts like Gulab Jamun, Jalebi & Rabri. Return to the Hotel.",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 8.jpeg",
        title: "Kalar Kahar (khewra Salt Mines) & Lahore",
        premiumHotel: "Nishat Hotel (Offers enhanced comfort and facilities)",
        deluxeHotel: "Luxus Grand (Quality stay at a more economical rate)",
        activities: "Khewra Salt Mines, salt mine tour & salt museum, Lakshmi Chowk for desserts",
      },
      {
        id: 8,
        description:
          "Breakfast will be served at the hotel. We will head towards SCAFA which is one of the best culinary schools in Pakistan, and meet with the director of SCSFA. A food demonstration will be organized where the chefs will cook a fusion of Pakistani food. Lunch will be served around 1pm. We will head towards the Walled city of Lahore. We will start our tour from Delhi gate Lahore, we will mostly walk through the ancient walled city. Our first sight will be the Shahi Hammam where we will take a tour of ancient royal baths. Next we will head to Wazir Khan Mosque where beautiful paintings have been carved and engraved on walls, a true marvel of art which makes the mosque so unique. After the mosque we will treat ourselves to some local street food. Our next sight is the spice bazar situated next to the mosque. Here we will learn about the spices of the subcontinent and experience their beautiful colors and smell.",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 9.jpeg",
        title: "Lahore city tour",
        premiumHotel: "Nishat Hotel (Offers enhanced comfort and facilities)",
        deluxeHotel: "Luxus Grand (Quality stay at a more economical rate)",
        activities: "SCAFA culinary school, Badshahi Masjid tour, Minar-e-Pakistan, Red fort and Lahore Food Street",
      },
      {
        id: 9,
        description:
          "Breakfast will be served at the hotel. We will start our day at 10 am and explore the art galleries and art hubs of Lahore. Our first sight is Tulintin square which has been restored as an art hub where many art galleries and paintings are preserved. Then we will visit Lahore museum which is located next to Tulintin where you can see old artifacts such as letters written by Mohammed Ali Jinnah to Gandhi and other important personalities of that era at the time of Partition. After a tour of the museum we will move ahead to MM Allam road to try out some of the best food the city has to offer. After lunch we will visit local art galleries at MM Alam Road. Then we will head to Wagah Border, which is at a 45 min. drive, to witness the lowering of the flag ceremony at the border between India and Pakistan. Return to hotel rest for a while. At night, we will go to a unique restaurant called Baranh—which means twelve–the theme is the 12 gates of Lahore.",
        iternaries_img: "/assets/IMAGES/tour-packages/pakistan-food-journey/Day 11.jpeg",
        title: "Wagha Border & Hiran Minar",
        premiumHotel: "Nishat Hotel (Offers enhanced comfort and facilities)",
        deluxeHotel: "Luxus Grand (Quality stay at a more economical rate)",
        activities: "Art gallery tour, Wagha Border & shopping.",
      },
      {
        id: 10,
        description:
          "Breakfast will be served at the hotel. You’ll have time for leisure and shopping in local handicraft shops, malls and marketplaces. Lunch will be served in a fancy restaurant in Lahore. Transfer to the airport with lots of memories to cherish forever.",
        iternaries_img: swat_place_1.src,
        title: "Day of Departure",
        // premiumHotel: " (Offers enhanced comfort and facilities)",
        // deluxeHotel: " (Quality stay at a more economical rate)",
        activities: "Departure to your country",
      },
    ],
    includes: {
      services: [
        "Transportation",
        "Return Flight ISB→ GLT",
        "Meals",
        "2 Nights Islamabad ",
        "2 Nights Karimabad",
        "2 Nights Upper Hunza",
        "1 Night Gilgit ",
        "3 Nights Lahore",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "1 Local cuisine lunch in Heritage House",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
        "Driver, Guide, Toll, Parking Expense",
        "Entry to all forts, Museum & Boating or  any other activity ",
        "Package cost per person ",
      ],
      deluxePackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 Meals/Daily",
        "Roomy Signature",
        "Darbar Hotel",
        "Famree Resort",
        "Ramada Hotel",
        "Luxus Grand ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "$1,800",
      ],
      premiumPackage: [
        "Toyota Coaster & Jeeps",
        "Yes",
        "3 meals/Daily",
        "Marriott Hotel",
        "Ambiance or 2Magpies",
        "Luxus Atabad",
        "Serena Hotel",
        "Nishat Hotel",
        "Yes ",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "$2,100",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverages and soft drinks",
      "Personal expenses",
    ],
    // cost: {
    //   size: [
    //     "Traditional Musical Night with BBQ Dinner",
    //     "English Speaking Guide",
    //     "Driver, Guide, Toll, Parking Expense",
    //     "Entry to all forts, Museum & Boating or  any other activity ",
    //     "Package cost per person ",
    //   ],
    //   deluxePackage: ["Yes", "Yes", "Yes", "Yes", "$1,800"],
    //   premiumPackage: ["Yes", "Yes", "Yes", "Yes", "$2,100"],

    //   // mapImage: "",
    // },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm clothes will be required in the northern region of Pakistan. Weather in the rest of the country will be moderate. In case of any flight cancellations, we will travel by road to Gilgit with a night stay at Chilas Shangri-La Hotel.",
  },

  // =========================================================
  //  Trekking & Camping
  // =========================================================

  // Rakaposhi Basecamp PK24-06
  {
    id: "rakaposhi-basecamp-pk24-06",
    title: "Base Camp Trek to Rakaposhi, Diran & Kacheli Lake",
    service_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/cover.jpg",
    link: "package-tour/rakaposhi-basecamp-pk24-06",
    provincesCovered: "Gilgit Baltistan",
    price: "$1,500",
    days: "12",
    description:
      "Rakaposhi Base Camp trek route is in the region of Minapin Village in the Nagar Valley of Northern Areas Gilgit-Baltistan. This trek has quite easy access from Karakoram Highway (KKH). It is one of the easiest treks in the Karakorum that suits all levels of physical fitness and age. It gives all the taste of walking, including crossing the glacier. This is one of the shortest and easiest treks leading to above 7000M Karakoram peaks base camps with sweeping view from Rakaposhi to Diran.",
    overview: {
      location: "",
      people: "14",
      // weather: "40",
      bestTime: "June → October",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Highlights.jpg",
          title:
            "Dawn and dusks at Rakaposhi & Diran",
        },
        {
          pic: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Highlights(1).jpg",
          title:
            "Basecamp of Rakaposhi and Diran",
        },
        {
          pic: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Highlights(2).jpg",
          title:
            "Star grazing",
        },
        {
          pic: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Highlights(3).jpg",
          title:
            "Brightening moon at Tagaphari and Hapakun",
        },
        {
          pic: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/highlights(4).jpg",
          title:
            "Serenity of Kacheli Lake",
        },
        {
          pic: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Highlights(5).jpg",
          title:
            "Daily Trek for 3 to 4 Hours",
        },
        {
          pic: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/highlights(6).jpg",
          title:
            "Camping at Tagaphari and Hapakun",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 1.jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAamdeed, Welcome to the capital of Pakistan. Upon arrival, once you clear the customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour.  Dinner will be served at the renowned Monal Restaurant with a stunning panoramic view of Islamabad and Rawalpindi. Situated on the hill of Potohar, nestled against the pristine Margala, Monal Restaurant is voted one of the most romantic restaurants in Islamabad and is considered the best restaurant in Islamabad. Your dinner experience tonight at Monal will be a great introduction to Pakistani cuisine.A brief introduction will also be given to give you pointers of the upcoming tour.",
        premiumHotel: "Best Western Hotel (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 2.jpg",
        title: "Islamabad to Naran",
        description: "Early morning breakfast will be served. Depart early morning for Naran, a lush green valley located in KPK region. It’s going to be a 7 hours’ drive with Stopovers at Kiwai waterfall & Glacier points. Lunch at Kiwai waterfall. Upon arrival, transfer to hotel. Leisure in Naran. Overnight stay.",
        premiumHotel: "Northern Retreat (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops"
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 3.jpg",
        title: "Naran to Minapin",
        description: "After breakfast, depart early morning for Hunza. We will cross the Lulusar National park, stop over at Lulusar lake and Babusar top, which is at an elevation of 4,173m. After crossing Babusar top we will enter Diamir valley which will connect us to the Silk road. Stop over at Nanga Parbat viewpoint and a unique point where 3 mountain ranges collide. Our next stop over will be at Rakaposhi viewpoint which is the highest peak of Hunza district with an elevation of 7,778m. From there we will continue our journey to Hunza/Nagar (Minapin). Transfer to hotel, dinner will be served. Overnight stay.",
        premiumHotel: "Cozy Stones (Offers enhanced comfort and facilities)",
        activities: "Lulusar lake, Babusar top, 3 mountain ranges colliding point, Rakaposhi viewpoint and many photo stops."
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 4.jpg",
        title: "Minapin to Hapakun",
        description: "Early morning breakfast will be served. The first stage of the journey to base camp will begin right from the door of Diran Guest House. You’ll follow the road through Minapin for a little under two kilometers until arriving at a small bridge and dam. After crossing the bridge, the real hiking begins. For the next seven hundred meters or so, you’ll be climbing switchbacks. The trail is very easy to follow. After the switchbacks, you’ll begin to walk through a forest towards some shepherd’s huts. Continuing past the shepherd huts, you’ll begin another climb up towards the Hapakun campsite. Hapakun is easy to spot, it’s a nice grassy meadow with a small stream for water. If it’s late in the day and you’re planning on camping, this is the best spot. Hapakun is located at an altitude of 2,814 meters and it takes 3 hours to reach from Minapin (2,000 meters).",
        premiumHotel: "Camping (Offers enhanced comfort and facilities)",
        activities: "3 hours of trek, visit Shepherds hut, observation of summer settlements (seasonal), Camping and Campfire."
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 5.jpg",
        title: "Hapakun to Tagaphari (Rakaposhi base camp)",
        description: "This stage is slightly easier than the previous one. You’ll go from Hapakun all the way to Rakaposhi base camp at 3,500 meters. From Hapakun, continue to follow the visible trail upwards towards the ridge visible to the south. You’ll start to feel the altitude a bit at this point (unless you’re already acclimatized). You’ll arrive at the top of the ridge. This ridge is the same altitude as the actual base camp but offers much nicer views. You will get a stunning view of Diran peak (7200m) and the ridge between Rakaposhi and Diran. We will set up our camps at Tagaphari. Overnight stay in Camps.",
        premiumHotel: "Camping (Offers enhanced comfort and facilities)",
        activities: "Trekking for 3 Hours, Camping, Campfire, sightseeing at Tagaphari, exploring new viewpoints."
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 6.jpg",
        title: "Kacheli Lake and Diran Base camp",
        description: "Our day will start with a majestic view of Diran and Rakaposhi. We will trek towards Diran Base camp and Kacheli lake, which is at an elevation of 4,000m. The total trek for today is 4 to 5 hours. We would have to cross Glacier to reach Diran base camp. Sight-seeing at the base camp. Return to Tagaphari, overnight stay in camps with bonfire and dinner.",
        premiumHotel: "Camping (Offers enhanced comfort and facilities)",
        activities: "Trekking to Kacheli lake and Diran base camp."
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 7.jpg",
        title: "Tagaphari to Karimabad",
        description: "Breakfast will be served with a panoramic view of Rakaposhi, Diran and the mighty ridge connecting the moth peaks. We will descend back to Minapin. It's a downhill trek of approx 4 hours. Drive to Karimabad. Arrival at the resort. Freshen up and leisure for the rest of the day, dinner will be at the resort or somewhere nearby. Overnight stay.",
        premiumHotel: "Darbar Resort (Offers enhanced comfort and facilities)",
        activities: "Trek back to Minapin & drive to Karimabad"
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 8.jpg",
        title: "Karimabad, Baltit and Altit Fort",
        description: "Today, we will explore the culture and traditions of Hunza valley, it has so much to offer. We will start a short heritage walk from Karimabad bazar to Baltit fort, which is located on the top of Karimabad bazar. We will take a tour of Baltit Fort to know about the history, culture, and traditions of Hunza Valley. We'll walk all the way back to Karimabad bazaar. Chill at the local cafes with a view of Rakaposhi and other peaks which surround you, perhaps head out for shopping in the local markets. Excursion to Altit Fort, another stunning piece of architecture and history. Tour of Altit fort. There is a small hidden café in Altit called Khabasi Café which is operated by females only, an amazing initiative taken by Prince Agha Khan to uplift women empowerment. Today we will be preparing local Hunzai cuisine for lunch in an old local house to give an experience of Karakoram. Sunset at Eagles Nest (Duiker point) observes sunset on 5 peaks above 7,000 meters. Return to Hotel, leisure for the evening. overnight stay.",
        premiumHotel: "Darbar Resort (Offers enhanced comfort and facilities)",
        activities: "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café."
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 9.jpg",
        title: "Atabad Lake, Gulmit & Borith Lake",
        description: "After breakfast, we will leave for Atabad lake, crossing some mind-blowing tunnels leading us to one of the largest lakes of Pakistan. At Atabad Lake, you have options to participate in different kinds of water sports or do some sightseeing at Gulmit village. After Atabad Lake, we will head to Borit lake where lunch will be served at a lake viewing restaurant. We will leave for a glacier hike which is approx. 2 hours of trekking with an amazing view of Passu cones and Passu peak. Relax at the most scenic and beautiful place in upper Hunza valley. Return to Borit lake, transfer to resort. Dinner will be arranged at the Moksha Resort with music.",
        premiumHotel: "Borith lake Resort (Offers enhanced comfort and facilities)",
        activities: "Atabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borit lake."
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 10.jpg",
        title: "Karimabad to Naran",
        description: "Early morning breakfast will be served, Departure to Naran via Babusar top. It will be a long journey of 8 hours on silk route. We will take short breaks on various viewpoints. Tea and snack break at Babusar top. We will continue our journey to Naran. We will stop at Jhalkad for lunch at Moon restaurant. Enjoy the beautiful valleys of Kaghan. Excursion to Naran. Transfer to hotel. Overnight stay.",
        premiumHotel: "",
        activities: "Long drive, stop over at viewpoints."
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 11.jpg",
        title: "Naran to Islamabad",
        description: "Early Morning breakfast will be served, Departure to Islamabad via Mansehra Balakot road. It will be a 7 hour drive. Lunch stop on the Motorway. Continue journey to Islamabad. Transfer to the hotel, rest for a while, perhaps freshen up and head out for a farewell dinner at a nice Restaurant in Islamabad. Overnight stay.",
        premiumHotel: "Best Western Hotel (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops."
      },
      {
        id: 11,
        iternaries_img: "/assets/IMAGES/tour-packages/rakaposhi-basecamp-pk24-06/Day 12.jpg",
        title: "Day of Departure",
        description: "Breakfast will be served at the hotel. Free time for leisure and shopping in local handicraft shops, malls and marketplaces. Lunch will be served in yet another fine dining restaurant in Islamabad before you are transferred to the airport for your returning flight home.",
        premiumHotel: "",
        activities: "Departure to your country."
      },
    ],
    includes: {
      services: [
        "Vehicle",
        "Meals",
        "2 Nights Islamabad",
        "1 Night Minapin",
        "2 Night Naran",
        "1 Night Camping",
        "2 Nights Camping",
        "2 Nights Karimabad",
        "Driver Expense",
        "Kitchen staff & crew",
        "Camps, sleeping bags and Mats",
        "Fuel, tolls & taxes",
        "Tour Guide",
        "Campfire",
        "Daily Snack pack",
      ],
      deluxePackage: [
        "Toyota  Coaster",
        "3 Meals a day",
        "Roomy Signature ",
        "Cozy Stones",
        "Northern Retreat",
        "Hapakun",
        "Tagaphari (Basecamp)",
        "Darbar Hotel",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverage and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: [
        "8 to 12 Pax",
        "13 to 16 Pax",
        "17 Above",
      ],
      deluxePackage: ["$1,500", "$1,300", "$1,100"],
      //   premiumPackage: ["$1,800", "$1,700", "$1,600", "$1,500", "$1,400"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },
  // PK24-07 Ultimate Peaks Escape
  {
    id: "pk24-07-ultimate-peaks-escape",
    title: "Ultimate Peaks Escape: Hunza, Rakaposhi, and Nanga Parbat",
    service_img: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/cover.jpg",
    link: "package-tour/pk24-07-ultimate-peaks-escape",
    provincesCovered: "Punjab & GB",
    price: "$1,800",
    days: "15",
    description:
      "Pakistan is a country full of diversity in every means whether you talk about landscape, food, culture or our traditions. Islamabad is the capital of Pakistan where our journey starts. Islamabad is surrounded by beautiful Margalla Hills which are the start of our mountain ranges. In the North-East of Pakistan, at an altitude of 8200 ftHunza District is in Gilgit-Baltistan and is the center of trekking, trailing and climbing journeys. An epitome of beauty are its lakes, rivers and waterfalls, serenity of valleys and wilderness of the mountains. Fairy Meadows, named by German climbers and locally known as Joot, is a grassland near one of the base camp sites of the Nanga Parbat, located in Diamer District, Gilgit-Baltistan, Pakistan.",
    overview: {
      location: "Hunza, Rakaposhi Base camp & Fairy Meadows",
      people: "14",
      // weather: "40",
      bestTime: "June → September",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/h-islamabad.jpg",
          title: "Serenity of the capital of Pakistan (Islamabad)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/h-dawn.jpg",
          title: "Dawn and dusks in Karakoram and Himalayas",
        },
        {
          pic: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/h-lake.jpg",
          title: "Serenity of Atabad and Borith Lake",
        },
        {
          pic: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/h-base-camp.jpg",
          title: "Trek to Fairy Meadows and Nanga Parbat Base Camp (World’s 9th highest mountain – Elevation 8126m)",
        },
        {
          pic: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/h-culture.jpg",
          title: "Cultural insight of Hunza Valley, the most popular destination of Pakistan",
        },
        {
          pic: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/h-mountains.jpg",
          title: "Visit beautiful lakes, mightiest mountains, and some of the world’s largest glaciers.",
        },
        {
          pic: "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/h-music.jpg",
          title: "Meet the loving locals and enjoy the local music.",
        },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    "iternaries": [
      {
        "id": 0,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 1.jpg",
        "title": "Arrival at Lahore",
        "description": "KhushAmdeed, Welcome to Lahore. Upon arrival, once you clear the customs and collect your luggage, you will be met and greeted by Facing North on Location representatives and will be transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Time to settle in and relax after your international flight. You may wish to take a quick half day city tour. Dinner will be served at the renowned Spice Bazaar Restaurant, serving amazing Pakistani cuisine. A brief introduction will also be given to give you pointers of the upcoming tour. Overnight stay.",
        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Arrival Dinner & Introduction"
      },
      {
        "id": 1,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 2.jpg",
        "title": "Lahore city tour",
        "description": "After breakfast, we'll tour the Walled City of Lahore, starting from Delhi Gate. We'll visit Shahi Hammam, ancient royal baths, and then Wazir Khan Mosque, known for its unique art. Next, we'll try some local street food like smoked corn and Falooda. We'll also see the Badshah-e-Masjid mosque, Red Fort, Lahore Fort, and Sheesh Mahal, coated with beautiful glass. Dinner will be at Haveli or Andaaz restaurant with a great view of Badshah-e-Masjid. Overnight stay in Lahore.",
        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Badshah-e-Masjid tour, Minar-e-Pakistan, Red fort and Lahore Food Street."
      },
      {
        "id": 2,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 3.jpg",
        "title": "Wagah Border, Shopping and food Experiences",
        "description": "Have breakfast at the hotel and go shopping in Lahore, including visiting some art galleries. Have lunch at a renowned local restaurant and visit the Pakistan Army Museum. Later, visit Wagah Border for the famous border ceremony between India and Pakistan. Return to the hotel. Enjoy the evening at leisure, then have dinner at a fine restaurant or at the hotel before an overnight stay.",
        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Shopping, art galleries visit and museum."
      },
      {
        "id": 3,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 4.jpg",
        "title": "Lahore to Naran",
        "description": "Early morning breakfast at the Hotel. Depart early morning for Naran. Today we will drive for approx. 11 hours through Hazara Motorway and Balakot/Naran road. Your journey will consist of small stopovers at different tourist points like Kiwai waterfall where lunch can be taken. Continue journey to Naran. Transfer to the hotel, check in and settle down your luggage. Dinner will be served. Overnight.",
        "premiumHotel": "Northern Retreat",
        "activities": "Long Drive, Photo stops"
      },
      {
        "id": 4,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 5.jpg",
        "title": "Naran to Minapin",
        "description": "After breakfast, depart early in the morning for Minapin, we will cross the Lulusar National park, stop over at Lulusar lake and Babusar top, which is at an elevation of 4,173m. After crossing Babusar top we will enter Diamir valley which will connect us to the Silk road. Stop over at Nanga Parbat viewpoint and a unique point where 3 mountain ranges collide. Our next stopover will be at Rakaposhi viewpoint which is the highest peak of Hunza district with an elevation of 7,778m. Transfer to hotel in Minapin. Overnight stay.",
        "premiumHotel": "Cozy Stones",
        "activities": "Lulusar lake, Babusar top, 3 mountain ranges colliding point, Rakaposhi viewpoint and many photo stops."
      },
      {
        "id": 5,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 6.jpg",
        "title": "Minapin to Tagaphari (Rakaposhi base camp)",
        "description": "Early morning breakfast will be served. The first stage of the journey to base camp will begin right from the door of Cozy Stones. You’ll follow the track, arriving at a small bridge and dam. After crossing the bridge, the real hiking begins. For the next seven hundred meters or so, you’ll be climbing switchbacks. The trail is very easy to follow. After the switchbacks, you’ll begin to walk through a forest towards some shepherd’s huts. Hapakun is a nice grassy meadow with a small stream for water. Hapakun is located at an altitude of 2,814 meters and it takes 3 hours to reach from Minapin (2,000 meters). From Hapakun, continue to follow the visible trail upwards towards the ridge visible to the south. You’ll start to feel the altitude a bit at this point (unless you’re already acclimatized). You’ll arrive at the top of the ridge. This ridge is the same altitude as the actual base camp but offers much nicer views. You will get a stunning view of Diran peak (7200m) and the ridge between Rakaposhi and Diran. We will set up our camps at Tagaphari (3500 meters). Overnight stay in Camps.",
        "premiumHotel": "Camping",
        "activities": "3 hours of trek, visit Shepherds hut, observation of summer settlements (seasonal), Camping and Campfire."
      },
      {
        "id": 6,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 7.jpg",
        "title": "Tagaphari to Karimabad",
        "description": "Breakfast will be served with a panoramic view of Rakaposhi, Diran and the mighty ridge connecting the moth peaks. We will descend back to Minapin. It's a downhill trek of approx 4 hours. Drive to Karimabad. Arrival at the resort. Freshen up and leisure for the rest of the day, dinner will be at the resort or somewhere nearby. Overnight stay.",
        "premiumHotel": "Darbar Resort",
        "activities": "Trek back to Minapin & drive to Karimabad"
      },
      {
        "id": 7,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 8.jpg",
        "title": "Karimabad, Baltit and Altit Fort",
        "description": "Today, we will explore the culture and traditions of Hunza valley, it has so much to offer. We will start a short heritage walk from Karimabad bazar to Baltit fort, which is located on the top of Karimabad bazar. We will take a tour of Baltit Fort to know about the history, culture, and traditions of Hunza Valley. We'll walk all the way back to Karimabad bazaar. Chill at the local cafes with a view of Rakaposhi and other peaks which surround you, perhaps head out for shopping in the local markets. Excursion to Altit Fort, another stunning piece of architecture and history. Tour of Altit fort. There is a small hidden café in Altit called Khabasi Café which is operated by females only, an amazing initiative taken by Prince Agha Khan to uplift women empowerment. Today we will be preparing local Hunzai cuisine for lunch in an old local house to give an experience of Karakoram. Sunset at Eagles Nest (Duiker point) observes sunset on 5 peaks above 7,000 meters. Return to Hotel, leisure for the evening. overnight stay.",
        "premiumHotel": "Darbar Resort",
        "activities": "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café."
      },
      {
        "id": 8,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 9.jpg",
        "title": "Atabad Lake, Gulmit & Borith Lake",
        "description": "After breakfast, we will leave for Atabad lake, crossing some mind-blowing tunnels leading us to one of the largest lakes of Pakistan. At Atabad Lake, you have options to participate in different kinds of water sports or do some sightseeing at Gulmit village. After Atabad Lake, we will head to Borit lake where lunch will be served at a lake viewing restaurant. We will leave for a glacier hike which is approx. 2 hours of trekking with an amazing view of Passu cones and Passu peak. Relax at the most scenic and beautiful place in upper Hunza valley. Return to Borit lake, transfer to resort. Dinner will be arranged at the Moksha Resort with music.",
        "premiumHotel": "Borith lake Resort",
        "activities": "Atabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borit lake."
      },
      {
        "id": 9,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 10.jpg",
        "title": "Upper Hunza to Raikot Bridge",
        "description": "Our day will start with a majestic view of the lake and Ultar peaks in the background, breakfast will be served with the lake view. Today we will be heading to Raikot Bridge. It's going to be a 4 hour drive. stopovers for lunch and photography. upon arrival. Check-in to the Hotel. dinner will be served. and gear up for the next day's expedition. overnight stay.",
        "premiumHotel": "Raikot Gazebo",
        "activities": "Long drive with several stops for photography"
      },
      {
        "id": 10,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 11.jpg",
        "title": "Fairy Meadows",
        "description": "After breakfast, we will take a jeep ride towards Fairy Meadows. Upon arrival, an easy walk to Fairy Meadows campsite, transfer to your camps and settle your luggage. After a brief rest, a walk to Bayal camp (3300m) through the pine forest. Here you can see one of the best views of Nanga Parbat (8126m). Have tea at the Bayal camp. Overnight stay in wooden huts in Fairy Meadows.",
        "premiumHotel": "Wooden huts",
        "activities": "Jeep ride, trek to Fairy Meadows, trek to Bayal Camp, camping."
      },
      {
        "id": 11,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 12.jpg",
        "title": "Fairy Meadows Nanga Parbat Base camp hike",
        "description": "After breakfast, we will start our journey for Nanga Parbat Base Camp, a trek that can take approximately 7 hours. We will start early and keep following the trail to cross the Raikot glacier. Today we will cover an elevation from 3300 meters to 3600 meters. Get back to Fairy Meadows before dusk. Overnight stay at camps.",
        "premiumHotel": "Wooden huts",
        "activities": "7 hours trek, Nanga Parbat base camp, Raikot glacier."
      },
      {
        "id": 12,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 13.jpg",
        "title": "Fairy Meadows to Baboon valley",
        "description": "Early breakfast at the hotel. Jeep ride to Raikot bridge. Continue towards Baboon valley. Baboon valley is one of the hidden gems of Gilgit Baltistan. On our way, we will take short stopovers at several points, cross lush green meadows, streams and landscapes which are still unexplored by many tourists. It is accessible by jeep only. Dinner will be arranged at the campsite. Overnight stay at Baboon valley.",
        "premiumHotel": "Camping",
        "activities": "4x4 jeep ride, camping"
      },
      {
        "id": 13,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 14.jpg",
        "title": "Baboon Valley to Gilgit",
        "description": "Breakfast will be served at the Campsite. Jeep ride back to Baboon Top. From here we will continue our journey to Gilgit. We will have lunch on our way. Arrive at Gilgit, Check-in to the Hotel. Leisure time. Dinner at the Hotel. Overnight stay.",
        "premiumHotel": "Gilgit Serena Hotel",
        "activities": "Travel & rest day."
      },
      {
        "id": 14,
        "iternaries_img": "/assets/IMAGES/tour-packages/pk24-07-ultimate-peaks-escape/Day 15.jpg",
        "title": "Gilgit to Lahore",
        "description": "After breakfast, we will be transferred to the airport. Take a morning flight to Lahore. A short flight of approximately 1 hour and 20 mins. Upon arrival, we will have lunch at the airport and continue our journey back to the Hotel. Rest of the day will be leisure at the hotel. Dinner will be served and Overnight stay.",
        "premiumHotel": "Luxus Grand Hotel",
        "activities": "Domestic flight and rest day."
      },
      {
        "id": 15,
        "iternaries_img": swat_place_1.src,
        "title": "Departure",
        "description": "After breakfast, we will proceed to Lahore Airport. Facing North On location representatives will help you with the boarding process and other formalities. Depart back to your home with good memories of beautiful Pakistan.",
        "premiumHotel": "N/A",
        "activities": "Breakfast, Airport drop-off"
      }
    ],
    includes: {
      services: [
        "Meals",
        "Transportation ",
        "3 Nights Lahore",
        "1 Night Naran",
        "1 Night Minapin",
        "2 Nights Central Hunza",
        "1 Night Upper Hunza",
        "1 Night Raikot Bridge",
        "2 Nights Fairy Meadows",
        "1 Night Naran ",
        "Souvenirs",
        "Arrival & Farewell Dinner ",
        "Snack Packs",
        "Traditional Musical Night with BBQ Dinner",
        "English Speaking Guide",
      ],
      deluxePackage: [
        "3 Meals Daily",
        "Toyota Coaster & 4x4 Jeeps",
        "Luxus Grand Hotel",
        "Hotel Demanchi",
        "Cozy Stones",
        "Darbar Resort",
        "Borith lake Resort",
        "Raikot Gazebo",
        "Raikot Sarai",
        "Hotel Demanchi",
        "Yes",
        "Yes",
        "Trekking days",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Photographic insurance",
      "Alcoholic beverage and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: [
        "14+ Pax",
      ],
      deluxePackage: ["$1,600"],
      //   premiumPackage: ["$1,800", "$1,700", "$1,600", "$1,500", "$1,400"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },

  // =========================================================
  //  Yoga Retreat
  // =========================================================

  // Hunza Wellness Retreat
  {
    id: "hunza-wellness-retreat-pk24-11",
    title: "Spell Binding Wellness Retreat",
    service_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/banner.jpg",
    link: "package-tour/hunza-wellness-retreat-pk24-11",
    provincesCovered: "Gilgit Baltistan",
    price: "$1,800",
    days: "11",
    description:
      "Our wellness retreat aims to create good vibes, guide people to be at their best, and support individual power. We face challenges we cannot control, affecting our mental and physical health. The retreat provides a space to step back, recharge and rediscover ourselves amidst nature. Through meditation, exercise, and mindfulness, we can break our habits and reconnect with healing powers. Recharge your soul and unlock your potential energy this summer with us in the mountains for a balanced life.",
    overview: {
      location: "Hunza Valley",
      people: "16",
      // weather: "40",
      bestTime: "April → October",
      recommendation: "Highly recommended",
      overviewImg: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/overview.jpg"
    },
    experiences: {
      experience_points: [
        {
          pic: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/h-1.jpg",
          title:
            "Relaxation and stress reduction: Emphasize the opportunity to disconnect from daily stressors and focus on relaxation through yoga, meditation, and other wellness activities.",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/h-2.jpg",
          title:
            "Immersion in nature: Highlight the retreat's location in a stunning natural setting and the benefits of being surrounded by the beauty of nature for physical and mental well-being.",
        },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/h-3.jpg",
          title:
            "Personalized experiences: Emphasize the customized, intimate atmosphere of the retreat, and the opportunity for guests to design their own wellness journey according to their individual needs and preferences.",
        },
        // {
        //   pic: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11",
        //   title:
        //     "Expert guidance: Mention the experienced yoga and wellness instructors who will be leading the activities and providing personalized attention to each guest.",
        // },
        {
          pic: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/h-4.jpg",
          title:
            "Healthy nutrition: Highlight the healthy, nutritious meals and snacks that will be provided, emphasizing the importance of good nutrition for overall wellness.",
        },
        // {
        //   pic: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11",
        //   title:
        //     "Mindfulness and self-discovery: Emphasize the opportunities for self-discovery, reflection, and mindfulness, and how these experiences can positively impact both mental and physical health.",
        // },
      ],
    },
    iternaries_img: hunza_iternaries2.src,
    iternaries: [
      {
        id: 0,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 1.jpg",
        title: "Arrival at Islamabad",
        description:
          "KhushAmdeed! Welcome to Islamabad, Pakistan's capital. Our representative will meet you at the airport and transfer you to your hotel, just 20-25 minutes away. Spend the day exploring or shopping, then join us for an arrival dinner where you'll meet your Instructor and Guide at a handpicked restaurant. After a pleasant evening, rest at the hotel for the next day",
        premiumHotel: "Ramada (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Quick Tour Islamabad",
      },
      {
        id: 1,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 2.jpg",
        title: "Gilgit & Minapin",
        description:
          "After breakfast, we'll depart early in the morning for Gilgit by flight from Islamabad. Enjoy the scenic flight for 45 minutes across high-altitude peaks and the highest mountain ranges. Meet the local guide at Gilgit airport and continue the journey to Hunza valley, which is a 2-hour drive with a stunning view of the Karakoram mountains. See the remains of the ancient Silk Route on the way. Check-in at the hotel and have lunch. Have an ice-breaking session with the instructor followed by dinner with bonfire and meditation. Overnight stay.",
        premiumHotel: "PC Legacy (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Safari flight, Ice-breaking Incircle, Bonfire & Meditation",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 3.jpg",
        title: "Bikchum Ghutum",
        description:
          "Start your day with pranayama & meditation, followed by breakfast. Get a brief history of Hunza from our local guide before heading out to Bikchum Ghutum in 4x4 jeeps, a bumpy 45-minute ride to a hidden pearl at the base of Rakaposhi. Enjoy mindfulness activity sessions, partner yoga, and organic ice from a nearby glacier. Lunch and local mountain herb tea will be provided. Return to Nasirabad for leisure time until dinner. Rest well for tomorrow.",
        premiumHotel: "PC Legacy (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Meditation session, 4x4 ride & Bikchum Ghutum and village walk in Minapin",
      },
      {
        id: 3,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 4.jpg",
        title: "Karimabad",
        description:
          "We'll begin our day with morning meditation and pranayama to set a positive tone for the day ahead. Explore Central Hunza's culture and traditions with a short heritage walk from Karimabad Bazaar to Baltit Fort, followed by a tour of the fort. We'll then head to Altit Fort, where we'll visit Khabasi Cafe, a female-operated cafe that promotes women's empowerment. Afternoon yoga practice and stretching session in the resort's garden with stunning views of snow-capped peaks surrounding the valley. Leisure until dinner time, allowing you to enjoy your surroundings and unwind. We'll conclude the day with an overnight stay.",
        premiumHotel: "Ambiance (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, Khabasi Café and Yoga & meditation session",
      },
      {
        id: 4,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 5.jpg",
        title: "Local Craftsmanship & Hopper Valley",
        description:
          "Start your day with meditation and somatic movements while enjoying the stunning view of Rakaposhi. Visit handmade carpet and wooden craft factories, explore Hopper Valley and participate in mindfulness activities for overall wellness. Relax at the resort before heading to Duiker Point for a sunset view. Enjoy an Incircle session with KK at Eagle's Nest, followed by dinner and a musical night. Don't forget to join tomorrow's yoga session for an invigorating start to your day.",
        premiumHotel: "Ambiance (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Visit cottage factories, hopper valley, sunset at Duiker,  Bonfire & musical night",
      },
      {
        id: 5,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 6.jpg",
        title: "Into The Pamir Region",
        description:
          "Start your day with a rejuvenating morning meditation and pranayama session, followed by a delicious breakfast. We will then travel to the Upper Hunza region and check in to our lake-facing resort. Enjoy water sports at the boating area and have lunch at the resort. Embark on a silent walk session at Hussaini Bridge, followed by a refreshing yoga practice at the lake-side deck. End the day with an evening meditation session, dinner, and a bonfire. Indulge in various mindfulness activities throughout the day to promote overall wellness. Relax and unwind during your overnight stay.",
        premiumHotel: "Luxus Atabad (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Drive to Upper Hunza, Boating and Hussaini bridge visit, Yoga & meditation session",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 7.jpg",
        title: "Village to Village Hike",
        description:
          "Start your day with an early morning meditation and somatic movements session, taking in the stunning view of Attabad Lake and Passu cones. Enjoy a lakeside breakfast before heading out for a village-to-village walk, starting from Ghulkin village and visiting a local house for refreshments. Then, we'll make our way to Gulmit and Passu, stopping for lunch at Yak Grill and trying local yak meat dishes. On the way back to Attabad Lake, we'll make a stop at Glacier Breeze café for some organic apricot cake and tea. In the evening, enjoy a traditional musical night with a bonfire and dinner.",
        premiumHotel: "Luxus Atabad (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "village to village walk, Bonfire & musical night",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 8.jpeg",
        title: "Borith Lake & Passu Glacier Hike",
        description:
          "Start your day with morning meditation and yoga while enjoying the stunning view of Attabad Lake. After breakfast, head to Borith Lake for a glacier hike with breathtaking views of Passu cones and Passu peak. Take some silent hours in nature for mental health and freedom before returning to Borith Lake for lunch. Enjoy a meditation session by the lake before driving back to the resort. End the day with a sharing circle, dinner, and a bonfire. Overnight stay.",
        premiumHotel: "Luxus Atabad (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Passu Glacier Walk, Borith lake Meditation session & Bonfire",
      },
      {
        id: 8,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 9.jpg",
        title: "Upper Hunza to Gilgit (Naltar Valley)",
        description:
          "Start the day with Pranayama followed by breakfast. Depart for a day tour of Naltar valley, a lush green hidden gem in the Karakoram. Explore the alpine lakes with partner yoga and enjoy a picnic lunch by the water streams. Return to Nomal village and continue driving to Gilgit. Check in to the hotel and rest until dinner. Conclude the retreat in the mountains with an overnight stay.",
        premiumHotel: "Ramada (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Day trip to Naltar, Picnic Lunch and Partner yoga",
      },
      {
        id: 9,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 10.jpg",
        title: "Islamabad and Monal",
        description:
          "Transfer to the airport after breakfast. Fly over the Himalayas and Karakoram range to Islamabad. Check-in at the hotel and visit the Pakistan Monument and Faisal Masjid. Sunset photography at Monal where you can capture the Margalla hills. Dinner at Monal restaurant. Return to hotel for overnight stay in Islamabad.",
        premiumHotel: "Ramada (Offers enhanced comfort and facilities)",
        deluxeHotel: "",
        activities: "Flight safari, Islamabad city tour, Lok Virsa Museum and Monal",
      },
      {
        id: 10,
        iternaries_img: "/assets/IMAGES/tour-packages/hunza-wellness-retreat-pk24-11/Day 11.png",
        title: "Islamabad",
        description:
          "Breakfast will be served at the hotel. Departure from Islamabad with lots of memories to cherish forever. Activities: Air Safari",
        premiumHotel: "",
        deluxeHotel: "",
        activities: "Air Safari",
      },
    ],
    includes: {
      services: [
        "Vehicle",
        "Meals",
        "2 Nights Islamabad",
        "2 Nights Nasirabad",
        "2 Nights Central Hunza",
        "3 Nights Upper Hunza",
        "1 Night Gilgit",
        "Driver Expense",
        "Fuel, tolls & taxes",
        "Tour Guide & Instructors",
        "Traditional Musical Night",
      ],
      // deluxePackage: [],
      premiumPackage: [
        "Coaster & Jeeps",
        "3 Meals /Daily",
        "Ramada Hotel",
        "PC Legacy",
        "Ambiance Hotel",
        "Luxus Atabad",
        "Serena Hotel",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
    },
    notIncluded: [
      "Round Trip international flight to Islamabad",
      "Visa application and fees",
      "Cancellation / Travel Insurance and Emergency Medical Insurance",
      "Travel insurance",
      "Alcoholic beverage and soft drinks",
      "Personal expenses",
    ],
    cost: {
      size: [
        "Package cost per person single occupancy ",
        "Package cost per person double occupancy",
      ],
      deluxePackage: ["$32,00", "$2,500"],
      //   premiumPackage: ["$1,800", "$1,700", "$1,600", "$1,500", "$1,400"],
    },
    // accommodation: "Hotels on Double Occupancy",
    essential:
      "Warm Clothes will be required in the northern region of Pakistan. The weather will be moderate in the rest of the country.",

    // mapImage: "",
  },



  // For Testing Journey Around Karakoram
  // { 
  //   category: [CATEGORIES.home, CATEGORIES.naran, CATEGORIES.karakoram],
  //   id: "journey-around-karakoram-paki-10-test",
  //   title: "Demo Journey Around Karakoram",
  //   service_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/banner-2.jpg",
  //   bg_position: "bottom",
  //   link: "package-tour/journey-around-karakoram-paki-10",
  //   provincesCovered: "Gilgit Baltistan",
  //   price: "$1",
  //   days: "11",
  //   description:
  //     "Pakistan is a country full of diversity in every means whether you talk about landscape, food, culture or our traditions. Islamabad is the capital of Pakistan where our journey starts, Islamabad is surrounded by beautiful Margalla Hills which are the start of our mountain ranges. In the extreme North-East of Pakistan, at an altitude of 8200 ft., Skardu District is located in Gilgit-Baltistan and is the center of trekking, trailing and climbing journeys.",
  //   overview: {
  //     location: "Islamabad, Hunza & Skardu",
  //     people: "",
  //     // weather: "40",
  //     bestTime: "May → October",
  //     recommendation: "Highly recommended",
  //     overviewImg: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/banner.jpg"
  //   },
  //   experiences: {
  //     experience_points: [
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_1.jpg",
  //         title: "Serenity of the capital of Pakistan (Islamabad)",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_3.jpg",
  //         title: "Shangri-La Resorts in the Lower Kachura Lake",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_10.jpg",
  //         title: "Dawn and dusks at Indus River",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_7.jpg",
  //         title: "The land of Giants, Deosai plains",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_6.jpg",
  //         title: "Khaplu fort and Shigar fort",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Highlights(1).jpg",
  //         title: "Hashupi bagh",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Highlight .jpg",
  //         title: "Katpana Desert sand dunes",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Shangrila.jpg",
  //         title: "Serenity of Satpara Lake",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Highlights.jpg",
  //         title: "Heritage & History of Skardu & Hunza",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_9.jpg",
  //         title: "Baltit and Altit fort",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 5.jpg",
  //         title: "Boating at Atabad Lake",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Starry night in Skardu.jpg",
  //         title: "Traditional musical night",
  //       },
  //       {
  //         pic: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Highlight-2.jpg",
  //         title: "Amazing food country has to offer",
  //       },
  //     ],
  //   },
  //   iternaries_img: hunza_iternaries2.src,
  //   iternaries: [
  //     {
  //       id: 0,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_1.jpg",
  //       description: "KhushAmdeed! Welcome to the capital of Pakistan. Upon arrival, once you clear customs and collect your luggage, you will be met by Facing North's representatives and transferred to your hotel. The drive to your hotel will be approximately 30 minutes. Today is a rest day to settle in and relax after your international flight. You may wish to head out and enjoy a cup of local chai and sweets. A welcome dinner will be served at a fine dining restaurant handpicked by Facing North where you will meet your Resident Director. A brief introduction will also be given to help you prepare for the upcoming tours.",
  //       title: "Arrival at Islamabad",
  //       deluxeHotel: "Ambiance Hotel (Quality stay at a more economical rate)",
  //       premiumHotel: "Marriott Hotel (Offers enhanced comfort and facilities)",
  //       activities: "Quick Tour Islamabad",
  //     },
  //     {
  //       id: 1,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 2.jpg",
  //       description: "Early morning flight from Karachi to Skardu, Flight is approx. 2 hours which will leave a lifetime impact, the flight will cross some of the high-altitude peaks and highest mountain ranges & 9th Highest peak in the world Nanga Parbat also known as the killer mountain. Arriving at Skardu airport, we will depart to Hunza valley, which will be a 5 to 6 hours drive via crossing Gilgit city. Short stopovers at different viewpoints including Rakaposhi view point and 3 mountain ranges colliding point. upon arrival transfer to the hotel. overnight stay.",
  //       title: "Karachi to Skardu → Hunza",
  //       deluxeHotel: "Greenpak Resort (Quality stay at a more economical rate)",
  //       premiumHotel: "Serena Hotel (Offers enhanced comfort and facilities)",
  //       activities: "Drive from Skardu Airport to Hunza",
  //     },
  //     {
  //       id: 2,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 3.jpg",
  //       description: "Today, we will explore the culture and traditions of Hunza valley, it has so much to offer. We will start a short heritage walk from Karimabad bazar to Baltit fort, which is located on the top of Karimabad bazar. We will take a tour of Baltit Fort to learn about the history, culture, traditions of Hunza Valley. We'll walk back to Karimabad Bazar, an excursion to Altit Fort, another stunning piece of architecture and history. Tour of Altit fort. There is a small hidden café in Altit called Khabasi Café which is operated by females only, an amazing initiative taken by Prince Agha Khan to uplift women empowerment. Evening walk in Altit royal gardens, return to Karimabad, some free shopping time. Transfer to hotel. Rest till the next morning.",
  //       title: "Karimabad, Baltit and Altit Fort",
  //       premiumHotel: "Ambiance Hotel (Offers enhanced comfort and facilities)",
  //       activities: "Karimabad heritage walk, Baltit and Altit fort tour, Altit royal gardens, khabasi Café.",
  //     },
  //     {
  //       id: 3,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 4.jpg",
  //       description: "Morning breakfast will be served, departure to Attabad lake. Continue to drive to the famous Hussaini suspension bridge. You will have to walk downhill for 15 minutes to reach the bridge. Photography and sightseeing. Head towards Borith lake, have freshly cooked snacks by the lake and enjoy the view. Short 20 minutes drive to Zero Point from where we will start our Passu glacier hike. It is a 40 minute hike which has a beautiful panoramic view of Passu Cones and Passu Glacier. Return to Attabad Lake, check into the hotel. Enjoy the beautiful views of the lake resort. Head to the boating area for jet skiing and boating. Return to the Resort. Leisure and dinner by the lake. Overnight stay.",
  //       title: "Attabad Lake, Hussaini Bridge, Passu Glacier Walk & Borith lake",
  //       premiumHotel: "Luxus Atabad Lake Resort (Offers enhanced comfort and facilities)",
  //       activities: "Attabad lake, Passu cones, Gulmit village walk, Passu Glacier Walk and Borith lake.",
  //     },
  //     {
  //       id: 4,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day 5.jpg",
  //       description: "Our day will start with a majestic view of Attabad Lake in the background. Breakfast will be served with the lake view, after which we will head to Sost with stopovers at different villages for photography. We will visit Sost Dry Port. Excursion to Khunjerab pass which is situated at an elevation of 4,693m. Then we will head back to Passu, visit Yak Grill for lunch where you can try local Yak meat dishes. Head to Glacier Breeze café for scrumptious organic Apricot cake and tea with the sunset on Passu cones. Return to the hotel and rest for a while. Visit Moksha Resort for a BBQ Dinner with local traditional music and a bonfire. Return to the hotel. Overnight stay.",
  //       title: "Passu, Sost & Khunjerab Pass",
  //       deluxeHotel: "Famree Resort (Quality stay at a more economical rate)",
  //       premiumHotel: "Lodges By Baron (Offers enhanced comfort and facilities)",
  //       activities: "Khunjerab pass, Bonfire & musical night.",
  //     },
  //     {
  //       id: 5,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_6.jpg",
  //       description: "Early morning breakfast and departure to Gilgit. Drive to Minapin, one of the oldest villages in Nagar valley. Take a garden walk and enjoy fresh fruits from the orchards if there is a season for it or enjoy blossom. Take a tea break by a water stream. 4x4 Jeep ride to Bikchum Ghutum, a hidden gem at the foothills of Rakaposhi. Short trek to a glacier to taste organic ice. Lunch at Bikchum Ghutum. Return to Minapin, change to a coaster bus for the journey to Gilgit. Rest of the day at leisure.",
  //       title: "Rakaposhi Viewpoint Minapin & Bikchum Ghutum",
  //       premiumHotel: "Ramada Hotel (Offers enhanced comfort and facilities)",
  //       activities: "Minapin garden walk, 4x4 ride, Bikchum Ghutum and glacier walk.",
  //     },
  //     {
  //       id: 6,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_7.jpg",
  //       description: "After breakfast, depart early to Shigar which will be a drive of 4.5 hours, crossing Jaglot town from where we will turn towards deep in the mountains which will take us to Baltistan region. We will first visit Kachura lakes. Visit upper Kachura lake first which has a short 15 minute trek, where you can go speed boating  and even take a Ice cold dip in the beautiful Turquoise blue water. Return to lower Kachura lake where Shangrila resort is situated as well. a good spot to have your lunch by the lake. Excursion to Soq valley which is 45 minutes from Kachura. Explore this hidden gem. Return to your resort. overnight stay.",
  //       title: "Gilgit to Skardu",
  //       deluxeHotel: "Khoj Resorts (Quality stay at a more economical rate)",
  //       premiumHotel: "Shangrila Resort (Offers enhanced comfort and facilities)",
  //       activities: "Drive to Skardu, Upper Kachura Lake, Lower Kachura & Soq Valley.",
  //     },
  //     {
  //       id: 7,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_8.jpg",
  //       description: "After early morning breakfast, Adventure tour and jeep safaris to the Deosai Plains which is at a jeep ride of approx 2 hours from Skardu city. Deosai plains are the second highest in the world (at 4,100 m or 13,500 feet) after the Chang Tang in Tibet, in local Balti language, meaning ‘summer place’. With an area of approximately 3,000 square kilometers, the plains extend all the way to Ladakh and provide habitat for snow leopards, ibex, Tibetan brown bears and wild horses. Visit Bara Pani and Sheosar lake. return to Skardu,  Overnight Stay.",
  //       title: "Deosai Plains & Sheosar lake",
  //       deluxeHotel: "Khoj Resorts (Quality stay at a more economical rate)",
  //       premiumHotel: "Shangrila Resorts (Offers enhanced comfort and facilities)",
  //       activities: "Jeeps safari, Deosai plains, wildlife, sheosar lake",
  //     },
  //     {
  //       id: 8,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_9.jpg",
  //       description: "After breakfast. Today we will first visit Shigar valley and Darfaranga cold desert. Departure to Shigar valley, crossing Sarfaranga cold desert. The gateway to the great mountain peaks of the Karakorum, Gasherbrum & K-2. The wooden mosque in the middle of the town was built by Kashmiri carpenters several hundred years ago. The town of Shigar is the largest settlement in the valley. Shigar was formerly an administrative sub-division of Skardu District but is now a district. Visit to Shigar fort which is restored by Agha khan foundation & Serena hotels. Tour of Shigar fort, visit Hashupi Bagh. We will return to Skardu, transfer to the Hotel. Dinner will be served. Overnight stay.",
  //       title: "Shigar Valley & Cold Desert",
  //       deluxeHotel: "Khoj Resorts (Quality stay at a more economical rate)",
  //       premiumHotel: "Shangrila Resorts (Offers enhanced comfort and facilities)",
  //       activities: "Sarfaranga desert, Tour of Shigar fort, Blind Lake",
  //     },
  //     {
  //       id: 9,
  //       iternaries_img: "/assets/IMAGES/tour-packages/journey-around-karakoram-paki-10/Day_10.jpg",
  //       description: "Breakfast will be served at the hotel. Morning flight to Islamabad. Transfer to Airport, depart to Lahore via flight. An hour air safari, flying over the mighty Karakorum and Kaghan region. Arrival at Islamabad airport, transfer to hotel. Visit Pakistan Monument, Lok Virsa museum and Faisal Masjid. Dinner at a fine restaurant. Return to the hotel, Overnight stay.",
  //       title: "Skardu  to Islamabad",
  //       premiumHotel: "Ramada hotel (Offers enhanced comfort and facilities)",
  //       activities: "Short tour and shopping in Islamabad",
  //     },
  //     {
  //       id: 10,
  //       iternaries_img: swat_place_1.src,
  //       description: "Breakfast will be served at the hotel. Leisure for the day. a farewell dinner at Bukhara restaurant. Check out from the  Transfer to the Airport with lots of memories to cherish forever.",
  //       title: "Day of Departure",
  //       deluxeHotel: "",
  //       premiumHotel: "",
  //       activities: "Departure to your country",
  //     }
  //   ],
  //   includes: {
  //     services: [
  //       "Transportation",
  //       "one way Flight ISB→ KDU",
  //       "Meals",
  //       "2 Nights Islamabad ",
  //       "4 Nights Skardu",
  //       "2 Nights Khaplu",
  //       "2 Nights Fairy Meadows",
  //       "1 Night Naran",
  //       "Souvenirs",
  //       "Arrival & Farewell Dinner ",
  //       "English Speaking Guide",
  //       "Driver, Guide, Toll, Parking Expense",
  //       "Entry to all forts, Museum & Boating or  any other activity ",
  //     ],
  //     deluxePackage: [
  //       "Toyota Coaster & Jeeps",
  //       "Yes",
  //       "3 Meals/Daily",
  //       "Roomy Signature",
  //       "Dynasty Resort",
  //       "Serena Khaplu",
  //       "Fairy Meadows Cottages",
  //       "Northern Retreat",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //     ],
  //     premiumPackage: [
  //       "Toyota Coaster & Jeeps",
  //       "Yes",
  //       "3 meals/Daily",
  //       "Best Western Premier",
  //       "Khoj Resort",
  //       "Serena Khaplu",
  //       "Raikot Sarai",
  //       "The Sarai",
  //       "Yes ",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //       "Yes",
  //     ],
  //   },
  //   notIncluded: [
  //     "Round Trip international flight to Islamabad",
  //     "Visa application and fees",
  //     "Cancellation / Travel Insurance and Emergency Medical Insurance",
  //     "Photographic insurance",
  //     "Alcoholic beverage and soft drinks",
  //     "Personal expenses",
  //   ],
  //   cost: {
  //     size: [
  //       "8-10 pax",
  //       "12-16 pax",
  //     ],
  //     deluxePackage: [
  //       "$2,400",
  //       "$2,000",
  //     ],
  //   },
  //   // accommodation: "Hotels on Double Occupancy",
  //   // essential:"",

  //   // mapImage: "",
  // },
];


export const EXPERIENCE = [
  {
    id: 1,
    title: "Nanga Parbat base camp",
    // service_img: service_img1,
    link: "/package-tour/1",
    description:
      "Nanga Parbat base camp in Pakistan offers breathtaking views and a challenging trek for adventurous tourists. Explore the majestic beauty of the world's ninth highest mountain.",
  },
  {
    id: 2,
    title: "Rakaposhi base camp",
    // service_img: service_img1,
    link: "/package-tour/2",
    description:
      "Rakaposhi Base Camp, also known as Tagaphari, is a hidden gem in Pakistan that offers stunning mountain views and a memorable trekking experience for tourists seeking adventure.",
  },
  {
    id: 3,
    title: "Patundas trek",
    // service_img: service_img1,
    link: "/package-tour/3",
    description:
      "Embark on the Patundas Trek in Pakistan for an exhilarating and unforgettable experience. This trek offers breathtaking views of the mountains and picturesque landscapes.",
  },
  {
    id: 4,
    title: "Patundas trek",
    // service_img: service_img1,
    link: "/package-tour/4",
    description:
      "Embark on the Patundas Trek in Pakistan for an exhilarating and unforgettable experience. This trek offers breathtaking views of the mountains and picturesque landscapes.",
  },
];
