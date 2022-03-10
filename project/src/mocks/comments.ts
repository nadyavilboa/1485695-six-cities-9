import {Comments} from '../types/comments';

export const comments: Comments = [
  {
    comment: 'super hotel',
    date: 'April 2019',
    id: 1,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 3,
      isPro: true,
      name: 'Max',
    },
  },
  {
    comment: 'normal, but cold in the shower',
    date: 'September 2019',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 5,
      isPro: true,
      name: 'Jhon',
    },
  },
];
