// url=https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=93-1422
// source=src/components/ui/Alert/Alert.tsx
// component=Alert
import figma from 'figma';
const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Default: 'default',
  Success: 'success',
  Info: 'info',
  Warning: 'warning',
  Error: 'error',
});

const styleVariant = instance.getEnum('Style', {
  Outline: 'outline',
  Filled: 'filled',
});

const showTitle = instance.getBoolean('Title');
const showDescription = instance.getBoolean('Description');
const showIcon = instance.getBoolean('Icon');
const showLeftButton = instance.getBoolean('Left Button');
const showRightButton = instance.getBoolean('Right Button');

const titleNode = instance.findText('Title');
const title = titleNode && titleNode.type === 'TEXT' ? titleNode.textContent : 'Title';

const descNode = instance.findText('Get immediate alerts and a notification badge.');
const description =
  descNode && descNode.type === 'TEXT'
    ? descNode.textContent
    : 'Get immediate alerts and a notification badge.';

const star = instance.findInstance('star');
let iconCode;
if (star && star.type === 'INSTANCE') {
  iconCode = star.executeTemplate().example;
}

export default {
  example: figma.code`
    <Alert
      state="${state}"
      styleVariant="${styleVariant}"
      ${showTitle ? `title="${title}"` : ''}
      ${showDescription ? `description="${description}"` : ''}
      ${showIcon && iconCode ? figma.code`icon={${iconCode}}` : showIcon ? '' : 'icon={false}'}
      ${showLeftButton ? `leftButton={{ label: 'Button' }}` : 'leftButton={null}'}
      ${showRightButton ? `rightButton={{ label: 'Button' }}` : 'rightButton={null}'}
    />
  `,
  imports: ["import { Alert } from '@/components/ui/Alert'"],
  id: 'alert',
  metadata: { nestable: true },
};
