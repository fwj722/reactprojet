import React from "react"
import Header from "./components/Header"
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      num:0,
      title:"这是头部"
    }
  }
  run=(n)=>{
    // let num = this.state.num++
    // this.setState({
    //   num:this.state.num++
    // })
    n++
    this.setState({
      num:n
    })
    console.log(this.state.num)
  }
  getD=()=>{
    this.refs.headerDom.getData()
  }
  render(){
    return (
      <div>
        <Header ref="headerDom" num ={this.state.num} run={this.run}/>
        {this.state.num}
        {/* <input  value={this.state.num} onClick={this.run.bind(this)}></input> */}
      <button onClick={this.getD}>获取子内容</button>
      </div>
    )
  }
}

export default Home;