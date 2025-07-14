import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputUI } from './Input';
import { useState } from 'react';

const meta = {
  title: 'Shared/UI/Input',
  component: InputUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <InputUI
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        value={value}
        title='Рейтинг'
        placeholder='Число от 1 до 10'
        width='200px'
      />
    );
  },
  args: {
    onChange: () => {},
    value: '',
    placeholder: 'Placeholder',
    width: '100%',
  },
};
