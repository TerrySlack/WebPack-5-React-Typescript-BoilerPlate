import React, { memo } from "react";
import { areEqual } from "../../utils/equalityChecks";
import "./searchbox.styles.scss";

interface Props {
  placeholder: string;
  handleChange?: (e: any) => void;
}
const SearchBox = function ({ placeholder, handleChange }: Props) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
SearchBox.defaultProps = {
  handleChange: undefined,
};

const SearchBoxMemo = memo(SearchBox, areEqual);

export { SearchBoxMemo as SearchBox };
