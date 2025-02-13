"use client";

import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Switch,
  Box,
} from "@mui/material";
import "../../styles/globals.css"; 

const ProfileCard: React.FC = () => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  return (
    <Card sx={{ bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 3, maxWidth: "500px", height: "170px", mx: "auto" }}>
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

      {/* Settings Dialog */}
      <Dialog open={showSettingsModal} onClose={() => setShowSettingsModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Platform Settings</DialogTitle>
        <DialogContent
          className="scrollbar-thin"
          sx={{
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Account
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body2">Email me when someone follows me.</Typography>
            <Switch />
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body2">Email me when someone answers my post.</Typography>
            <Switch />
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="body2">Email me when someone mentions me.</Typography>
            <Switch defaultChecked />
          </Box>

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Application
          </Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body2">New launches and projects.</Typography>
            <Switch />
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body2">Monthly product changes.</Typography>
            <Switch />
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">Subscribe to the newsletter.</Typography>
            <Switch defaultChecked />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSettingsModal(false)} variant="contained" color="primary" fullWidth>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Profile Info Dialog */}
      <Dialog open={showInfoModal} onClose={() => setShowInfoModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Profile Information</DialogTitle>
        <DialogContent>
          <Typography variant="body1" paragraph>
            Hi,
            <br />
            I am contacting you following the charging of my battery which failed due to a bad placement of the battery.
            I am checking the placement of the battery to avoid wasting time.
          </Typography>
          <Typography variant="body2">
            <strong>Fullname:</strong> Omar Hiopil
          </Typography>
          <Typography variant="body2">
            <strong>Mobile phone:</strong> +33 656 64 14 18
          </Typography>
          <Typography variant="body2">
            <strong>Email:</strong> omar.hip@gmail.fr
          </Typography>
          <Typography variant="body2">
            <strong>Address:</strong> 23 voie du succès 3000
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowInfoModal(false)} variant="contained" color="primary" fullWidth>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ProfileCard;
