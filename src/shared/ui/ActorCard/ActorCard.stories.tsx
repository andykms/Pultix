import type { Meta, StoryObj } from '@storybook/react-vite';

import { ActorCard } from './ActorCard';

const meta = {
  title: 'Shared/UI/ActorCard',
  component: ActorCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ActorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <ActorCard {...args} />,
  args: {
    _id: '3432423',
    photoUrl: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg',
    name: 'Пол Уокер',
    description: 'Пол Уильям Уокер IV (англ. Paul William Walker IV) — американский киноактёр',
  },
};
