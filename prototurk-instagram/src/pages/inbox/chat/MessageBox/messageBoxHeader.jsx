import { CiCircleInfo } from "react-icons/ci";
import { useParams } from "react-router-dom";
import chatUserList from "../../chatUserList";

export default function MessageBoxHeader() {
    const {id} = useParams();  //url deki headeri alalım 
    const user = chatUserList.find(chat => chat.id === parseInt(id, 10))?.user;
	return (
        
		<header className="h-[60px] border-b border-gray-300 flex items-center justify-between px-6">
			<button className="flex items-center gap-x-4">
				<img src={user.avatar} className="w-6 h-6 rounded-full" />
				<h6 className="text-base font-semibold">{user.name}</h6>
			</button>
			<button>
				<CiCircleInfo  name="info" size={24} />
			</button>
		</header>
	)
}