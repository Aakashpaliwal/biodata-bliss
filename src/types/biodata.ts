export interface BiodataFormData {
  // Photo
  photo: string;
  // Personal
  name: string;
  age: string;
  height: string;
  bloodGroup: string;
  complexion: string;
  location: string;
  // Professional
  education: string;
  occupation: string;
  company: string;
  income: string;
  // Family
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: string;
  familyType: string;
  nativePlace: string;
  // Astrological
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  rashi: string;
  nakshatra: string;
  manglikStatus: string;
  gotra: string;
  // Contact
  contactPerson: string;
  contactNumber: string;
  email: string;
  address: string;
  // Partner Preferences
  preferredAgeRange: string;
  preferredHeight: string;
  preferredEducation: string;
  preferredProfession: string;
}

export const defaultBiodata: BiodataFormData = {
  photo: '',
  name: '',
  age: '',
  height: '',
  bloodGroup: '',
  complexion: '',
  location: '',
  education: '',
  occupation: '',
  company: '',
  income: '',
  fatherName: '',
  fatherOccupation: '',
  motherName: '',
  motherOccupation: '',
  siblings: '',
  familyType: '',
  nativePlace: '',
  dateOfBirth: '',
  timeOfBirth: '',
  placeOfBirth: '',
  rashi: '',
  nakshatra: '',
  manglikStatus: '',
  gotra: '',
  contactPerson: '',
  contactNumber: '',
  email: '',
  address: '',
  preferredAgeRange: '',
  preferredHeight: '',
  preferredEducation: '',
  preferredProfession: '',
};

export type TemplateType =
  | 'minimalist'
  | 'traditional'
  | 'royal'
  | 'modern-teal'
  | 'elegant-maroon'
  | 'floral'
  | 'sunset-glow'
  | 'navy-classic'
  | 'sage-botanical'
  // Elegant Traditional
  | 'sanskriti'
  | 'veda'
  | 'parampara'
  | 'mangalam'
  | 'aaradhya'
  // Modern Minimalist
  | 'lumina'
  | 'nova'
  | 'ekant'
  | 'aura'
  | 'anya'
  // Royal & Premium
  | 'rajwada'
  | 'patrika'
  | 'saanjh'
  | 'amaya'
  | 'kavya'
  // Soft & Floral
  | 'aarambh'
  | 'pallav'
  | 'meher'
  | 'ananda'
  | 'suvarna';
