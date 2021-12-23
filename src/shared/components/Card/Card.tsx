import React, { memo } from "react";
import { areEqual } from "../../utils/equalityChecks";

import "./card.styles.scss";

interface Props {
  photoItem: any;
  description: string;
  user: string;
}

const Card = function ({ photoItem, description, user }: Props) {
  return (
    <div className="card-container">
      <div className="card-image-wrapper">
        <img alt={description} src={photoItem.urls.regular} />
      </div>
      <h5>{user}</h5>
      <h3> {description} </h3>
    </div>
  );
};

// Don't need to add this, all your props are required
// Card.defaultProps = {
//   photoItem: undefined,
//   description: "no description",
// };
const CardMemo = memo(Card, areEqual);

export { CardMemo as Card };
