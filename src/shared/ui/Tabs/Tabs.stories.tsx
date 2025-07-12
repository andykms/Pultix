import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "./Tabs";

const meta = {
  title: "Shared/UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    return <div style={{width: '80vw'}}><Tabs {...args} /></div>;
  },
  args: {
    activeId: "1",
    tabs: [
      {
        id: "1",
        title: "Жанры",
      },
      {
        id: "2",
        title: "Описание",
      },
      {
        id: "3",
        title: "Год",
      },
    ],
    onClick: (id) => {},
  },
};
