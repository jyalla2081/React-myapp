import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  //   const items = this.props.items;
  //   const itemSize = this.props.countPerPage;
  const { items, countPerPage, onPageClick, activePage } = props;

  const pagesCnt = Math.ceil(items / countPerPage);
  if (pagesCnt === 1) return "";
  const pages = _.range(1, pagesCnt + 1);

  return (
    <ul className="pagination">
      {pages.map((x) => (
        <li
          key={x}
          className={activePage === x ? "page-item active" : "page-item"}
        >
          <button className="page-link" onClick={() => onPageClick(x)}>
            {x}
          </button>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  items: propTypes.number.isRequired,
  countPerPage: propTypes.number.isRequired,
  onPageClick: propTypes.func.isRequired,
  activePage: propTypes.number.isRequired,
};

export default Pagination;
