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
            {props.text == 'id' ? <button type="button" className="block mt-2 text-xs bg-emerald-200 text-black w-20 h-6 border-white border-2 rounded-md hover:border-blue-500">아이디 중복검사</button> : null}
            {props.text == 'email' ? <button type="button" className="block mt-2 text-xs bg-emerald-200 text-black w-20 h-6 border-white border-2 rounded-md hover:border-blue-500">이메일 인증</button> : null}
        </div>
    )
}

export default LoginInput