import {createStore,applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import { addToCart } from './reducer/cart';

export const store = createStore(addToCart,applyMiddleware(logger))