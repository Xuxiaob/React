
import  React from 'react'
import ReactDom from 'react-dom'
import  App from './layouts/App';

import {BrowserRouter ,Route} from "react-router-dom";
import './utils/axios'
ReactDom.render(

    <BrowserRouter>

        <Route component={App} />

    </BrowserRouter>
   ,

    document.querySelector('#app')
);