"use client";

import React from "react";
import Sidebar from "../../components/layout/sidebar";
import ProfileCard from "../../components/cards/profileCard";
import InvoicesCard from "../../components/cards/invoicesCard";
import FeedbackSection from "../../components/cards/Feedback";
import BillingInfo from "../../components/cards/BillingInfo";
import PaymentCards from "../../components/cards/paymentCard";

const ProfileScreen: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#e0efff]">
      {/* Sidebar */}
      <Sidebar />

      <div className="absolute top-8 left-1000px] w-[1200px]"> 
        {/* Top Section: Profile Card and Invoices */}
        <div className="flex justify-between w-full">
          {/* Profile Card */}
          <div className="w-[900px] h-[180px]">
            <ProfileCard />
          </div>

          {/* Invoices Card */}
          <div className="w-[600px] h-[50px]">
            <InvoicesCard />
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-6 w-full flex justify-between absolute top-[220px]">
          <PaymentCards />
        </div>

        {/* Billing & Feedback Section */}
        <div className="mt-6 flex w-full justify-between absolute top-[320px]">
          {/* Billing Information */}
          <div className="w-[700px] h-[220px]">
            <BillingInfo />
          </div>

          {/* Feedback Section */}
          <div className="w-[580px] h-[220px]">
            <FeedbackSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
