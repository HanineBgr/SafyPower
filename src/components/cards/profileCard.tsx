"use client";

import React from "react";
import Sidebar from "../../components/layout/sidebar";
import ProfileCard from "../../components/cards/profileCard";
import InvoicesCard from "../../components/cards/invoicesCard";
import FeedbackSection from "../../components/cards/Feedback";
import BillingInfo from "@/components/cards/BillingInfo";

const ProfileScreen = () => {
  return (
    <div className="flex h-screen bg-[#e0efff] overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 h-full overflow-auto scrollbar-hide">
        {/* Top Section: Profile Card and Invoices */}
        <div className="grid grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="col-span-2 -ml-40">
            <ProfileCard />
          </div>

          {/* Invoices Card  */}
          <div className="ml-[-20px]">
            <InvoicesCard />
          </div>
        </div>

        {/* Feedback Section moved under the Invoices Card */}
        <div className="mt-6 flex justify-end">
          <div className="w-[600px]">
            <FeedbackSection />
          </div>
        </div>

        <div className="mt-6">
          <BillingInfo />
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
