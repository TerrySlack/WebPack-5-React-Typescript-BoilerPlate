import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Home from 'Components/Home';
import { useSelector, useDispatch } from 'react-redux';
import { areEqual } from 'Utils/equalityChecks';
import customSort from 'Utils/sortData';
import { setSelectedDetailViewId, setSortedFeatures } from 'Containers/Home';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const { features, title } = useSelector(({ home: { features, title } }: any) => ({ features, title }), areEqual);

  // Force a rerender,
  const [, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('desc');
  const history = useHistory();

  const handleSortClick = (e: any) => {
    e.preventDefault();

    // The search will be one on the properties object, in each element of the feature array
    const text = `properties.${e.target.dataset.key.toLocaleLowerCase()}`;

    // Set the direction, it should be the opposite of what is currently being displayed
    const direction = sortDirection === 'desc' ? 'asc' : 'desc';

    // Sort the features array
    const sortedFeatures = customSort(text, direction, features);

    // Store the column
    setSortColumn(() => text);

    // Store the sort direction
    setSortDirection(() => direction);

    // Dispatch the newly sorted array
    dispatch(setSortedFeatures(sortedFeatures));
  };

  const handleAnchorClick = (e: any) => {
    e.preventDefault();

    // Dispatch the data I need to render the DetailView
    // I don't want to copy the data, so have property that indicates which one was picked.
    // Then in the DetailView component, useSelector, pull the data and send to the component

    // Get the selected Row detailViewId
    const detailViewId = e.target.dataset.key.toLocaleLowerCase();

    // Dispatch the selected detailViewId
    dispatch(setSelectedDetailViewId(detailViewId));
    // Trigger a route change
    history.push('/detailView');
  };
  return <Home title={title} features={features} sort={handleSortClick} anchorClick={handleAnchorClick} />;
};

export default HomeContainer;
