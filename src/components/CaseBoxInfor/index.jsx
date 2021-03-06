import React from "react";
import PropTypes from "prop-types";

CaseBoxInfor.propTypes = {
  title: PropTypes.string,
  primaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
  type: PropTypes.oneOf(["safe", "danger"]),
};

CaseBoxInfor.defaultProps = {
  title: "Title",
  primaryText: "+2000",
  subTitle: "8.8m",
  active: false,
  type: "danger",
};

function formatNumber(number) {
  let str = JSON.stringify(number);
  return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export default function CaseBoxInfor(props) {
  const { title, primaryText, subTitle, active, type } = props;
  return (
    <div className={`case-box-infor ${active ? "case-box-infor--active" : ""}`}>
      <ul>
        <li className="case-box-infor__text--white">{title}</li>
        <li
          className={`
        ${type === "danger" ? " case-box-infor__text--red " : ""}
        ${type === "safe" ? "case-box-infor__text--green" : ""}
        `}
        >
          {`+${formatNumber(primaryText)}`}
        </li>
        <li className="case-box-infor__sub-title case-box-infor__text--white">
          {formatNumber(subTitle)}
        </li>
      </ul>
    </div>
  );
}
