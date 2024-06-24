import { useState } from "react";

function FindPwForm({children, ...props}) {

    const [idInput, setIdInput] = useState();
    const [emailInput, setEmailInput] = useState();

    const handleIdInput = (e) => {
        console.log(e.target.value);
        setIdInput(e.target.value);
    }

    const handleEmailInput = (e) => {
        console.log(e.target.value);
        setEmailInput(e.target.value);
    }


    return (
        <div className="my-8">
            <div className="flex justify-center items-center flex-col">
                <label htmlFor={props.id} className="mr-2 text-4xl mb-4">{children}</label>
                <input
                    id={props.id}
                    type="text"
                    onBlur={handleIdInput}
                    className='w-72 text-center h-12 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm'
                    placeholder="가입하신 아이디를 입력해주세요"
                />
                <label htmlFor='email' className="mr-2 text-4xl mb-4 mt-4">E-mail</label>
                <input
                    id='email'
                    type="email"
                    onBlur={handleEmailInput}
                    className='w-72 text-center h-12 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm'
                    placeholder="가입하신 이메일을 입력해주세요"
                />
            </div>
            
            <div className="flex justify-center mt-8">
                <button className="border-2 w-32 rounded-lg text-sm h-10 bg-amber-900 hover:border-blue-400 transition" 
                >
                    비밀번호 찾기
                </button>
            </div>
        </div>
    )
}

export default FindPwForm;