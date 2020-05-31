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
    this.state.dhikrCount = window.localStorage.getItem("dhikrCount");
    this.state.hasanatCount = window.localStorage.getItem("hasanatCount");
    
}



// save state when updating
componentDidUpdate = () => {
    console.log("component updated test");
    window.localStorage.setItem("dhikrCount", this.state.dhikrCount);
    window.localStorage.setItem("hasanatCount", this.state.hasanatCount);
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