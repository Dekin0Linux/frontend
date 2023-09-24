import React from 'react';
import SingleProfile from './SingleProfile';
import profileStore from '../../stores/profileStore';

const Profiles = () => {
  const store = profileStore();

  return (
    <>
      {store.profiles &&
        store.profiles.map((item, index) => {
          return <SingleProfile index={index} item={item} key={item._id} />;
        })}
    </>
  );
};

export default Profiles;
