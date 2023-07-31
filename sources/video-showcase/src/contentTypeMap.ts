import React from 'react';
import { TextBlock } from './components/TextBlock';
import { Video } from './components/Video';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CONTENT_TYPE_MAP: Record<string, React.ElementType> = {
  '/component/textblock': TextBlock,
  '/component/video': Video,
};
