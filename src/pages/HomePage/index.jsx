import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { PageHeader, Button } from "antd";
import { Typography } from "antd";
import CountrySelectField from "../../components/CountrySelectField";
import Axios from "../../api/axios";
import CaseBoxInfor from "../../components/CaseBoxInfor";

const { Title } = Typography;

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [countryCurrent, setCountryCurrent] = useState("All");
  const [worldCase, setWorldCase] = useState({});

  useEffect(() => {
    async function getData() {
      const dataCountries = await Axios.get("countries").then(
        (res) => res.data
      );
      const dataCase = await Axios.get("all").then((res) => res.data);
      setWorldCase(dataCase);
      setCountries(dataCountries);
    }
    getData();
  }, [countries.length]);

  function handleOptionValue(value) {
    setCountryCurrent(value);
  }
console.log(countries[0])
  return (
    <div className="home-page">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col lg={{ span: 16 }} xs={{ span: 24 }}>
          <PageHeader
            ghost={false}
            title={
              <Title type="danger" level={3}>
                NCOVID TRACKER
              </Title>
            }
            extra={[
              <CountrySelectField
                getValue={(value) => {
                  handleOptionValue(value);
                }}
                options={countries}
                key="2"
              />,
              <Button key="1" type="primary">
                More infor
              </Button>,
            ]}
          >
            <Row gutter={[8, 8]}>
              {countryCurrent === "All" ? (
                <React.Fragment>
                  <Col md={8} xs={24}>
                    <CaseBoxInfor active title="Trường hợp nhiễm" primaryText={worldCase.todayCases} subTitle={worldCase.cases} />
                  </Col>
                  <Col md={8} xs={24}>
                    <CaseBoxInfor type="safe" title="Đã chữa khỏi" primaryText={worldCase.todayRecovered} subTitle={worldCase.recovered} />
                  </Col>
                  <Col md={8} xs={24}>
                    <CaseBoxInfor title="Tử vong" primaryText={worldCase.todayDeaths} subTitle={worldCase.deaths} />
                  </Col>
                </React.Fragment>
              ) : (
                countries.filter(item => item.countryInfo.iso2 === countryCurrent)
                .map(item => (
                  <React.Fragment key={item.country}>
                    <Col md={8} xs={24}>
                    <CaseBoxInfor active title="Trường hợp nhiễm" primaryText={item.todayCases} subTitle={item.cases} />
                  </Col>
                  <Col md={8} xs={24}>
                    <CaseBoxInfor type="safe" title="Đã chữa khỏi" primaryText={item.todayRecovered} subTitle={item.recovered} />
                  </Col>
                  <Col md={8} xs={24}>
                    <CaseBoxInfor title="Tử vong" primaryText={item.todayDeaths} subTitle={item.deaths} />
                  </Col>
                  </React.Fragment>
                ))
              )
            }
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
