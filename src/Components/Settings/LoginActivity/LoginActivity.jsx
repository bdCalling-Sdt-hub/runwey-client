import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoginActivitys } from "../../../ReduxSlices/LoginActivitySlice";
import Swal from "sweetalert2";
import baseAxios from "../../../../Config";

const LoginActivity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoginActivitys());
  }, []);

  let token = localStorage.getItem("token");
  const { loginActivity } = useSelector((state) => state.LoginActivity);

  console.log(loginActivity?.data?.attributes);

  function formatDateString(inputDateString) {
    const inputDate = new Date(inputDateString);

    if (isNaN(inputDate)) {
      return "Invalid Date";
    }

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    let hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    if (hours > 12) {
      hours -= 12;
    }

    return `${day} ${month}, ${year}-${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}${ampm}`;
  }

  const handelSignOut = (id) => {
    Swal.fire({
      title: "Do you want to Sign Out this device?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        baseAxios.delete(`/api/activities/${id}`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });

        // page reload here
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire("Ok", "", "info");
      }
    });
  };

  const columns = [
    {
      title: "Browser",
      dataIndex: "browser",
      width: 150,
    },
    {
      title: "Device",
      dataIndex: "device",
      width: 160,
    },
    {
      title: "Time & Date",
      dataIndex: "timeAndDate",
      width: 150,
      render: (_, record) => (
        <div className="">{formatDateString(record?.createdAt)}</div>
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 150,
      responsive: ["lg"],
      render: (_, record) => (
        <div className="cursor-pointer">
          <div
            onClick={(e) => handelSignOut(record._id)}
            className="w-[71px] h-[22px] px-3 py-1 bg-pink-100 rounded justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-rose-600 text-[10px] font-normal font-['Poppins'] leading-[14px]">
              Sign Out
            </div>
          </div>
        </div>
      ),
    },
  ];



  return (
    <div className="w-[1350px]">
      <Table
        headerBg="red"
        className="mt-[32px] bg-white rounded-2xl"
        columns={columns}
        dataSource={loginActivity?.data?.attributes}
        scroll={{
          y: 500,
        }}
      />
    </div>
  );
};

export default LoginActivity;
