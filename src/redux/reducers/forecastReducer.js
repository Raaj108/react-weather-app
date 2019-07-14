const initState = {
    forecastData : [],
    isforecastDataLoaded : false,
    forecastErrors: null
}

const forecastReducer = (state = initState, action ) => {
   
     switch (action.type) {
         case "FETCH_CURRENT_FORECAST":
             return {
                 ...state,
                 forecastData: action.forecastData,
                 isforecastDataLoaded: true,
                 forecastErrors: null
             };
         case "FETCH_CURRENT_FORECAST_ERR":
             return {
                 ...state,
                 forecastData:[],
                 isforecastDataLoaded: false,
                 forecastErrors: action.err
             };
         default:
             return state;
     }
}

export default forecastReducer;