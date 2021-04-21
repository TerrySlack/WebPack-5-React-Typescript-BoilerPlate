import React from 'react';
import { useSelector } from 'react-redux';

import DetailView from 'Components/DetailView';
import { areEqual } from 'Utils/equalityChecks';

// Callback to select the detailView
const selectedDetailView = ({ home: { selectedDetailViewId, features } }: any) => {
  // Find the detail view selected by the user
  const {
    properties: { title, mag, time, status, tsunami, type },
  } = features.find(({ id }: any) => id === selectedDetailViewId);

  return {
    title,
    mag,
    time,
    status,
    tsunami,
    type,
  };
};

// const selectedDetailView = ({ selectedDetailViewId, features }: any) => {
//   // Find the detail view selected by the user
//   const {
//     properties: { title, mag, time, status, tsunami, type },
//   } = features.find(({ id }: any) => id === selectedDetailViewId);

//   return {
//     title,
//     mag,
//     time,
//     status,
//     tsunami,
//     type,
//   };
// };

const DetailViewContainer = () => {
  // Get the details for the selected detailView
  const { title, mag, time, status, tsunami, type } = useSelector(selectedDetailView, areEqual);

  return <DetailView title={title} mag={mag} time={time} status={status} tsunami={tsunami} type={type} />;
};

export default DetailViewContainer;
