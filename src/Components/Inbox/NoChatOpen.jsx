import React from "react";

function NoChatOpen() {
  return (
    <div className="mt-[24px] bg-secondary border-[1px]  h-[780px] w-full rounded-2xl">
      <div className="p-[30px]">
        {/* here show not open chat */}

        <div className="my-[304px]">
          <p className="text-center text-lg font-['Montserrat'] font-semibold">
            No chat open
          </p>
          <p className="text-center text-lg font-['Montserrat'] font-semibold">
            Click Message List to start a new conversation
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoChatOpen;
