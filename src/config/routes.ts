import { IRouteConfig } from '@/types/routes';

export const ROUTES_CONFIG: IRouteConfig = {
  COLLEGE: {
    HISTORY: '/college/history',
    SYMBOLS: '/college/symbols',
    PHOTO_GALLERY: '/college/photo-gallery',
    ACHIEVEMENTS: '/college/achievements',
    EVENTS: '/college/events',
  },
  APPLICANTS: {
    FULL_TIME: '/applicants/full-time',
    ADMISSIONS: '/applicants/admissions',
    TARGET_TRAINING: '/applicants/target-training',
    EDUCATION_CONDITIONS: '/applicants/education-conditions',
    CONTRACTS: '/applicants/contracts',
  },
  STUDENTS: {
    LIBRARY: '/students/library',
    EMPLOYMENT_SUPPORT: '/students/employment-support',
    SOCIAL_PARTNERSHIP: '/students/social-partnership',
    VACANCIES: '/students/vacancies',
    REGULATORY_DOCUMENTS: '/students/regulatory-documents',
  },
  ACTIVITIES: {
    SPORTS_CLUB: '/activities/sports-club',
    MEDIA_CENTER: '/activities/media-center',
    EDUCATIONAL_PLAN: '/activities/educational-plan',
    EDUCATIONAL_WORK: '/activities/educational-work',
  },
  TEACHERS: {
    METHODOLOGICAL_LIBRARY: '/teachers/methodological-library',
    ACADEMIC_CONTROL: '/teachers/academic-control',
    COLLECTIVE_AGREEMENT: '/teachers/collective-agreement',
  },
  NEWS: '/news',
};
