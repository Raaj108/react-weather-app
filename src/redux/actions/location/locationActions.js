import axios from 'axios';

export const searchLocation = (loc) => {    
    return (dispatch, getState) => {
        const apiKey = "w3TQWTWIt6r6NOmXceDvGH5CvcD2JEfY";
        const url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + apiKey + "&q=" + loc;
        axios.get(url)
            .then(res => {                
                dispatch({
                    type: "SEARCH_LOCATION",
                    locationData : res.data
                })
            }).catch(err => {                
                dispatch({
                    type: "SEARCH_LOCATION_ERR",
                    err
                })
            })
    }
}



