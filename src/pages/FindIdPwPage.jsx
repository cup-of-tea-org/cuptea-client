import { useState } from "react";
import FindIdForm from "../components/login/FindIdForm";
import { useEffect, useRef } from "react";
import searchImg from '../../public/search.png';
import FindPwForm from "../components/login/FindPwForm";
import logoImg from '../../public/logo.png';
import axios from "axios";
import Swal from "sweetalert2";
import NewPasswordForm from "../components/login/NewPasswordForm";
import { useNavigate } from "react-router-dom";

function FindIdPwPage() {

    const [showInput, setShowInput] = useState('id');
    const [idFindButtonCss, setIdFindButtonCss] = useState('w-1/2 h-full transition hover:bg-violet-300 ');
    const [passwordFindButtonCss, setPasswordFindButtonCss] = useState('w-1/2 h-full hover:bg-teal-400 transition');
    const emailCodeRef = useRef();
    const [showDialog, setShowDialog] = useState(false);
    const [emailCode, setEmailCode] = useState('');
    const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
    const [checkEmailCode, setCheckEmailCode] = useState(false);
    const navigate = useNavigate();


    const handleNavClick = (type) => {

        if (type === 'id') {
            setIdFindButtonCss('w-1/2 h-full transition bg-violet-300 ')
            setPasswordFindButtonCss('w-1/2 h-full hover:bg-teal-400 transition')
            
        } else {
            setPasswordFindButtonCss('w-1/2 h-full bg-teal-400 transition')
            setIdFindButtonCss('w-1/2 h-full transition hover:bg-violet-300 ')
        }

        setShowInput(type);
    }

    const emailCodeRequest = async () => {
        const request = emailCode;
        try {
            const response = await axios.get(
                `http://localhost:9090/service-api/open-api/user/password/${request.toString()}`
            );

            if (response.status == 200) {
                Swal.fire({
                    title: '인증 성공!',
                    text: '새로운 비밀번호를 입력해주세요',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                })
                setShowInput('');
                setShowDialog(false);
                setShowNewPasswordForm(true);
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: '인증 실패!',
                text: '인증코드를 다시 확인해주세요',
                icon: 'error',
                confirmButtonText: '확인'
            })
        }
    }

    useEffect(() => {
        handleNavClick('id');
    },[]);

    useEffect(() => {
        if (checkEmailCode) {
            emailCodeRequest();
        }
        return () => {
            setCheckEmailCode(false);
        }
    }, [emailCodeRequest])

    

    const handleOpenDialog = () => {
        emailCodeRef.current.showModal();
    }

    const handleCloseDialog = () => {
        setShowDialog(false);
    }

    const handleClickButton = () => {
        setCheckEmailCode(true);
    }

    return (
        <>  
            {!showNewPasswordForm ?
                <div className="flex flex-col flex-1 items-center mt-32 font-Jua">
                    <img src={searchImg} alt='아이디찾기' className="w-48 h-48 mb-8"/>

                    <div className="w-3/4 h-16  bg-neutral-800">
                        <button className={idFindButtonCss} onClick={() => {handleNavClick('id')}}>아이디 찾기</button>
                        <button className={passwordFindButtonCss} onClick={() => {handleNavClick('password')}}>비밀번호 찾기</button>
                    </div>
                    {showInput === 'id' && <FindIdForm id={'email'}>E-mail</FindIdForm>}
                    {showInput === 'password' && <FindPwForm id={'id'} handleOpenDialog={handleOpenDialog} setShowDialog={setShowDialog}>ID</FindPwForm>} 
                </div> : <NewPasswordForm></NewPasswordForm>
            }
            
            {showDialog && 
                <dialog ref={emailCodeRef} className="transition bg-black font-Jua text-white animate-openmenu w-4/12 h-2/4 mt-60 backdrop:bg-gray-300 backdrop:opacity-20 flex flex-col justify-center items-center border-2 rounded-2xl">
                    <img src={logoImg} className="w-28 h-28"></img>
                    <div className="flex flex-col w-3/4 h-1/4 text-center">      
                        <label htmlFor="text" className="text-3xl my-4">[이메일 인증번호]</label>
                        <input 
                            type="text" 
                            placeholder="이메일 인증코드를 입력해주세요" 
                            className="h-12 mt-4 text-lg border-2 rounded-xl bg-black p-2 text-center"
                            onBlur={(e) => {setEmailCode(e.target.value)}}
                        />
                    </div>
                    <div className="">
                        <button className="border-2 p-2 mt-16 mr-16 w-20 rounded-2xl text-sm hover:border-blue-400 transition" onClick={handleClickButton}>확인</button>
                        <button className="border-2 p-2 w-20 rounded-2xl text-sm hover:border-red-400 inline transition" onClick={handleCloseDialog}>닫기</button>
                    </div>
                </dialog>
            }
      </>
        
    )
}

export default FindIdPwPage;