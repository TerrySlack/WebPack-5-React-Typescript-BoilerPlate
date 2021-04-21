import React, { FC, memo } from 'react';

import { areEqualShallow } from 'Utils/equalityChecks';
import classes from './profileView.module.css';

interface Props {
  avatarImage: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  bio: string;
}
const ProfileView: FC<Props> = memo(
  ({ avatarImage, alt, width = 90, height = 90, firstName, lastName, phone, email, bio }: Props) => (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <label>Profile</label>
      </div>
      <div className={`${classes.flexContainer} ${classes.profileContainer}`}>
        <div className={classes.imgContainer}>
          <img src={avatarImage} alt={alt} width={width} height={height} />
        </div>
        <div className={classes.profileInfoContainer}>
          <div className={classes.flexContainer}>
            <div className={classes.labelContainer}>
              <label>First name</label>
            </div>
            <div className={classes.valueContainer}>
              <label>{firstName}</label>
            </div>
          </div>
          <div className={classes.flexContainer}>
            <div className={classes.labelContainer}>
              <label>Last name</label>
            </div>
            <div className={classes.valueContainer}>
              <label>{lastName}</label>
            </div>
          </div>
          <div className={classes.flexContainer}>
            <div className={classes.labelContainer}>
              <label>Phone</label>
            </div>
            <div className={classes.valueContainer}>
              <label>{phone}</label>
            </div>
          </div>
          <div className={classes.flexContainer}>
            <div className={classes.labelContainer}>
              <label>Email</label>
            </div>
            <div className={classes.valueContainer}>
              <label>{email}</label>
            </div>
          </div>
          <div className={classes.flexContainer}>
            <div className={classes.labelContainer}>
              <label>Bio</label>
            </div>
            <div className={classes.valueContainer}>
              <label>{bio}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  areEqualShallow
);
ProfileView.defaultProps = {
  alt: '',
  width: 0,
  height: 0,
};
export default ProfileView;
