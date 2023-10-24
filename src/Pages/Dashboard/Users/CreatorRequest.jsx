import React from 'react'
import { Col, Divider, Row, Button, Space, Badge } from 'antd';
import { Pagination } from 'antd';
const style = {
  background: '#fff',
  padding: '20px 10px',
  border: "1px solid #e0cff9",
  borderRadius: "10px",
  display: "flex"
};

const CreatorRequest = () => {
  return (
    <div style={{padding:"10px 0px 20px 10px",border:"1px solid #6611e0",borderRadius:"20px",marginTop:"20px",marginRight:"10px",height:"780px"}}>
        <h1 style={{fontSize:"25px",fontWeight:"bold",color:"#6611e0",borderBottom:"2px solid #6611e0",paddingBottom:"10px"}}>Pending Content Creator Requests <span><Badge count={30} style={{backgroundColor:"#6611e0"}}></Badge></span> </h1>
      <Row gutter={16} style={{ marginTop: "20px",overflow:"scroll",height:"600px",marginRight:"10px"}}>
      
        {
          [...Array(160).keys()].map(() => {
            return (
              <Col className="gutter-row" span={6} style={{marginBottom:"20px"}}>
                <div style={style}>
                  <div style={{ marginRight: "10px" }}>
                    <img style={{ height: "60px", width: "60px", borderRadius: "100%" }} src='https://img.freepik.com/premium-photo/captivating-smile-radiant-young-indian-model-showcases-perfect-dental-care_983420-9652.jpg' />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: "20px", fontSize: "15px", fontWeight: 500 }}>Alissa wants to be a content creator</h4>
                    <div style={{ display: "flex" }}>
                      <Button style={{ marginRight: "10px", border: "1px solid #6611e0", color: "#6611e0", fontWeight: "bold", padding: "0px 30px" }}>Cancel</Button>

                      <Button style={{ marginRight: "10px", backgroundColor: "#6611e0", border: "1px solid #6611e0", color: "#fff", fontWeight: "bold", padding: "0px 30px" }}>Accept</Button>

                    </div>
                  </div>
                </div>
              </Col>
            )
          })}


      </Row>
      <Divider style={{backgroundColor:"#6611e0"}} />
      <Row>
      <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={16}
      defaultCurrent={1}
    />
      </Row>
    </div>
  )
}

export default CreatorRequest