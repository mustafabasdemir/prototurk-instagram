import { Outlet } from "react-router-dom";
import Sidebar from "./chat/MessageUserBox/messageUserBoxHeader";
import MessageUserBoxHeader from "./chat/MessageUserBox/messageUserBoxHeader";

export default function InboxLayout()
{
    

    return (
      <div className="border border-gray-300 rounded bg-white h-[calc(100vh-97px)] flex">
        {/* sidebasr */}
        <MessageUserBoxHeader/>
        <Outlet/>

      </div>
    );
}