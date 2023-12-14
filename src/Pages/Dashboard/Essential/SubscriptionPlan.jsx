import React, { useEffect, useState } from "react";
import SinglePlan from "./../../../Components/Essential/SinglePlan";
import AddPlan from "./../../../Components/Essential/AddPlan";
import SubscriptionAddModal from "./../../../Components/Essential/SubscriptionAddModal";
import { useDispatch, useSelector } from "react-redux";
import { SubscriptionData } from "../../../ReduxSlices/SubscriptionSlice";
import SubscriptionShowModal from "../../../Components/Essential/SubscriptionShowModal";
import baseAxios from "../../../../Config";

const SubscriptionPlan = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const data = useSelector((state) => state.SubscriptionData.SubscriptionList);
  const [reload, setReload] = useState(1);
  const [modalData, setModalData] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    let data = {
      page: 1,
    };
    dispatch(SubscriptionData(data));
  }, [reload]);


  const showModal = () => {
    setIsModalOpen(true);
  };

  const addModal = () => {
    setIsAddModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAddCancel = () => {
    setIsAddModalOpen(false);
  };


  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl ">
      <div className="p-[30px]">
        <h1 className="text-3xl font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[30px]">
          Subscription plan
        </h1>
        <div className="flex flex-wrap gap-5 mt-10">
          {data.map((plan) => (
            <SinglePlan
              setModalData={setModalData}
              showModal={showModal}
              key={plan._id}
              plan={plan}
            />
          ))}
          <AddPlan
            setModalData={setModalData}
            setReload={setReload}
            addModal={addModal}
          />
          <SubscriptionAddModal
            setReload={setReload}
            handleAddCancel={handleAddCancel}
            isAddModalOpen={isAddModalOpen}
          />
          <SubscriptionShowModal
            setModalData={setModalData}
            modalData={modalData}
            setReload={setReload}
            handleCancel={handleCancel}
            isModalOpen={isModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
