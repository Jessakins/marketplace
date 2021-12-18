import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Products from './components/Products';
import Dropdowns from './components/Dropdowns';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <div class="flex flex-row">
        <Dropdowns/>
        <Products/>
      </div>
    </div>
  );
}

export default App;