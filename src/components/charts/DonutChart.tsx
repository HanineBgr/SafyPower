"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const data = [
  { name: "In use", value: 30, color: "#FF698A" },
  { name: "Available", value: 70, color: "#57B7FB" },
];

const StationUsagePieChart: React.FC = () => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        width: "280px", // Fixed width
        height: "280px", // Fixed height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
      }}
      role="img"
      aria-label="Pie chart showing current station usage: In use 30%, Available 70%"
    >
      <CardContent sx={{ width: "100%", height: "100%", p: 0, textAlign: "center" }}>
        {/* Title */}
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Current Station Usage
        </Typography>

        {/* Pie Chart Container */}
        <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={85}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                cornerRadius={20}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text (Total Usage) */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              100%
            </Typography>
          </Box>
        </Box>

        {/* Legend */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
          {data.map((item) => (
            <Box key={item.name} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: item.color }} />
              <Typography variant="caption" color="text.secondary">
                {`${item.value}% ${item.name}`}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StationUsagePieChart;
