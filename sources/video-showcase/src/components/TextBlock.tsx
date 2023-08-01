import { ContentInstance } from '@craftercms/models';
import { RenderField } from '@craftercms/experience-builder/react';

type TextBlockProps = {
  model: ContentInstance;
};

export const TextBlock = ({ model }: TextBlockProps) => (
  <RenderField
    model={model}
    fieldId="text_html"
    renderTarget="dangerouslySetInnerHTML"
    render={(contentHtmlRaw) => ({ __html: contentHtmlRaw })}
    component="span"
  />
);
