import React, { useCallback, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

import { CardList } from "Components/CardList";
import { Pagination } from "Components/Pagination";
import { SearchBox } from "Components/SearchBox";

const HomeContainer = function () {
  const [photos, setPhotos] = useState([]);
  const [queryType, setQueryType] = useState("");
  const [pageCount, setPageCount] = useState(1);

  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [noMatches, setNoMatches] = useState("");

  /*
    Review:  I would create a custom hook for this.  Then you can destructure what you're looking for.  Ie photos
    With the different use of photos below, could even return list and getPhotos
    I would also move away from using old school promise syntax and use async await.
    In your hook, you could just retun the results  Ie.  result.response.results
  */
  const api = createApi({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
  });

  // load some photos on initial landing
  useEffect(() => {
    // let mounted = true;  <-------what does this do?
    if (queryType?.length === 0) {
      // This would be really good to use in a Redux Thunk.
      api.photos
        .list({ page: 1, perPage: 100 })
        .then((result) => {
          // Can you type the result
          setPhotos(result.response.results);
          setNoMatches("");
          // if (mounted) {
          //   setPhotos(result.response.results);
          //   setNoMatches("");
          // }
        })
        .catch(() => {
          // This will not pass the linter
          // console.log("something went wrong!", err);
        });
    }
    // return () => {
    //   mounted = false;
    // };
  }, []);

  // get photos based on keyword entered by user
  useEffect(() => {
    // let mounted = true; //What is moutned for?
    if (queryType?.length > 0) {
      // Put it in a thunk
      api.search
        .getPhotos({ query: queryType, page: 1, perPage: 100 })
        .then((result) => {
          // if (mounted) {
          //   setPhotos(result.response.results);
          //   setNoMatches("");
          // }
          setPhotos(result.response.results);
          setNoMatches("");
        })
        .catch(() => {
          // console.log("something went wrong!", err);
        });
    }
    // return () => {
    //   mounted = false;
    // };
  }, [api, queryType]);

  // load assembly of photos
  useEffect(() => {
    const endOffset = itemOffset + 9; // Put the 9 in a constant.

    setCurrentItems(photos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(photos.length / 9));
    if (currentItems?.length === 0 && queryType?.length > 0) {
      setNoMatches("No matches found.");
    }
  }, [itemOffset, photos]);

  // enter keyword
  const handleChange = useCallback((e: any) => {
    const searchField = e.target.value;
    setQueryType(searchField);
  }, []);

  // adjust range of photos
  const handlePageClick = useCallback(
    (e: any) => {
      // Add a type to your event.
      if (photos?.length > 0) {
        const newOffset = (e.selected * 9) % photos.length;
        setItemOffset(newOffset);
      }
    },
    [photos]
  );

  return (
    <div className="App">
      <SearchBox placeholder="search photos" handleChange={handleChange} />
      {photos?.length > 0 && <CardList photoList={currentItems} />}
      {currentItems?.length === 0 && <h1>{noMatches}</h1>}
      {photos?.length >= 8 && (
        <Pagination
          initialPage={0}
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
      )}
      <div id="container" />
    </div>
  );
};

export default HomeContainer;
