export interface BiodataFormData {
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
  fatherOccupation: string;
  motherOccupation: string;
  siblings: string;
  familyType: string;
  nativePlace: string;
  // Astrological
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  manglikStatus: string;
  gotra: string;
  // Partner Preferences
  preferredAgeRange: string;
  preferredHeight: string;
  preferredEducation: string;
  preferredProfession: string;
}

export const defaultBiodata: BiodataFormData = {
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
  fatherOccupation: '',
  motherOccupation: '',
  siblings: '',
  familyType: '',
  nativePlace: '',
  dateOfBirth: '',
  timeOfBirth: '',
  placeOfBirth: '',
  manglikStatus: '',
  gotra: '',
  preferredAgeRange: '',
  preferredHeight: '',
  preferredEducation: '',
  preferredProfession: '',
};

export type TemplateType = 'minimalist' | 'traditional' | 'floral';
