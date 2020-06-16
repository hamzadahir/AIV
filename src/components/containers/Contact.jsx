import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Contact } from '../pages/Contact/Contact'
import { sendMessage } from '../../redux/actions/Contact';

const mapStateToProps = (state) => {
  return {
    isSending: state.contact.isSending,
    message: state.contact.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (value) => dispatch(sendMessage(value)),
  };
};

class ContactForm extends Component {
  render() {
    return (
        <Contact sendMessage={this.props.sendMessage}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);