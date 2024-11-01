import { getUserInfo } from "firebase.jsx"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Profile()
{

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
                navigate('/',{
                    replace:true
                })
			})
	}, [])


    return(

        <div>
            {user && 'MUKEMELSİN ADAMİMM '}
            profile Page!={username}
        </div>
    )
}