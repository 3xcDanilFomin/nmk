export interface ICollegeRoutes {
  HISTORY: string;
  SYMBOLS: string;
  PHOTO_GALLERY: string;
  ACHIEVEMENTS: string;
  EVENTS: string;
}

export interface IApplicantsRoutes {
  FULL_TIME: string;
  ADMISSIONS: string;
  TARGET_TRAINING: string;
  EDUCATION_CONDITIONS: string;
  CONTRACTS: string;
}

export interface IStudentsRoutes {
  LIBRARY: string;
  EMPLOYMENT_SUPPORT: string;
  SOCIAL_PARTNERSHIP: string;
  VACANCIES: string;
  REGULATORY_DOCUMENTS: string;
}

export interface IActivitiesRoutes {
  SPORTS_CLUB: string;
  MEDIA_CENTER: string;
  EDUCATIONAL_PLAN: string;
  EDUCATIONAL_WORK: string;
}

export interface ITeachersRoutes {
  METHODOLOGICAL_LIBRARY: string;
  ACADEMIC_CONTROL: string;
  COLLECTIVE_AGREEMENT: string;
}

export interface IPhotoGallery {
  COLLEGE: string;
  WORKSHOPS: string;
  DORMITORY: string;
  MUSEUM: string;
  SPORT: string;
  EVENTS: string;
  ACHIEVEMENTS: string;
  DINING_ROOM: string;
}

export type TNewsRout = string;

export interface IRouteConfig {
  COLLEGE: ICollegeRoutes;
  APPLICANTS: IApplicantsRoutes;
  STUDENTS: IStudentsRoutes;
  ACTIVITIES: IActivitiesRoutes;
  TEACHERS: ITeachersRoutes;
  NEWS: TNewsRout;
  PHOTO_GALLERY: IPhotoGallery;
}
