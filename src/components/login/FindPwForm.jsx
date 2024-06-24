function FindPwForm({children, ...props}) {
    return (
        <div className="my-20">
            <label htmlFor={props.id} className="mr-4">{children}</label>
            <input
                id={props.id}
                type="text"
                className='w-60 h-10 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm'
            />
        </div>
    )
}

export default FindPwForm;