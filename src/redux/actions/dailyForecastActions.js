import axios from 'axios';

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
                type: "FETCH_DAILY_FORECAST_ERR",
                err
            })
        })
    }
}
