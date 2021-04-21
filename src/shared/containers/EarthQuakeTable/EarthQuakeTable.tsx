import React from 'react';

import EarthQuakeTable from 'Components/EarthQuakeTable';
import { areEqual } from 'Utils/equalityChecks';
import { useSelector } from 'react-redux';

interface Props {
  rows: any;
  sort: (e: any) => void;
  anchorClick: (e: any) => void;
}
const EarthQuakeTableContainer = ({ rows, sort, anchorClick }: Props) => {
  const visitedAnchors = useSelector(({ earthQuake: { visitedAnchors } }: any) => visitedAnchors, areEqual);
  return <EarthQuakeTable rows={rows} sort={sort} anchorClick={anchorClick} visitedAnchors={visitedAnchors} />;
};

export default EarthQuakeTableContainer;
