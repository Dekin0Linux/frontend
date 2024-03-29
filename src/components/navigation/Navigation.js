import './navigation.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import profileStore from '../../stores/profileStore';

const Navigation = () => {
  const profile = profileStore();
  const [profileName, setProfileName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    profile.getProfiles().then(() => {
      if (profile.profiles && profile.profiles.length > 0) {
        setProfileName(profile.profiles[0].name);
        setProfilePic(profile.profiles[0].logo);
      }
    });
  }, [profile]);

  return (
    <div className="navSection">
      <div className="logo">
        <Link to="/" className="listItem">
          <span>records</span>
        </Link>
      </div>
      <div className="icons">
        <>
          <div className="user">
            <img src={profilePic} alt="Logo" />
            <Link to="profile">
              <button>Welcome {profileName} </button>
            </Link>
          </div>
          <Link className="logOutLink" to="/logout">
            <button className="logOut">Log Out</button>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Navigation;
