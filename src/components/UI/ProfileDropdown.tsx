import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { auth } from '../../firebase';
import { User, HandMetal, LogOut } from 'lucide-react';

interface ProfileDropdownProps {
  isActive: boolean;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = (
  props: ProfileDropdownProps
) => {
  const { setUser } = React.useContext(AppContext);

  const handleProfileLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {props.isActive && (
        <div className="bg-primary border border-fluorescent shadow-sm w-32 flex flex-col text-sm py-4 px-2 absolute right-2 top-14 space-y-3 rounded-md text-fluorescent xs:z-10">
          <Link
            to="/profile"
            className="flex gap-2 items-center opacity-90 hover:opacity-100"
          >
            <User className="w-4 h-4" /> Profile
          </Link>

          <Link
            to="/private-posts"
            className="flex gap-2 items-center opacity-90 hover:opacity-100"
          >
            <HandMetal className="w-4 h-4" /> Seus Posts
          </Link>

          <Link
            to="/"
            onClick={handleProfileLogout}
            className="flex gap-2 items-center opacity-90 hover:opacity-100"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
