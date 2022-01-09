import React, {useState} from 'react';
import Counter from './components/Counter';
import DynamicInput from './components/DynamicInput';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('some text')

  return (
    <div className="App">
      <Counter />
      <DynamicInput />
      <PostItem name='Javascript' desc='Test 1' />
      <PostItem name='Ruby' desc='Test 2' />
      <PostItem name='TypeScript' desc='Test 3' />
    </div>
  );
}

export default App;
