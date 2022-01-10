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

  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const bodyInputRef = useRef()

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now,
      name: title,
      desc: body
    }

    setPosts([...posts, newPost])
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
          onChange={(e) => setTitle(e.target.value)}
          value={title} />
        <MyInput
          type='text'
          placeholder='new post desc'
          onChange={(e) => setBody(e.target.value)}
          value={body} />
        <MyButton onClick={addNewPost}>Add Post</MyButton>

        <PostList posts={posts} title='List of Programming Languages' />
      </form>
    </div>
  );
}

export default App;
