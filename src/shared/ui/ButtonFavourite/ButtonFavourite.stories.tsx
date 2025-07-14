import type { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';
import { ButtonFavourite } from './ButtonFavourite';

const meta = {
  title: 'Shared/UI/ButtonFavourite',
  component: ButtonFavourite,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonFavourite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotInFavourite: Story = {
  render: (args) => <ButtonFavourite {...args} />,
  args: {
    onClick: () => {},
    isInFavourites: false,
  },
};

export const InFavourite: Story = {
  render: (args) => <ButtonFavourite {...args} />,
  args: {
    onClick: () => {},
    isInFavourites: true,
  },
};

export const WithState: Story = {
  render: (args) => {
    const [isInFavourites, setIsInFavourites] = useState(true);

    return (
      <ButtonFavourite
        onClick={() => setIsInFavourites(!isInFavourites)}
        isInFavourites={isInFavourites}
      />
    );
  },
  args: {
    onClick: () => {},
    isInFavourites: true,
  },
};
