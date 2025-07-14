import type { Meta, StoryObj } from '@storybook/react-vite';

import { NumberInput } from './NumberInput';
import { useState } from 'react';

const meta = {
  title: 'Shared/UI/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => {
    const [valueMin, setValueMin] = useState('');
    const [valueMax, setValueMax] = useState('');
    return (
      <NumberInput
        valueMin={valueMin}
        valueMax={valueMax}
        onChangeMin={setValueMin}
        onChangeMax={setValueMax}
        placeholderMin={': 0'}
        placeholderMax={': 10'}
        maxLength={4}
        minLength={1}
        title={'Рейтинг'}
        titleMax='До'
        titleMin='От'
        max={10}
        min={0}
        step={0.1}
      />
    );
  },
  args: {
    valueMin: '',
    valueMax: '',
    onChangeMin: (value) => {},
    onChangeMax: (value) => {},
    maxLength: 4,
    minLength: 1,
    title: 'Рейтинг',
    titleMax: 'До',
    titleMin: 'От',
    max: 10,
    min: 0,
    step: 0.1,
  },
};
