import React from 'react';
import SplitLayout from './components/SplitLayout'
import LogoGrid from './components/LogoGrid'
import ImageList from './components/ImageList'
import FullScreenDropZone from './components/FullScreenDropZone'
import './App.css';

function App() {
  return (
    <FullScreenDropZone>
      <SplitLayout>
        <ImageList></ImageList>
        <LogoGrid></LogoGrid>
      </SplitLayout>
    </FullScreenDropZone>
  )
}

export default App;
