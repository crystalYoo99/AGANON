import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import { setUseProxies } from "immer";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: -18.14161,
      lng: 178.44149
    };
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API_KEY
})(MapContainer);
