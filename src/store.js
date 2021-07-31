import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
let enhancers = applyMiddleware(...middleWares);

if (process.env.NODE_ENV !== 'production') {
    middleWares.push(createLogger());
    enhancers = composeWithDevTools(applyMiddleware(...middleWares));
}   

const store = createStore(rootReducer, enhancers);
sagaMiddleware.run(rootSaga);

export default store;