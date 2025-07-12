import type { Meta, StoryObj } from "@storybook/react-vite";

import { FilmFact } from "./FilmFact";

const meta = {
  title: "Shared/UI/FilmFact",
  component: FilmFact,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilmFact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSpoiler: Story = {
  render: (args) => <FilmFact {...args}></FilmFact>,
  args: {
    value:
      'Фильм был выпущен после одного из концертов <a href="/name/223471/" class="all">Джесси МакКартни</a>, 13 сентября 2008 года, в 19:30.',

    spoiler: true,
  },
};

export const WithoutSpoiler: Story = {
  render: (args) => <FilmFact {...args}></FilmFact>,
  args: {
    value:
      'Фильм был выпущен после одного из концертов <a href="/name/223471/" class="all">Джесси МакКартни</a>, 13 сентября 2008 года, в 19:30.',

    spoiler: false,
  },
};