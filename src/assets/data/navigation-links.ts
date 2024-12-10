import { ROUTES_CONFIG } from '@/config';
import { INavigationLink } from '@/types/navigation';

export const navigationLinks: INavigationLink[] = [
  {
    id: '34c00854-901e-4841-8362-9001896adcff',
    label: 'Наш колледж',
    links: [
      {
        id: 'ab6fd19e-99f0-4fe0-88d5-aa8fa9b04ec9',
        label: 'История',
        path: ROUTES_CONFIG.COLLEGE.HISTORY,
      },
      {
        id: '417a8fc2-1cdb-4786-b194-64f364717d8e',
        label: 'Символы колледжа',
        path: ROUTES_CONFIG.COLLEGE.SYMBOLS,
      },
      {
        id: '8de0df8f-883d-45ae-8f00-d8f853ceec9e',
        label: 'Фотогалерея',
        path: ROUTES_CONFIG.COLLEGE.PHOTO_GALLERY,
      },
      {
        id: '1b558b80-ca01-434a-bd78-f2745bc66a38',
        label: 'Наши достижения',
        path: ROUTES_CONFIG.COLLEGE.ACHIEVEMENTS,
      },
      {
        id: '9f856f08-9613-4732-8068-ddc5cc55836d',
        label: 'Мероприятия НМК',
        path: ROUTES_CONFIG.COLLEGE.EVENTS,
      },
    ],
  },
  {
    id: 'bd5af177-ffc1-410a-84df-1c24637ed380',
    label: 'Абитуриентам',
    links: [
      {
        id: 'd68e61c7-505d-4f3f-a1a7-d51562cfe63c',
        label: 'Дневное отделение',
        path: ROUTES_CONFIG.APPLICANTS.FULL_TIME,
      },
      {
        id: '776649e7-c819-4262-8038-654c6ee7834c',
        label: 'Приемная комиссия',
        path: ROUTES_CONFIG.APPLICANTS.ADMISSIONS,
      },
      {
        id: '923ebb79-cca8-4d95-9280-85c7a1ff6ff4',
        label: 'Целевое обучение',
        path: ROUTES_CONFIG.APPLICANTS.TARGET_TRAINING,
      },
      {
        id: '952d3343-9841-43db-b682-6ef4a6eb7db4',
        label: 'Условия обучения',
        path: ROUTES_CONFIG.APPLICANTS.EDUCATION_CONDITIONS,
      },
      {
        id: '8e20d66b-7443-4317-8198-5b43caf203c0',
        label: 'Договора с ВУЗами и социальные партнеры',
        path: ROUTES_CONFIG.APPLICANTS.CONTRACTS,
      },
    ],
  },
  {
    id: 'fa755465-c87d-4403-a584-c2b30133bedf',
    label: 'Студентам',
    links: [
      {
        id: 'f3a2a98d-d774-4893-ba2d-78d47f7724e6',
        label: 'Библиотека',
        path: ROUTES_CONFIG.STUDENTS.LIBRARY,
      },
      {
        id: '7597b800-b1f6-4621-a446-bfba948d6b43',
        label: 'Содействие трудоустройству',
        path: ROUTES_CONFIG.STUDENTS.EMPLOYMENT_SUPPORT,
      },
      {
        id: 'c1033303-4826-4499-a55b-e2469a39266d',
        label: 'Социальное партнерство',
        path: ROUTES_CONFIG.STUDENTS.SOCIAL_PARTNERSHIP,
      },
      {
        id: '7154854c-2e0c-401b-9196-75a31ecfb194',
        label: 'Вакансии',
        path: ROUTES_CONFIG.STUDENTS.VACANCIES,
      },
      {
        id: 'b87ed071-6339-4c99-939b-86b141c980f3',
        label: 'Нормативная документация',
        path: ROUTES_CONFIG.STUDENTS.REGULATORY_DOCUMENTS,
      },
    ],
  },
  {
    id: '7f9ccfda-6f3f-4a5d-ac68-1377bb249552',
    label: 'Деятельность',
    links: [
      {
        id: 'a8208721-0564-46c1-a05b-a8f4fd3d4ab4',
        label: 'Спортивный клуб',
        path: ROUTES_CONFIG.ACTIVITIES.SPORTS_CLUB,
      },
      {
        id: '2da930e9-5b5b-4f6e-be83-d9656f198fd3',
        label: 'Медиацентр',
        path: ROUTES_CONFIG.ACTIVITIES.MEDIA_CENTER,
      },
      {
        id: '8a3e8fee-04ad-42ac-975f-ed63c0579ea5',
        label: 'План воспитательной работы',
        path: ROUTES_CONFIG.ACTIVITIES.EDUCATIONAL_PLAN,
      },
      {
        id: '80692b89-8ee2-489e-a99b-6cdf9615ac1c',
        label: 'Воспитательная работа',
        path: ROUTES_CONFIG.ACTIVITIES.EDUCATIONAL_WORK,
      },
    ],
  },
  {
    id: '4d560c97-a460-426c-ac4d-b7ec38785ccb',
    label: 'Преподавателям',
    links: [
      {
        id: '653ae535-8c1a-4370-b9fa-eee4bd92af66',
        label: 'Методическая копилка',
        path: ROUTES_CONFIG.TEACHERS.METHODOLOGICAL_LIBRARY,
      },
      {
        id: '39ec7056-6e8a-44b2-9bf8-f991ff8379e6',
        label: 'Контроль учебного процесса',
        path: ROUTES_CONFIG.TEACHERS.ACADEMIC_CONTROL,
      },
      {
        id: 'a7a4461e-fecd-4e9d-a5d5-505b5ae448ab',
        label: 'Проект коллективного договора',
        path: ROUTES_CONFIG.TEACHERS.COLLECTIVE_AGREEMENT,
      },
    ],
  },
];
