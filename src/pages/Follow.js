import React,{Component} from 'react';
import Cell from "../components/Cell/Cell";
import '../assets/css/follow.css'
export default class Follow extends Component{
  state={
    list:[]
  };
  componentDidMount(){
    axios({
      url:'/mock/follow',
      params:{_page:1,_limit:8}
    }).then(
      res => this.setState({list:res.data.data})
    )
  }
  render(){
    return (
      <div className="Follow">
        {
          this.state.list.map(item=>(
            <Cell
              key={item.id}
              data={item}
              dataName="home"
            />
          ))
        }
      </div>
    )
  }
}