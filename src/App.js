import React, {useState} from 'react';
import Counter from './components/Counter';
import DynamicInput from './components/DynamicInput';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('some text')

  return (
    <div className="App">
      <Counter />
      <DynamicInput />
    </div>
  );
}

export default App;
