"use client";

import React, { useState } from "react";
import { FiTrash2, FiEdit3 } from "react-icons/fi";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Box,
} from "@mui/material";

const BillingInformation: React.FC = () => {
  const [billingData, setBillingData] = useState([
    { id: 1, name: "Oliver Liam", company: "Look Design", email: "company@company.fr", vat: "FR9864983" },
    { id: 2, name: "Emma Smith", company: "Creative Studio", email: "emma@creativestudio.com", vat: "FR5623789" },
    { id: 3, name: "John Doe", company: "Tech Solutions", email: "john@techsolutions.com", vat: "FR2457896" },
  ]);

  const [editingItem, setEditingItem] = useState<{ id: number; name: string; company: string; email: string; vat: string; } | null>(null);
  const [formData, setFormData] = useState({ id: 0, name: "", company: "", email: "", vat: "" });

  const handleDelete = (id: number) => {
    setBillingData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleEdit = (item: { id: number; name: string; company: string; email: string; vat: string; }) => {
    setEditingItem(item);
    setFormData(item);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setBillingData((prevData) => prevData.map((item) => (item.id === editingItem?.id ? formData : item)));
    setEditingItem(null);
  };

  return (
    <Box
      className="scrollbar-thin"
      sx={{
        width: "510px",
        minHeight: "200px",
        maxHeight: "80vh",
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
        padding: "30px",
       // position: "fixed",  // Keeps the card in place without moving
        top: "400px",  // Adjust this value to fit within the layout
        alignSelf: "start",  // Ensures it doesn't overlap other content
        overflowY: "auto",
        marginLeft: "auto",  // Pushes it to the right
        marginRight: "51.5%",  // Adjust to control the exact right positioning
      }}
      
    >
      <Stack spacing={3}>
        <Typography variant="h6" fontWeight="bold">
          Billing Information
        </Typography>

        {billingData.length === 0 ? (
          <Typography color="textSecondary" align="center">
            No billing information available.
          </Typography>
        ) : (
          billingData.map((billing) => (
            <Card key={billing.id} sx={{ boxShadow: 2, borderRadius: "16px" }}>
              <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "16px" }}>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {billing.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Company: <strong>{billing.company}</strong>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: <strong>{billing.email}</strong>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    VAT: <strong>{billing.vat}</strong>
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <IconButton onClick={() => handleEdit(billing)} color="primary">
                    <FiEdit3 size={20} />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(billing.id)} color="error">
                    <FiTrash2 size={20} />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          ))
        )}

        <Dialog open={!!editingItem} onClose={() => setEditingItem(null)}>
          <DialogTitle>Edit Billing Info</DialogTitle>
          <DialogContent>
            <Stack spacing={2} mt={1}>
              <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
              <TextField label="Company" name="company" value={formData.company} onChange={handleChange} fullWidth />
              <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
              <TextField label="VAT" name="vat" value={formData.vat} onChange={handleChange} fullWidth />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditingItem(null)} color="error">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </Box>
  );
};

export default BillingInformation;
