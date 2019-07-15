//生命周期


import React from 'react'
import ReactDom from 'react-dom'
import fetchJsonp from 'fetch-jsonp'

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
                <input type='button' value='读接口_非地址栏传参' onClick={this.postNode}/>
                <input type='file' ref="f1"/>
                <input type="button" value="读接口_上传文件" onClick={this.postNodeFile}/>
                <input type="button" value="jsonp请求" onClick={this.jsonp}/>
            </div>
        )
    }
   getJson=()=>{
   //      fetch(
   //          `data/user.json`
   //      ).then(
   //          res=>res.json().then(
   //              data=>console.log(data)
   //          )
   //      )
        fetch(
            `/data/user.json`

        ).then(
            res=>res.json()
        ).then(
            data=>console.log(data)
        )
   };
    getNode=()=>{
        fetch(
            `http://localhost:3000/api/home?_page=1&_limit=1`,

            {

            },


        ).then(
            res=>res.json()
        ).then(
            data=>console.log(data)
        )
    };

    postNode=()=>{
        let headers=new Headers();
        headers.append('Content-type',"application/x-www-form-urlencoded")
        fetch(
            `http://localhost:3000/api/login`,
        {

         method:'POST',  //默认get

         // headers:{"Content-type":"application/x-www-form-urlencoded"},
            headers:headers,
         body:"username=alex&password=alex123"
        }


        ).then(
            res=>res.json()
        ).then(
            data=>console.log(data)
        )
    };
    postNodeFile=()=>{
        let formData = new FormData();

        formData.append("username", "memeda");
        formData.append("password", "memeda123"); //数字123456会被立即转换成字符串 "123456"
        formData.append("nikename", "2019-7-10");
// HTML 文件类型input，由用户选择
        formData.append("icon", this.refs.f1.files[0]);
     fetch(
         `http://localhost:3000/api/reg`,
         {
             method:'POST',
             body:formData
         }
     ).then(
         res=>res.json()
     ).then(
         data=>console.log(data)
     )
    }
    jsonp=()=>{
        fetchJsonp(
            `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=1466,21096,29523,29519,29237,28519,29099,28836,29220,22157&wd=么么哒&req=2&bs=%E5%AD%A6%E4%BF%A1%E7%BD%91&pbs=xuexin&csor=4&pwd=%E5%AD%A6%E4%BF%A1w&cb=`,
            {
                // timeout: 延时  5000
                jsonpCallback: 'cb', //回调函数key callback
              // jsonpCallbackFunction: null

    }
        ).then(
            res=>res.json()
        ).then(
            data=>console.log(data)
        )
    }

}


ReactDom.render(
    <App/>,
    document.querySelector('#app')
)