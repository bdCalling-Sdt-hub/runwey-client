import React, { useState } from 'react'
import { Col, Divider, Row } from 'antd';
import { FaPeopleGroup } from "react-icons/fa6";
import UsersTable from '../../../Components/Users/UsersTable';
import { Input, Radio, Space } from 'antd';
import "./User.css"
const style = {

  padding: '8px 20px',

  color: "white",
  borderRadius: "10px",
  lineHeight: "35px"

};
const AllUsers = () => {

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const datas = [
    {
      users: "Total users",
      count: 1234
    },
    {
      users: "Regular users",
      count: 2564
    },
    {
      users: "Standard package users",
      count: 1000
    },
    {
      users: "Premium package users",
      count: 1500
    }
  ]
  return (
    <>
      <div className="flex flex-col mt-[24px] h-[800px]">
        <Row gutter={16} style={{ marginBottom: "20px" }}>
          {
            datas.map((data) => {
              return (
                <Col className="gutter-row" span={6}>
                  <div className='bg-primary' style={style}>
                    <div style={{}}>
                      <FaPeopleGroup style={{ fontSize: "25px" }} />
                    </div>

                    <h4 style={{ fontSize: "20px" }}>{data.users} users</h4>
                    <h2 style={{ fontSize: "25px", fontWeight: 500 }}>{data.count}</h2>
                  </div>
                </Col>
              )
            })
          }

        </Row>

        <div style={{ display: "flex" }}>
          <UsersTable />

          <div className="w-[350px]" style={{ marginLeft: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "15px", border: "1px solid #e0cff9" }}>
            <h1 style={{ fontWeight: 700, color: "#6611e0", borderBottom: "1px solid #6611e0", paddingBottom: "30px", marginBottom: "10px" }}>Filter</h1>
            <h6 style={{ fontSize: "15px", fontWeight: 500, marginBottom: "10px" }}>Package Categories</h6>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1} className="custom-radio">All</Radio>
                <Radio value={2} className="custom-radio">Regular</Radio>
                <Radio value={3} className="custom-radio">Standard</Radio>
                <Radio value={4} className="custom-radio">Premium</Radio>

              </Space>
            </Radio.Group>

          </div>
        </div>



      </div>


    </>

  )
}

export default AllUsers