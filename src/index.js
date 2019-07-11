//生命周期


import React from 'react'
import ReactDom from 'react-dom'


class App extends React.Component{
  state={
      msg:'-'
  };
    render(){
        return(

            <div className='app'>

                <h3>fetch</h3>
                <input type='button' value='读静态的json文件' onClick={this.getJson}/>
                <input type='button' value='读接口_地址栏传参' onClick={this.getNode}/>
                <input type='button' value='读接口_非地址栏传参' onClick={this.postNode}/>s

            </div>
        )
    }
   getJson=()=>{
        fetch(
            `/data/usr.json`
        ).then(
            res=>console.log(res)
        )
   };
    getNode=()=>{};
    postNode=()=>{};


}


ReactDom.render(
    <App/>,
    document.querySelector('#app')
)