import { Component } from "react";
import Counter from "./component/counter";
class App extends Component{
  render(){
    let customerName = "Rashmika";
    let customerAge = 25;
    let address = "Rajmohall city-Hospital";
    let fruitList = ["mango","orange","Apple","grapes","litchi"];

  return <>
  <h1>Wellcome</h1>
  <br/>
  <p> Name: {customerName}</p>
  <p>Age : {customerAge}</p>
  <p>address : {address}</p>
  <ul>
    fruitList : {fruitList.map((list,index)=>{return <li key={index}>{list}</li>})}
    </ul>
    
  <Counter/>
    <hr/>
    
  </>
  }
}

export default App;
