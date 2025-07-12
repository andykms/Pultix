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
    initialActiveId: "1",
    tabs: [
      {
        id: "1",
        title: "Жанры",
        component: (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="text">Комедия</span>
            <span className="text">Драма</span>
            <span className="text">Боевик</span>
          </div>
        ),
      },
      {
        id: "2",
        title: "Описание",
        component: (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="text">
              История Тоби Маршалла, гениального автомеханика, чьей единственной
              отдушиной является участие в подпольных гонках. Чтобы сохранить
              семейную мастерскую, Тоби вынужден взять в партнеры богатого и
              заносчивого бывшего гонщика IndyCar Дино Брюстера. Когда дела Тоби
              наконец-то начинают идти в гору, Дино подставляет партнера, и Тоби
              обвиняют в преступлении, которого он не совершал. Спустя два года
              Тоби выходит из тюрьмы с мыслью о мести. Чтобы достичь своей цели,
              ему придется совершить невозможное и доказать, что даже в мире
              броских суперкаров самый невзрачный гонщик может финишировать
              первым.
            </span>
          </div>
        ),
      },
      {
        id: "3",
        title: "Год",
        component: (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="text">2013</span>
          </div>
        ),
      },
    ],
  },
};
