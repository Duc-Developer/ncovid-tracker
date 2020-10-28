import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { PageHeader, Button } from "antd";
import { Typography } from "antd";
import CountrySelectField from "../../components/CountrySelectField";
import Axios from "../../api/axios";

const { Title } = Typography;

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [countryCurrent, setCountryCurrent] = useState("all");
  useEffect(() => {
    async function getData() {
      const dataCountries = await Axios.get("countries").then(
        (res) => res.data
      );
      setCountries(dataCountries);
    }
    getData();
  }, [countries.length]);

  function handleOptionValue(value) {
    console.log(value);
  }

  return (
    <div className="home-page">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={{ span: 16 }} xs={{ span: 24 }}>
          <PageHeader
            ghost={false}
            title={<Title level={3}>NCOVID TRACKER</Title>}
            extra={[
              <CountrySelectField 
              getValue={(value) => {handleOptionValue(value)}} 
              options={countries} 
              key="2" 
              />,
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
