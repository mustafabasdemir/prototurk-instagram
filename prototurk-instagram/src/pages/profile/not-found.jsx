import {Link} from "react-router-dom";
import { TbError404Off } from "react-icons/tb";
import Footer from "components/footer/footer";

export default function ProfileNotFound() {
	return (
		<div className="text-center grid gap-y-6 pt-5 item-center justify-center my-36">
			<h6 className="text-[22px] font-semibold">Sorry, this page isn't available.</h6>
			<p>
				The link you followed may be broken, or the page may have been removed. <Link className="text-link text-blue-400" to="/">Go back to Instagram.</Link>
			</p>
            <p className="flex item-center justify-center text-[200px] text-gray-300">
                <TbError404Off />
            </p>
            <div className="mt-32">
                <Footer/>
            </div>
            
		</div>
        
	)
}