"use client";

import React from "react";
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const data = [
  { day: "Mon", visits: 80 },
  { day: "Tue", visits: 72 },
  { day: "Wed", visits: 64 },
  { day: "Thu", visits: 50 },
  { day: "Fri", visits: 20 },
  { day: "Sat", visits: 60 },
  { day: "Sun", visits: 45 },
];

// Custom tooltip
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          bgcolor: "white",
          p: 1,
          boxShadow: 3,
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {`${payload[0].value} visits`}
      </Box>
    );
  }
  return null;
};

const TotalVisitsChart: React.FC = () => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        width: "350px", // Fixed Width
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
        <Typography variant="subtitle1" fontWeight="bold">
          Total Visits
        </Typography>

        {/* Chart Container */}
        <Box sx={{ width: "100%", height: "85%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis
                dataKey="day"
                stroke="#888"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                stroke="#888"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 10 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="visits"
                stroke="#FF73C0"
                strokeWidth={2}
                fill="url(#colorGradient)"
                dot={{ r: 4, stroke: "#FF73C0", strokeWidth: 2, fill: "white" }}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7B61FF" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#FF73C0" stopOpacity={0.1} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalVisitsChart;
