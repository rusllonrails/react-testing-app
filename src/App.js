import React, {useState, useRef} from 'react';
import PostList from './components/PostList';
import InputWithUseRef from './components/UI/input/InputWithUseRef'
import PostForm from './components/PostForm'
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'Javascript', desc: 'Some text 1'},
    {id: 2, name: 'Ruby', desc: 'Some text 2'},
    {id: 3, name: 'SQL', desc: 'Some text 3'}
  ])

  {/* const bodyInputRef = useRef() */}

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      {/* <InputWithUseRef ref={bodyInputRef} type='text'placeholder='new post (useRef)' onChange={(e) => console.log(bodyInputRef.current.value)} /> */}

      <PostForm create={createPost} />
      <PostList posts={posts} title='List of Programming Languages' />
    </div>
  );
}

export default App;
