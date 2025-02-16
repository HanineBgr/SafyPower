"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, IconButton } from "@mui/material";
import { BarChart2, User, MessageCircle, BatteryCharging } from "lucide-react";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const currentPath = usePathname();

  // Function to check if the current path matches the button path
  const isActive = (path: string) => currentPath === path;

  return (
    <Box
      sx={{
        width: "64px", // Fixed width
        height: "90vh", // Fixed height
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        borderRadius: 3,
        boxShadow: 3,
        position: "fixed",
        top: "24px",
        left: "16px",
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 4, mt: 2 }}>
        <img src="/assets/logos/logo.png" alt="Logo" width={48} height={48} />
      </Box>

      {/* Sidebar Buttons */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
        {/* Dashboard/Home */}
        <IconButton
          onClick={() => router.push("/home")}
          sx={{
            bgcolor: isActive("/home") ? "#fedd69" : "#f5f5f5",
            boxShadow: 2,
            "&:hover": { bgcolor: "#fedd69" },
          }}
        >
          <BarChart2 size={18} color={isActive("/home") ? "#222" : "#666"} />
        </IconButton>

        {/* Profile Page */}
        <IconButton
          onClick={() => router.push("/profile")}
          sx={{
            bgcolor: isActive("/profile") ? "#fedd69" : "#f5f5f5",
            boxShadow: 2,
            "&:hover": { bgcolor: "#fedd69" },
          }}
        >
          <User size={18} color={isActive("/profile") ? "#222" : "#666"} />
        </IconButton>

        {/* Contact Form */}
        <IconButton
          onClick={() => router.push("/auth/contactForm")}
          sx={{
            bgcolor: isActive("/auth/contactForm") ? "#fedd69" : "#f5f5f5",
            boxShadow: 2,
            "&:hover": { bgcolor: "#fedd69" },
          }}
        >
          <MessageCircle size={18} color={isActive("/auth/contactForm") ? "#222" : "#666"} />
        </IconButton>

        {/* Security Page */}
        <IconButton
          onClick={() => router.push("/security")}
          sx={{
            bgcolor: isActive("/security") ? "#fedd69" : "#f5f5f5",
            boxShadow: 2,
            "&:hover": { bgcolor: "#fedd69" },
          }}
        >
          <BatteryCharging size={18} color={isActive("/security") ? "#222" : "#666"} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
