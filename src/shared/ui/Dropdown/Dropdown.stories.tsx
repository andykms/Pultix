import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";
import { Dropdown } from "./Dropdown";
import type { TParameter } from "./type";

const meta = {
  title: "Shared/UI/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    const [params, setParams] = useState(args.params);

    const onChoose = (parametr: TParameter) => {
      setParams(
        params.map((param) => {
          if (param.id === parametr.id) {
            param.isChoosen = !param.isChoosen;
          }
          return param;
        })
      );
    };

    return <Dropdown params={params} title={args.title} onChoose={onChoose} />;
  },
  args: {
    params: [
      {
        value: "Фантастика",
        id: 1,
        isChoosen: false,
      },
      {
        value: "Боевик",
        id: 2,
        isChoosen: false,
      },
      {
        value: "Триллер",
        id: 3,
        isChoosen: false,
      },
      {
        value: "Мультфильм",
        id: 4,
        isChoosen: false,
      },
      {
        value: "Детектив",
        id: 5,
        isChoosen: false,
      },
      {
        value: "Драма",
        id: 6,
        isChoosen: false,
      },
      {
        value: "Семейный",
        id: 7,
        isChoosen: false,
      },
    ],
    onChoose: () => {},
    title: "Жанр",
  },
};

export const Scrollable: Story = {
  render: () => {

    const startYear = 1990;
    const currentYear = new Date().getFullYear();
    const years: TParameter[] = []
    for(var i=startYear;i<=currentYear;i++){
      years.push({
        id: i,
        value: i.toString(),
        isChoosen: false,
      });
    } 
    console.log(years);
    const [params, setParams] = useState(years);

    const onChoose = (parametr: TParameter) => {
      setParams(
        params.map((param) => {
          if (param.id === parametr.id) {
            param.isChoosen = !param.isChoosen;
          }
          return param;
        })
      );
    };

    return <Dropdown params={params} title={"Год"} onChoose={onChoose} isScrollable={true}/>;
  },
  args: {
    params: [
      {
        value: "Фантастика",
        id: 1,
        isChoosen: false,
      },
      {
        value: "Боевик",
        id: 2,
        isChoosen: false,
      },
      {
        value: "Триллер",
        id: 3,
        isChoosen: false,
      },
      {
        value: "Мультфильм",
        id: 4,
        isChoosen: false,
      },
      {
        value: "Детектив",
        id: 5,
        isChoosen: false,
      },
      {
        value: "Драма",
        id: 6,
        isChoosen: false,
      },
      {
        value: "Семейный",
        id: 7,
        isChoosen: false,
      },
    ],
    onChoose: () => {},
    title: "Жанр",
  },
};
