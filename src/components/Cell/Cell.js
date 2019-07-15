import React, {Component} from 'react';

import './assets/css/cell.css'

import {Link} from "react-router-dom";

export default class Cell extends Component {

    render() {
        let {data,dataName}=this.props
        return (

                 <div className="cell">
                     <Link
                      to={{pathname:'/detail/'+data.id,search:`dataName=${dataName}`}}

                     >
                         <h2>{data.id}.{data.title}</h2>
                         <p>{data.des}</p>
                     </Link>


              </div>
        );
    }
}

