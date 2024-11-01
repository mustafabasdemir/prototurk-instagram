import Header from "components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout(){
    return(
        <>
            <Header/>
            <div className="container mx-auto pt-4">
                <Outlet/>
            </div>

        </>
    )
}

// outlet yapısı : outlet dısındaki div dıs cercevedir outlet etiketi içine belirlenen içerikler gelir