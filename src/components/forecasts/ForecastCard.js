import React from 'react';

const ForecastCard = (props) => {
  const { forecast } = props;
  return(
   <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
      <div className="card" id="forecastCard">           
        <div className="card-body">            
          <i className="wi icon-accu01">{forecast.WeatherIcon}</i>
          <h1 className="apparent-temperature">
            {forecast.ApparentTemperature.Metric.Value} &deg; C
          </h1>     
          <h5 className="weather-text">{forecast.WeatherText}</h5>
        </div>
      </div>
    </div>
  )
};

export default ForecastCard;