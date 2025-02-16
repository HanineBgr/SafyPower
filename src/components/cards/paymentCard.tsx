"use client";

import React from "react";
import { FaPen } from "react-icons/fa";
import { Card, CardContent, Grid, Box, Typography, IconButton } from "@mui/material";

const PaymentCards: React.FC = () => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        p: 2, 
        borderRadius: 2,
        boxShadow: 3,
        mx: "auto",
        width: "580px",
        height: 20, // Hauteur réduite de la carte
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ width: "100%", p: 0 }}>
        <Grid container spacing={1.5} alignItems="center" justifyContent="center">
          {["mastercard", "visa"].map((cardType, index) => (
            <Grid item xs={6} key={index} display="flex" justifyContent="center">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bgcolor="#f4f9ff"
                p={1} // Réduction du padding interne
                borderRadius={1}
                boxShadow={1}
                height={35} // Ajustement de la hauteur
                width="100%" // Largeur ajustée pour éviter le débordement
              >
                <Box display="flex" alignItems="center" gap={1.2}>
                  <img src={`/assets/cards/${cardType}.png`} alt={cardType} style={{ width: 18, height: 10 }} />
                  <Typography variant="body2" fontWeight="medium" color="textSecondary">
                    **** **90 1289
                  </Typography>
                </Box>
                <IconButton size="small">
                  <FaPen className="text-gray-500 text-xs" />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PaymentCards;
