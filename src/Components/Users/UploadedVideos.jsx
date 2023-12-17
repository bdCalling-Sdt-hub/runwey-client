import React, { useEffect } from "react";
import baseAxios from "../../../Config";
import { Button, Modal, Table } from "antd";

function UploadedVideos({record}) {
    console.log(record?._id)

    const [data, setData] = React.useState([]);

    useEffect(() => {
        baseAxios.get(`/api/contents/contents-by-creator/${record?._id}`).then((res) => {
            setData(res?.data?.data?.attributes?.videos);
            console.log(res?.data?.data?.attributes?.videos)
        })
    },[record?._id])

    
  return (
    <>
      <div
        className="flex justify-between"
        style={{ alignItems: "center", marginBottom: "10px" }}
      >
        <video
          width={50}
          className=" h-[50px]   bg-zinc-800 rounded-lg "
          src={data[0]?.videoPath}
          onClick={() => showVideo()}
        ></video>
        <h4>Sheath Weeding gown</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            width="15"
            height="10"
            src="https://img.icons8.com/ios/50/clock--v1.png"
            alt="clock--v1"
          />
          <h1>0:10s</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            width="15"
            height="10"
            src="https://img.icons8.com/ios-filled/50/like--v1.png"
            alt="like--v1"
          />

          <h1>6k</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            width="15"
            height="24"
            src="https://img.icons8.com/material-outlined/24/visible--v1.png"
            alt="visible--v1"
          />
          <h1>6k</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/fluency/48/star--v1.png"
            alt="star--v1"
          />
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/fluency/48/star--v1.png"
            alt="star--v1"
          />
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/fluency/48/star--v1.png"
            alt="star--v1"
          />
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/fluency/48/star--v1.png"
            alt="star--v1"
          />
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/fluency/48/star--v1.png"
            alt="star--v1"
          />
        </div>
        <Button danger>Delete</Button>
      </div>
    </>
  );
}

export default UploadedVideos;
