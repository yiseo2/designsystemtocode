import type { Preview } from '@storybook/react-vite';
import '../src/styles/tailwind.css';
import '../src/tokens/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        app: { name: 'app', value: 'var(--color-bg-secondary)' },
        surface: { name: 'surface', value: 'var(--color-bg-primary)' }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'app'
    }
  }
};

export default preview;
