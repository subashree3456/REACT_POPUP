import React from 'react';
import "./Popup.css";

class Popup extends React.Component{
    
render(){

return(
<div className="POPUP">
    <div className="POPUP-INNER">
   <h3 className="text1"> {this.props.text} </h3>
   <h1 className="text2"> Welcome! {this.props.value} </h1>
   <div className="div">
    <buttonn className="button1" onClick={this.props.closePopup}>CLOSE ME</buttonn>
   </div>
    </div>
</div>


)
}
}

export default Popup;