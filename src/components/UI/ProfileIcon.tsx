import React from 'react';
import ProfileDropdown from './ProfileDropdown';
import { AppContext } from '../../context/AppContext';
import ProfileImage from '../../assets/dog.png';

const ProfileIcon: React.FC = () => {
  const { activeProfileDropdown, setActiveProfileDropdown, user } =
    React.useContext(AppContext);

  const handleActiveProfileDropdown = () => {
    setActiveProfileDropdown(!activeProfileDropdown);
  };

  return (
    <>
      {user && (
        <>
          <div className="absolute right-28 xs:hidden sm:block">
            <h1 className="text-white">
              Seja bem vindo {!user?.displayName ? 'robot3' : user?.displayName}
            </h1>
          </div>
          <div className="absolute right-10">
            <img
              src={!user?.photoURL ? ProfileImage : user?.photoURL}
              alt="Circle Profile Image"
              onClick={handleActiveProfileDropdown}
              className="rounded-trullyRounded w-12 h-12 cursor-pointer"
            />
            <ProfileDropdown isActive={activeProfileDropdown} />
          </div>
        </>
      )}
    </>
  );
};

export default ProfileIcon;
