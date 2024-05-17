import { useRef } from "react";

function LoginInput({children, ...props}) {

    const ref = useRef();

    const handleInput = () => {
        console.log(ref.current.value);
    }

    

    return (
        <div className="my-2">
            <label 
                htmlFor={props.id} 
                className="block text-2xl mb-1">{children}
            </label>
            <input 
                id={props.id} 
                type={props.text} 
                className="w-60 h-10 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm"
                onChange={handleInput}
                ref={ref}
                placeholder={props.placeholder}
                required/>
        </div>
    )
}

export default LoginInput