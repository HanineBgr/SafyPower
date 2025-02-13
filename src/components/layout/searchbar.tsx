"use client";

import React from "react";
import { Search } from "lucide-react";
import { TextField, InputAdornment, Box } from "@mui/material";

const SearchBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "350px", // Fixed Width
        height: "40px", // Fixed Height
        bgcolor: "white",
        borderRadius: "50px",
        boxShadow: 2,
        mx: "auto",
      }}
    >
      <TextField
        fullWidth
        placeholder="Search something..."
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            paddingLeft: "8px",
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "14px",
            color: "#555",
            padding: "8px 10px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ccc",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "2px solid #57B7FB",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search size={16} color="#777" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
