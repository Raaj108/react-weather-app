import axios from 'axios';

export const fetchCurrentForecast = (locationKey) => {
  console.log(locationKey)
    return (dispatch, getState) => {
        const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
        const url = "http://dataservice.accuweather.com/currentconditions/v1/" + locationKey + "?apikey=" + apiKey + "&details=true"
        axios.get(url).then(res => { 
          console.log(res)
            dispatch({
                type: "FETCH_CURRENT_FORECAST",
                forecastData: res.data 
            })
        }).catch(err => {  
          console.log(err)
            dispatch({
                type: "FETCH_CURRENT_FORECAST_ERR",
                err
            })
        })
    }
}

export const fetchDailyForecast = (locationKey) => {
    return (dispatch, getState) => {
        const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
        const url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + locationKey + "?apikey=" + apiKey + "&details=true"
        axios.get(url).then(res => {           
            dispatch({
                type: "FETCH_DAILY_FORECAST",
                dailyForecastData: res.data 
            })
        }).catch(err => {           
            dispatch({
                type: "FETCH_FORECAST_ERR",
                err
            })
        })
    }
}
