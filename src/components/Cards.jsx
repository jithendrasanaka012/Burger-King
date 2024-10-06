import React from "react";

class Cards extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

            <div id="cd">
                <img src={this.props.img} alt="images" />
                <h2>{this.props.h2}</h2>
                <p>{this.props.p} <a href="">{this.props.a}</a> </p>
                <button>{this.props.button}</button>
            </div>
        )
    }


}
export default Cards;