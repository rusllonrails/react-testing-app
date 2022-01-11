import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';

function PostItem(props) {
  return (
    <div className="post">
      <strong>{props.post.name}</strong>
      <span>{props.post.desc}</span >
      <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
    </div>
  );
}

export default PostItem;
