import { useState, useEffect } from 'react';
import coffeeImg from '../../../public/coffee.png'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { IdAtom } from '../../recoil/atoms/LoginAtoms';

function NewPasswordForm() {

    const [newPassword, setNewPassword] = useState('');
    const [newPasswordCheckValue, setNewPasswordCheckValue] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const navigate = useNavigate();
    const idValue = useRecoilValue(IdAtom);

    const handleNewPasswordInput = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$|^(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,20}$/;
        if (!passwordRegex.test(e.target.value)) {
            Swal.fire({
                title: '비밀번호 형식 오류',
                text: '비밀번호는 영문자, 숫자, 특수문자 중 2가지를 포함한 8자 이상 20자 이하로 입력해주세요.',
                icon: 'error',
                confirmButtonText: '확인'
            })
            return;
        }
        setNewPassword(e.target.value);
    }

    const handleNewPasswordInputCheck = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$|^(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,20}$/;
        if (!passwordRegex.test(e.target.value)) {
            Swal.fire({
                title: '비밀번호 형식 오류',
                text: '비밀번호는 영문자, 숫자, 특수문자 중 2가지를 포함한 8자 이상 20자 이하로 입력해주세요.',
                icon: 'error',
                confirmButtonText: '확인'
            })
            return;
        }
        setNewPasswordCheckValue(e.target.value);
    }

    const handleButtonClick = (e) => {

        if (newPassword == '' || newPasswordCheckValue == '') {
            Swal.fire({
                title: '비밀번호 입력 오류',
                text: '비밀번호를 입력해주세요.',
                icon: 'error',
                confirmButtonText: '확인'
            })
            return;
        }

        if (newPassword != newPasswordCheckValue) {
            Swal.fire({
                title: '비밀번호 불일치',
                text: '비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
                icon: 'error',
                confirmButtonText: '확인'
            })
            return;
        }
        setIsButtonClicked(true);
    }

    

    const newPasswordRequest = async () => {
        console.log(idValue);
        const request = JSON.stringify({loginId: idValue, password: newPassword});
        try {
            const response = await axios({
                method: 'put',
                url: 'http://localhost:9090/service-api/open-api/user/password',
                data: request,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.status == 200) {
                const result = await Swal.fire({
                    title: '비밀번호 변경 성공!',
                    text: '비밀번호 변경에 성공했습니다. 로그인해주세요!',
                    icon: 'success',
                    confirmButtonText: '확인'
                })

                if (result.isConfirmed) {
                    navigate('/login');
                }
            }
        }catch (error) {
            if (error.response.status == 400) {
                Swal.fire({
                    title: '비밀번호 변경 실패!',
                    text: error.response.data,
                    icon: 'error',
                    confirmButtonText: '확인'
                })
            } else {
                Swal.fire({
                    title: '비밀번호 변경 실패!',
                    text: '서버와의 통신에 실패했습니다. 다시 시도해주세요.',
                    icon: 'error',
                    confirmButtonText: '확인'
                })
            }
           
        }
    }

    useEffect(() => {
        if (isButtonClicked) {
            newPasswordRequest();
        }
        return () => {
            setIsButtonClicked(false);
        }
    }, [newPasswordRequest, isButtonClicked])

    return (
        <div className="flex flex-col flex-1 items-center mt-32 font-Jua">
            <img src={coffeeImg} alt='아이디찾기' className="w-40 h-40 "/>
            <div className="my-10">
                <div className="flex justify-center items-center flex-col">
                    <label htmlFor={'password'} className="mr-2 text-4xl mb-6">새로운 비밀번호</label>
                    <input
                        id={'password'}
                        type="password"
                        onBlur={handleNewPasswordInput}
                        className='w-72 text-center h-12 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm'
                        placeholder="새로운 비밀번호를 입력해주세요"
                    />
                    <input
                        id={'newPassword check'}
                        type="password"
                        onBlur={handleNewPasswordInputCheck}
                        className='w-72 mt-8 text-center h-12 text-base px-1 bg-black border-2 border-slate-100 rounded-md hover:border-blue-500 transition placeholder:text-sm'
                        placeholder="한번 더 입력해주세요"
                    />
                </div>
                
                <div className="flex justify-center mt-8">
                    <button className="border-2 w-32 rounded-lg text-sm h-10 bg-amber-900 hover:border-blue-400 transition" 
                            onClick={handleButtonClick}
                    >등록
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewPasswordForm;


