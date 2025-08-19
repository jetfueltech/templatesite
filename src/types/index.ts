export interface Template {
  id: string;
  name: string;
  themeName: string;
  description: string;
  imageUrl: string;
  tags: string[];
  features: string[];
  mainFeatures: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  price: number;
  previewUrl?: string;
}

export interface BusinessInfo {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  logo?: File;
  brandColors?: string[];
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  features: string[];
  benefits?: string[];
}