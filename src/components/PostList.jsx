import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {

  if (!posts.length) {
    return <h1>No posts</h1>
  }

  return (
    <div>
      <h1>{title}</h1>

      {posts.map((post) =>
        <PostItem post={post} key={post.id} remove={remove} />
      )}
    </div>
  )
}

export default PostList;

