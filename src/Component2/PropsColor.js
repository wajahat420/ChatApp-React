import React from "react"
import "../css/PropsColor.css"

class Propscolors extends React.Component {

    render(){
        return(
            <div style={{backgroundColor : this.props.color}} className="Propscolors">
                <h1>Child Two</h1>
                <div >
                    
                </div>
            </div>
        )
    }
}

export default Propscolors