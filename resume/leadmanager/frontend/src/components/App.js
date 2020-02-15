import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import dashboard from './files/dashboard';

import { Provider } from "react-redux";
import store from '../store';
import Login from './accounts/Login';
import Register from './accounts/Register';
// import Upload from './accounts/Upload'
// import PrivateRouter from './common/PrivateRoute';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from "../actions/auth";
//Alert options
const alertOptions = {
    timeout: 3000,
    position: "top center"
};


class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }
    render() {
        return (
            <Provider store={store} >
                <AlertProvider template={AlertTemplate}
                    {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/files" component={dashboard} />

                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );

    }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
