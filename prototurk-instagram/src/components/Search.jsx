import { IoSearchOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";


export default function Search(){

    return (
      <label className="w-[268px] relative group">
        {/* search logo */}
        <span className="absolute text-[#8e8e8e] group-focus-within:hidden top-0 left-0 h-9 w-9 flex items-center justify-center">
            <IoSearchOutline />
        </span>
        
        {/* search input */}
        <input
            type="text"
            placeholder="Search"
            className="border-0 h-9 pl-9 w-full rounded bg-[#efefef] group-focus-within:pl-2 transition-all duration-200 focus:outline-none focus:border-transparent border-none"
        />

        {/* search input close icon  x */}
        <span className="absolute top-2 text-xl text-[#c7c7c7] right-0 w-9 h-9 flex item-center justify-center hidden group-focus-within:flex">
            <IoIosCloseCircle />
        </span>
        
      </label>
    );
}