import {Component} from 'react';
import React from 'react'
import ReactMapGL from 'react-map-gl';

class Map extends Component {

  state = {
    viewport: {
      width: 1500,
      height: 1000,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL         
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken='pk.eyJ1IjoiZHVka2lubW4iLCJhIjoiY2s1dmhyOWVoMHE4cDNrbzBnMzZla2cxciJ9.HmUvlYG3zbSoCth7HBzM_A'
      />
    );
  }
}
    


  export default Map;

