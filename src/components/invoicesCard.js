import React, { useEffect, useState } from "react";
import { FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../styles/globals.css";

const InvoicesCard = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    setDates([...Array(10)].map(() => new Date().toLocaleString()));
  }, []);

  const handleDownloadPDF = (invoiceId, amount) => {
    const doc = new jsPDF();
    const today = new Date().toLocaleString();

    // Header
    doc.setFontSize(22);
    doc.setTextColor("#333");
    doc.text("Bike Charging Invoice", 14, 20);
    doc.setFontSize(12);
    doc.setTextColor("#555");
    doc.text("Station Name: EcoCharge Station", 14, 28);
    doc.text("Address: Rue 104, City, France", 14, 34);
    doc.text("Email: support@ecocharge.com | Phone: +33 234 567 890", 14, 40);

    // Invoice Title and Details
    doc.setFontSize(18);
    doc.setTextColor("#333");
    doc.text("Invoice", 14, 55);
    doc.setFontSize(12);
    doc.setTextColor("#555");
    doc.text(`Invoice ID: ${invoiceId}`, 14, 65);
    doc.text(`Date: ${today}`, 14, 71);
    doc.text(`Amount: $${amount}`, 14, 77);

    doc.autoTable({
      startY: 85,
      head: [["Charge ID", "Bike ID", "Duration (Hours)", "Rate (per Hour)", "Total"]],
      body: [
        ["CHG001", "BIKE001", "2", `$${amount / 4}`, `$${amount / 2}`],
        ["CHG002", "BIKE002", "1", `$${amount / 4}`, `$${amount / 4}`],
      ],
      headStyles: {
        fillColor: "#007BFF",
        textColor: "#FFFFFF",
      },
      bodyStyles: {
        textColor: "#333",
      },
    });

    const finalY = doc.lastAutoTable.finalY || 100;
    doc.setFontSize(10);
    doc.setTextColor("#555");
    doc.text("Thank you for using EcoCharge Station!", 14, finalY + 10);
    doc.text("For inquiries, contact support@ecocharge.com.", 14, finalY + 16);

    doc.save(`Invoice_${invoiceId}.pdf`);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-xl w-full max-w-[170rem]">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-bold">Invoices</h2>
        <button className="border border-black rounded-full px-2 py-1 text-xs">
          View all
        </button>
      </div>

      <div
        className="mt-4 max-h-[5rem] overflow-y-hidden hover:overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 rounded-md pr-6"
      >
        {[...Array(10)].map((_, i) => {
          const invoiceId = `INV-${i + 1}`;
          const amount = 1000 * (i + 1);

          return (
            <div key={i} className="flex flex-col py-2 border-b">
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600">Date: {dates[i] || "Loading..."}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-800 font-medium">$ {amount}</span>
                  <button
                    onClick={() => handleDownloadPDF(invoiceId, amount)}
                    className="text-blue-600 text-xs font-medium flex items-center gap-1"
                  >
                    <FaPrint className="text-xs" /> PDF
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500">ID: {invoiceId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InvoicesCard;
