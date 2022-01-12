import React, {useState, useRef, useMemo} from 'react';
import PostList from './components/PostList';
import InputWithUseRef from './components/UI/input/InputWithUseRef'
import PostForm from './components/PostForm'
import PostFilters from './components/PostFilters'
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, name: 'Alex', desc: 'Yellow'},
    {id: 2, name: 'Ciara', desc: 'Black'},
    {id: 3, name: 'Rango', desc: 'Absolute'}
  ])

  const [filters, setFilters] = useState({sort: '', query: ''})

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortBy = (sort) => {
    setFilters({...filters, sort: sort})
  }

  const sortedPosts = useMemo(() => {
    if (filters.sort) {
      return [...posts].sort((a,b) => a[filters.sort].localeCompare(b[filters.sort]))
    }

    return posts
  }, [posts, filters.sort])


  const filteredPosts = useMemo(() => {
    if (filters.query) {
      return sortedPosts.filter(p => p.name.toLowerCase().includes(filters.query.toLowerCase()))
    }

    return sortedPosts
  }, [sortedPosts, filters.query])

  return (
    <div className="App">
      <PostFilters filters={filters} setFilters={setFilters} />
      <PostForm create={createPost} />

      {filteredPosts.length > 0
        ? <PostList posts={filteredPosts} remove={removePost} title='List of Programming Languages' />
        : <h1>No posts</h1>
      }
    </div>
  );
}

export default App;
