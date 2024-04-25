import { memo } from "react";

import { areEqual } from "Utils/equalityChecks";
import * as classes from "./home.module.css";

interface Props {
  title: any;
  onClick: () => void;
}
export const Home = memo(
  ({ title, onClick }: Props) => (
    <div className={classes.container}>
      <div className={`${classes.centerTitle} ${classes.centered}`}>
        <label className={classes.title}>{title}</label>
      </div>
      <div>
        <button type="button" className={classes.button} onClick={onClick}>
          Go to Other Route
        </button>
      </div>
    </div>
  ),
  areEqual
);
