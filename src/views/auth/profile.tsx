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
          {/* Invoices Card moved slightly to the left */}
          <div className="ml-[-20px]">
            <InvoicesCard />
          </div>
        </div>

        {/* Feedback Section moved to the extreme right, slightly down and a bit more to the right */}
        <div className="mt-10 flex justify-end w-full ml-[-1px]">
          <div className="w-[1400px]">
            <FeedbackSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
