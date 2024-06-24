import { useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { joinSelector } from "../../recoil/selectors/JoinSelectors";
import { useState } from "react";
import { JoinAtoms } from "../../recoil/atoms/JoinAtoms";
import { loginSelector } from "../../recoil/selectors/Loginselectors";
import Swal from "sweetalert2";
function LoginInput({children, ...props}) {

    const ref = useRef();
    const setJoinFormData = useSetRecoilState(joinSelector);
    const joinFormData = useRecoilValue(JoinAtoms);
    const setLoginFormData = useSetRecoilState(loginSelector);
    let [joinFormInput, setJoinFormInput] = useState('w-60 h-10 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm');
    const [message, setMessage] = useState('');
    // input 검증
    const handleBlur = (e) => {

        // 회원가입인 경우만 검증
        if (props.join) {
            switch (props.id) {
                case 'id' :
                    const idRegex = /^[a-zA-Z]{4,20}$/;
                    if (!idRegex.test(e.target.value)) {
                        setMessage('아이디는 영문자로 4자 이상 20자 이하로 입력해주세요.');
                        setJoinFormInput('w-60 h-10 text-base px-1 bg-black border-2 border-red-400 rounded-md hover:border-red-400 transition placeholder:text-sm') ;
                    } else {
                        setMessage('')
                        setJoinFormInput('w-60 h-10 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm');
                    }    
                    break;
                case 'password' :
                    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$|^(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,20}$/;

                    if (!passwordRegex.test(e.target.value)) {
                        setMessage('비밀번호는 영문자, 숫자, 특수문자 중 2가지를 포함한 8자 이상 20자 이하로 입력해주세요.');
                        setJoinFormInput('w-60 h-10 text-base px-1 bg-black border-2 border-red-400 rounded-md hover:border-red-400 transition placeholder:text-sm') ;
                    } else {
                        setMessage('')
                        setJoinFormData({password : ref.current.value});
                        setJoinFormInput('w-60 h-10 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm');
                    }
                    break;
                case 'email' :
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!emailRegex.test(e.target.value)) {
                        setMessage('이메일 형식에 맞게 입력해주세요.');
                        setJoinFormInput('w-60 h-10 text-base px-1 bg-black border-2 border-red-400 rounded-md hover:border-red-400 transition placeholder:text-sm') ;
                    } else {
                        setMessage('')                        
                        setJoinFormInput('w-60 h-10 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm')
                    }
                    break;
                case 'phone' :
                    const phoneRegex = /^010[-]?\d{3,4}[-]?\d{4}$/;
                    if (!phoneRegex.test(e.target.value)) {
                        setMessage('전화번호 형식에 맞게 입력해주세요.');
                        setJoinFormInput('w-60 h-10 text-base px-1 bg-black border-2 border-red-400 rounded-md hover:border-red-400 transition placeholder:text-sm') ;
                    } else {
                        setMessage('');
                        setJoinFormData({phone : ref.current.value});
                        setJoinFormInput('w-60 h-10 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm');
                    }
                    break;
            }
        } else if (props.login === 'id') { // login인 경우
            setLoginFormData({loginId : ref.current.value});
        } else if (props.login === 'password') {
            setLoginFormData({password : ref.current.value});        
        }
}

    
    const handleIdOverlapButton = () => {

        if (ref.current.value === '') {
            Swal.fire({
                icon: 'error',
                title: '아이디 입력 오류',
                text: '아이디를 입력해주세요.',
            });
            return;
        }

        props.handleIdOverlap(ref.current.value);
    }

    const handleEmailCheckButton = () => {
        console.log(joinFormData.email);

        if (joinFormData.email !== undefined) {
            Swal.fire({
                icon: 'success',
                title: '이미 이메일 인증이 완료되었습니다.',
                text: '이미 이메일 인증이 완료되었습니다.',
            });
            return;
        }

        if (ref.current.value === '') {
            Swal.fire({
                icon: 'error',
                title: '이메일을 입력해주세요.',
                text: '이메일을 입력해주세요.',
            });
            return;
        }

        props.handleEmailCheck(ref.current.value);
        console.log(ref.current.value);
        props.setShowEmailCheckModal(true);
    }

    const handleEnterKey = (e) => {
        if (props.login === 'password') {
            if (e.key === 'Enter') {
                props.setLoginTrigger(prev => {
                    return !prev;
                
                })
            }
        }
    }

    return (
        <div className="my-2">
            <label 
                htmlFor={props.id} 
                className="block text-2xl mb-1">{children}
            <p className=" w-60 text-sm text-red-500">{message}</p>
            </label>
            <input 
                id={props.id} 
                type={props.text} 
                className={joinFormInput}
                onBlur={handleBlur}
                ref={ref}
                placeholder={props.placeholder}
                onKeyDown={handleEnterKey}
                required/>
            {(props.text == 'id' && message == '') ?
                <button 
                type="button" 
                className="block mt-2 text-xs bg-emerald-200 text-black w-20 h-6 border-white border-2 rounded-md hover:border-blue-500"
                onClick={handleIdOverlapButton}
                >
                    아이디 중복검사
                </button> : null
            }
            {(props.text == 'email' && message == '') ?
                <button type="button" 
                className="block mt-2 text-xs bg-emerald-200 text-black w-20 h-6 border-white border-2 rounded-md hover:border-blue-500"
                onClick={handleEmailCheckButton}
                >
                    이메일 인증
                </button> : null
            }

            
            
        </div>
    )
}

export default LoginInput