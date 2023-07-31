/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { parseDescriptor, getDescriptor } from '@craftercms/content';
import { map } from 'rxjs';
import { ContentInstance } from '@craftercms/models';
import { crafterConf } from '@craftercms/classes';

/**
 * Hook to load a crafter ContentInstance object given its path.
 * @param path a path to a crafter content item (e.g. /site/website/index.xml or /site/components/content/carousel/abc123.xml)
 */
export const useCrafterContentInstance = (path: string) => {
  const [item, setItem] = useState<ContentInstance>();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const handleError = (err: Error) => {
    setItem(undefined);
    setLoading(false);
    setError(err);
  };

  useEffect(() => {
    if (path) {
      setLoading(true);
      setError(null);
      setItem(undefined);

      getDescriptor(path, { ...crafterConf.getConfig(), flatten: true })
        .pipe(map(parseDescriptor as any))
        .subscribe({
          next: (contentInstance: any) => {
            if (contentInstance && contentInstance.craftercms.id) {
              setItem(contentInstance);
              setLoading(false);
              setError(null);
            } else {
              handleError(new Error(`cannot find content at path "${path}".`));
            }
          },
          error: (err) => {
            handleError(err);
          },
        });
    }
  }, [path]);

  return { item, isLoading, error };
};
