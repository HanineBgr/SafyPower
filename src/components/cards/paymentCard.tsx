"use client";

import React from "react";
import { FaPen } from "react-icons/fa";
import { Card, CardContent, Grid, Box, Typography, IconButton } from "@mui/material";

const PaymentCards: React.FC = () => {
  return (
    <Card sx={{ bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 3, mx: "auto", width: "550px" }}>
      <CardContent>
        <Grid container spacing={2}>
          {/* Mastercard */}
          <Grid item xs={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bgcolor="#f4f9ff"
              p={2}
              borderRadius={1}
              boxShadow={1}
              height={48}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <img src="/assets/cards/mastercard.png" alt="Mastercard" style={{ width: 20, height: 12 }} />
                <Typography variant="body2" fontWeight="medium" color="textSecondary">
                  **** **** **90 1289
                </Typography>
              </Box>
              <IconButton size="small">
                <FaPen className="text-gray-500 text-sm" />
              </IconButton>
            </Box>
          </Grid>

          {/* Visa */}
          <Grid item xs={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bgcolor="#f4f9ff"
              p={2}
              borderRadius={1}
              boxShadow={1}
              height={48}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <img src="/assets/cards/visa.png" alt="Visa" style={{ width: 20, height: 12 }} />
                <Typography variant="body2" fontWeight="medium" color="textSecondary">
                  **** **** **90 1289
                </Typography>
              </Box>
              <IconButton size="small">
                <FaPen className="text-gray-500 text-sm" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PaymentCards;
