import React  from 'react';
import {Route,Redirect} from 'react-router-dom';

import  axios from 'axios';




class GlobalAuth extends React.Component {
    constructor(){
        super();
        this.state={
            hasAuth:false,
            auth:false,
            data:{}

        };
        axios({
            url:'/data/user.json'
        }).then(
            res=>{
                this.setState({hasAuth:true,auth:res.data.auth,data:res.data.data})
            }
        )

    }
    render() {
        if(!this.state.hasAuth) return null;
        let {component:Component,...rest}=this.props;

        return <Route {...rest} render={(rest)=>(
            this.state.auth?<Component {...rest} data={this.state.data}/>:<Redirect to='login'/>

        )}/>


        }

}
export default GlobalAuth;