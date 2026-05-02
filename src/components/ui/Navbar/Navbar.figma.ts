// url=https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=2468-3149
// source=src/components/ui/Navbar/Navbar.tsx
// component=Navbar
import figma from 'figma';
const instance = figma.selectedInstance;

const status = instance.getEnum('status', {
  mobile: 'mobile',
  web: 'web',
});

const logoNode = instance.findText('Studio Mira');
const logo = logoNode && logoNode.type === 'TEXT' ? logoNode.textContent : 'Studio Mira';

export default {
  example: figma.code`
    <Navbar status="${status}" logo="${logo}" />
  `,
  imports: ["import { Navbar } from '@/components/ui/Navbar'"],
  id: 'navbar',
  metadata: { nestable: true },
};
