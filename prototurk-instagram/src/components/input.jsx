import { useState } from "react"

export default function Input({label,type,...props}){

    const [show,setShow]=useState(false)

    return(
        <label className="block relative">
            <input type={type === 'password' && show ? 'text' : type}  required={true} className="bg-zinc-50 border rounded-sm px-2 text-xs outline-none focus:border-gray-400  w-full h-[38px] valid:pt-[10px] peer" {...props}/>
            <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400  -translate-y-1/2 peer-valid:text-[10px] peer-valid:top-2"> 
            {label} </small>
            
            {/* hide show button */}
            {type === 'password' &&(
                    <button type="button" onClick={()=> setShow(show=> !show)} className="absolute top-0 right-0 h-full flex items-center text-sm font-semibold right-2">
                        {show? 'Hide':'Show'}
                    </button>
            )}

        </label>
    )
}
