import type { Meta, StoryObj } from '@storybook/react-vite';
import { StudioMiraLanding } from './StudioMiraLanding';

const FIGMA_URL =
  'https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z-%EC%9D%B4%EA%B1%B0-%EB%AC%B4%EC%A1%B0%EA%B1%B4-%EB%81%9D%EA%B9%8C%EC%A7%80-%EB%81%9D%EB%82%B8%EB%8B%A4?node-id=2445-2556';

const meta = {
  title: 'Pages/Studio Mira Landing',
  component: StudioMiraLanding,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    design: { type: 'figma', url: FIGMA_URL },
  },
} satisfies Meta<typeof StudioMiraLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};
