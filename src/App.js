import React from 'react';

class App extends React.Component {
  render(){
    const i =1
    var myStyle = {
      fontSize :100,
      color : '#FF0000'
    }
    return(
      <div>
      <h1> Hearder </h1>
      <h2> Content </h2>
      <p data-myattribute = "somevalue"> this is the content !!</p>
      <p> {1+1} </p>
      <p style = {myStyle}> {i == 1 ? 'True' : 'false'} </p>
      </div>
    );
  }
}

export default App;