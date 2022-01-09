import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState(1)
  const [value, setValue] = useState('some text')

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>{value}</h2>
      <input
        type='text'
        value={value}
        onChange={event => setValue(event.target.value)}
        />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </div>
  );
}

export default App;
