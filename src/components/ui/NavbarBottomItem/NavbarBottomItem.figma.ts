// url=https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=116-1415
// source=src/components/ui/NavbarBottomItem/NavbarBottomItem.tsx
// component=NavbarBottomItem
import figma from 'figma';
const instance = figma.selectedInstance;

const state = instance.getEnum('State', {
  Selected: 'selected',
  Inactive: 'inactive',
});

const appearance = instance.getEnum('Style', {
  'Line Selector + Icon': 'line',
  'Text + Icon': 'text',
});

const star = instance.findInstance('star');
let iconCode;
if (star && star.type === 'INSTANCE') {
  iconCode = star.executeTemplate().example;
}

const labelNode = instance.findText('Text');
const label = labelNode && labelNode.type === 'TEXT' ? labelNode.textContent : 'Label';

export default {
  example: figma.code`
    <NavbarBottomItem
      state="${state}"
      appearance="${appearance}"
      ${iconCode ? figma.code`icon={${iconCode}}` : 'icon={null}'}
      label="${label}"
    />
  `,
  imports: ["import { NavbarBottomItem } from '@/components/ui/NavbarBottomItem'"],
  id: 'navbar-bottom-item',
  metadata: { nestable: true },
};
