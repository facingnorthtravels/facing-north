// Archived — NOT imported anywhere on the site.
// Spring 2026/27 co-hosted "Journey Through the Heart of Karakoram" entries for Jonas, Marius
// and Lukas, exactly as they stood in TOUR_PAKAGE before the AKS-27 itinerary update.
// Matching PDFs live in public/assets/PDFS/archive/.
import hunza_iternaries2 from "../../public/assets/Iternaries/hunza/iternary-hunza2.jpg";
import { CATEGORIES } from "../tours-pakages";

export const AROUND_KARAKORAM_SP26_ARCHIVE = [
  {
    id: "br-around-karakoram-SP26-01-jonas",
    title: "Journey Through the Heart of Karakoram",
    service_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/banner.jpeg",
    link: "package-tour/br-around-karakoram-SP26-01-jonas",
    category: [CATEGORIES.naran],
    provincesCovered: "Gilgit Baltistan",
    price: "£1,800",
    singleOccupancy: "£600",
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
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Best Western Premier, Zen by the Lake, and Hashupi/ Rivage Resort ",
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
        premiumHotel: "Best Western Premier (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Best Western Premier (Offers enhanced comfort and facilities)",
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
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 7.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-jonas/Day 8.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Spring landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of blossom and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Spring Landscapes & Mountain Valleys",
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
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
        "Best Western Premier (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "Hashupi/ Rivage Resort (Deluxe Rooms)",
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
        "£1,800",
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
    price: "£1,800",
    singleOccupancy: "£600",
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
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Best Western Premier, Zen by the Lake, and Hashupi/ Rivage Resort ",
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
        premiumHotel: "Best Western Premier (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Best Western Premier (Offers enhanced comfort and facilities)",
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
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 7.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-meths/Day 8.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Spring landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of blossom and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Spring Landscapes & Mountain Valleys",
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
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
        "Best Western Premier (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "Hashupi/ Rivage Resort (Deluxe Rooms)",
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
        "£1,800",
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
    price: "£1,800",
    singleOccupancy: "£600",
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
    pdf: "/assets/PDFS/SP26-02-around-karakoram-lukas.pdf",

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
          title: "Evening bonfires, BBQs, and stays at top boutique resorts like Best Western Premier, Zen by the Lake, and Hashupi/ Rivage Resort ",
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
        premiumHotel: "Best Western Premier (Offers enhanced comfort and facilities)",
        activities: "Long Drive, Photo stops",
      },
      {
        id: 2,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 3.jpg",
        description: "The day is dedicated to exploring the cultural heart of Hunza. We begin with a scenic heritage walk through the charming Karimabad Bazaar, gradually ascending towards the majestic Baltit Fort, a centuries-old symbol of Hunza's history and royal legacy. After a guided tour of the fort, we return to the bazaar before heading to the nearby Altit Fort, a beautifully restored monument surrounded by the ancient Altit Royal Gardens. A highlight of the visit is a stop at Khabasi Café, a hidden gem within the fort premises run entirely by local women, a remarkable initiative by Prince Aga Khan promoting female empowerment in the region. The day winds down with a relaxing evening stroll, a bit of souvenir shopping in Karimabad, and a peaceful return to the hotel to rest and recharge for the adventures ahead.",
        title: "Heritage, Forts & Empowerment in Hunza",
        premiumHotel: "Best Western Premier (Offers enhanced comfort and facilities)",
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
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
        activities: "Upper Kachura Lake, Lower Kachura, Shangri-La Resort & Soq Valley",
      },
      {
        id: 6,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 7.jpg",
        description: "Today begins with an early breakfast before embarking on a day journey to Khaplu valley, crossing Guwari trees and sailing valley where the pristine water streams will take your breath away. Stopover at Kaiser suspension bridge. Continue to drive to Khaplu. Visit Khaplu palace. Lunch will be at Khaplu Palace. Leisure and return back to Skardu. The adventure continues with a horse ride through the mystical Sarfaranga Cold Desert, we'll enjoy a peaceful sunset over the desert horizon before returning to the resort for a restful overnight stay.",
        title: "Mountain Heights & Desert Calm",
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
        activities: "Khaplu fort, Chaqchan Mosque & sailing village tour",
      },
      {
        id: 7,
        iternaries_img: "/assets/IMAGES/tour-packages/br-around-karakoram-SP26-01-lukas/Day 8.jpg",
        description: "After an early morning breakfast, we set off for a day tour to either Basho or Chunda Valley, both reachable via a 1.5-hour off-road journey from Skardu. These hidden gems are known for their breathtaking Spring landscapes, crystal-clear mountain streams, and majestic snow-capped backdrops. We'll spend the day enjoying short walks and light treks, immersing ourselves in the vibrant colors of blossom and pristine natural beauty. By evening, we return to Skardu for some leisure time, followed by dinner and an overnight stay at the resort.",
        title: "Spring Landscapes & Mountain Valleys",
        premiumHotel: "Hashupi/ Rivage Resort (Offers enhanced comfort and facilities)",
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
        "Best Western Premier (Premier Rooms)",
        "Zen By The Lake (Deluxe Rooms)", 
        "Ramada Hotel (Deluxe Rooms)",
        "Hashupi/ Rivage Resort (Deluxe Rooms)",
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
        "£1,800",
      ],
    },
  },
];
