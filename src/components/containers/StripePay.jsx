import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StripePay } from "../pages/StripeResponse/StripePay";
import { createPaymentIntent } from '../../redux/actions';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const mapStateToProps = (state) => {
  return {
    secretKey: state.stripe.key,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPaymentIntent: (value) => dispatch(createPaymentIntent(value)),
  };
};

class StripeForm extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Elements stripe={stripePromise}>
          <StripePay createPaymentIntent={this.props.createPaymentIntent} plan={this.props.plan} secretKey={this.props.secretKey} close={this.props.close} />
        </Elements>
      </div>)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeForm);