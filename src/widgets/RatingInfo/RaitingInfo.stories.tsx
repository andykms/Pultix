import type { Meta, StoryObj } from "@storybook/react-vite";

import { RaitingInfo } from "./RatingInfo";

const meta = {
  title: "Widgets/RaitingInfo",
  component: RaitingInfo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RaitingInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    return <RaitingInfo {...args} />;
  },
  args: {
    critics: {
      kp: 8.5,
      imdb: 7.5,
      tmdb: 6.5,
      filmCritics: 5.5,
      russianFilmCritics: 4.5,
      await: 3.5,
    },
  },
};
