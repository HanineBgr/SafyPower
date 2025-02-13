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

const UsedStationsChart: React.FC = () => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        width: "300px", // Fixed Width
        height: "280px", // Fixed Height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        mx: "auto",
      }}
    >
      <CardContent sx={{ width: "100%", height: "100%", p: 0 }}>
        {/* Title Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" px={1} pb={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            Stations in use
          </Typography>
          <Typography variant="body2" color="textSecondary">
            per hour
          </Typography>
        </Box>

        {/* Chart Container */}
        <Box sx={{ width: "100%", height: "85%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <XAxis dataKey="time" tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#ddd",
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: "4px 8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="stations" fill="#FF698A" barSize={12} radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UsedStationsChart;
