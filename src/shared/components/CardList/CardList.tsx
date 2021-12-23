import React, { memo } from "react";
import { Card } from "Components/Card";
import { areEqual } from "../../utils/equalityChecks";

import "./cardList.styles.scss";

interface Props {
  photoList?: any[];
}

const CardList = function ({ photoList }: Props) {
  return (
    <div className="d-sm-flex flex-wrap justify-content-between align-items-center card-list">
      {photoList.length > 0 &&
        photoList.map((photo) => (
          <div id={photo.id} key={photo.id}>
            <Card
              photoItem={photo}
              description={photo.alt_description}
              user={`${photo.user.first_name} ${photo.user.last_name}`}
            />
          </div>
        ))}
    </div>
  );
};
CardList.defaultProps = {
  photoList: undefined,
};
const CardListMemo = memo(CardList, areEqual);

export { CardListMemo as CardList };
