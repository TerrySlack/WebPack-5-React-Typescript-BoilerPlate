import React, { FC, memo } from 'react';
import { areEqualShallow } from 'Utils/equalityChecks';

import classes from './anchor.module.css';

interface Props {
  visited: boolean;
  className?: string;
  href?: string;
  onClick?: (e: any) => void;
  children: any;
  dataKey?: string;
}
const Anchor: FC<Props> = memo(
  ({ href = '/', className = '', onClick, children, dataKey = undefined, visited = false }: Props) => (
    <a
      href={href}
      className={`${visited ? classes.anchorVisited : classes.anchor} ${className || ''}`}
      onClick={onClick}
      data-key={dataKey}
    >
      {children}
    </a>
  ),
  areEqualShallow
);

Anchor.defaultProps = {
  className: undefined,
  href: undefined,
  onClick: undefined,
  dataKey: undefined,
};
export default Anchor;
