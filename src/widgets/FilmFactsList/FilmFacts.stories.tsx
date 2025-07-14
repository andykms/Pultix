import type { Meta, StoryObj } from '@storybook/react-vite';

import { FilmFactsList } from './FilmFactsList';

const meta = {
  title: 'Widgets/FilmFactsList',
  component: FilmFactsList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FilmFactsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    return <FilmFactsList {...args}></FilmFactsList>;
  },
  args: {
    facts: [
      {
        value:
          'Фильм был выпущен после одного из концертов <a href="/name/223471/" class="all">Джесси МакКартни</a>, 13 сентября 2008 года, в 19:30.',
        spoiler: false,
      },
      {
        value:
          'По сюжету фильма, Натали и Кит — ровесники. Однако в жизни <a href="/name/28189/" class="all">Элизабет Арнуа</a> на восемь лет старше своего экранного возлюбленного — <a href="/name/223471/" class="all">Джесси МакКартни</a>.',
        spoiler: true,
      },
      {
        value:
          'Фильм снят по мотивам рассказа <a href="/name/1007524/" class="all">Рона Карлсона</a> &laquo;Кит&raquo; (Keith, 1997).',
        spoiler: false,
      },
    ],
  },
};
