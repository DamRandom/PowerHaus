export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  brand: string;
  operatingSystem?: string; 
  ram?: string;
  cpuModel?: string;
  cpuSpeed?: string;
  storage?: string;
  screenSize?: string;
  modelName: string;
  carrier?: string;
  cellularTechnology?: string;
  rating: number;
  material?: string;
  weight?: string;
  amperage?: string;
  frequencyRange?: string;
  maximumPower?: string;
  displayResolution?: string;
  durability?: string;
  reviewsCount: number;
  about: string[];
  surfaceRecommendation?: string;
  specialFeatures?: string[];
  color?: string;
  dimensions?: string;
  controllerType?: string[];
  includedComponents?: string[];
  filterType?: string;
  batteryLife?: string;
  subscriptionServices?: string[];
  features?: string[];
  voiceControl?: string; 
}
