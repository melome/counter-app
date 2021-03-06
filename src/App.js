import React, {Component, useState, useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked  ${count} times`;
  })

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h2>counter app</h2>
      <button onClick={increment}>Increment</button>
      <br />
      {count > 0 ? 
      <p>You clicked {count} times</p> 
      :<p>Click the button!</p>}
    </div>
  );
}

// class App extends Component {

//   state = {
//     count: 0
//   }

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   componentDidMount() { 
//     document.title = `Clicked  ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     document.title = `Clicked  ${this.state.count} times`;
//   }


//   render(){
//     return (
//       <div style={{textAlign: 'center'}}>
//         <h2>counter app</h2>
//         <button onClick={this.increment}>Increment</button>
//         <br />
//         {this.state.count > 0 ? 
//         <p>You clicked {this.state.count} times</p> 
//         :<p>Click the button!</p>}
//       </div>
//     )
//   }
// }

export default App;