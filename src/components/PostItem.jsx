import React, {useState} from 'react';


function PostItem(props) {

  function removeItem() {
    console.log('removed')
  }

  return (
    <div className="post">
      <strong>{props.name}</strong>
      <span>{props.desc}</span>
      <button onClick={removeItem}>Remove</button>
    </div>
  );
}

export default PostItem;
