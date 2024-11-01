export default function Button({type='button',children,...props}){

    return(
        <button
            type={type}
            {...props}
            className="h-[30px] rounded bg-brand text-white text-sm disabled:opacity-30"
        >
            {children}
        </button>
    )


}