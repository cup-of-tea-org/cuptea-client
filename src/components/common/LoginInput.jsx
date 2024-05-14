function LoginInput({children, ...props}) {

    return (
        <div className="my-2">
            <label 
                htmlFor={props.id} 
                className="block text-xl">{children}
            </label>
            <input 
                id={props.id} 
                type={props.text} 
                className="w-60 text-3xl px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-300 transition" 
                required/>
        </div>
    )
}

export default LoginInput