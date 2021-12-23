import React, { memo } from "react";
import ReactPaginate from "react-paginate";
import { areEqual } from "../../utils/equalityChecks";

import "./pagination.styles.scss";

interface Props {
  initialPage: number;
  pageCount: number;
  onPageChange: (e: any) => void;
}

const Pagination = function ({ initialPage, pageCount, onPageChange }: Props) {
  return (
    <ReactPaginate
      containerClassName="pagination"
      pageClassName="pageItem"
      activeClassName="active"
      pageLinkClassName="pageLink"
      previousLabel={<div>ᐸ</div>}
      nextLabel={<div>ᐳ</div>}
      pageCount={pageCount}
      onPageChange={onPageChange}
      initialPage={initialPage}
      disableInitialCallback
    />
  );
};

const PaginationMemo = memo(Pagination, areEqual);

export { PaginationMemo as Pagination };
