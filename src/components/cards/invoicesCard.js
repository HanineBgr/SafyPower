import React, { useEffect, useState } from "react";
import { FaPrint } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../../styles/globals.css";

const InvoicesCard = () => {
  const [dates, setDates] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setDates([...Array(10)].map(() => new Date().toLocaleString()));
  }, []);

  const handleDownloadPDF = (invoiceId, amount) => {
    const doc = new jsPDF();
    const today = new Date().toLocaleString();

    doc.setFontSize(22);
    doc.setTextColor("#333");
    doc.text("Bike Charging Invoice", 14, 20);
    doc.setFontSize(12);
    doc.setTextColor("#555");
    doc.text("Station Name: EcoCharge Station", 14, 28);
    doc.text("Address: Rue 104, City, France", 14, 34);
    doc.text("Email: support@ecocharge.com | Phone: +33 234 567 890", 14, 40);

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
      headStyles: { fillColor: "#007BFF", textColor: "#FFFFFF" },
      bodyStyles: { textColor: "#333" },
    });

    const finalY = doc.lastAutoTable.finalY || 100;
    doc.setFontSize(10);
    doc.setTextColor("#555");
    doc.text("Thank you for using EcoCharge Station!", 14, finalY + 10);
    doc.text("For inquiries, contact support@ecocharge.com.", 14, finalY + 16);

    doc.save(`Invoice_${invoiceId}.pdf`);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-xl w-full max-w-[170rem] relative">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-bold">Invoices</h2>
        <button 
          onClick={() => setShowAll(true)} 
          className="border border-black rounded-full px-2 py-1 text-xs"
        >
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

      {showAll && (
        <>
          {/* BACKDROP TO PREVENT INTERACTION */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40" 
            onClick={() => setShowAll(false)}
          ></div>

          {/* MODAL FOR FULL INVOICE LIST */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">All Invoices</h2>
                <button
                  onClick={() => setShowAll(false)}
                  className="text-red-600 text-xs font-bold"
                >
                  Close ✖
                </button>
              </div>

              <div className="max-h-[30rem] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 rounded-md pr-4">
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
          </div>
        </>
      )}
    </div>
  );
};

export default InvoicesCard;
