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
                <input type='button' value='读接口_非地址栏传参' onClick={this.postNode}/>
                <input type='file' ref="f1"/>
                <input type="button" value="读接口_上传文件" onClick={this.postNodeFile}/>
                <input type="button" value="douban请求" onClick={this.douban}/>
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
            `/api/home?_page=1&_limit=1`,

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
            `/api/login`,
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
         `/api/reg`,
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

    douban=()=>{
            fetch(
       `/v2/movie/top250?&start=1&count=3`,
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