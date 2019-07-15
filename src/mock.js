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

                <h3>mock</h3>

                <input type='button' value='读接口_地址栏传参' onClick={this.getMock}/>
                <input type='button' value='读接口_非地址栏传参' onClick={this.postMock}/>
                <input type='file' ref="f1"/>
                <input type="button" value="读接口_上传文件" onClick={this.postMockFile}/>

            </div>
        )
    }

    getMock=()=>{
        fetch(
            `/mock/home?_page=1&_limit=1`,

            {

            },


        ).then(
            res=>res.json()
        ).then(
            data=>console.log(data)
        )
    };

    postMock=()=>{
        let headers=new Headers();
        headers.append('Content-type',"application/x-www-form-urlencoded")
        fetch(
            `/mock/login`,
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
    postMockFile=()=>{
        let formData = new FormData();

        formData.append("username", "memeda");
        formData.append("password", "memeda123"); //数字123456会被立即转换成字符串 "123456"
        formData.append("nikename", "2019-7-10");
// HTML 文件类型input，由用户选择
        formData.append("icon", this.refs.f1.files[0]);
     fetch(
         `/Mock/reg`,
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




}


ReactDom.render(
    <App/>,
    document.querySelector('#app')
)