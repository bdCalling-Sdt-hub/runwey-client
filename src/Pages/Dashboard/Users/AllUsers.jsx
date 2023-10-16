import React from 'react'
import { Col, Divider, Row } from 'antd';
import {FaPeopleGroup} from "react-icons/fa6";

const style = {
  
  padding: '8px 0',
};
const AllUsers = () => {
  return (
    <div style={{marginTop:20}}>
      <Row gutter={16}>
       <Col className="gutter-row" span={6}>
        <div className='bg-primary' style={style}>
             
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className='bg-primary' style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className='bg-primary' style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className='bg-primary' style={style}>col-6</div>
      </Col>
       </Row>
    </div>
  )
}

export default AllUsers