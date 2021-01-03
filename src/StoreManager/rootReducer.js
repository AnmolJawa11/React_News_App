import {combineReducers} from 'redux' ;
import NewsReports from './NewsReducer'

var rootReducer=combineReducers({
    news:NewsReports
})

export default rootReducer;
