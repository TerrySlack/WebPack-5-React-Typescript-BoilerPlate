import React from 'react';

import ProfileView from 'Components/ProfileView';
import { useSelector } from 'react-redux';
import { areEqual } from 'Utils/equalityChecks';

const ProfileViewContainer = () => {
  // Pull the data needed to Render the home component
  const { avatarImage, alt, width, height, firstName, lastName, phone, email, bio } = useSelector(
    ({ profile }: any) => profile,
    areEqual
  );
  return (
    <ProfileView
      avatarImage={avatarImage}
      alt={alt}
      width={width}
      height={height}
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      email={email}
      bio={bio}
    />
  );
};

export default ProfileViewContainer;
