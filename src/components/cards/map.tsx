"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Paper, Typography, Box } from "@mui/material";

const containerStyle = {
  width: "100%", 
  height: "250px",
  borderRadius: "12px",
  overflow: "hidden",
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

const MapComponent: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 2,
        mt: 2.5, 
        width: "100%",
        maxWidth: 340, 
        height: "313px",
        boxShadow: 3,
        ml: 0.5, 
      }}
    >
      <Typography
        variant="h6"
        fontWeight="600"
        color="textPrimary"
        sx={{ width: "100%", mb: 1, textAlign: "left" }}
      >
        Maps
      </Typography>

      <Box sx={{ width: "100%", borderRadius: 2, overflow: "hidden" }}>
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} options={mapOptions}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Box>
    </Paper>
  );
};

export default MapComponent;
