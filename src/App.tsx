import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyled from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
      <GlobalStyled />
    </BrowserRouter>
  </>
);

export default App;
