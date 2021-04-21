import React, { memo } from 'react';

import { areEqualShallow } from 'Utils/equalityChecks';
import classes from './nav.module.css';

interface Props {
  title: string;
  logoUrl: string;
  userName: string;
  welcomeClick: (e: any) => void;
  homeClick: (e: any) => void;
}
const Nav = memo(
  ({ title, logoUrl, userName, welcomeClick, homeClick }: Props) => (
    <div className={classes.container}>
      <div className={classes.left}>
        <a href="/" onClick={homeClick}>
          <img alt={logoUrl} className={classes.logo} src={logoUrl} />
        </a>
      </div>
      <div className={classes.center}>
        <label className={classes.centerLabel}>{title}</label>
      </div>
      <div className={classes.right}>
        <a className={classes.welcome} href="#" onClick={welcomeClick}>
          Welcome {userName}
        </a>
      </div>
    </div>
  ),
  areEqualShallow
);

export default Nav;
