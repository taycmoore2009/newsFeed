import React from 'react';
import { Container, Header } from 'semantic-ui-react'

import './App.css';

import newsFeed from './news.json';

function App() {
  console.log(newsFeed);
  return (
    <div className="App">
      <Container fluid>
      <Header size='huge'>Your News Feed</Header>
      
      </Container>
    </div>
  );
}

export default App;
