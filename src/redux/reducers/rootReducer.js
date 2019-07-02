import { combineReducers } from 'redux';
import dailyForecastReducer from './dailyForecastReducer';
import locationReducer from './locationReducer';
import twentyfourHoursForecastreducer from './twentyfourHoursForecastreducer';


const rootReducer = combineReducers({
    dailyForecast : dailyForecastReducer,
    location: locationReducer,
    twentyfourHoursForecast : twentyfourHoursForecastreducer
})
export default rootReducer;