import { combineReducers } from 'redux';
import contact from './Contact';
import stripe from './Stripe';

const rootReducer = combineReducers({
  contact,
  stripe,
});

export default rootReducer;