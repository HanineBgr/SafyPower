"use client";

import React from "react";
import { Avatar, Typography, Box } from "@mui/material";

const ProfileSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 24, 
        right: 24, 
        display: "flex",
        alignItems: "center",
        gap: 1.5, 
      }}
    >
      <Box>
        <Typography variant="body2" fontWeight="bold" color="text.primary">
          Hanine Bouguerra
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Software Engineer
        </Typography>
      </Box>
      <Avatar
        src="/assets/profile.jpg"
        alt="Profile"
        sx={{ width: 32, height: 32 }}
      />
    </Box>
  );
};

export default ProfileSection;
