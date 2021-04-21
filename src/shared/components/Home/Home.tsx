import React, { memo } from 'react';

import { areEqualShallow } from 'Utils/equalityChecks';
import { EarthQuakeTable } from 'Containers/EarthQuakeTable';
import classes from './home.module.css';

interface Props {
  title: any;
  features: any[];
  sort: (e: any) => void;
  anchorClick: (e: any) => void;
}
const Home = memo(
  ({ title, features, sort, anchorClick }: Props) => (
    <div className={classes.container}>
      <div className={`${classes.centerTitle} ${classes.centered}`}>
        <label className={classes.title}>{title}</label>
      </div>
      <EarthQuakeTable rows={features} sort={sort} anchorClick={anchorClick} />
    </div>
  ),
  areEqualShallow
);

export default Home;
