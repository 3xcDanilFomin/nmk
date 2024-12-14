import { ROUTES_CONFIG } from '@/config';

interface IPhotoGalleryLink {
  id: string;
  urlPath: string;
  imagePath: string;
  alt: string;
  label: string;
}

export const photoGalleryLinks: IPhotoGalleryLink[] = [
  {
    id: '8b5dbeab-6404-4707-8265-4d2471fbe0aa',
    urlPath: ROUTES_CONFIG.PHOTO_GALLERY.COLLEGE,
    imagePath: '/news-1.webp',
    alt: 'Изображения Новочеркасского машиностроительного колледжа',
    label: 'Колледж',
  },
  {
    id: 'd2f2b9e1-1f6c-4f4d-9b8f-1b3c4f8b2e1c',
    urlPath: ROUTES_CONFIG.PHOTO_GALLERY.WORKSHOPS,
    imagePath: '/news-2.webp',
    alt: 'Изображения мастерских колледжа',
    label: 'Мастерские',
  },
  {
    id: 'a3e5b5e1-1f6c-4f4d-9b8f-1b3c4f8b2e1c',
    urlPath: ROUTES_CONFIG.PHOTO_GALLERY.DORMITORY,
    imagePath: '/news-3.webp',
    alt: 'Изображения общежития колледжа',
    label: 'Общежитие',
  },
  {
    id: 'b1c5b5e1-1f6c-4f4d-9b8f-1b3c4f8b2e1c',
    urlPath: ROUTES_CONFIG.PHOTO_GALLERY.MUSEUM,
    imagePath: '/news-4.webp',
    alt: 'Изображения музея колледжа',
    label: 'Музей',
  },
  {
    id: 'c2d5b5e1-1f6c-4f4d-9b8f-1b3c4f8b2e1c',
    urlPath: ROUTES_CONFIG.PHOTO_GALLERY.SPORT,
    imagePath: '/news-5.webp',
    alt: 'Изображения спортивных мероприятий колледжа',
    label: 'Спорт',
  },
  {
    id: 'e3f5b5e1-1f6c-4f4d-9b8f-1b3c4f8b2e1c',
    urlPath: ROUTES_CONFIG.PHOTO_GALLERY.EVENTS,
    imagePath: '/news-1.webp',
    alt: 'Изображения мероприятий колледжа',
    label: 'Мероприятия',
  },
  {
    id: 'f4g5b5e1-1f6c-4f4d-9b8f-1b3c4f8b2e1c',
    urlPath: ROUTES_CONFIG.PHOTO_GALLERY.ACHIEVEMENTS,
    imagePath: '/news-2.webp',
    alt: 'Изображения достижений колледжа',
    label: 'Достижения',
  },
  {
    id: 'h5i5b5e1-1f6c-4f4d-9b8f-1b3c4f8b2e1c',
    urlPath: ROUTES_CONFIG.PHOTO_GALLERY.DINING_ROOM,
    imagePath: '/news-3.webp',
    alt: 'Изображения столовой колледжа',
    label: 'Столовая',
  },
];
