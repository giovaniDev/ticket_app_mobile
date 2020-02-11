import { combineReducers } from 'redux';

import clubs from './clubs/reducer';
import cards from './cards/reducer';

export default combineReducers({
    clubs,
    cards
})