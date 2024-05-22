function DateBox({children, ...props}) {
    
    return (
        <div className="my-2 flex items-center">
            <label htmlFor={props.id} className="pr-4 text-2xl mr-3">{children}</label>
            <input type="date" id={props.id} className="text-sm text-black w-32 h-6 cursor-pointer bg-white rounded-md text-center pl-4 hover:border-blue-500 transition" />
        </div>
        
    )
}

export default DateBox;