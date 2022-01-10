import React, {useState} from 'react';
import Counter from './components/Counter';
import DynamicInput from './components/DynamicInput';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'Javascript', desc: 'Some text 1'},
    {id: 2, name: 'Ruby', desc: 'Some text 2'},
    {id: 3, name: 'SQL', desc: 'Some text 3'}
  ])

  return (
    <div className="App">
      <Counter />
      <DynamicInput />

      <PostList posts={posts} title='List of Programming Languages' />
      <PostList posts={posts} title='List of Programming Languages 2' />
    </div>
  );
}

export default App;
