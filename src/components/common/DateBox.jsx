function DateBox({children, ...props}) {
    
    return (
        <div className="my-2 ">
            <label htmlFor={props.id} className="pr-4 text-2xl">{children}</label>
            <input type="date" id={props.id} className="text-sm w-32 h-6 bg-black border-white border-2 rounded-md text-center pl-4 hover:border-blue-500 transition" />
        </div>
        
    )
}

export default DateBox;