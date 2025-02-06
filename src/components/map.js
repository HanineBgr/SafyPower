import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "250px", // Reduced height
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start", // Align content at the top
  backgroundColor: "#fff",
  padding: "16px", // Slightly reduced padding
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  marginTop: "20px",
  width: "100%",
  maxWidth: "300px", // Reduced width
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
          textAlign: "left", // Align text to the left
          fontSize: "16px",
          color: "#333",
          marginBottom: "10px",
          fontWeight: "600",
          width: "100%", // Ensures the title spans the width of the container
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
