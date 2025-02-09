import React from "react";
import Sidebar from "../../components/sidebar";
import ProfileCard from "../../components/profileCard";
import InvoicesCard from "../../components/invoicesCard";
import FeedbackSection from "../../components/Feedback";
import BillingInfo from "../../components/BillingInfo";
import PaymentCards from "../../components/paymentCard";

const ProfileScreen = () => {
  return (
    <div className="flex h-screen bg-[#e0efff]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content with Custom Scrollbar */}
      <div className="flex-1 p-8 overflow-auto scrollbar-thin">
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
        <div className="mt-6 -ml-[505px]">
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
