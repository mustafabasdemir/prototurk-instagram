import { Link, NavLink } from "react-router-dom";
import InstagramLogo from "./instagramLogo/instagramLogo";
import Search from "./Search";
import { GoHome, GoHomeFill } from "react-icons/go";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaFacebookMessenger } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { IoCompassOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Header(){

    const user= useSelector(state=> state.auth.user)
    
    return (
      <header className="h-[60px] bg-white border-b border-gray-300">
        {/* Instagram Logo */}
        <div className="flex items-center justify-between h-[60px] container mx-auto">
          <Link to="/">
            <InstagramLogo />
          </Link>

          {/* Search Box */}
          <Search />

          <nav className="flex items-center text-[24px] gap-x-4">
            <NavLink to={`/`}>
              {({ isActive }) => (
                // `isActive` durumuna göre `GoHome` veya `GoHomeFill` göster
                isActive ? <GoHomeFill size={24} /> : <GoHome size={24} />
              )}
            </NavLink>
            <NavLink  to="/inbox">
              {({ isActive }) => (
                // `isActive` durumuna göre `GoHome` veya `GoHomeFill` göster
                isActive ? <FaFacebookMessenger  size={24} /> : <LiaFacebookMessenger size={24} />
              )}
            </NavLink>
            <button>
              <CiSquarePlus />
            </button>
            <button>
              <CiHeart />
            </button>
            
            <NavLink to={`/${user.userName}`}>
              <img src="/InstaAvatar.jpg" alt="" className="w-6 h-6 rounded-full "/>  
            </NavLink>
          </nav>


        </div>
      </header>
    );
}