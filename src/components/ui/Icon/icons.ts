import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowUpLeftSquare,
  ArrowUpRightSquare,
  ArrowDownLeftSquare,
  ArrowDownRightSquare,
  ArrowLeftRight,
  ArrowUpDown,
  ArrowUpToLine,
  ArrowDownToLine,
  ArrowLeftToLine,
  ArrowRightToLine,
  ArrowUpCircle,
  ArrowDownCircle,
  ArrowLeftCircle,
  ArrowRightCircle,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUpCircle,
  ChevronDownCircle,
  ChevronLeftCircle,
  ChevronRightCircle,
  ChevronUpSquare,
  ChevronDownSquare,
  ChevronLeftSquare,
  ChevronRightSquare,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsRightLeft,
  ChevronsDownUp,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftUp,
  CornerLeftDown,
  CornerRightUp,
  CornerRightDown,
  CircleArrowOutUpLeft,
  CircleArrowOutUpRight,
  CircleArrowOutDownLeft,
  CircleArrowOutDownRight,
  CircleEllipsis,
  MoreHorizontal,
  MoreVertical,
  Maximize2,
  Minimize2,
  PanelLeftOpen,
  PanelLeftClose,
  Compass,
  Move,
  Divide,
  DivideSquare,
  Merge,
  Split,
  SplitSquareVertical,
  ListFilter,
  ExternalLink,
  Spline,
  type LucideIcon,
} from 'lucide-react';

export const iconMap = {
  /* basic arrows */
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,

  /* diagonal arrows */
  'arrow-tl': ArrowUpLeft,
  'arrow-tr': ArrowUpRight,
  'arrow-bl': ArrowDownLeft,
  'arrow-br': ArrowDownRight,

  /* diagonal-in-square */
  'arrow-tl-square': ArrowUpLeftSquare,
  'arrow-tr-square': ArrowUpRightSquare,
  'arrow-bl-square': ArrowDownLeftSquare,
  'arrow-br-square': ArrowDownRightSquare,

  /* diagonal-in-circle (lucide의 out-* 시리즈가 가장 가까움) */
  'arrow-tl-circle': CircleArrowOutUpLeft,
  'arrow-tr-circle': CircleArrowOutUpRight,
  'arrow-bl-circle': CircleArrowOutDownLeft,
  'arrow-br-circle': CircleArrowOutDownRight,

  /* arrow-in-circle (cardinal) */
  'arrow-up-circle': ArrowUpCircle,
  'arrow-down-circle': ArrowDownCircle,
  'arrow-left-circle': ArrowLeftCircle,
  'arrow-right-circle': ArrowRightCircle,

  /* long arrows (꺾인 화살표) */
  'long-arrow-up-left': CornerUpLeft,
  'long-arrow-up-right': CornerUpRight,
  'long-arrow-down-left': CornerDownLeft,
  'long-arrow-down-right': CornerDownRight,
  'long-arrow-left-up': CornerLeftUp,
  'long-arrow-left-down': CornerLeftDown,
  'long-arrow-right-up': CornerRightUp,
  'long-arrow-right-down': CornerRightDown,

  /* nav arrows (chevron) */
  'nav-arrow-up': ChevronUp,
  'nav-arrow-down': ChevronDown,
  'nav-arrow-left': ChevronLeft,
  'nav-arrow-right': ChevronRight,

  /* fast arrows (chevrons - 이중) */
  'fast-arrow-up': ChevronsUp,
  'fast-arrow-down': ChevronsDown,
  'fast-arrow-left': ChevronsLeft,
  'fast-arrow-right': ChevronsRight,

  /* fast-in-box (chevron-square 시리즈로 매핑 - lucide에 chevrons-square 없음) */
  'fast-arrow-up-box': ChevronUpSquare,
  'fast-arrow-down-box': ChevronDownSquare,
  'fast-arrow-left-box': ChevronLeftSquare,
  'fast-arrow-right-box': ChevronRightSquare,

  /* fast-in-circle */
  'fast-up-circle': ChevronUpCircle,
  'fast-down-circle': ChevronDownCircle,
  'fast-left-circle': ChevronLeftCircle,
  'fast-right-circle': ChevronRightCircle,

  /* page (to-line) */
  'page-up': ArrowUpToLine,
  'page-down': ArrowDownToLine,
  'page-left': ArrowLeftToLine,
  'page-right': ArrowRightToLine,

  /* round arrows (둥근 화살표 - lucide에 동등한 게 없어 corner로 매핑) */
  'up-round-arrow': CornerLeftUp,
  'down-round-arrow': CornerLeftDown,
  'left-round-arrow': CornerUpLeft,
  'right-round-arrow': CornerUpRight,
  'enlarge-round-arrow': Maximize2,
  'reduce-round-arrow': Minimize2,

  /* separate / union */
  'arrow-separate': ArrowLeftRight,
  'arrow-separate-vertical': ArrowUpDown,
  'arrow-union': ChevronsRightLeft,
  'arrow-union-vertical': ChevronsDownUp,

  /* more (ellipsis) */
  'more-horiz': MoreHorizontal,
  'more-vert': MoreVertical,
  'more-horiz-circle': CircleEllipsis,
  'more-vert-circle': CircleEllipsis,

  /* sidebar */
  'sidebar-expand': PanelLeftOpen,
  'sidebar-collapse': PanelLeftClose,

  /* divide / split / merge */
  divide: Divide,
  'divide-three': DivideSquare,
  'horizontal-merge': Merge,
  'horizontal-split': Split,
  'vertical-merge': Merge,
  'vertical-split': SplitSquareVertical,

  /* misc */
  compass: Compass,
  drag: Move,
  shortcut: ExternalLink,
  'path-arrow': Spline,
  'filter-list': ListFilter,
  'filter-list-circle': ListFilter,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;
export const ICON_NAMES = Object.keys(iconMap) as IconName[];
