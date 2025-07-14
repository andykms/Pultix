import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonUI } from './Button';

const meta = {
  title: 'Shared/UI/Button',
  component: ButtonUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <ButtonUI {...args} />,
  args: {
    type: 'primary',
    children: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span className='buttonTitle'>Смотреть</span>
        <svg
          fill='#000'
          width='35px'
          height='35px'
          viewBox='-3 0 32 32'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <g id='icomoon-ignore'></g>
          <path
            d='M0 4.985v22.029h26.226v-22.029h-26.226zM4.196 25.966h-3.147v-4.196h3.147v4.196zM4.196 20.721h-3.147v-4.196h3.147v4.196zM4.196 15.476h-3.147v-4.196h3.147v4.196zM4.196 10.231h-3.147v-4.196h3.147v4.196zM20.98 11.979v13.987h-15.735v-19.931h15.735v5.944zM25.177 25.966h-3.147v-4.196h3.147v4.196zM25.177 20.721h-3.147v-4.196h3.147v4.196zM25.177 15.476h-3.147v-4.196h3.147v4.196zM25.177 10.231h-3.147v-4.196h3.147v4.196z'
            fill='#000000'
          ></path>
          <path
            d='M10.49 11.76v8.479l7.343-4.239-7.343-4.24zM11.539 13.577l4.196 2.423-4.196 2.423v-4.845z'
            fill='#000000'
          ></path>
        </svg>
      </div>
    ),
    width: '250px',
  },
};

export const Secondary: Story = {
  render: (args) => <ButtonUI {...args} />,
  args: {
    type: 'secondary',
    children: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span className='buttonTitle'>Посмотреть все</span>
        <svg
          width='35px'
          height='35px'
          viewBox='0 0 1024 1024'
          className='icon'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z'
            fill='#FFFFFF'
          />
        </svg>
      </div>
    ),
    width: '250px',
  },
};

export const Tertiary: Story = {
  render: (args) => <ButtonUI {...args} />,
  args: {
    type: 'tertiary',
    children: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span className='title'>+ Избранное</span>
        <svg
          width='50px'
          height='50px'
          viewBox='0 0 64 64'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke='#ffffff'
        >
          <polygon points='32 12 38.41 24.84 52 27.28 42.37 37.66 44.36 52 32 45.58 19.64 52 21.63 37.66 12 27.28 25.59 24.84 32 12' />
        </svg>
      </div>
    ),
    width: '250px',
  },
};
