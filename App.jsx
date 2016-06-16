import React from 'react';


class App extends React.Component {
constructor(){
  super();

  this.state ={
    text: '',
    standby: ''
  }

  this.handleClick = this.handleClick.bind(this);
  this.changeText = this.changeText.bind(this);
}

handleClick(){
  this.setState({standby:this.state.text})
}

changeText(e){
  this.setState({text: e.target.value})
}



render(){
  var text = this.state.standby;

  return(
    <div>
      <input type = 'text' onChange = {this.changeText} placeholder = "put something here" />
      <button onClick = {this.handleClick}>Click me</button>
      <h1>{text}</h1>
    </div>
  )
}
};

export default App;
