import React from 'react';

const InputWithUseRef = React.forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref}>
      {props.children}
    </input>
  )
});

export default InputWithUseRef;
