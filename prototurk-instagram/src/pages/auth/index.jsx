import { Outlet } from "react-router-dom"

export default function AuthLayout(){
    return(
        <div className="h-full w-full flex  flex-wrap overflow-auto gap-x-8  justify-center my-24">
            <Outlet/>
        </div>
    )
}


// outlet yapısı : outlet dısındaki div dıs cercevedir outlet etiketi içine belirlenen içerikler gelir