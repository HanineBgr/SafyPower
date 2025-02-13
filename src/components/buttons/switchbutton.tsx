"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button, Menu, MenuItem } from "@mui/material"; // implementing the material ui components

type ChangeStationButtonProps = {
  stations: string[];
  onStationChange: (station: string) => void;
  className?: string;
};

const ChangeStationButton: React.FC<ChangeStationButtonProps> = ({
  stations,
  onStationChange,
  className = "",
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedStation, setSelectedStation] = useState<string>(stations[0]);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStationSelect = (station: string) => {
    setSelectedStation(station);
    onStationChange(station);
    handleClose();
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        endIcon={<ChevronDown size={16} />}
        sx={{
          borderRadius: 20, 
          paddingX: 3,
          paddingY: 0.5,
          textTransform: "none",
          fontWeight: "bold",
          boxShadow: 2,
        }}
      >
        {selectedStation}
      </Button>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {stations.map((station) => (
          <MenuItem key={station} onClick={() => handleStationSelect(station)}>
            {station}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ChangeStationButton;
