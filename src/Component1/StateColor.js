import React from "react"
import "../css/stateColors.css"
import Props from "./PropsColor"

class StateColor extends React.Component {

    state =  {
        color: "red"
    }
    render(){
        return(

           <div>
                <div className="colors">
                    <h1 style={{backgroundColor : this.state.color}}>State Color</h1>
                    <div>
                        <div onClick={() => this.setState({color : "red"})} style={{backgroundColor : "red"}}>red</div>
                        <div onClick={() => this.setState({color : "blue"})} style={{backgroundColor : "blue"}}>blue</div>
                        <div onClick={() => this.setState({color : "green"})} style={{backgroundColor : "green"}}>green</div>
                        <div onClick={() => this.setState({color : "black"})} style={{backgroundColor : "black",color: "white"}}>black</div>
                        <div onClick={() => this.setState({color : "gray"})} style={{backgroundColor : "gray"}}>gray</div>
                    </div>
                
                
                </div>
            <Props color={this.state.color}/>
           </div>
        )
    }
}

export default StateColor