import type { Meta, StoryObj } from "@storybook/react-vite";

import { FilmAbout } from "./FilmAbout";

const meta = {
  title: "Shared/UI/FilmAbout",
  component: FilmAbout,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilmAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => <FilmAbout {...args}></FilmAbout>,
  args: {
    title: "Жажда скорости",
    posterUrl:
      "https://avatars.mds.yandex.net/i?id=2cb1caa2ac15a7a77a34a32da79697a8_l-5335726-images-thumbs&n=13",
    _id: "13132",
    raiting: 8.5,
    year: 2013,
    genres: ['боевик'],
    countries: ['США'],
    ageRaiting: 18,
    movieLength: 127,
    description:
      "История Тоби Маршалла, гениального автомеханика, чьей единственной отдушиной является участие в подпольных гонках. Чтобы сохранить семейную мастерскую, Тоби вынужден взять в партнеры богатого и заносчивого бывшего гонщика IndyCar Дино Брюстера. Когда дела Тоби наконец-то начинают идти в гору, Дино подставляет партнера, и Тоби обвиняют в преступлении, которого он не совершал. Спустя два года Тоби выходит из тюрьмы с мыслью о мести. Чтобы достичь своей цели, ему придется совершить невозможное и доказать, что даже в мире броских суперкаров самый невзрачный гонщик может финишировать первым.",
  },
};
