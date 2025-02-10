import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "250px", 
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start", 
  backgroundColor: "#fff",
  padding: "16px", 
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  marginTop: "20px",
  width: "100%",
  maxWidth: "300px", 
  height: "auto",
};

const center = {
  lat: 48.8591191,
  lng: 2.3661147,
};

const mapOptions = {
  styles: [
    {
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#333333" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#dddddd" }],
    },
  ],
};

const MapComponent = () => {
  return (
    <div style={wrapperStyle}>
      <h2
        style={{
          textAlign: "left", 
          fontSize: "16px",
          color: "#333",
          marginBottom: "10px",
          fontWeight: "600",
          width: "100%", 
        }}
      >
        Maps
      </h2>
      <LoadScript googleMapsApiKey={"AIzaSyACDFOfGitDYcYTJtta4qiDiJZdaEcxhSc"}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={mapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
