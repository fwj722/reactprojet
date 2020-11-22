import React from 'react'
import PropTypes from "prop-types"

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      msg:"aaaa"
    }
  }
  getData=()=>{
    console.log(this.state.msg)
  }
  render(){
    return (
      <div>
        {this.props.num}
        <button onClick={this.props.run.bind(this,0)}>
          按钮
        </button>
      </div>
    )
  }
}

Header.defaultProps={
  title:100,
}
Header.propTypes = {
  title:PropTypes.number,
}
export default Header;