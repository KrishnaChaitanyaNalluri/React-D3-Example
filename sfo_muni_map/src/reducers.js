import {combineReducers} from "redux";
import arteriesReducer from './modules/reducers/arteriesReducer'
import freewaysReducer from './modules/reducers/freewaysReducer'
import neighborhoodsReducer from './modules/reducers/neighborhoodsReducer'
import streetsReducer from './modules/reducers/streetsReducer'

const allReducers = combineReducers({
   arteries:  arteriesReducer,
   freeways: freewaysReducer,
   neighborhoods: neighborhoodsReducer ,
   streets: streetsReducer
});

export default allReducers;
