import { Link } from "react-router-dom";
import InstagramLogo from "./instagramLogo/instagramLogo";
import Search from "./Search";
import { logout } from "firebase.jsx";
import { GoHome } from "react-icons/go";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CiSquarePlus } from "react-icons/ci";
import { IoCompassOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

export default function Header(){
    
    return (
      <header className="h-[60px] bg-white border-b border-gray-300">
        {/* Instagram Logo */}
        <div className="flex items-center justify-between h-[60px] container mx-auto">
          <Link to="/">
            <InstagramLogo />
          </Link>

          {/* Search Box */}
          <Search />

          <nav className="flex items-center text-[24px] gap-x-6">
            <button>
              <GoHome/>
            </button>
            <button>
              <LiaFacebookMessenger />
            </button>
            <button>
              <CiSquarePlus />
            </button>
            <button>
              <IoCompassOutline />
            </button>
            <button>
              <CiHeart />
            </button>
            
            <button onClick={logout}>
              <img src="/InstaAvatar.jpg" alt="" className="w-6 h-6 rounded-full"/>  
            </button>
          </nav>


        </div>
      </header>
    );
}