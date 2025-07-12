import type { Meta, StoryObj } from "@storybook/react-vite";

import { Filter } from "./Filter";
import { useState } from "react";
import type { TParameter } from "../../shared/ui/Dropdown/type";

const meta = {
  title: "Widgets/Filter",
  component: Filter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => {
    const dropdowns = [
      {
        id: "1",
        title: "Жанр",
        params: [
          {
            value: "Драма",
            id: "1",
            isChoosen: false,
          },
          {
            value: "Комедия",
            id: "2",
            isChoosen: false,
          },
          {
            value: "Триллер",
            id: "3",
            isChoosen: false,
          },
          {
            value: "Детектив",
            id: "4",
            isChoosen: false,
          },
          {
            value: "Фантастика",
            id: "5",
            isChoosen: false,
          },
          {
            value: "Фентези",
            id: "6",
            isChoosen: false,
          },
          {
            value: "Ужасы",
            id: "7",
            isChoosen: false,
          },
        ],
      },
    ];
    const numberInputs = [
      {
        id: "1",
        title: "Рейтинг",
        valueMax: "10",
        valueMin: "0",
        placeholderMax: "До",
        placeholderMin: "От",
        maxLength: 3,
        minLength: 0,
        max: 10,
        min: 0,
        step: 0.1,
      },
    ];
    const years: TParameter[] = [];
    const startYear = 1990;
    const currentYear = new Date().getFullYear();
    for (var i = startYear; i <= currentYear; i++) {
      years.push({
        id: i.toString(),
        value: i.toString(),
        isChoosen: false,
      });
    }

    const dropdownsWithScroll = [
      {
        id: "1",
        title: "Год",
        params: years,
      },
    ];

    return (
      <Filter
        onSubmit={() => {}}
        dropdowns={dropdowns}
        numberInputs={numberInputs}
        inputs={[]}
        dropdownsWithScroll={dropdownsWithScroll}
        width="300px"
      />
    );
  },
  args: {
    onSubmit: () => {},
    dropdowns: [],
    numberInputs: [],
    inputs: [],
    dropdownsWithScroll: [],
    width: "300px",
  },
};
