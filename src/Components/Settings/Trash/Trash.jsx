import { Pagination } from "antd";
import React from "react";
import TrushCard from "./TrushCard";

const Trash = () => {
  return (
    <div>
      <div className="">
        <div className="h-[610px] overflow-y-scroll">
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
          <TrushCard />
        </div>
        <div className="flex border-t-[1px] pt-5 border-primary justify-between">
          <div>
            <p className="text-primary text-lg font-medium font-['Montserrat']">
              Showing 1-10 OF 250
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <Pagination
              className="text-primary font-['Montserrat']"
              defaultCurrent={1}
              total={200}
              showQuickJumper={false}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trash;
