// url=https://www.figma.com/design/7Ol4nYEI0AYBLB76yt12NZ/Design-system-A-to-Z?node-id=277-3078
// source=src/components/ui/Card/Card.tsx
// component=Card (Vertical)
import figma from 'figma';
const instance = figma.selectedInstance;

const showTitle = instance.getBoolean('Title');
const showDescription = instance.getBoolean('Description');
const showTopButton = instance.getBoolean('Top Button');
const showBottomButton = instance.getBoolean('Bottom Buttom');

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
      orientation="vertical"
      imageSrc="/path/to/image.png"
      imageAlt="Card image"
      ${showTitle ? `title="${title}"` : 'title={null}'}
      ${showDescription ? `description="${description}"` : 'description={null}'}
      ${showTopButton ? `primaryButton={{ label: 'Button' }}` : 'primaryButton={null}'}
      ${showBottomButton ? `secondaryButton={{ label: 'Button' }}` : 'secondaryButton={null}'}
    />
  `,
  imports: ["import { Card } from '@/components/ui/Card'"],
  id: 'card-vertical',
  metadata: { nestable: true },
};
