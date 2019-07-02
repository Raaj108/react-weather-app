import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDailyForecast } from '../../redux/actions/dailyForecastActions';

const DailyForecast = (props) => {    
    console.log(props)
    const{ dailyForecast , region } = props;
    
    useEffect(()=>{
        if(region.isLocationDataLoaded){
            const loactionKey = region.locationData[0].Key;
            props.fetchDailyForecast(loactionKey)
        }        
    },[region.isLocationDataLoaded]);    
    
    return (
        <div>Daily Forecast</div>
    )
}

const mapStateToProps = (state) => {    
    return {
        dailyForecast : state.dailyForecast,
        region : state.location
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchDailyForecast : (location) =>  {dispatch(fetchDailyForecast(location))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyForecast);