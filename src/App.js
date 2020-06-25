import React from 'react';
import InputControl from './components/InputControl';
import './App.css';

function App() {
  const categories = [{
    label: 'category 1',
    demo: [{label: 'demo11'}, {label: 'demo12'}, {label: 'demo13'}],
  }, {
    label: 'category 2',
    demo: [{label: 'demo21'}, {label: 'demo22'}, {label: 'demo23'}],
  }, {
    label: 'category 3',
    demo: [{label: 'demo31'}, {label: 'demo32'}, {label: 'demo33'}],
  }, {
    label: 'category 4',
    demo: [{label: 'demo41'}, {label: 'demo42'}, {label: 'demo43'}],
  }, {
    label: 'category 5',
    demo: [{label: 'demo51'}, {label: 'demo52'}, {label: 'demo53'}],
  }];
  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <InputControl categories={categories} placeholder="Select a category" helper={<div>Helper Modal</div>}/>
    </div>
  );
}

export default App;
