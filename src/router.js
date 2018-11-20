import {
    BrowserRouter as Router , Route , Switch, Redirect
} from 'dva/router'
import Test from './pages/Test'
import React from 'react'
import Login from './pages/Login'
import Main from './pages/Main'
import UserManger from './pages/UserManger'
function RootRouter(){
    return <Router>
        <Switch>
            <Route path="/test" component={Test} />
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/userManger" component={UserManger} />
            <Redirect from="/" to="/main/home" />
        </Switch>
    </Router>
}

export default RootRouter;