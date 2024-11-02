import {logout} from "firebase.jsx";
import {useEffect} from "react";

export default function Logout() {

	useEffect(() => {
		logout()
	})

	return null

}