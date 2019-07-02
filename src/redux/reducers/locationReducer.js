const initState = {
    locationData : [],
    isLocationDataLoaded : false,
    locationErrors: null
}

const dailyForecastReducer = (state = initState , action ) => {
    
     switch (action.type) {
         case "SEARCH_LOCATION":
             return {
                 ...state,
                 locationData: action.locationData,
                 isLocationDataLoaded: true,
                 locationErrors: null
             };
         case "SEARCH_LOCATION_ERR":
             return {
                 ...state,
                 locationData:[],
                 isLocationDataLoaded: false,
                 locationErrors: action.err
             };
         default:
             return state;
     }
    
}

export default dailyForecastReducer;