import React, { memo } from 'react';

import getDateFromMilliseconds from 'Utils/dates';
import { areEqual } from 'Utils/equalityChecks';
import Anchor from 'Containers/Anchor';
import classes from './earthQuakeTable.module.css';

interface Props {
  rows: any;
  sort: (e: any) => void;
  anchorClick: (e: any) => void;
  visitedAnchors: any;
}

const EarthQuakeTable = memo(
  ({ rows, sort, anchorClick, visitedAnchors = {} }: Props) => (
    <div className={`${classes.tableContainer} ${classes.centered}`}>
      <table className={classes.table}>
        <thead>
          <tr>
            <td className={classes.theadCellPadding}>
              <Anchor href="/" className={classes.header} onClick={sort} dataKey="place" visited={false}>
                Title
              </Anchor>
            </td>
            <td className={classes.theadCellPadding}>
              <Anchor href="/" className={classes.header} onClick={sort} dataKey="mag" visited={false}>
                Magnitude
              </Anchor>
            </td>
            <td className={classes.theadCellPadding}>
              <Anchor href="/" className={classes.header} onClick={sort} dataKey="time" visited={false}>
                Time
              </Anchor>
            </td>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ properties: { place, mag, time }, id }, index: number) => {
            const visited = visitedAnchors[id];
            return (
              <tr data-key={id} className={classes.cursor} key={`${place}-${index.toString()}`}>
                <td className={classes.leftAligned} key={place}>
                  <Anchor
                    className={`${classes.place}`}
                    onClick={anchorClick}
                    href="/"
                    visited={visited?.length > 0}
                    id={id}
                    dataKey={id}
                  >
                    {place}
                  </Anchor>
                </td>
                <td className={classes.centered} key={`${place}-${mag.toString()}`}>
                  {mag}
                </td>
                <td className={classes.leftAligned} key={`${place}-${time.toString()}`}>
                  {getDateFromMilliseconds(time)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ),
  areEqual
);

export default EarthQuakeTable;
