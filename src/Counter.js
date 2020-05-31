import React, { Component } from 'react';

class Counter extends Component {
constructor(props) {
    super (props);

    // initialize state
    this.state = { 
        dhikrCount: 0, 
        hasanatCount: 0 
    };
}

// increase state value
increment = () => {
    this.setState({
        dhikrCount: parseInt(this.state.dhikrCount)+ 1,
        hasanatCount: parseInt(this.state.hasanatCount) + 10
    });
};

// decrease state value
decrement = () => {
    this.setState({
        dhikrCount: this.state.dhikrCount - 1,
        hasanatCount: this.state.hasanatCount - 10
    });
};

// reset state value
reset = () => {
    this.setState({
        dhikrCount: 0,
        hasanatCount: 0
    });
};



// load saved state
componentWillMount = () => {
    console.log("component loaded test");
    this.state.dhikrCount = localStorage.getItem("dhikrCount", parseInt(this.state.dhikrCount));
    this.state.hasanatCount = localStorage.getItem("hasanatCount", parseInt(this.state.hasanatCount));
    
}



// save state when updating
componentDidUpdate = () => {
    console.log("component updated test");
    localStorage.setItem("dhikrCount", parseInt(this.state.dhikrCount));
    localStorage.setItem("hasanatCount", parseInt(this.state.hasanatCount));
}



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