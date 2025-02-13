"use client";

import React from "react";
import { BarChart2, User, MessageCircle, BatteryCharging } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Box, IconButton } from "@mui/material";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const isActive = (path: string) => currentPath === path;

  return (
    <Box
      sx={{
        width: "64px", // Fixed Width
        height: "90vh", // Fixed Height
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

        <IconButton
          onClick={() => router.push("/auth/profile")}
          sx={{
            bgcolor: isActive("/auth/profile") ? "#fedd69" : "#f5f5f5",
            boxShadow: 2,
            "&:hover": { bgcolor: "#fedd69" },
          }}
        >
          <User size={18} color={isActive("/auth/profile") ? "#222" : "#666"} />
        </IconButton>

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
