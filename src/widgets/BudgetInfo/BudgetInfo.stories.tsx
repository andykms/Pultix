import type { Meta, StoryObj } from '@storybook/react-vite';

import { BudgetInfo } from './BudgetInfo';

const meta = {
  title: 'Widgets/BudgetInfo',
  component: BudgetInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BudgetInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    return <BudgetInfo {...args}></BudgetInfo>;
  },
  args: {
    fees: [
      {
        country: 'USA',
        value: 207283,
        currency: 'USD',
      },
      {
        country: 'UK',
        value: 1000,
        currency: 'GBP',
      },
      {
        country: 'russia',
        value: 1000,
        currency: 'RUB',
      },
    ],
    budget: {
      value: 1000,
      currency: '$',
    },
    premierWorld: '2020-01-01',
    premierRussia: '2020-01-01',
  },
};
