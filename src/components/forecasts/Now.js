import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentForecast } from '../../redux/actions/forecasts/forecastActions';
import ForecastCard from './ForecastCard';
import WeatherConditionsCard from './WeatherConditionsCard';

const Now = (props) => {  
  
  console.log(props)
  const{ forecast , isLocationLoaded} = props;
  const locKey = props.match.params.key;
    
  useEffect(()=>{
    props.fetchCurrentForecast(locKey);
   
  },[isLocationLoaded])
  
  return (
     (forecast.isforecastDataLoaded) ? (
      <div className="row mt-4 mb-4">
        <ForecastCard forecast={forecast.forecastData[0]}></ForecastCard>     
        <WeatherConditionsCard forecast={forecast.forecastData[0]}></WeatherConditionsCard>     
      </div>
    ) : (
      <div className="mt-4 mb-4">Loading...</div>
    ) 
  )
}


const mapStateToProps = (state) => { 
  
    return {
      forecast: state.forecast,
      isLocationLoaded: state.location.isLocationDataLoaded
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentForecast : (location) =>  {dispatch(fetchCurrentForecast(location))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Now);