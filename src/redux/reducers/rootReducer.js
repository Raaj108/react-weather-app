import { combineReducers } from 'redux';
import forecastReducer from './forecastReducer';
import locationReducer from './locationReducer';
import twentyfourHoursForecastreducer from './twentyfourHoursForecastreducer';


const rootReducer = combineReducers({
    forecast : forecastReducer,
    location: locationReducer,
    twentyfourHoursForecast : twentyfourHoursForecastreducer
})
export default rootReducer;