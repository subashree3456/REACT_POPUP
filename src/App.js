import React , {Component} from 'react';
import Popup from "./Components/Popup";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props);   

    this.state ={
      showPopup : false,
      text :""
    }
    this.handleChange = this.handleChange.bind(this);
    this.tooglePop=this.tooglePop.bind(this);
  }


handleChange(e){

this.setState({
  text : e.target.value
});
}

tooglePop(){
  this.setState({
    showPopup : !this.state.showPopup
  });
}


  render(){
    return (
      <div>    

     <label for=""> USERNAME</label> <br/>
     <input type="text" id="i1" onChange={this.handleChange}  value={this.state.text} placeholder="USERNAME"/> <br/>
     <button className="button2" onClick={this.tooglePop}> CLICK ME</button>
     {this.state.showPopup ? <Popup text="Popup Message!"  closePopup={this.tooglePop} value={this.state.text} /> : null }
    </div>
    );
  }
}


export default App;