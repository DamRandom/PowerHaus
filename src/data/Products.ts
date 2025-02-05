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
  // Aquí podríamos agregar más productos en el futuro
];
