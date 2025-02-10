import React, { useState } from "react";
import { FiTrash2, FiEdit3 } from "react-icons/fi";

const BillingInformation = () => {
  const [billingData, setBillingData] = useState([
    { id: 1, name: "Oliver Liam", company: "Look Design", email: "company@company.fr", vat: "FR9864983" },
    { id: 2, name: "Emma Smith", company: "Creative Studio", email: "emma@creativestudio.com", vat: "FR5623789" },
    { id: 3, name: "John Doe", company: "Tech Solutions", email: "john@techsolutions.com", vat: "FR2457896" },
  ]);

  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", vat: "" });

  const handleDelete = (id) => {
    setBillingData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setBillingData(billingData.map(item => (item.id === editingItem.id ? formData : item)));
    setEditingItem(null);
  };

  return (
    <div 
      style={{
        backgroundColor: "white",
        padding: "16px",  
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  
        borderRadius: "12px",  
        width: "180%",  
        maxWidth: "1400px",  
        margin: "0 auto",  
        paddingLeft: "32px",  
        paddingRight: "32px",  
        position: "relative", 
      }}
    > 
      <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>Billing Information</h2>

      <div 
        className="scrollbar-thin"
        style={{ 
          maxHeight: "300px",
          overflowY: "auto",
          overflowX: "hidden",
          paddingRight: "8px",
          width: "100%",
          position: "relative",
        }}
      >
        {billingData.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6B7280", fontSize: "14px" }}>
            No billing information available.
          </p>
        ) : (
          billingData.map((billing) => (
            <div
              key={billing.id}
              style={{
                padding: "16px",
                backgroundColor: "#EFF6FF",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "8px",
                position: "relative",
                zIndex: "1",
              }}
            >
              <div>
                <h3 style={{ fontSize: "14px", fontWeight: "bold" }}>{billing.name}</h3>
                <p style={{ fontSize: "14px", color: "#4B5563" }}>
                  Company name: <span style={{ fontWeight: "500" }}>{billing.company}</span>
                </p>
                <p style={{ fontSize: "14px", color: "#4B5563" }}>
                  Email: <span style={{ fontWeight: "500" }}>{billing.email}</span>
                </p>
                <p style={{ fontSize: "14px", color: "#4B5563" }}>
                  VAT Number: <span style={{ fontWeight: "500" }}>{billing.vat}</span>
                </p>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <FiEdit3 
                  style={{ fontSize: "20px", color: "#6B7280", cursor: "pointer", transition: "color 0.2s" }} 
                  onMouseOver={(e) => (e.target.style.color = "#374151")}
                  onMouseOut={(e) => (e.target.style.color = "#6B7280")}
                  onClick={() => handleEdit(billing)}
                />
                <FiTrash2 
                  style={{ fontSize: "20px", color: "#EF4444", cursor: "pointer", transition: "color 0.2s" }} 
                  onMouseOver={(e) => (e.target.style.color = "#B91C1C")}
                  onMouseOut={(e) => (e.target.style.color = "#EF4444")}
                  onClick={() => handleDelete(billing.id)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {editingItem && (
        <div 
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#f0f8ff",
            padding: "24px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
            borderRadius: "12px",
            zIndex: "10",
            width: "320px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>Edit Billing Info</h3>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-4/5 mb-2 p-2 border rounded-full bg-transparent focus:outline-none text-center" />
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="w-4/5 mb-2 p-2 border rounded-full bg-transparent focus:outline-none text-center" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-4/5 mb-2 p-2 border rounded-full bg-transparent focus:outline-none text-center" />
            <input type="text" name="vat" value={formData.vat} onChange={handleChange} placeholder="VAT Number" className="w-4/5 mb-2 p-2 border rounded-full bg-transparent focus:outline-none text-center" />
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "6px" }}>
            <button onClick={() => setEditingItem(null)} style={{ backgroundColor: "#E5E7EB", padding: "6px 10px", borderRadius: "14px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>Cancel</button>
            <button onClick={handleSave} style={{ backgroundColor: "#3B82F6", color: "white", padding: "6px 10px", borderRadius: "14px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillingInformation;
