import React, { useState } from "react";
import SinglePlan from "./../../../Components/Essential/SinglePlan";
import AddPlan from "./../../../Components/Essential/AddPlan";
import SubscriptionAddModal from "./../../../Components/Essential/SubscriptionAddModal";

const SinglePlanData = [
  {
    id: 1,
    mainColor: "#6611E0",
    mainColor2: "#7d57df",
    mainColor3: "#a58fe0",
    mainColor4: "#c5b0e0",
    title: "Premium",
    price: "$9.99/Month",
    description: "Can Upload Unlimited Video",
  },
  {
    id: 2,
    mainColor: "#FFC60B",
    mainColor2: "#FFE89D",
    mainColor3: "#FFF4CE",
    mainColor4: "#FFFAE7",
    title: "Free",
    price: "Free",
    description: "Can Upload 3 Video",
  },
];

const SubscriptionPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl ">
      <div className="p-[30px]">
        <h1 className="text-3xl font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[30px]">
          Subscription plan
        </h1>
        <div className="flex gap-5 mt-10">
          {SinglePlanData.map((plan) => (
            <SinglePlan key={plan.id} plan={plan} />
          ))}
          <AddPlan showModal={showModal} />
          <SubscriptionAddModal handleCancel={handleCancel} isModalOpen={isModalOpen} />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
