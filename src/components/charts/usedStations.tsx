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
        p: 1, 
        borderRadius: 3,
        boxShadow: 3,
        width: "550px", 
        height: "230px", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
      }}
    >
      <CardContent sx={{ width: "100%", height: "100%", p: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" px={1} pb={1}>
          <Typography variant="subtitle2" fontWeight="bold">
            Available Stations
          </Typography>
          <Typography variant="body2" color="textSecondary">
            per hour
          </Typography>
        </Box>

        <Box sx={{ width: "100%", height: "90%" }}> 
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 5, left: -20, bottom: 2 }}> 
              <XAxis dataKey="time" tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#ddd",
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: "2px 8px",
                  fontSize: "10px",
                }}
              />
              <Bar dataKey="stations" fill="#FF698A" barSize={12} radius={[8, 8, 8, 8]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AvailableStationsChart;
