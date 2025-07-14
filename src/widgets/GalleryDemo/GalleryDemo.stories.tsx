import type { Meta, StoryObj } from '@storybook/react-vite';

import { GalleryDemo } from './GalleryDemo';
import { FilmCardUI } from '../../shared/ui/FilmCard/FilmCard';
import { ActorCard } from '../../shared/ui/ActorCard/ActorCard';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Widgets/GalleryDemo',
  component: GalleryDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GalleryDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    _id: '1',
    title: 'Film 1',
    maxRaiting: 10,
    raiting: 6.7,
    year: 2019,
  },
  {
    _id: '2',
    title: 'Film 2',
    maxRaiting: 10,
    raiting: 7.3,
    year: 2020,
    posterUrl:
      'https://image.openmoviedb.com/kinopoisk-images/1946459/60d0b635-9b35-4e2e-bd6e-bbe337836613/600x900',
  },
  {
    _id: '3',
    title: 'Film 3',
    maxRaiting: 10,
    raiting: 8.1,
    year: 2021,
  },
  {
    _id: '4',
    title: 'Film 4',
    maxRaiting: 10,
    raiting: 9.2,
    year: 2022,
  },
  {
    _id: '5',
    title: 'Film 5',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2023,
  },
  {
    _id: '6',
    title: 'Film 6',
    maxRaiting: 10,
    raiting: 9.5,
    year: 2024,
  },
  {
    _id: '7',
    title: 'Film 7',
    maxRaiting: 10,
    raiting: 9.7,
    year: 2025,
  },
  {
    _id: '8',
    title: 'Film 8',
    maxRaiting: 10,
    raiting: 9.8,
    year: 2026,
  },
  {
    _id: '9',
    title: 'Film 9',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2027,
  },
  {
    _id: '10',
    title: 'Film 10',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2028,
  },
  {
    _id: '11',
    title: 'Film 11',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2029,
  },
  {
    _id: '12',
    title: 'Film 12',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2030,
  },
  {
    _id: '13',
    title: 'Film 13',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2031,
  },
  {
    _id: '14',
    title: 'Film 14',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2032,
  },
  {
    _id: '15',
    title: 'Film 15',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2033,
  },
  {
    _id: '16',
    title: 'Film 16',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2034,
  },
  {
    _id: '17',
    title: 'Film 17',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2035,
  },
  {
    _id: '18',
    title: 'Film 18',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2036,
  },
  {
    _id: '19',
    title: 'Film 19',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2037,
  },
  {
    _id: '20',
    title: 'Film 20',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2038,
  },
  {
    _id: '21',
    title: 'Film 21',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2039,
  },
  {
    _id: '22',
    title: 'Film 22',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2040,
  },
  {
    _id: '23',
    title: 'Film 23',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2041,
  },
  {
    _id: '24',
    title: 'Film 24',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2042,
  },
  {
    _id: '25',
    title: 'Film 25',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2043,
  },
  {
    _id: '26',
    title: 'Film 26',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2044,
  },
  {
    _id: '27',
    title: 'Film 27',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2045,
  },
  {
    _id: '28',
    title: 'Film 28',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2046,
  },
  {
    _id: '29',
    title: 'Film 29',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2047,
  },
  {
    _id: '30',
    title: 'Film 30',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2048,
  },
  {
    _id: '31',
    title: 'Film 31',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2049,
  },
  {
    _id: '32',
    title: 'Film 32',
    maxRaiting: 10,
    raiting: 9.9,
    year: 2050,
  },
];

const actors = [
  {
    _id: '1',
    photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg',
    name: 'Пол Уокер',
    description: 'Пол Уильям Уокер IV (англ. Paul William Walker IV) — американский киноактёр',
  },
  {
    _id: '2',
    photoUrl: 'https://i.pinimg.com/originals/29/44/0c/29440c14c968cbf6d6b2ffa81eeca4e6.jpg',
    name: 'Tralalelo Tralala',
    description: 'персонаж итальянского брейнрот-мема, вымышленное существо',
  },
  {
    _id: '3',
    photoUrl: 'https://i.pinimg.com/736x/09/0e/e3/090ee38b6fd07a7b34da46d99e91328e.jpg',
    name: 'Bombardiro Crocodilo',
    description: 'персонаж вселенной итальянского брейнрота',
  },
  {
    _id: '4',
    photoUrl: 'https://i.ytimg.com/vi/lx0LofrGJdg/maxresdefault.jpg',
    name: 'Bombombini Gusini',
    description: 'персонаж интернет-мема',
  },
  {
    _id: '5',
    photoUrl:
      'https://avatars.yandex.net/get-music-content/14304155/82b3e701.a.36336628-1/m1000x1000?webp=false',
    name: 'Tum tum tum sahur',
    description: 'персонаж мема, сгенерированный нейросетью.',
  },
];

export const Base: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <div style={{ width: '80vw' }}>
          <GalleryDemo
            title='Рекомендуемое'
            cardProps={data}
            maxCount={4}
            CardType={FilmCardUI}
            to='/all'
          />
        </div>
      </MemoryRouter>
    );
  },
  args: {
    title: 'Рекомендуемое',
    cardProps: data,
    CardType: FilmCardUI,
    to: '/all',
  },
};

export const WithActors: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <div style={{ width: '80vw' }}>
          <GalleryDemo
            title='Актеры'
            cardProps={actors}
            maxCount={actors.length}
            CardType={ActorCard}
            to=''
            isWithoutButtonAll={true}
          />
        </div>
      </MemoryRouter>
    );
  },
  args: {
    title: 'Рекомендуемое',
    cardProps: data,
    CardType: FilmCardUI,
    to: '/all',
  },
};
