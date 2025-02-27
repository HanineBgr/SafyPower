"use client";

import React, { useEffect, useState } from "react";
import { FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Box,
  Paper,
} from "@mui/material";
import "../../styles/globals.css";

const InvoicesCard: React.FC = () => {
  const [dates, setDates] = useState<string[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    setDates([...Array(10)].map(() => new Date().toLocaleString()));
  }, []);

  const handleDownloadPDF = (invoiceId: string, amount: number): void => {
    const doc = new jsPDF();
    const today = new Date().toLocaleString();

    const logoUrl = "/assets/logos/logo.png"; 

    const img = new Image();
    img.src = logoUrl;
    img.onload = () => {
      doc.addImage(img, "PNG", 180, 10, 20, 20); 

      // Header
      doc.setFontSize(22);
      doc.setTextColor("#333");
      doc.text("Bike Charging Invoice", 14, 20);

      doc.setFontSize(12);
      doc.setTextColor("#555");
      doc.text("Station Name: SafyPower Station", 14, 30);
      doc.text("Address: Rue 104, Paris, France", 14, 36);
      doc.text("Email: Hello@safypower.fr | Phone: 01.42.71.91.34", 14, 42);

      // Invoice Details
      doc.setFontSize(18);
      doc.setTextColor("#333");
      doc.text("Invoice Details", 14, 55);

      doc.setFontSize(12);
      doc.setTextColor("#555");
      doc.text(`Invoice ID: ${invoiceId}`, 14, 65);
      doc.text(`Date: ${today}`, 14, 71);
      doc.text(`Total Amount: $${amount}`, 14, 77);

      // Table
      (doc as any).autoTable({
        startY: 90,
        head: [["Description", "Quantity", "Unit Price", "Total"]],
        body: [["Bike Charging Session", "1", `$${amount}`, `$${amount}`]],
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
        headStyles: { fillColor: [50, 50, 50], textColor: 255 },
        alternateRowStyles: { fillColor: [240, 240, 240] },
      });

      const finalY = (doc as any).autoTable.previous.finalY + 20;
      doc.setFontSize(10);
      doc.setTextColor("#555");
      doc.text("Thank you for using SafyPower Station!", 14, finalY);
      doc.text("For inquiries, contact Hello@safypower.fr.", 14, finalY + 6);

      doc.save(`Invoice_${invoiceId}.pdf`);
    };
  };

  return (
    <Card
      sx={{
        bgcolor: "white",
        p: 3,
        boxShadow: 3,
        borderRadius: 3,
        maxWidth: "2000px",
        width: "150%",
        maxHeight: "180px",
        ml: -24,
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Invoices
          </Typography>
          <Button
            onClick={() => setShowAll(true)}
            variant="outlined"
            sx={{ borderRadius: "50px", fontSize: "0.75rem", px: 2, py: 0.5 }}
          >
            View all
          </Button>
        </Box>

        <Paper
          elevation={0}
          className="scrollbar-thin"
          sx={{
            mt: 2,
            maxHeight: "5rem",
            overflowY: "hidden",
            "&:hover": { overflowY: "auto" },
            borderRadius: 2,
            p: 1,
          }}
        >
          {[...Array(10)].map((_, i) => {
            const invoiceId = `INV-${i + 1}`;
            const amount = 1000 * (i + 1);

            return (
              <Box key={i} py={1} borderBottom="1px solid #e0e0e0">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="body2" color="textSecondary">
                    Date: {dates[i] || "Loading..."}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="body2" fontWeight="medium">
                      ${amount}
                    </Typography>
                    <IconButton
                      onClick={() => handleDownloadPDF(invoiceId, amount)}
                      color="primary"
                      size="small"
                    >
                      <FaPrint size={14} />
                    </IconButton>
                  </Box>
                </Box>
                <Typography variant="caption" color="textSecondary">
                  ID: {invoiceId}
                </Typography>
              </Box>
            );
          })}
        </Paper>
      </CardContent>
    </Card>
  );
};

export default InvoicesCard;
