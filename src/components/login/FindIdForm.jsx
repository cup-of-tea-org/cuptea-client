import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FindIdForm({children, ...props}) {

    const [emailValue, setEmailValue] = useState();
    const [emailTrigger, setEmailTrigger] = useState(false);
    const navigate = useNavigate();

    const handleClickButton = () => {
        setEmailTrigger(true);
    }

    const handleInput = (e) => {
        setEmailValue({email: e.target.value});
    }

    

    const idFindrequest = async () => {
            try {
                const requestBody = JSON.stringify(emailValue);
                const response = await axios({
                    method: 'post',
                    url: 'http://52.79.137.212:80/service-api/open-api/user/id',
                    data: requestBody,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })        
                if (response.status == 200) {
                    const result = await Swal.fire({
                        title: '아이디 찾기 성공!',
                        text: '회원님의 아이디는 ' + response.data.loginId + '입니다.',
                        icon: 'success',
                        confirmButtonText: '확인'
                    })
        
                    if (result.isConfirmed) {
                        navigate('/login');
                    }
                }
            } catch (error) {
                Swal.fire({
                    title: '아이디 찾기 실패!',
                    text: error.response.data,
                    icon: 'error',
                    confirmButtonText: '확인'
                })
                setEmailTrigger(false);

            }
        }

    useEffect(() => {
        if (emailTrigger) {
            idFindrequest();
        }
    }, [idFindrequest])

    return (
        <div className="my-10">
            <div className="flex justify-center items-center flex-col">
                <label htmlFor={props.id} className="mr-2 text-4xl mb-4">{children}</label>
                <input
                    id={props.id}
                    type="email"
                    className='w-72 text-center h-12 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm'
                    onBlur={handleInput}
                    placeholder="가입하신 이메일을 입력해주세요"
                />
            </div>
            
            <div className="flex justify-center mt-8">
                <button className="border-2 w-32 rounded-lg text-sm h-10 bg-amber-900 hover:border-blue-400 transition" onClick={handleClickButton}>아이디 찾기</button>
            </div>
        </div>
    )
}

export default FindIdForm;