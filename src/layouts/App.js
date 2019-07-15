import React, {Component} from 'react';


import '../assets/css/base.css';
import  '../library/font';

import Header from './Header';
import Footer from "./Footer";
import {Switch,Route,Redirect} from 'react-router-dom';
import Column from "../pages/Column";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import User from "../pages/User";
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading/Loading";

import PubSub from 'pubsub-js';
import AuthUser from "../guard/AuthUser";


export default class App extends Component {
    state={
        bNav:true,
        bFoot:true,
        bLoading:false
    };
    token=null;

    constructor(){
        super();
        this.token=PubSub.subscribe('VIEW_LOADING',(evname,payload)=>{
            console.log('app',evname,payload)
            this.setState({bLoading:payload})
        })
    }
    componentWillUnmount() {

        PubSub.unsubscribe(this.token);
    }


    checkPath(path){
        if(/home|follow|column/.test(path)){
            this.setState({bNav:true,bFoot:true})
        }
        if(/login|reg|detail/.test(path)){
            this.setState({bNav:false,bFoot:false})
        }
        if(/user/.test(path)){
            this.setState({bNav:false,bFoot:true})
        }

    }
    componentWillReceiveProps(nextProps) {
        console.log('app',nextProps.location.pathname)  //监听路由
        let path=nextProps.location.pathname;
        this.checkPath(path)
    }
    componentDidMount() {

        let path=this.props.location.pathname;
        this.checkPath(path)
    }


    render() {
        return (
            <div className="App">
                {this.state.bLoading && <Loading/>}
                {this.state.bNav && <Header/>}
                <Switch>

                <Route path="/home" component={Home}/>
                <Route path="/follow" component={Follow}/>
                <Route path="/column" component={Column}/>


                    {/*<Route path="/user" component={User}/>*/}
                    <AuthUser path="/user" component={User}/>

                <Route path="/login" component={Login}/>
                <Route path="/reg" component={Reg}/>
              <Route path="/detail/:id" component={Detail}/>
                <Redirect exact from="/" to="/home"/>
                <Route component={ErrorPage}/>
                </Switch>

                    {this.state.bFoot ? <Footer/>:null}
            </div>
        )
    }
}

