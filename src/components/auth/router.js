import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signin from './signin';
import Signup from './signup'

const CustomRouter = () => {
    return (
        <Router>
            {/* <Route path='/' component={}></Router> */}
            <Route path='/signup/' component={Signup}></Route>
            <Route path='/signin/' component={Signin}></Route>
        </Router>
    )
}
 
 export default CustomRouter;