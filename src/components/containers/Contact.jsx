import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Contact } from '../pages/Contact/Contact'
import { sendMessage, closePopup } from '../../redux/actions';

const mapStateToProps = (state) => {
  return {
    isError: state.contact.isError,
    isSending: state.contact.isSending,
    message: state.contact.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (value) => dispatch(sendMessage(value)),
    closePopup: () => dispatch(closePopup()),
  };
};

class ContactForm extends Component {
  render() {
    return (
        <Contact
          closePopup={this.props.closePopup}
          responseMessage={this.props.message}
          isError={this.props.isError}
          isSending={this.props.isSending}
          sendMessage={this.props.sendMessage}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);