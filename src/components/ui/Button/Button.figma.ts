// url=https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=34-1219
// source=src/components/ui/Button/Button.tsx
// component=Button
import figma from 'figma';
const instance = figma.selectedInstance;

const size = instance.getEnum('Size', {
  Giant: 'giant',
  Large: 'large',
  Medium: 'medium',
  Small: 'small',
  Tiny: 'tiny',
});

const state = instance.getEnum('State', {
  Default: 'default',
  Hover: 'hover',
  Focus: 'focus',
  Press: 'press',
  Disabled: 'disabled',
});

const variant = instance.getEnum('Style', {
  Filled: 'filled',
  Outline: 'outline',
  Clear: 'clear',
});

const iconOnly = instance.getEnum('Content', {
  'Icons + Text': false,
  'Only Icons': true,
});

const showIconLeft = instance.getBoolean('Icon Left');
const showIconRight = instance.getBoolean('Icon Right');

const labelNode = instance.findText('Button');
const label = labelNode && labelNode.type === 'TEXT' ? labelNode.textContent : 'Button';

let leftIconCode;
if (showIconLeft) {
  const arrowLeft = instance.findInstance('arrow-left');
  if (arrowLeft && arrowLeft.type === 'INSTANCE') {
    leftIconCode = arrowLeft.executeTemplate().example;
  } else {
    const arrowUp = instance.findInstance('arrow-up');
    if (arrowUp && arrowUp.type === 'INSTANCE') {
      leftIconCode = arrowUp.executeTemplate().example;
    }
  }
}

let rightIconCode;
if (showIconRight) {
  const arrowRight = instance.findInstance('arrow-right');
  if (arrowRight && arrowRight.type === 'INSTANCE') {
    rightIconCode = arrowRight.executeTemplate().example;
  }
}

export default {
  example: figma.code`
    <Button
      variant="${variant}"
      size="${size}"
      ${state !== 'default' ? `state="${state}"` : ''}
      ${iconOnly ? 'iconOnly' : ''}
      ${leftIconCode ? figma.code`leftIcon={${leftIconCode}}` : ''}
      ${rightIconCode ? figma.code`rightIcon={${rightIconCode}}` : ''}
    >
      ${iconOnly ? '' : label}
    </Button>
  `,
  imports: ["import { Button } from '@/components/ui/Button'"],
  id: 'button',
  metadata: { nestable: true },
};
