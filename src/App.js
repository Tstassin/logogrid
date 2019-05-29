import React from 'react';
import SplitLayout from './components/SplitLayout'
import LogoGrid from './components/LogoGrid'
import FullScreenDropZone from './components/FullScreenDropZone'
import ImageContainer from './components/ImageContainer'
import './App.css';
import FlexMenu from './components/FlexMenu';
import SortableImageList from './components/SortableImageList';

function App() {
  return (
    <ImageContainer>
      <FullScreenDropZone>
        <SplitLayout>
          <SortableImageList />
          <FlexMenu />
          <LogoGrid />
        </SplitLayout>
      </FullScreenDropZone>
    </ImageContainer>
  )
}

export default App
