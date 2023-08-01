import { RenderComponents } from '@craftercms/experience-builder/react';
import { ContentInstance } from '@craftercms/models';
import { CONTENT_TYPE_MAP } from '../contentTypeMap';

type Props = {
  model: ContentInstance;
};

export const RenderContents = ({ model }: Props) => {
  return (
    <RenderComponents
      model={model}
      fieldId="items_o"
      contentTypeMap={CONTENT_TYPE_MAP}
      component={'div'}
      componentProps={{ className: 'content' }}
    />
  );
};
