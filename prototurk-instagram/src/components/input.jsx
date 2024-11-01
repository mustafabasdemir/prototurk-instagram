import { Field, useField } from "formik"
import { useState } from "react"
import { VscError } from "react-icons/vsc";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Input({label,type,...props}){

    const [field,meta,helpers] = useField(props)

    /* 
    field : form alanındaki degerler ve değişkenler  
    meta : fromda bir hata var mı yok  mu gorunur  

    helpers : alanın degerini alarlamak için kullanır 
    örn :helpers.setValue("Yeni Değer"); bu işlem yapıldıgında
    username ve password alanları değişir 

    */

    const [show,setShow]=useState(false)

    return (
      <label className="block relative">
        <input
          type={type === "password" && show ? "text" : type}
          required={true}
          className="bg-zinc-50 border rounded-sm px-2 bg-transparent text-xs outline-none focus:border-gray-400  w-full h-[38px] valid:pt-[10px] peer"
          {...field}
          {...props}
        />
        <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400  -translate-y-1/2 peer-valid:text-[10px] peer-valid:top-2">
          {label}{" "}
        </small>

        {/* hide show button */}
        {type === "password" && field.value && (
          <button
            type="button"
            onClick={() => setShow((show) => !show)}
            className="absolute top-0 right-0 h-full flex items-center text-sm font-semibold right-8"
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
        <span className="absolute top-0 right-2 h-full flex items-center text-sm font-bold">
          {field.value &&
            (meta.error ? (
              <VscError className="text-red-500" />
            ) : (
              <FaRegCheckCircle className="text-green-500" />
            ))}
        </span>
      </label>
    );
}
