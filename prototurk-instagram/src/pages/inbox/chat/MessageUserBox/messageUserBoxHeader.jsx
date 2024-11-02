import { MdKeyboardArrowDown } from "react-icons/md";
import { TbPencilPlus } from "react-icons/tb";
import { useSelector } from "react-redux";

import MessageUserBox from "./messageUserBox";

export default function MessageUserBoxHeader()
{
    const user = useSelector(state => state.auth.user)

    return(
        <aside className="w-[349px] flex-shrink-0 border-r border-gray-300">
        <header className="h-[60px] border-b border-gray-300 flex justify-between items-center px-5">
          <button className="flex items-center mx-auto gap-x-2.5 text-base font-semibold">
            {user.userName}
            <MdKeyboardArrowDown  name="chevron-down" size={20} />
          </button>
          <TbPencilPlus name="new-message" size={24} />
        </header>
        <MessageUserBox/>
      </aside>
    )
}