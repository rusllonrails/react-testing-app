import React, {useState} from 'react';


class DynamicInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "Some text"
    }
  }

  updateValue(new_value) {
    this.setState({value: new_value})
  }

  render() {
    return (
      <div className="dynamic_input">
        <h2>{this.state.value}</h2>
        <input
          type='text'
          value={this.state.value}
          onChange={event => this.updateValue(event.target.value)} />
      </div>
    );
  }
}

export default DynamicInput;
