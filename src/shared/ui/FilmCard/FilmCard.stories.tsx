import type { Meta, StoryObj } from '@storybook/react-vite';

import { FilmCardUI } from './FilmCard';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Shared/UI/FilmCard',
  component: FilmCardUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FilmCardUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => (
    <MemoryRouter>
      <FilmCardUI {...args} />
    </MemoryRouter>
  ),
  args: {
    title: 'Жажда скорости',
    posterUrl:
      'https://avatars.mds.yandex.net/i?id=2cb1caa2ac15a7a77a34a32da79697a8_l-5335726-images-thumbs&n=13',
    _id: '13132',
    raiting: 8.5,
    year: 2013,
  },
};
