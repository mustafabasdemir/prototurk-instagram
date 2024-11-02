export default function Button({type='button',children,...props}){

    return(
        <button
            type={type}
            {...props}
            className="h-[30px] rounded p-1 bg-brand text-white text-sm disabled:opacity-30"
        >
            {children}
        </button>
    )


}