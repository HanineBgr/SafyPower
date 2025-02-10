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

      <div className="flex-1 p-8 overflow-auto scrollbar-thin">
        {/* Top Section: Profile Card and Invoices */}
        <div className="grid grid-cols-3 gap-4">
          {/* Profile Card */}
          <div className="col-span-2 -ml-36">
            <ProfileCard />
          </div>

          {/* Invoices Card */}
          <div
            className="-ml-56"
            style={{
              width: "582px", 
            }}
          >
            <InvoicesCard />
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-6 -ml-[500px]">
          <PaymentCards />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-6 relative">
          {/* Billing Information */}
          <div className="ml-20">
            <BillingInfo />
          </div>

          {/* Feedback Section */}
          <div className="absolute right-8 -mt-24">
            <FeedbackSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
