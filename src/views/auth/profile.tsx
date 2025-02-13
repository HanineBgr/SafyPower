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

      <div className="flex-1 p-8 overflow-auto scrollbar-thin">
        {/* Top Section: Profile Card and Invoices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-2">
            <ProfileCard />
          </div>

          {/* Invoices Card */}
          <div className="md:w-[582px] md:ml-auto">
            <InvoicesCard />
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-6 flex justify-center md:justify-start">
          <PaymentCards />
        </div>

        {/* Billing & Feedback Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Billing Information */}
          <div className="md:ml-8">
            <BillingInfo />
          </div>

          {/* Feedback Section */}
          <div className="md:ml-auto">
            <FeedbackSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
