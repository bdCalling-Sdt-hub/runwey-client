import React, { useEffect } from "react";
import Status from "../../../Components/Common/Status";
import IncomeTable from "./../../../Components/Income/IncomeTable";
import { useDispatch, useSelector } from "react-redux";
import { TransactionData } from "../../../ReduxSlices/TransactionSlice";

const Daily = () => {
  const [reload, setReload] = React.useState(1);
  const dispatch = useDispatch();
  const incomeData = useSelector((state) => state.TransactionData.TransactionList);

  

  useEffect(() => {
    let data = {
      page: 1,
    };
    dispatch(TransactionData(data));
  }, [reload]);

  console.log(incomeData);
  
  return (
    <div className="flex flex-col mt-[24px] h-[800px]">
      <Status />
      <div className="mt-[24px]">
        <IncomeTable incomeData={incomeData} />
      </div>
    </div>
  );
};

export default Daily;
