import type { Meta, StoryObj } from '@storybook/react-vite';

import { DropdownText } from './DropdownText';

const meta = {
  title: 'Shared/UI/DropdownText',
  component: DropdownText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    return <DropdownText {...args} />;
  },
  args: {
    text: 'История Тоби Маршалла, гениального автомеханика, чьей единственной отдушиной является участие в подпольных гонках. Чтобы сохранить семейную мастерскую, Тоби вынужден взять в партнеры богатого и заносчивого бывшего гонщика IndyCar Дино Брюстера. Когда дела Тоби наконец-то начинают идти в гору, Дино подставляет партнера, и Тоби обвиняют в преступлении, которого он не совершал. Спустя два года Тоби выходит из тюрьмы с мыслью о мести. Чтобы достичь своей цели, ему придется совершить невозможное и доказать, что даже в мире броских суперкаров самый невзрачный гонщик может финишировать первым.',
  },
};
