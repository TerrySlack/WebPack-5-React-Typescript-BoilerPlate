import React, { memo } from "react";
import { areEqual } from "Utils/equalityChecks";
import classes from "./weatherForecastTable.module.css";

interface Props {
  forecasts: any;
}

export const WeatherForecastTable = memo(
  ({ forecasts }: Props) => (
    <div className={`${classes.tableContainer} ${classes.centered}`}>
      <table className={classes.table}>
        <thead>
          <tr>
            <td className={classes.theadCellPadding}>Test</td>
          </tr>
        </thead>
        <tbody>
          <tr data-key={1} className={classes.cursor} key={1}>
            <td className={classes.leftAligned}>test Row</td>
          </tr>
          {forecasts.map(({ date, temperature, summary }) => (
            <tr data-key={date} className={classes.cursor} key={date}>
              <td
                className={classes.leftAligned}
                key={`${date}-${temperature}`}
              >
                {summary}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  areEqual
);
