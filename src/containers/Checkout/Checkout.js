import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCanceled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/burger-app/checkout/contact-data')
    }

    render() {
        let summary = <Redirect to='/burger-app'/>
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/burger-app'/> : null; 
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ings}
                        checkoutCanceled={this.checkoutCanceled}
                        checkoutContinued={this.checkoutContinued} />
                    <Route 
                        path={this.props.match.path+'/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    };
};



export default connect(mapStateToProps)(Checkout);