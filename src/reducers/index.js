import {combineReducers} from 'redux'
import Reducer1 from './Reducer1'
import Reducer2 from './Reducer2'

export default combineReducers ({
    anyReducerName1:Reducer1,
    anyReducerName2:Reducer2
});