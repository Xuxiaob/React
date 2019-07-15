import React, {Component} from 'react';
import Cell from "../components/Cell/Cell";

import ReactSwipe from 'react-swipe';
import '../assets/css/home.css';
import {Link} from "react-router-dom";

export default class Home extends Component {
    state={
        list:[]
    };
    componentDidMount() {
        axios({
           url:'/mock/home',
           params:{_page:1,_limit:11}
        }).then(
            res=>this.setState({list:res.data.data})
        )
    }

    render() {
        let {list}=this.state;
        // console.log(1,list)
        return (
            <div className="Home">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        auto:1000,
                        speed:100
                    }}

               >
                    <Link style={{background:'#399'}} to="/detail/1">我是谁？</Link>
                    <Link style={{background:'#393'}} to="/detail/2">我来自哪里？</Link>
                    <Link style={{background:'#939'}} to="/detail/3">我喜欢谁？</Link>
                </ReactSwipe>
                {
                    list.map(item=>(

                        <Cell
                          key={item.id}
                          data={item}
                          dataName='home'

                        />
                    ))
                }



            </div>
        );
    }
}

