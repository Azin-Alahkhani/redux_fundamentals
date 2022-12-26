import { compose, configureStore } from '@reduxjs/toolkit'
import {reducer} from './reducers'
import { monitorEnhancer } from './enhancers'

const enhancer=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = configureStore ({reducer},monitorEnhancer)


console.log(store.getState())
