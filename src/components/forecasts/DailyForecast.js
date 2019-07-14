import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDailyForecast } from '../../redux/actions/dailyForecastActions';

const DailyForecast = (props) => {    
    console.log(props)
    const{ dailyForecast, region } = props;
    
    useEffect(()=>{
        if(region.isLocationDataLoaded){
            const loactionKey = region.locationData[0].Key;
            props.fetchDailyForecast(loactionKey)
        }        
    },[region.isLocationDataLoaded]);    
    
    const forecastCard = (dailyForecast.isDailyForecastDataLoaded) ? (
      <div className="row mt-4 mb-4">
        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
          <div className="card">           
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>              
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="row mt-4 mb-4">Loading...</div>
    );
        
    const locationCard = (region.isLocationDataLoaded)? (
      <div id="location" className="row mt-4 mb-4">
        <div className="">
          <h5>{region.locationData[0].EnglishName}, {region.locationData[0].Country.EnglishName}</h5>
        </div>
      </div>
    ) : null
  
    return (
      <div>
        {locationCard}   
        {forecastCard}
      </div>
        
    )
}


const mapStateToProps = (state) => { 
  console.log(state)
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