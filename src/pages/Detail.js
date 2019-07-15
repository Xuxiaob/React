import React, {Component} from 'react';
import "../assets/css/detail.css"
import xing from '../assets/img/xing.png'
import fx from '../assets/img/fx.png'

import zan from '../assets/img/zan.png'
import querystring from 'query-string'
import date from "../utils/date"
export default class Detail extends Component {
    state={
        data: {}
    };
    componentDidMount() {
        let{history,match,location}=this.props;
        console.log(1,match.params.id)
        console.log(2,querystring.parse(location.search).dataName)

        let id=match.params.id-0;
        let dataName=querystring.parse(location.search).dataName;
        axios({
            url:`/mock/${dataName}/${id}`
        }).then(
            res=>this.setState({data:res.data.data})
        )

    }

    render() {

        let {data} =this.state
        return (
            <div className="Detail">
                <div className="nav">
                    <ul>
                        <li className="l-btn" onClick={()=>this.props.history.go(-1)} ></li>
                    </ul>
                </div>
                {
                    data.detail && (
                        <div className="content">
                            <div className="header clear"><h2><img src={data.detail.auth_icon} alt=""/></h2><p>{data.detail.auth}</p></div>
                            <div className="cont">
                                <h3>{data.title}</h3>
                                <div className="time"><p>{date(data.time)}<span><img src={zan}
                                                                               alt=""/></span></p></div>
                                <div className="text-box" dangerouslySetInnerHTML={{__html:data.detail.content}}>
                                    {/*{data.detail.content}*/}

                                </div>
                            </div>
                        </div>

                    )
                }

                <div className="foot-btn">
                    <ul>
                        <li className="say"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="zan"><a href="javascript:;">
                            <i></i><span>0</span>
                        </a></li>
                        <li className="xing"><a href="javascript:;">
                            <i><img src={xing} alt=""/></i>
                        </a></li>
                        <li className="fx"><a href="javascript:;">
                            <i><img src={fx} alt=""/></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

