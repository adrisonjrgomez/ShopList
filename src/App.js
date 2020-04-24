import React from 'react';
import {ItemsProvider} from './context/item/item.context';

import HomePage from './pages/home.page';
const App = () => {
  return (
    <ItemsProvider>
      <HomePage />
    </ItemsProvider>
  );
};

export default App;
