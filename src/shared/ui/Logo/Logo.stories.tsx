import type { Meta, StoryObj } from '@storybook/react-vite';

import { Logo } from './Logo';

const meta = {
  title: 'Shared/UI/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => {
    return <Logo />;
  },
  args: {},
};
