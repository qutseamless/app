import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

/**
 * @function represents the api for reading and writing to the
 * application state.
 */
export default createStore(reducer, applyMiddleware(thunk));
