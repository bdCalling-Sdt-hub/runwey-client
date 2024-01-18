import React, { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import { FaPeopleGroup } from "react-icons/fa6";
import UsersTable from "../../../Components/Users/UsersTable";
import { Input, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./User.css";
import baseAxios from "../../../../Config";
import { SubscriptionData } from "../../../ReduxSlices/SubscriptionSlice";
import { AllUserData } from "../../../ReduxSlices/AllUserSlice";


const style = {
  padding: "8px 20px",
  color: "white",
  borderRadius: "10px",
  lineHeight: "35px",
};


const AllUsers = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const packageCategories = useSelector(
    (state) => state.SubscriptionData.SubscriptionList
  );
  
  const [allUserStatus, setAllUserStatus] = useState();
  const [allUser, setAllUser] = useState();
  console.log(allUser);

  const [value, setValue] = useState('all');
  const [page, setPage] = useState(1);
  const onChange = (e) => {
    baseAxios
    .get(`api/users/sort?search=${e.target.value}&page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setAllUser(res.data);
    })
    .catch((err) => {
      console.log(err);

      if(err.response.data.message === "Invalid token"){
        localStorage.removeItem("token");
        localStorage.removeItem("yourInfo");
      }
    });

    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    AllUserData
  },[])

  const onPageChange = (page) => {
    setPage(page);
    baseAxios
    .get(`api/users/sort?search=${value}&page=${page}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setAllUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
    baseAxios
      .get("api/users/details", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllUserStatus(res.data.data.attributes);
      })
      .catch((err) => {
        console.log(err);

        if(err.response.data.message === "Invalid token"){
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
      });
  }, []);

  useEffect(() => {
    baseAxios
      .get(`api/users/sort?search=${value}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllUser(res.data);
      })
      .catch((err) => {
        console.log(err);

        if(err.response.data.message === "Invalid token"){
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
      });
  }, []);

  useEffect(() => {
    let data = {
      page: 1,
    };
    dispatch(SubscriptionData(data));
  }, []);

  console.log(packageCategories)



  return (
    <>
      <div className="flex flex-col mt-[24px] h-[800px]">
        <Row gutter={16} style={{ marginBottom: "20px" }}>
          {allUserStatus?.map((data) => {
            return (
              <Col className="gutter-row" span={6}>
                <div className="bg-primary" style={style}>
                  <div style={{}}>
                    <FaPeopleGroup style={{ fontSize: "25px" }} />
                  </div>
                  <h4 style={{ fontSize: "20px" }}>{data.users}</h4>
                  <h2 style={{ fontSize: "25px", fontWeight: 500 }}>
                    {data.count}
                  </h2>
                </div>
              </Col>
            );
          })}
        </Row>

        <div style={{ display: "flex" }}>
          <UsersTable allUser={allUser}  onPageChange={onPageChange}/>

          <div
            className="w-[350px]"
            style={{
              marginLeft: "20px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              border: "1px solid #e0cff9",
            }}
          >
            <h1
              style={{
                fontWeight: 700,
                color: "#6611e0",
                borderBottom: "1px solid #6611e0",
                paddingBottom: "30px",
                marginBottom: "10px",
              }}
            >
              Filter
            </h1>
            <h6
              style={{
                fontSize: "15px",
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              Package Categories
            </h6>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={"all"} className="custom-radio">
                  All
                </Radio>
                {packageCategories?.map((data, index) => (
                  <Radio
                    key={data?.package?._id}
                    value={data?.package?.name}
                    className="custom-radio"
                  >
                    {data?.package?.name}
                  </Radio>
                ))}
                {/* <Radio value={"sfkld"} className="custom-radio">
                  Standard
                </Radio>
                <Radio value={4} className="custom-radio">
                  Premium
                </Radio> */}
              </Space>
            </Radio.Group>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
