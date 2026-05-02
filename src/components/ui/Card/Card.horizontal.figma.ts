// url=https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=279-2933
// source=src/components/ui/Card/Card.tsx
// component=Card (Horizontal - Small)
import figma from 'figma';
const instance = figma.selectedInstance;

const showTitle = instance.getBoolean('Title');

const titleNode = instance.findText('Title');
const title = titleNode && titleNode.type === 'TEXT' ? titleNode.textContent : 'Title';

const descNode = instance.findText(
  'Keep your messages short, but make sure they cover everything you need to say.',
);
const description =
  descNode && descNode.type === 'TEXT'
    ? descNode.textContent
    : 'Keep your messages short, but make sure they cover everything you need to say.';

export default {
  example: figma.code`
    <Card
      orientation="horizontal"
      imageSrc="/path/to/image.png"
      imageAlt="Card image"
      ${showTitle ? `title="${title}"` : 'title={null}'}
      description="${description}"
    />
  `,
  imports: ["import { Card } from '@/components/ui/Card'"],
  id: 'card-horizontal',
  metadata: { nestable: true },
};
