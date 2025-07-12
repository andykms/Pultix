import type { Meta, StoryObj } from "@storybook/react-vite";

import { FilmAboutDetail } from "./FilmAboutDetail";

const meta = {
  title: "Shared/UI/FilmAboutDetail",
  component: FilmAboutDetail,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilmAboutDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => <div style={{width: '80vw'}}><FilmAboutDetail {...args}></FilmAboutDetail></div>,
  args: {
    title: "Жажда скорости",
    _id: "13132",
    raiting: 8.5,
    year: 2013,
    genres: ['боевик', 'драма', 'криминал'],
    countries: ['США'],
    ageRaiting: 18,
    movieLength: 127,
    description:
      "История Тоби Маршалла, гениального автомеханика, чьей единственной отдушиной является участие в подпольных гонках. Чтобы сохранить семейную мастерскую, Тоби вынужден взять в партнеры богатого и заносчивого бывшего гонщика IndyCar Дино Брюстера. Когда дела Тоби наконец-то начинают идти в гору, Дино подставляет партнера, и Тоби обвиняют в преступлении, которого он не совершал. Спустя два года Тоби выходит из тюрьмы с мыслью о мести. Чтобы достичь своей цели, ему придется совершить невозможное и доказать, что даже в мире броских суперкаров самый невзрачный гонщик может финишировать первым.",
  },
};
