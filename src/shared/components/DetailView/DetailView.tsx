import React, { memo } from 'react';

import { areEqualShallow } from 'Utils/equalityChecks';
import getDateFromMilliseconds from 'Utils/dates';
import classes from './detailView.module.css';

interface Props {
  title: string;
  mag: number;
  time: number;
  status: string;
  tsunami: number;
  type: string;
}
const DetailView = memo(
  ({ title, mag, time, status, tsunami, type }: Props) => (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <label className={`${classes.title}`}>{title}</label>
      </div>
      <div className={classes.row}>
        <div className={classes.col1}>
          <label className={classes.label}>Title</label>
        </div>
        <div className={classes.col2}>
          <label className={classes.value}>{title}</label>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col1}>
          <label className={classes.label}>Magnitude</label>
        </div>
        <div className={classes.col2}>
          <label className={classes.value}>{mag}</label>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col1}>
          <label className={classes.label}>time</label>
        </div>
        <div className={classes.col2}>
          <label className={classes.value}>{getDateFromMilliseconds(time)}</label>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col1}>
          <label className={classes.label}>status</label>
        </div>
        <div className={classes.col2}>
          <label className={classes.value}>{status}</label>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col1}>
          <label className={classes.label}>tsunami</label>
        </div>
        <div className={classes.col2}>
          <label className={classes.value}>{tsunami}</label>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col1}>
          <label className={classes.label}>type</label>
        </div>
        <div className={classes.col2}>
          <label className={classes.value}>{type}</label>
        </div>
      </div>
    </div>
  ),
  areEqualShallow
);

export default DetailView;
