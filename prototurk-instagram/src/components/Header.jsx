import { Link, NavLink } from "react-router-dom";
import InstagramLogo from "./instagramLogo/instagramLogo";
import Search from "./Search";
import { GoHome, GoHomeFill } from "react-icons/go";
import { LiaFacebookMessenger } from "react-icons/lia";
import { RiMessengerLine } from "react-icons/ri";
import { IoCompassOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { ImFilm } from "react-icons/im";
import { FaRegHeart ,FaRegPlusSquare } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";

export default function Header() {
  const user = useSelector((state) => state.auth.user);

  return (
    <header>
      <section className="fixed py-6 px-3 bg-zinc-50 w-[300px] h-[100%] border-r-[1px] border-r-gray-300">
        <div className="py-3 px-2">
          <Link to="/">
            <InstagramLogo />
          </Link>
        </div>

        <nav className="h-[100%] flex flex-col  ml-4  space-y-7 py-7 text-[20px]  text-black">
          {/* Home Button */}
          <NavLink to={`/`}>
            {({ isActive }) => (
              <div className="flex items-center space-x-2">
                {isActive ? <GoHomeFill size={24} /> : <GoHome size={24} />}
                <span className="text-[20px]">Home</span>
              </div>
            )}
          </NavLink>
          {/* Search Button */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <FiSearch size={24} />
              <span>Search</span>
            </div>
          </NavLink>
          {/* Message Button */}
          <NavLink to="/inbox">
            {({ isActive }) => (
              <div className="flex items-center space-x-2">
                {isActive ? (
                  <RiMessengerLine size={24} />
                ) : (
                  <LiaFacebookMessenger size={24} />
                )}
                <span>Messages</span>
              </div>
            )}
          </NavLink>
          {/* Compass Button */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <IoCompassOutline size={24} />
              <span>Explore</span>
            </div>
          </NavLink>
          {/* Reels Button */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <ImFilm size={24} />
              <span>Reels</span>
            </div>
          </NavLink>
          {/* Create Button */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <FaRegPlusSquare size={24} />
              <span>Create</span>
            </div>
          </NavLink>
          {/* Notification Button */}
          <NavLink to="/">
            <div className="flex items-center space-x-2">
              <FaRegHeart size={24} />
              <span>Notifications</span>
            </div>
          </NavLink>
          {/* Profile Button */}
          <NavLink to={`/${user.userName}`}>
            <div className="flex items-center space-x-2">
              <img
                src={user.userName === "mustafabasdemir" ? "/InstaAvatar.jpg" : "/defaultAvatar.png"}
                alt=""
                className="w-6 h-6 rounded-full"
              />
              <span>Profile</span>
            </div>
          </NavLink>
          {/* Exit Button */}
          <NavLink to="/logout">
            <div className="flex items-center space-x-2 my-48">
              <IoMdExit  size={24} />
              <span>Exit</span>
            </div>
          </NavLink>
        </nav>
      </section>
    </header>
  );
}
