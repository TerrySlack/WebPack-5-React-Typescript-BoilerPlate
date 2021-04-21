import React from 'react';

import Anchor from 'Components/Anchor';
import { useDispatch } from 'react-redux';
import { setAnchorVisistedStatus } from 'Containers/EarthQuakeTable';

interface Props {
  className: string;
  href?: string;
  onClick?: (e: any) => void;
  children: any;
  dataKey?: string;
  visited?: boolean;
  id?: string;
}
const AnchorContainer = ({ href = '/', className, onClick, children, dataKey, visited = false, id }: Props) => {
  const dispatch = useDispatch();
  const click = (e: any) => {
    // Dispatch the anchorId
    if (id) dispatch(setAnchorVisistedStatus(id));

    // Trigger the onclick if it was passed in
    if (onClick) onClick(e);
  };
  return (
    <Anchor href={href} className={className} onClick={click} dataKey={dataKey} visited={visited}>
      {children}
    </Anchor>
  );
};

AnchorContainer.defaultProps = {
  href: '/',
  onClick: undefined,
  dataKey: undefined,
  visited: undefined,
  id: undefined,
};
export default AnchorContainer;
