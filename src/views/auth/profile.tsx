"use client";

import React from "react";
import Sidebar from "../../components/layout/sidebar";
import ProfileCard from "../../components/cards/profileCard";
import InvoicesCard from "../../components/cards/invoicesCard";
import FeedbackSection from "../../components/cards/Feedback";
import BillingInfo from "../../components/cards/BillingInfo";
import PaymentCards from "../../components/cards/paymentCard";

const ProfileScreen = () => {
  return (
    <div className="flex h-screen bg-[#e0efff]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        {/* Top Section: Profile Card and Invoices */}
        <div className="grid grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="col-span-2 -ml-40"> 
            <ProfileCard />
          </div>
          {/* Invoices Card */}
          <div>
            <InvoicesCard />
          </div>
        </div>
        {/* Payment Methods Section */}
        <div className="mt-6 -ml-[505px]"> {/* Line 30: Adjusted margin-left to extreme left */}
          <PaymentCards />
        </div>
        {/* Bottom Section: Billing Info and Feedback */}
        <div className="mt-6 grid grid-cols-3 gap-6">
          {/* Billing Information */}
          <div className="col-span-2">
            <BillingInfo />
          </div>
          {/* Feedback Section */}
          <div>
            <FeedbackSection />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileScreen;