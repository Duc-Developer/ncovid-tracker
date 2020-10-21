import React from "react";
import { Row, Col } from "antd";
import { PageHeader, Button } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export default function HomePage() {
  return (
    <div className="home-page">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={{ span: 16 }} xs={{ span: 24 }}>
          <PageHeader
            ghost={false}
            title={<Title level={3}>NCOVID TRACKER</Title>}
            extra={[
              <Button key="2">Select field</Button>,
              <Button key="1" type="primary">
                More infor
              </Button>,
            ]}
          >
            <Row gutter={[8, 8]}>
              <Col span={24}>list box infor</Col>
              <Col span={24}>map</Col>
            </Row>
          </PageHeader>
        </Col>
        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
          <Row gutter={[8, 8]}>
            <Col span={24}>list case country</Col>
            <Col span={24}>Chart</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
