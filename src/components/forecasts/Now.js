import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentForecast } from '../../redux/actions/forecasts/forecastActions';

const Now = (props) => {  
  
  console.log(props)
  const{ forecast , isLocationLoaded} = props;
  const locKey = props.match.params.key;
    
  useEffect(()=>{
    props.fetchCurrentForecast(locKey);
   
  },[isLocationLoaded])
  
  const forecastCard = (forecast.isforecastDataLoaded) ? (
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
 
  return (
    <div>     
      {forecastCard}
    </div>
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