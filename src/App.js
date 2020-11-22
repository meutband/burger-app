import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/burger-app/checkout" component={Checkout} />
                        <Route path="/burger-app/orders" component={Orders} />
                        <Route path="/burger-app/" exact component={BurgerBuilder} />
                    </Switch>
                </Layout>

            </div>
        );
    }
}

export default App;
