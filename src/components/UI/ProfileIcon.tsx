import React from 'react';
import ProfileImg from '../../assets/profile.jpeg';
import ProfileDropdown from './ProfileDropdown';
import { AppContext } from '../../context/AppContext';

const ProfileIcon: React.FC = () => {
  const { activeProfileDropdown, setActiveProfileDropdown, user } =
    React.useContext(AppContext);

  const handleActiveProfileDropdown = () => {
    setActiveProfileDropdown(!activeProfileDropdown);
  };

  return (
    <>
      {user && (
        <div className="absolute right-10">
          <img
            src={ProfileImg}
            alt="Circle Profile Image"
            onClick={handleActiveProfileDropdown}
            className="rounded-trullyRounded w-12 h-12 cursor-pointer"
          />
          <ProfileDropdown isActive={activeProfileDropdown} />
        </div>
      )}
    </>
  );
};

export default ProfileIcon;
