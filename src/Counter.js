import React, { Component } from 'react';

class Counter extends Component {
constructor(props) {
    super (props);
    this.state = { 
        dhikrCount: 0, 
        hasanatCount: 0 
    };
}


increment = () => {
    this.setState({
        dhikrCount: this.state.dhikrCount + 1,
        hasanatCount: this.state.hasanatCount + 10
    });
};


decrement = () => {
    this.setState({
        dhikrCount: this.state.dhikrCount - 1,
        hasanatCount: this.state.hasanatCount - 10
    });
};

reset = () => {
    this.setState({
        dhikrCount: 0,
        hasanatCount: 0
    });
};

    render(){
        return (
          <div>
              <p>Dhikr count: {this.state.dhikrCount}</p>
              <p>Hasanat count: {this.state.hasanatCount}</p>

              <button onClick={this.decrement}>-</button>
              <button onClick={this.reset}>Reset</button>
              <button onClick={this.increment}>+</button>
          </div>
        );
    }
}

export default Counter;