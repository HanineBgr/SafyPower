"use client";

import React from "react";
import { Bell, Settings } from "lucide-react";
import { AppBar, Toolbar, Typography, IconButton, Box, Badge } from "@mui/material";

interface TopBlueBarProps {
  onBellClick: () => void;
}

const TopBlueBar: React.FC<TopBlueBarProps> = ({ onBellClick }) => {
  const handleSettingsClick = () => {
    alert("Settings clicked!");
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#B2DFFC", 
        mx: "auto",
        mt: 2,
        borderRadius: 2,
        width: "85%",
        maxWidth: "1400px",
        boxShadow: 3,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          SafyPower
        </Typography>

        <Box display="flex" gap={2}>
          {/* Settings Icon */}
          <IconButton onClick={handleSettingsClick} color="default">
            <Settings />
          </IconButton>

          {/* Bell Icon with Notification Dot */}
          <IconButton onClick={onBellClick} color="default">
            <Badge variant="dot" color="error">
              <Bell />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBlueBar;
