import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from './Navbar';

const FIGMA_URL =
  'https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z-%EC%9D%B4%EA%B1%B0-%EB%AC%B4%EC%A1%B0%EA%B1%B4-%EB%81%9D%EA%B9%8C%EC%A7%80-%EB%81%9D%EB%82%B8%EB%8B%A4?node-id=2468-3149';

const meta = {
  title: 'UI/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    design: { type: 'figma', url: FIGMA_URL },
    layout: 'fullscreen',
  },
  args: {
    status: 'web',
    logo: 'Studio Mira',
    ctaLabel: '문의하기',
  },
  argTypes: {
    status: { control: 'inline-radio', options: ['web', 'mobile'] },
    logo: { control: 'text' },
    ctaLabel: { control: 'text' },
    onLogoClick: { action: 'logo-clicked' },
    onCtaClick: { action: 'cta-clicked' },
    onMenuClick: { action: 'menu-clicked' },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Web: Story = {
  args: { status: 'web' },
};

export const Mobile: Story = {
  args: { status: 'mobile' },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 390 }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomMenu: Story = {
  args: {
    status: 'web',
    menuItems: [
      { label: 'Home' },
      { label: 'Products' },
      { label: 'Pricing' },
      { label: 'Blog' },
      { label: 'Contact' },
    ],
  },
};

export const CustomLogoAndCta: Story = {
  args: {
    status: 'web',
    logo: 'Acme Studio',
    ctaLabel: 'Get in touch',
  },
};

export const PlayCtaClick: Story = {
  args: { status: 'web' },
  play: async ({ canvasElement }) => {
    const cta = canvasElement.querySelector(
      'button[data-variant="filled"]',
    ) as HTMLButtonElement | null;
    cta?.focus();
  },
};
