import React, { useCallback, useEffect, useMemo, useState } from "react";

import { CardList } from "Components/CardList";
import { Pagination } from "Components/Pagination";
import { SearchBox } from "Components/SearchBox";
import { usePhotos } from "Hooks/useAllPhotos";

const HomeContainer = function () {
  // const [photos, setPhotos] = useState([]);
  const [queryType, setQueryType] = useState("");
  const [pageCount, setPageCount] = useState(1);

  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [noMatches, setNoMatches] = useState("");

  // Let's preserve the reference to the routing object
  const allPhotosObj = useMemo(() => ({ route: "all-photos" }), []);

  // load some photos on initial landing
  const { photos } = usePhotos(allPhotosObj);

  // Let's preserve the reference to the routing object
  const searchPhotosObj = useMemo(
    () => ({
      route: "query-photos",
      type: "post",
      data: { search: queryType },
    }),
    [queryType]
  );

  // get photos based on keyword entered by user
  const { photos: searchPhotos } = usePhotos(searchPhotosObj);

  // load assembly of photos, depending on whether a user is doing a search or not.
  useEffect(() => {
    if (searchPhotos.length) {
      setCurrentItems(searchPhotos);
    } else if (photos?.length) {
      const endOffset = itemOffset + 9; // Put the 9 in a constant.

      setCurrentItems(photos.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(photos.length / 9));
      if (currentItems?.length === 0 && queryType?.length > 0) {
        setNoMatches("No matches found.");
      }
    }
  }, [itemOffset, photos, searchPhotos]);

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

  // Only render if our api call is not loading, there is no error and some photos have been returned
  return (
    currentItems.length > 0 && (
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
    )
  );
};

export default HomeContainer;
