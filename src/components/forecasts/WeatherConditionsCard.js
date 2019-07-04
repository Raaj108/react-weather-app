import React from 'react';

const WeatherConditionsCard = (props) => {
  const { forecast } = props;
  return(
    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <div className="card" id="windCard">
        <div className="card-body">
          <p className="text2">Wind Direction: {forecast.Wind.Direction.English}</p>
          <p className=" text2">Wind Speed: {forecast.Wind.Speed.Metric.Value} {forecast.Wind.Speed.Metric.Unit}</p>
          <p className="text2">Wind Gust: {forecast.WindGust.Speed.Metric.Value} {forecast.WindGust.Speed.Metric.Unit}</p>
          <p className="text2">Humidity: {forecast.RelativeHumidity}%</p>
          <p className="text2">Pressure: {forecast.Pressure.Metric.Value} {forecast.Pressure.Metric.Unit}</p>
          <p className="text2">UV Index: {forecast.UVIndex} {forecast.UVIndexText}</p>
          <p className="text2">Cloud Cover: {forecast.CloudCover}%</p>
          <p className="text2">Ceiling: {forecast.Ceiling.Metric.Value} {forecast.Ceiling.Metric.Unit}</p>
          <p className="text2">Dew Point: {forecast.DewPoint.Metric.Value}&deg; {forecast.DewPoint.Metric.Unit}</p>
          <p className="text2">Visibility: {forecast.Visibility.Metric.Value} {forecast.Visibility.Metric.Unit}</p>
        </div>
      </div>
    </div>
  )
};

export default WeatherConditionsCard;