import React, {useState, useRef} from 'react';
import PostList from './components/PostList';
import InputWithUseRef from './components/UI/input/InputWithUseRef'
import MySelect from './components/UI/select/MySelect'
import PostForm from './components/PostForm'
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'Alex', desc: 'Yellow'},
    {id: 2, name: 'Ciara', desc: 'Black'},
    {id: 3, name: 'Rango', desc: 'Absolute'}
  ])

  const [selectedSort, setSelectedSort] = useState('name')

  {/* const bodyInputRef = useRef() */}

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortBy = (sort) => {
    setSelectedSort(sort)
    const sorted = [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
    setPosts(sorted)
  }

  return (
    <div className="App">
      {/* <InputWithUseRef ref={bodyInputRef} type='text'placeholder='new post (useRef)' onChange={(e) => console.log(bodyInputRef.current.value)} /> */}

      <MySelect
        value={selectedSort}
        onChange={sortBy}
        options={[
          {value: 'name', name: 'by name'},
          {value: 'desc', name: 'by body'}
        ]}
        defaultValue={'name'}
       />
      <PostForm create={createPost} />

      {posts.length > 0
        ? <PostList posts={posts} remove={removePost} title='List of Programming Languages' />
        : <h1>No posts</h1>
      }
    </div>
  );
}

export default App;
