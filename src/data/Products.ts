import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 12 Pro Max, 128GB, Graphite - Unlocked (Renewed)",
    description: "Fully unlocked, renewed iPhone 12 Pro Max with 128GB storage.",
    price: "$609.00",
    imageUrl: "/images/iphone-12-pro-max.jpg",
    brand: "Apple",
    operatingSystem: "iOS 14",
    ram: "6 GB",
    cpuModel: "A13",
    cpuSpeed: "2.5 GHz",
    storage: "128 GB",
    screenSize: "6.7 Inches",
    modelName: "iPhone 12 Pro Max",
    carrier: "Unlocked",
    cellularTechnology: "5G",
    rating: 4.1,
    reviewsCount: 1272,
    about: [
      "6.7-inch Super Retina XDR OLED Display",
      "Fully unlocked and compatible with any carrier",
      "A13 Bionic chip for top-tier performance",
      "Renewed and inspected under Amazon Renewed standards",
      "128GB internal storage for all your data",
    ],
  },
  {
    id: 2,
    name: "Roborock Q5 Pro Robot Vacuum and Mop Combo",
    description: "Powerful robotic vacuum cleaner with DuoRoller Brush, 5500Pa suction, and LiDAR navigation.",
    price: "$249.99",
    imageUrl: "/images/roborock-q5-pro.jpg",
    brand: "Roborock",
    modelName: "Q5 Pro",
    surfaceRecommendation: "Hard Floor",
    specialFeatures: [
      "Customizable App Features",
      "5500Pa Suction Power and DuoRoller Brush",
      "770ml Large Dustbin for Longer Pet Hair",
      "Vacuum and Mop in One Pass",
      "PreciSense LiDAR Navigation"
    ],
    color: "Black",
    dimensions: "35.3L x 35.1W x 9.7H cm",
    controllerType: ["App Control", "Button Control", "Voice Control"],
    includedComponents: [
      "1* Mop Cloth",
      "1* User Manual",
      "1* Charging Dock",
      "1* Power Cable",
      "1* Q5 Pro Robot Vacuum",
      "1* Water Tank"
    ],
    filterType: "Washable",
    batteryLife: "240 minutes",
    rating: 4.3,
    reviewsCount: 675,
    about: [
      "DuoRoller Brush and 5500Pa suction for impressive cleaning performance.",
      "Large 770ml dustbin for handling pet hair and long cleaning sessions.",
      "PreciSense LiDAR navigation system with 3D mapping for precise cleaning.",
      "Simultaneous vacuuming and mopping with adjustable water flow.",
      "Multi-directional floating all-rubber brush resists hair tangles.",
      "Compatible with Roborock App and voice control via Alexa, Google Home, and Siri.",
    ],
  },

  {
    id: 3,
    name: "Amazon Fire TV Stick HD (newest model), free and live TV, Alexa Voice Remote, smart home controls, HD streaming",
    description: "Enjoy fast, affordable streaming in Full HD with Alexa Voice Remote and smart home controls.",
    price: "$39.99",
    imageUrl: "/images/fire-tv-stick-hd.jpg",
    brand: "Amazon",
    modelName: "Fire TV Stick HD",
    rating: 4.6,
    reviewsCount: 1376,
    about: [
      "Stream in Full HD from popular ad-supported apps like Tubi and Pluto TV.",
      "Use Alexa to search and launch shows across multiple apps.",
      "Stream over 700,000 movies and TV episodes from Netflix, Prime Video, Disney+, Crave, and more.",
      "Control your compatible smart home with Alexa."
    ],
    subscriptionServices: ["Netflix", "Prime Video", "Disney+", "Crave", "Tubi", "Pluto TV"],
    features: [
      "Stream in Full HD",
      "Alexa Voice Remote for easy searching and control",
      "Watch live TV, news, and sports for free with subscriptions to Sportsnet, CBC Gem, and Red Bull TV.",
      "Connect to any TV's HDMI port for entertainment on the go.",
      "Control smart home devices with Alexa."
    ],
    voiceControl: "Alexa",
    includedComponents: [
      "Fire TV Stick HD",
      "Alexa Voice Remote",
      "USB Power Cable",
      "User Manual"
    ]
  },
  {
    id: 4,
    name: "All-new Amazon Kindle Paperwhite (16 GB) – Our fastest Kindle ever, with new 7\" glare-free display, and weeks of battery life – Black",
    description: "Enjoy a faster Kindle with a larger, glare-free display, waterproof design, and long battery life. Perfect for reading anywhere.",
    price: "$154.99",
    imageUrl: "/images/kindle-paperwhite.jpg", // Asegúrate de agregar esta imagen en tu carpeta de imágenes
    brand: "Amazon",
    modelName: "Kindle Paperwhite",
    rating: 4.4,
    reviewsCount: 400,
    about: [
      "7-inch Paperwhite display with a higher contrast ratio and faster page turns.",
      "Waterproof design for worry-free reading by the pool or in the bath.",
      "Battery life lasts up to 12 weeks on a single charge via USB-C.",
      "Read in any light with adjustable white-to-amber display.",
      "Access over 15 million titles instantly in the Kindle Store.",
      "Perfect for distraction-free reading without apps or notifications.",
    ],
    features: [
      "Our fastest Kindle ever with a 7-inch glare-free display.",
      "Read for weeks with long-lasting battery life.",
      "Waterproof for reading anywhere, even in the bath or by the pool.",
      "Adjustable light for any reading condition from bright sunlight to darkness.",
      "Includes Kindle Unlimited option for all-you-can-read access.",
    ],
    subscriptionServices: ["Kindle Unlimited"],
    color: "Black",
    dimensions: "6.6 x 4.6 x 0.32 inches",
    batteryLife: "Up to 12 weeks",
    includedComponents: [
      "Kindle Paperwhite Device",
      "USB-C Charging Cable",
      "User Manual"
    ]
  },

  {
    id: 5,
    name: "EF ECOFLOW Extra Battery for Delta Pro Ultra, Lifepo4 Battery Backup for Home Use, Emergency, Camping, RV",
    description: "Expandable Lithium-Phosphate battery with 6kW rated capacity for home use, emergencies, camping, and RV. Up to 3500 cycles for long-term use.",
    price: "$3,799.00",
    imageUrl: "/images/eco-flow-battery.jpg", // Asegúrate de agregar esta imagen en tu carpeta de imágenes
    brand: "EF ECOFLOW",
    modelName: "Delta Pro Ultra Extra Battery",
    rating: 4.2,
    reviewsCount: 124,
    about: [
      "Rated capacity of 6kW with expandable capacity up to 90kW by connecting up to 15 batteries.",
      "LFP (Lithium-Phosphate) battery for long-lasting performance, providing 3500 cycles.",
      "Supports home use, camping, and RV power backup.",
      "Integrated BMS (Battery Management System) for safety and efficiency.",
      "Works with Delta Pro Ultra inverters to power a variety of appliances."
    ],
    features: [
      "Expandable capacity: Connect up to 5 batteries for up to 30kW of power, or up to 15 batteries for 90kW.",
      "3500 charge cycles for over 10 years of regular use.",
      "Safe and secure with an integrated BMS module to regulate temperature and voltage.",
      "Heavy-duty performance with 120V voltage and 7.2kW max power.",
      "Ideal for emergency power backup, camping, RVs, and more."
    ],
    color: "Silver",
    material: "Metal",
    dimensions: "N/A",
    batteryLife: "3500 cycles",
    weight: "111.8 Pounds",
    amperage: "61 Amps",
    frequencyRange: "50/60 Hz (± 3 Hz)",
    maximumPower: "7.2kW",
    includedComponents: [
      "EF ECOFLOW Delta Pro Ultra Extra Battery",
      "User Manual"
    ]
  },

  {
    id: 6,
    name: "Samsung Galaxy Tab S10 Ultra Gray 256GB - AI Tablet, 14.6\", AMOLED 2X, Anti-Reflection, 420 Nits, Vapor Chamber, S Pen Included (CAD Version & Warranty)",
    description: "14.6-inch Dynamic AMOLED 2X tablet with AI-powered features, S Pen included, and IP68 durability. Perfect for work and creativity on the go.",
    price: "$1,249.99",
    imageUrl: "/images/galaxy-tab-s10-ultra.jpg",
    brand: "Samsung",
    modelName: "Galaxy Tab S10 Ultra",
    rating: 4.3,
    reviewsCount: 19,
    about: [
      "14.6-inch Dynamic AMOLED 2X screen with 3840x2160 resolution for incredible clarity and reduced glare.",
      "AI-powered S Pen included for fast, precise creativity.",
      "Quick Share feature to easily share files with Galaxy and non-Galaxy devices.",
      "IP68 rated for protection against dust and splashes.",
      "Transcript Assist feature to turn recorded lectures or meetings into written notes with Galaxy AI."
    ],
    features: [
      "Massive 14.6-inch Dynamic AMOLED 2X display with anti-reflection for bright, clear visuals.",
      "AI-powered S Pen for enhanced creativity, drawing, and note-taking.",
      "Quick Share for seamless file transfer to any device.",
      "IP68 water and dust resistance for extra durability.",
      "Galaxy AI features for enhanced productivity and creativity, including Transcript Assist."
    ],
    color: "Gray",
    storage: "256 GB",
    screenSize: "14.6 Inches",
    displayResolution: "3840x2160",
    durability: "IP68 (Water and Dust Resistant)",
    weight: "N/A", // Si no está disponible, lo puedes dejar en N/A
    includedComponents: [
      "Samsung Galaxy Tab S10 Ultra",
      "S Pen",
      "USB-C Cable",
      "Charger",
      "User Manual"
    ]
  }



]