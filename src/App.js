import React from 'react';
import SplitLayout from './components/SplitLayout'
import LogoGrid from './components/LogoGrid'
import ImageList from './components/ImageList'
import './App.css';

function App() {
  return (
    <SplitLayout>
      <ImageList></ImageList>
      <LogoGrid></LogoGrid>
    </SplitLayout>
  )
}

export default App;
