import React from "react";
import { imageUrl } from "../../lib/constant";

const SignleUser = ({ status, item, handleChat }) => {

  console.log(item?.message?.message)

  return (
    <div
      onClick={() => handleChat(item)}
      className={`{ ${
        status
          ? "bg-secondary flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
          : " flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
      } `}
    >
      <div>
        <img
          className="w-[60px] h-[60px] rounded-full"
          src={imageUrl + item?.chat?.userId?.image?.publicFileUrl}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-primary font-semibold font-['Montserrat'] text-lg">
          {item?.chat?.userId?.fullName}
        </h1>
        <p className="text-sm font-normal font-['Montserrat']">
          {item?.message?.message.slice(0, 11)} {item?.message?.message.length > 11 && "..."}
        </p>
      </div>
    </div>
  );
};

export default SignleUser;

// import React from "react";

// const SignleUser = ({ status,item }) => {
//   console.log(item?.message?.message);

//   return (
//     <div
//       className={`{ ${
//         status
//           ? "bg-secondary flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
//           : " flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
//       } `}
//     >
//       <div>
//         <img
//           className="w-[60px] h-[60px] rounded-full"
//           src={item?.chat?.participants[0]?.photo[0].publicFileUrl}
//           alt=""
//         />
//       </div>
//       <div>
//         <h1 className="text-primary font-semibold font-['Montserrat'] text-lg">
//           {item?.chat?.participants[0]?.name}
//         </h1>
//         <p className="text-sm font-normal font-['Montserrat']">
//     {item?.message?.message}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignleUser;
