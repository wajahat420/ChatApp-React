import React, { PureComponent } from 'react';
import {connect} from "react-redux"
import Comp1 from '../Component1/StateColor'
import Comp2 from '../Component2/StateColor'

import Main from "../Chat Box/main"
// import Cockpit from "../Components/Cockpit/Cockpit"


class App extends PureComponent {
  constructor(props){
    super(props);  
    this.props.increament()
  }

  render() {
    

    return (
      <div className="">
        {/* <Comp1/> */}
        {/* <Comp2/> */}
        
        {/* <Main/>       */}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      abc : state
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    increament : () => {
      dispatch({
        type : "INCREAMENT"
    })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)( App) ;
