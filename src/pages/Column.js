import React,{Component} from 'react';
import Cell from "../components/Cell/Cell";
import '../assets/css/column.css'

export default class Column extends Component{
  state={
    list:[]
  };
  componentDidMount(){
    axios({
      url:'/mock/column',
      params:{_page:1,_limit:5}
    }).then(
      res => this.setState({list:res.data.data})
    )
  }
  render(){
    return (
      <div className="Column">
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