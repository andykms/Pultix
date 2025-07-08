import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { DropdownParam } from "./DropdownParam";

const meta = {
  title: "Shared/UI/DropdownParam",
  component: DropdownParam,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownParam>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotChoosen: Story = {
  render: (args) => (
    <div style={{ width: "150px" }}>
      <DropdownParam {...args} />
    </div>
  ),
  args: {
    parameter: {
      value: "Боевик",
      id: 1,
      isChoosen: false,
    },
    onChoose: () => {},
  },
};

export const Choosen: Story = {
  render: (args) => (
    <div style={{ width: "150px" }}>
      <DropdownParam {...args} />
    </div>
  ),
  args: {
    parameter: {
      value: "Фантастика",
      id: 1,
      isChoosen: true,
    },
    onChoose: () => {},
  },
};

export const WithState: Story = {
  render: (args) => {
    const [isChoosen, setIsChoosen] = useState(true);
    const parameter = {
      ...args.parameter,
      isChoosen,
    };
    return (
      <div style={{ width: "150px" }}>
        <DropdownParam
          parameter={parameter}
          onChoose={() => setIsChoosen(!isChoosen)}
        />
      </div>
    );
  },
  args: {
    parameter: {
      value: "Фантастика",
      id: 1,
      isChoosen: true,
    },
    onChoose: () => {},
  },
};
