import React from 'react'
import { Switch, Route} from 'react-router-dom';

import Doctors from './pages/Doctors'
import Useful from './pages/Useful'
import Test from './pages/Test'
import Profile_ext from './pages/Profile_ext'
import Messages from './pages/Messages'
import Maintance from './pages/Maintance'
import Profile from './pages/Profile'




export default () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Maintance />
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route path="/doctors">
                <Doctors />
            </Route>
            <Route path="/messages">
                <Messages />
            </Route>
            <Route path="/test">
                <Test />
            </Route>
            <Route path="/useful">
                <Useful />
            </Route>
            <Route exact path="/profile_details">
                <Profile_ext/>
            </Route>
                                
        </Switch>
    );
}