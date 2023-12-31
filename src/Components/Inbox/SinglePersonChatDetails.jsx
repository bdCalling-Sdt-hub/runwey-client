import React, { useEffect, useRef, useState } from "react";

// let chat = [
//   {
//     id: 1,
//     sender: true,
//     image: "https://picsum.photos/200/300",
//     message:
//       "Lorem ipsum dolor sit amet, consectetur suspendisse pharetra odio. Lot sagittis facilisis magna quam vel.",
//     time: "1 hr ago",
//   },
//   {
//     id: 2,
//     sender: false,
//     image: "https://picsum.photos/200/300",
//     message: "Lorem ipsum dolor sit amet, consectetum vel.",
//     time: "1 hr ago",
//   },
//   {
//     id: 3,
//     sender: true,
//     image: "https://picsum.photos/200/300",
//     message:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus m vel.",
//     time: "1 hr ago",
//   },

//   {
//     id: 4,
//     sender: false,
//     image: "https://picsum.photos/200/300",
//     message:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus id molestie vitae id odio consequat. Consequat ac ultricies sit amet, lacinia ipsum. Aliquam non suspendisse pharetra odio. Lorem nulla ornare sed neque. Ullamcorper viverra felis eu pharetra faucibus. Adipiscing leo a mattis. Amet sagittis facilisis magna quam vel.",
//     time: "1 hr ago",
//   },

//   {
//     id: 5,
//     sender: true,
//     image: "https://picsum.photos/200/300",
//     message:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus id molestie vitae id odio consequat. Consequat ac ultricies sit amet, lacinia ipsum. Aliquam non suspendisse pharetra odio. Lorem nulla ornare sed neque. Ullamcorper viverra felis eu pharetra faucibus. Adipiscing leo a mattis. Amet sagittis facilisis magna quam vel.",
//     time: "1 hr ago",
//   },

//   {
//     id: 6,
//     sender: false,
//     image: "https://picsum.photos/200/300",
//     message:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus id molestie vitae id odio consequat. Consequat ac ultricies sit amet, lacinia ipsum. Aliquam non suspendisse pharetra odio. Lorem nulla ornare sed neque. Ullamcorper viverra felis eu pharetra faucibus. Adipiscing leo a mattis. Amet sagittis facilisis magna quam vel.",
//     time: "1 hr ago",
//   },
//   {
//     id: 7,
//     sender: true,
//     image: "https://picsum.photos/200/300",
//     message:
//       "Lorem ipsum dolor sit amet, cotis. Amet sagittis facilisis magna quam vel.",
//     time: "1 hr ago",
//   },
//   {
//     id: 8,
//     sender: false,
//     image: "https://picsum.photos/200/300",
//     message: "Lorem sagittis facilisis magna quam vel.",
//     time: "1 hr ago",
//   },
//   {
//     id: 9,
//     sender: true,
//     image: "https://picsum.photos/200/300",
//     message: "ok",
//     time: "just now",
//   },
// ];

const SinglePersonChatDetails = ({chat}) => {
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));
  const chatContainerRef = useRef(null);
  const sender = true;
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  console.log(chat);

  const messagesHandler = () => {
    if (messages) {
      chat.push({
        id: 10,
        sender: true,
        image: "https://picsum.photos/200/300",
        message: messages,
        time: "just now",
      });
      setMessages("");
    }
  };


  function getTimeAgo(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);

    const secondsAgo = Math.floor((now - date) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
    } else if (daysAgo > 0) {
      return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
    } else if (hoursAgo > 0) {
      return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
    } else if (minutesAgo > 0) {
      return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
    } else {
      return "just now";
    }
  }

  return (
    <div className="mt-[24px] border-secondary border-[1px] bg-white h-[780px] w-full rounded-2xl">
      <div className="p-[30px]">
        <h1 className="text-2xl font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[20px]">
          {chat?.data[0]?.sender?.fullName}
        </h1>
        <div ref={chatContainerRef} className=" h-[600px] overflow-y-scroll  ">
          {chat?.data?.map((c) =>
            c?.sender?._id === UserData?._id ? (
              <div className="flex flex-row-reverse gap-5  mt-[32px] mr-5 mb-5">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={c?.sender?.image?.publicFileUrl}
                  alt=""
                />
                <div className="flex flex-row-reverse gap-5 ">
                  <p className="max-w-[500px] bg-primary text-white border-[1px] border-secondary p-[20px] rounded-[10px] rounded-tr-none text-sm font-normal font-['Montserrat']">
                    {c?.message}
                  </p>
                  <p className="text-center my-auto text-zinc-400 text-sm font-normal font-['Montserrat']">
                  {getTimeAgo(c?.createdAt)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-5 mt-[32px] ml-5 mb-5">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={c?.sender?.image?.publicFileUrl}
                  alt=""
                />
                <div className="flex  gap-5 ">
                  <p className="max-w-[500px] border-[1px] border-secondary p-[24px] rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-normal font-['Montserrat']">
                    {c?.message}
                  </p>
                  <p className="text-center my-auto text-zinc-400 text-sm font-normal font-['Montserrat']">
                    {getTimeAgo(c?.createdAt)}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex  gap-2">
          <input
            onChange={(e) => setMessages(e.target.value)}
            className="p-3 outline-primary border-[1px] border-secondary w-full rounded-[20px]"
            placeholder="Enter your message"
            type="text"
          />
          <svg
            onClick={messagesHandler}
            className=" cursor-pointer"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.50503 16.6818C7.85503 10.8468 13.8625 6.5618 19.17 9.0768L49.03 23.2218C54.75 25.9293 54.75 34.0693 49.03 36.7768L19.17 50.9243C13.8625 53.4393 7.85753 49.1543 8.50503 43.3193L9.70503 32.4993H30C30.6631 32.4993 31.299 32.2359 31.7678 31.7671C32.2366 31.2982 32.5 30.6623 32.5 29.9993C32.5 29.3363 32.2366 28.7004 31.7678 28.2315C31.299 27.7627 30.6631 27.4993 30 27.4993H9.70753L8.50753 16.6818H8.50503Z"
              fill="#6611E0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SinglePersonChatDetails;
