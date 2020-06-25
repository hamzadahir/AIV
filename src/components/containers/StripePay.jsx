import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StripePay } from "../pages/StripeResponse/StripePay";
import { createPaymentIntent, sendNotification, downloadFile} from '../../redux/actions';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const mapStateToProps = (state) => {
  return {
    secretKey: state.stripe.key,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendNotification: (value) => dispatch(sendNotification(value)),
    createPaymentIntent: (value) => dispatch(createPaymentIntent(value)),
    downloadFile: (value) => dispatch(downloadFile(value)),
  };
};

class StripeForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Elements stripe={stripePromise}>
          <StripePay
            send={this.props.sendNotification}
            isError={this.props.isError}
            isSending={this.props.isSending}
            createPaymentIntent={this.props.createPaymentIntent}
            downloadFile={this.props.downloadFile}
            plan={this.props.plan}
            secretKey={this.props.secretKey}
            close={this.props.close}
            closePopup={this.props.closePopup} />
        </Elements>
      </div>)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeForm);