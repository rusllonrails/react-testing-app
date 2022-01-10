import React, {useState, useRef} from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import InputWithUseRef from './components/UI/input/InputWithUseRef'
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'Javascript', desc: 'Some text 1'},
    {id: 2, name: 'Ruby', desc: 'Some text 2'},
    {id: 3, name: 'SQL', desc: 'Some text 3'}
  ])

  const [post, setPost] = useState({id: '', name: '', desc: ''})
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {id: Date.now, name: post.name, desc: post.desc}])
    setPost({name: '', desc: ''})
  }

  return (
    <div className="App">
      <form>
        <InputWithUseRef
          ref={bodyInputRef}
          type='text'
          placeholder='new post (useRef)'
          onChange={(e) => console.log(bodyInputRef.current.value)} />

        <MyInput
          type='text'
          placeholder='new post title'
          onChange={(e) => setPost({...post, name: e.target.value})}
          value={post.name} />
        <MyInput
          type='text'
          placeholder='new post desc'
          onChange={(e) => setPost({...post, desc: e.target.value})}
          value={post.desc} />
        <MyButton onClick={addNewPost}>Add Post</MyButton>

        <PostList posts={posts} title='List of Programming Languages' />
      </form>
    </div>
  );
}

export default App;
