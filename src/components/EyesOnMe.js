// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  goodFocus = () => {
    console.log('Good!');
  }

  eyesBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.goodFocus} onBlur={this.eyesBlur}>Button</button>
    );
  }
}

export default EyesOnMe;
