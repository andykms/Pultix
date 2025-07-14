import type { Meta, StoryObj } from '@storybook/react-vite';

import { FilmModal } from './FilmModal';
import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Widgets/FilmModal',
  component: FilmModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FilmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    const [isInFavourites, setIsInFavourites] = useState(false);

    return (
      <MemoryRouter>
        <FilmModal
          film={args.film}
          isInFavourites={isInFavourites}
          onChangeInFavourites={() => setIsInFavourites(!isInFavourites)}
        ></FilmModal>
      </MemoryRouter>
    );
  },
  args: {
    film: {
      title: 'Жажда скорости',
      posterUrl:
        'https://avatars.mds.yandex.net/i?id=2cb1caa2ac15a7a77a34a32da79697a8_l-5335726-images-thumbs&n=13',
      _id: '13132',
      raiting: 8.5,
      maxRaiting: 10,
      movieLength: 126,
      ageRaiting: 16,
      countries: ['США'],
      year: 2013,
      genres: ['Боевик', 'Детектив', 'Драма'],
      description:
        'История Тоби Маршалла, гениального автомеханика, чьей единственной отдушиной является участие в подпольных гонках. Чтобы сохранить семейную мастерскую, Тоби вынужден взять в партнеры богатого и заносчивого бывшего гонщика IndyCar Дино Брюстера. Когда дела Тоби наконец-то начинают идти в гору, Дино подставляет партнера, и Тоби обвиняют в преступлении, которого он не совершал. Спустя два года Тоби выходит из тюрьмы с мыслью о мести. Чтобы достичь своей цели, ему придется совершить невозможное и доказать, что даже в мире броских суперкаров самый невзрачный гонщик может финишировать первым.',
    },
    isInFavourites: false,
    onChangeInFavourites: () => {},
  },
};
