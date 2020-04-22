import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from '../components/Login/Login';
import Sign from '../components/Sign/Sign';
const RouterURL = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" children={<Login/>} />
                <Route path="/signup" children={<Sign />} />
            </Switch>
        </Router>
    );
}

export default RouterURL;