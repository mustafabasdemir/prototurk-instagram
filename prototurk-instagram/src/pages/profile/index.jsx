import {useParams, useNavigate, NavLink, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserInfo} from "firebase.jsx";
import Header from "./components/header";
import { MdOutlineWindow } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import classNames from "classnames";
import ProfileNotFound from "./not-found";
import Loader from "components/loader/loader";
import { Helmet } from "react-helmet";

export default function ProfileLayout() {

	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState(null)
	const {username} = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		getUserInfo(username)
			.then(user => {
				setUser(user)
			})
			.catch(err => {
				setUser(false)
			})
	}, [])


	if(user===false)
	{
		return(
			<ProfileNotFound/>
		)
	}

	if(user===null)
		{
			return(
				<Loader/>
			)
	}


	return user && (
		<div>
			<Helmet>
				<title>{user.fullName} (@{user.userName}) • Instagram photos and videos</title>
			</Helmet>
			<Header user={user} />
			<nav className="border-t flex gap-x-16 justify-center items-center">
				<NavLink to={`/${username}`} end={true} className={({isActive}) => classNames({
					"text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
					"text-[#727272] border-transparent": !isActive,
					"text-black border-black": isActive
				})}>
					<MdOutlineWindow name="post" />
					POSTS
				</NavLink>
				<NavLink to={`/${username}/tagged`} end={true} className={({isActive}) => classNames({
					"text-xs flex py-5 border-t -mt-px items-center gap-x-1.5 font-semibold": true,
					"text-[#727272] border-transparent": !isActive,
					"text-black border-black": isActive
				})}>
					<HiOutlineIdentification name="tag" />
					TAGGED
				</NavLink>
			</nav>
			<Outlet />
		</div>
	)
}