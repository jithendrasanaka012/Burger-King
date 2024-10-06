import React from "react";
import "../style.css"
class Nav extends React.Component{
    render(){
        return (
            <div id="mn">
                
                <i className="fa-solid fa-bars bar"></i>
                <p id="bt">BURGER KING</p>
                <i className="fa-solid fa-user us"></i>
                <button id="mbu"><i className="fa-solid fa-bag-shopping"></i> View Cart</button>
            
            </div>
        )
    }
}
export default Nav; 