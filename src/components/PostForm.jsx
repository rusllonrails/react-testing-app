import React, {useState} from 'react';
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({create}) => {

  const [post, setPost] = useState({id: '', name: '', desc: ''})

  const addNewPost = (e) => {
    e.preventDefault()

    const newPost = {
      ...post, id: Date.now
    }

    create(newPost) // add new post to array using callback function, provided via props.create
    setPost({name: '', desc: ''}) // clear form
  }

  return (
    <form>
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
    </form>
  );
}

export default PostForm;
