import { ExperienceBuilder } from '@craftercms/experience-builder/react';
import './App.css';
import { useCrafterContentInstance } from './hooks/useCrafterContentInstance';
import { RenderContents } from './components/RenderContents';

function App() {
  const { item, isLoading, error } = useCrafterContentInstance(
    '/site/website/index.xml',
  );

  console.log('item', item);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || !item) {
    return <p>Error to fetch data</p>;
  }

  return (
    <ExperienceBuilder isAuthoring model={item}>
      <RenderContents model={item} />
    </ExperienceBuilder>
  );
}

export default App;
