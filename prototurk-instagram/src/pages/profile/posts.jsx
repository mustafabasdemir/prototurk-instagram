import { getUserInfo } from "firebase.jsx";
import { useEffect, useState } from "react";
import { MdOutlineWindow } from "react-icons/md";

export default function ProfilePosts() {

	return (
		<div className="flex justify-center flex-col items-center gap-4 pt-10">
			<div className="w-[62px] h-[62px] border-2 rounded-full border-black flex items-center justify-center">
                <MdOutlineWindow name="post" className="text-[34px]" />
			</div>
			<h6 className="text-[28px] font-light">No Posts Yet</h6>
		</div>
	)
}