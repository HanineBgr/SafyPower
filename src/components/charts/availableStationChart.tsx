"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const data = [
  { time: "7 am", stations: 5 },
  { time: "8 am", stations: 1 },
  { time: "9 am", stations: 2 },
  { time: "10 am", stations: 3 },
  { time: "11 am", stations: 4 },
  { time: "12 pm", stations: 1 },
  { time: "1 pm", stations: 5 },
];

const AvailableStationsChart: React.FC = () => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        width: "500px", 
        height: "300px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        mx: "auto", 
      }}
    >
      <CardContent sx={{ width: "100%", height: "100%" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" px={1} pb={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            Available Stations
          </Typography>
          <Typography variant="body2" color="textSecondary">
            per hour
          </Typography>
        </Box>

        <Box sx={{ width: "100%", height: "80%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
              <XAxis dataKey="time" tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#ddd",
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: "2px 12px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="stations" fill="#57B7FB" barSize={15} radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AvailableStationsChart;
