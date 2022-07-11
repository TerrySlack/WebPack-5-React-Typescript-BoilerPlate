import React, { memo } from "react";

import { areEqual } from "Utils/equalityChecks";
import classes from "./home.module.css";

interface Props {
  title: any;
}
export const Home = memo(
  ({ title }: Props) => (
    <div className={classes.container}>
      <div className={`${classes.centerTitle} ${classes.centered}`}>
        <label className={classes.title}>{title}</label>
      </div>
    </div>
  ),
  areEqual
);
