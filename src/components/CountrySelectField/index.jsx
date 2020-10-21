import React from "react";
import PropTypes from "prop-types";
import { Select, Typography } from "antd";
import { Spin } from "antd";

const { Option } = Select;
const { Text } = Typography;

CountrySelectField.propTypes = {
  fieldWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  options: PropTypes.array,
  getValue: PropTypes.func,
};

CountrySelectField.defaultProps = {
  fieldWidth: 200,
  options: [],
  getValue: () => {},
};

export default function CountrySelectField(props) {
  const { fieldWidth, options, getValue } = props;
  function onChange(value) {
    getValue(value);
  }

  function onSearch(val) {}

  return (
    <Select
      showSearch
      style={{ width: fieldWidth }}
      placeholder="Select a country"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) => {
        // lấy giá trị child của thẻ Text nằm trong thẻ Option
        const countryName = option.children[1].props.children;
        // Trả về giá trị input phù hợp với name country
        return countryName.toLowerCase().indexOf(input.toLowerCase()) !== -1;
      }}
    >
      {options.length === 0 ? (
        <Option>
          <Spin />
        </Option>
      ) : (
        options.map((option) => (
          <Option key={option.countryInfo._id} value={option.countryInfo.iso2}>
            <img
              style={{ width: "24px", marginRight: "5px" }}
              src={option.countryInfo.flag}
              alt={option.countryInfo.iso3}
            />
            <Text>{option.country}</Text>
          </Option>
        ))
      )}
    </Select>
  );
}
