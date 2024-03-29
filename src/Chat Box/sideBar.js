import React from "react"
import "../css/sideBar.css"
// import {connect} from "react-redux";

class SideBar extends React.Component{
    
    onClick = (receiver) => {
        // let valid = true
        this.props.setReceiver(receiver)    
        // this.props.msgBoxTitlesArr.forEach(elem => {

        //     if(elem === receiver){
        //         valid = false
        //     }
        // })
        // if(valid){
        //     let duplicateArr = [...this.props.msgBoxTitlesArr]
        //     if(this.props.users.length  === 4){
        //         duplicateArr[0] = receiver
        //         this.props.msgBoxTitles(duplicateArr)
        //     }else{
        //         duplicateArr.push(receiver)
        //         this.props.msgBoxTitles(duplicateArr)
        //     }
        // }
    }

    render(){
        
        return(
        <div className="sidebar  text-center  float-left  col-md-3 p-0">
            
            {this.props.users.map((elem,index)=>{
                return(
                    <div  className={(this.props.getReceiver === elem ? "receiver " : "") + "p-2"  }
                         onDoubleClick={() => this.props.setSignin(elem)}
                         onClick={() => this.onClick(elem)} key={index}
                         key={index}    
                     >
                        <small className={(this.props.getSignin === elem ? "" : " displayNone ") + "text-left  float-left  col-md-2 p-0"} >
                            *
                        </small>
                        <div className="col-md-10 p-0 ">
                            {elem}
                        </div>
                     </div>
                )
            })
            }
        </div>
        )
    }
}

export default SideBar
