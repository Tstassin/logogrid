import React from 'react';
import SplitLayout from './components/SplitLayout'
import LogoGrid from './components/LogoGrid'
import ImageList from './components/ImageList'
import FullScreenDropZone from './components/FullScreenDropZone'
import ImageContainer from './components/ImageContainer'
import './App.css';
import FlexMenu from './components/FlexMenu';

function App() {
  return (
    <ImageContainer>
      <FullScreenDropZone>
        <SplitLayout>
          <ImageList></ImageList>
          <FlexMenu />
          <LogoGrid></LogoGrid>
        </SplitLayout>
      </FullScreenDropZone>
    </ImageContainer>
  )
}

export default App
