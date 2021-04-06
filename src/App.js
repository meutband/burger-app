import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {

    componentDidMount () {
        this.props.onTryAutoSignin();
    };

    render() {

        let routes = (
            <Switch>
                <Route path="/burger-app/auth" component={Auth} />
                <Route path="/burger-app/" exact component={BurgerBuilder} />
                <Redirect to="/burger-app" />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/burger-app/logout" component={Logout} />
                    <Route path="/burger-app/checkout" component={Checkout} />
                    <Route path="/burger-app/orders" component={Orders} />
                    <Route path="/burger-app/" exact component={BurgerBuilder} />
                    <Redirect to="/burger-app" />
                </Switch>
            )
        }
        return (
            <div>
                <Layout>
                    {routes}
                </Layout>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignin: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
