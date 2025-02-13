"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import "../../styles/globals.css";

type User = {
  id: string;
  startTime: string;
  endTime: string;
  chargingTime: string;
  rating: number;
};

const userData: User[] = [
  { id: "12345", startTime: "10:00 AM", endTime: "12:00 PM", chargingTime: "2 hours", rating: 4 },
  { id: "67890", startTime: "1:00 PM", endTime: "3:00 PM", chargingTime: "2 hours", rating: 3 },
  { id: "11223", startTime: "5:00 PM", endTime: "7:00 PM", chargingTime: "2 hours", rating: 5 },
  { id: "33445", startTime: "8:00 PM", endTime: "10:00 PM", chargingTime: "2 hours", rating: 4 },
  { id: "55678", startTime: "11:00 PM", endTime: "1:00 AM", chargingTime: "2 hours", rating: 3 },
];

const renderStars = (rating: number) => {
  return [...Array(5)].map((_, i) => (
    <FaStar key={i} size={15} color={i < rating ? "#FFD700" : "#D3D3D3"} />
  ));
};

const TrackingUser: React.FC = () => {
  return (
    <Card sx={{ p: 3, bgcolor: "white", boxShadow: 3, borderRadius: 3, maxWidth: "100%", mx: "auto" }}>
      <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
        Individual User Tracking
      </Typography>

      {/* Scrollable Table directly inside the Card */}
      <TableContainer
        className="scrollbar-thin"
        sx={{
          maxHeight: "225px",
          overflowY: "auto",
          borderRadius: 2,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "gray" }}>User ID</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "gray" }}>Start Time</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "gray" }}>End Time</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "gray", textAlign: "center" }}>Charging Time</TableCell>
              <TableCell sx={{ fontWeight: "bold", color: "gray" }}>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user, index) => (
              <TableRow key={index} hover>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.startTime}</TableCell>
                <TableCell>{user.endTime}</TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      bgcolor: "transparent",
                      fontWeight: "medium",
                    }}
                  >
                    {user.chargingTime}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex">{renderStars(user.rating)}</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default TrackingUser;
