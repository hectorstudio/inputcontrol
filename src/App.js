import React from 'react';
import InputControl from './components/InputControl';
import './App.css';

function App() {
  const data = [{
    category1: 'demo11', category2: 'dem21', category3: 'demo31', category4: 'demo41',
  }, {
    category1: 'demo11', category2: 'dem22', category3: 'demo32', category4: 'demo42',
  }, {
    category1: 'demo13', category2: 'dem23', category3: 'demo33', category4: 'demo43',
  }, {
    category1: 'demo14', category2: 'dem24', category3: 'demo34', category4: 'demo44',
  }];
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <InputControl data={data} placeholder="Select a category" helper={<div>Helper Modal</div>}/>
    </div>
  );
}

export default App;
