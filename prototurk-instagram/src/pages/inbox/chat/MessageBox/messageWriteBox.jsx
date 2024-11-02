import { MdOutlineEmojiEmotions } from "react-icons/md";
import { ImFilePicture  } from "react-icons/im";
import { IoIosHeartEmpty  } from "react-icons/io";

export default function MessageWriteBox()
{
    return(
        <footer className="h-[84px] flex items-center justify-center px-6">
			<div className="h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
				<button type="butotn" className="w-[40px] h-[42px] flex items-center justify-center">
					<MdOutlineEmojiEmotions  name="emoji" size={24} />
				</button>
				<input  className="flex-1 outline-none h-[40px] placeholder:text-gray-500 focus:placeholder:text-gray-300 text-sm px-[9px]" placeholder="Message.." />
				
					<>
						<button type="butotn" className="w-[40px] h-[42px] flex items-center justify-center">
							<ImFilePicture   name="picture" size={24} />
						</button>
						<button type="butotn" className="w-[40px] h-[42px] flex items-center justify-center">
							<IoIosHeartEmpty   name="heart" size={24} />
						</button>
					</>
			
				<button type="submit" className="text-brand font-semibold text-sm px-3">Send</button>
			</div>
		</footer>
    )
}