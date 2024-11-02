import classNames from "classnames"
import { NavLink, useParams } from "react-router-dom"
import chatUserList from "../../chatUserList"

export default function MessageUserBox(){

    return(
        <div className="h-[calc(100%-60px)] overflow-auto py-3">
            <header className="flex items-center justify-between px-5 mb-1">
				<h6 className="text-base font-semibold">Messages</h6>
				<button className="text-brand text-sm font-semibold">0 requests</button>
			</header>
            {/* chats map  */}

            {chatUserList.map(chat => (
				<NavLink
                className={classNames({
                    "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
                    "font-semibold": chat?.unread,
                })}
                key={chat.id}
                to={`/inbox/${chat.id}`}
            >
                <img src={chat.user.avatar} className="w-14 h-14 rounded-full" alt=""/>
                <div>
                    <h6 className="text-sm">{chat.user.name}</h6>
                    <p className={`text-sm ${!chat?.unread && 'text-[#8e8e8e]'}`}>
                        {chat.lastMessage}
                    </p>
                </div>
            </NavLink>
			))}



        </div>
    )

}

//sidebardan cagırıyorum