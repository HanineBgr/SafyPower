"use client";

import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Switch,
  FormControlLabel,
} from "@mui/material";
import "../../styles/globals.css";

const ProfileCard: React.FC = () => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  return (
    <>
      <Card sx={{ bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 3, maxWidth: "500px", height: "180px", mx: "auto", ml: 30 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={2}>
              <img src="/assets/logos/logo.png" alt="Logo" width={48} height={48} />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Hanine Bouguerra
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  bouguerrahanine4@gmail.com
                </Typography>
              </Box>
            </Box>
            <IconButton size="small">
              <FaPen className="text-gray-500" />
            </IconButton>
          </Box>

          <Box display="flex" mt={3} gap={2}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setShowSettingsModal(true)}
              sx={{ borderRadius: "50px" }}
            >
              Profile settings
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setShowInfoModal(true)}
              sx={{ borderRadius: "50px" }}
            >
              Profile information
            </Button>
          </Box>
        </CardContent>
      </Card>

      
    </>
  );
};

export default ProfileCard;
