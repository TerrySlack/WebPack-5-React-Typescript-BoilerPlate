import { memo } from "react";
import { useTimer } from "@mainframework/timer/react";

import { isEqual } from "@mainframework/is-deep-equal";
import * as classes from "./home.module.css";

interface Props {
  title: string;
  onClick: () => void;
}
export const Home = memo(({ title, onClick }: Props) => {
  const secondsLeft = useTimer(5);
  const secondsElapsed = useTimer(0, undefined, "up");
  console.log(`secondsLeft ${secondsLeft}
    secondsElapsed ${secondsElapsed}
    `);
  return (
    <div className={classes.container}>
      <div className={`${classes.centerTitle} ${classes.centered}`}>
        <label className={classes.title}>{title}</label>
      </div>
      <div>
        <span className="text-zinc-100">{secondsLeft} s</span>
        <span className="text-zinc-100">{secondsElapsed} s</span>
        <button type="button" className={classes.button} onClick={onClick}>
          Go to Other Route
        </button>
      </div>
    </div>
  );
}, isEqual);
