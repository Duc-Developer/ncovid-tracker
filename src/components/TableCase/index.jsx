import React from "react";
import PropTypes from "prop-types";
import { Table, Pagination } from "antd";

TableCase.propTypes = {
    countries: PropTypes.array
}

const columns = [
  {
    title: <b style={{ fontSize: "1.2em" }}>Country</b>,
    dataIndex: "country",
    key: "country",
    render: (text) => (
      <b style={{ color: "#4169E1", cursor: "pointer" }}>{text}</b>
    ),
  },
  {
    title: <b style={{ fontSize: "1.2em" }}>Cases</b>,
    dataIndex: "cases",
    key: "cases",
    render: (text) => <span style={{ color: "#CC1034" }}>{text}</span>,
  },
];

export default function TableCase({ countries }) {
  const data = countries.map((country) => {
    return {
      key: country.country,
      country: country.country,
      cases: country.cases,
    };
  });
  return (
    <Table
      pagination={<Pagination size="small" />}
      columns={columns}
      dataSource={data}
    />
  );
}
