import { createStore, applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga'
import rootReducer from '../reduces/index';
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const configRedux = () => {
    const Middleware = [sagaMiddleware];
    const enhancer = [applyMiddleware(...Middleware)];
    const store = createStore(rootReducer,composeEnhancers(...enhancer));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configRedux;