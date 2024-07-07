import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import { IdAtom } from "../../recoil/atoms/LoginAtoms";

function FindPwForm({children, ...props}) {

    const [idInput, setIdInput] = useState();
    const [emailInput, setEmailInput] = useState();
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const navigate = useNavigate();
    const setIdValue = useSetRecoilState(IdAtom);

    const handleIdInput = (e) => {
        setIdInput(e.target.value);
    }

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value);
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleClickButton();
        }
    }

    const handleClickButton = () => {
        setIsButtonClicked(true);
    }

    const findPasswordRequest = async () => {
        try {
            const request = JSON.stringify({loginId: idInput, email: emailInput});
            console.log(request);
            Swal.showLoading(Swal.getDenyButton())
            const response = await axios({
                method: 'post',
                url: 'http://52.79.137.212:80/service-api/open-api/user/password',
                data: request,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.status == 200) {
                setIdValue(idInput);
                Swal.showLoading(Swal.getDenyButton());
                const result = await Swal.fire({
                    title: '비밀번호 찾기 성공!',
                    text: '이메일로 인증코드를 발송해드렸습니다.',
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false,
                });

                if (!Swal.isTimerRunning()) {
                    Swal.close();
                    props.setShowDialog(true);
                }
            }
        }catch (error) {
            Swal.close();
            Swal.fire({
                title: '비밀번호 찾기 실패!',
                text: '아이디와 이메일을 다시 확인해주세요',
                icon: 'error',
                confirmButtonText: '확인'
            })
        }
        
    }

    useEffect(() => {
        if (isButtonClicked) {
            findPasswordRequest();
        }

        return () => {
            setIsButtonClicked(false);
        }
    }, [findPasswordRequest, isButtonClicked])


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
                    onKeyDown={handleEnterKey}
                    className='w-72 text-center h-12 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm'
                    placeholder="가입하신 이메일을 입력해주세요"
                />
            </div>
            
            <div className="flex justify-center mt-8">
                <button className="border-2 w-32 rounded-lg text-sm h-10 bg-amber-900 hover:border-blue-400 transition" 
                        onClick={handleClickButton}
                >
                    비밀번호 찾기
                </button>
            </div>
            
        </div>
        
    )
}

export default FindPwForm;