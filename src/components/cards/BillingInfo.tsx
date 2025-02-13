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

type BillingInfo = {
  id: number;
  name: string;
  company: string;
  email: string;
  vat: string;
};

const BillingInformation: React.FC = () => {
  const [billingData, setBillingData] = useState<BillingInfo[]>([
    { id: 1, name: "Oliver Liam", company: "Look Design", email: "company@company.fr", vat: "FR9864983" },
    { id: 2, name: "Emma Smith", company: "Creative Studio", email: "emma@creativestudio.com", vat: "FR5623789" },
    { id: 3, name: "John Doe", company: "Tech Solutions", email: "john@techsolutions.com", vat: "FR2457896" },
  ]);

  const [editingItem, setEditingItem] = useState<BillingInfo | null>(null);
  const [formData, setFormData] = useState<BillingInfo>({ id: 0, name: "", company: "", email: "", vat: "" });

  const handleDelete = (id: number) => {
    setBillingData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleEdit = (item: BillingInfo) => {
    setEditingItem(item);
    setFormData(item);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setBillingData((prevData) => prevData.map((item) => (item.id === editingItem?.id ? formData : item)));
    setEditingItem(null);
  };

  return (
    <Box
      sx={{
        width: "600px", // Fixed width
        height: "500px", // Fixed height
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 3,
        padding: "24px",
        position: "absolute", // Centers it in the viewport
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
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
            <Card key={billing.id} sx={{ boxShadow: 2 }}>
              <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
      </Stack>

      {/* Edit Dialog */}
      <Dialog open={!!editingItem} onClose={() => setEditingItem(null)}>
        <DialogTitle>Edit Billing Info</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
            <TextField label="Company" name="company" value={formData.company} onChange={handleChange} fullWidth />
            <TextField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} fullWidth />
            <TextField label="VAT Number" name="vat" value={formData.vat} onChange={handleChange} fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditingItem(null)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BillingInformation;
