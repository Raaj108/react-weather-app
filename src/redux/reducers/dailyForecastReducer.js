const initState = {
    dailyForecastData : [],
    isDailyForecastDataLoaded : false,
    dailyForecastErrors: null
}

const dailyForecastReducer = (state = initState , action ) => {
   
     switch (action.type) {
         case "FETCH_DAILY_FORECAST":
             return {
                 ...state,
                 dailyForecastData: action.dailyForecastData,
                 isDailyForecastDataLoaded: true,
                 dailyForecastErrors: null
             };
         case "FETCH_DAILY_FORECAST_ERR":
             return {
                 ...state,
                 dailyForecastData:[],
                 isDailyForecastDataLoaded: false,
                 dailyForecastErrors: action.err
             };
         default:
             return state;
     }
}

export default dailyForecastReducer;