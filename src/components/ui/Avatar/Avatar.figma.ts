// url=https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=106-1495
// source=src/components/ui/Avatar/Avatar.tsx
// component=Avatar
import figma from 'figma';
const instance = figma.selectedInstance;

const status = instance.getBoolean('Status');

const size = instance.getEnum('Size', {
  'XXXL Giant': 'xxxl-giant',
  'XXL Giant': 'xxl-giant',
  'XL Giant': 'xl-giant',
  Giant: 'giant',
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
  Tiny: 'tiny',
});

const type = instance.getEnum('Type', {
  Image: 'image',
  Letter: 'letter',
  Icon: 'icon',
});

const letterText = instance.findText('A');
const letter = letterText && letterText.type === 'TEXT' ? letterText.textContent : undefined;

const emoji = instance.findInstance('emoji');
let iconCode;
if (emoji && emoji.type === 'INSTANCE') {
  iconCode = emoji.executeTemplate().example;
}

export default {
  example: figma.code`
    <Avatar
      size="${size}"
      type="${type}"
      ${status ? 'status' : ''}
      ${type === 'image' ? 'src="/path/to/image.png" alt="User"' : ''}
      ${type === 'letter' && letter ? `letter="${letter}"` : ''}
      ${type === 'icon' && iconCode ? figma.code`icon={${iconCode}}` : ''}
    />
  `,
  imports: ["import { Avatar } from '@/components/ui/Avatar'"],
  id: 'avatar',
  metadata: { nestable: true },
};
