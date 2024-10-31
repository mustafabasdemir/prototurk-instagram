import { Link } from "react-router-dom";
import InstagramLogo from "./instagramLogo/instagramLogo";
import Search from "./Search";
import { logout } from "firebase.jsx";

export default function Header(){
    
    return (
      <header className="h-[60px] bg-white border-b border-gray-300 ">
        {/* Instagram Logo */}
        <div className="flex items-center justify-between h-[60px] container mx-auto">
          <Link to="/">
            <InstagramLogo />
          </Link>

          {/* Search Box */}
          <Search />

          <nav>
            <button onClick={logout}>
                Logout
            </button>
          </nav>


        </div>
      </header>
    );
}