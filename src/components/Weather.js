import React from 'react';

const Weather = props => (
  <div>
    <div>
      {props.city && props.country && <h4>Location: {props.city}, {props.country}</h4>}
      {props.temp && <h4>Tempature: {props.temp}</h4>}
      {props.humidity && <h4>Humidity: {props.humidity}</h4>}
      {props.description && <h4>Conditions: {props.description}</h4>}
      {props.error && <h4>Error: {props.error}</h4>}
    </div>
  </div>
)

export default Weather;
