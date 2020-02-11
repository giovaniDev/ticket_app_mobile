import { createStore } from 'redux';

import rootReducer from '../model/rootReducers';

const store = createStore(rootReducer);

export default store;