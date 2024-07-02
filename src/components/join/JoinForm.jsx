import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import DateBox from "../common/DateBox";
import LoginInput from "../common/LoginInput"
import ProfileInput from "../common/ProfileInput";
import JoinSelectBox from "./JoinSelectBox"
import JoinButton from "./JoinButton";
import { idPwCss, loginMainButtonCss } from "../../css/LoginCss";
import { loginInput } from "../../css/FormCss";
import { JoinAtoms } from "../../recoil/atoms/JoinAtoms";
import { joinSelector } from "../../recoil/selectors/JoinSelectors";
import { json, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import logoImg from '../../../public/logo.png';
import Swal from "sweetalert2";

function JoinForm() {

    const interest = ["여행", "운동", "카페"];

    const location = useLocation();
    const reset = useResetRecoilState(JoinAtoms);
    const [isSendData, setIsSendData] = useState(false);
    const joinFormData = useRecoilValue(joinSelector);
    const [idValue, setIdValue] = useState();
    const [emailValue, setEmailValue] = useState();
    const setFormData = useSetRecoilState(joinSelector);
    const [showEmailCheckModal, setShowEmailCheckModal] = useState(false);
    const navigate = useNavigate();
    const emailCheckRef = useRef();
    const emailCodeCheckRef = useRef();
    const [emailCode, setEmailCode] = useState();

     //이탈시 recoilstate 초기화
     useEffect(() => {
        return () => {
            reset();
        }
    }, [location])

    useEffect(() => {
          (() => {
            window.addEventListener("beforeunload", preventReload);  
        })
        ();
             
          return () => {
            window.removeEventListener("beforeunload", preventReload);
          };
        }, []);

    // 회원가입
    useEffect(() => {
        async function handleSumbit() {
            console.log("handleSubmit 실행")
            try {
                const requestBody = new FormData();
                const jsonJoinUserRequest = JSON.stringify(joinFormData[0]);
                const joinUserRequest = new Blob([jsonJoinUserRequest], {type: 'application/json'});

                const profileImage = joinFormData[1].profileImage
                requestBody.append('joinUserRequest', joinUserRequest);
                requestBody.append('file', profileImage);
                
                console.log(joinFormData);
                const request = await axios({
                    method: 'post',
                    url: 'http://52.79.137.212:80/service-api/open-api/user',
                    data: requestBody,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
                if (request.status == 201) {
                    const result = await Swal.fire({
                        icon: 'success',
                        title: '회원가입 성공',
                        text: '회원가입이 완료되었습니다.',
                        confirmButtonText: '확인'

                })
                    
                    reset();
                    if (result.isConfirmed) {
                        navigate('/login');
                    }
                        
                }
            }catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: '회원가입 실패',
                    text: '회원가입에 실패했습니다.',
                    confirmButtonText: '확인'
                })
            }   
        }  
        if (isSendData) {
            handleSumbit();
        }
        return () => {
            setIsSendData(false);
        }


    }, [isSendData]);

    // id중복검사
    useEffect(() => {
        if (idValue !== undefined) {
            sendIdOverlap();
        }
        return () => {
            setIdValue();
        }

    }, [sendIdOverlap])

    // 이메일 인증
   useEffect(() => {
        if (emailValue !== undefined) {
            sendEmailCheck();
        }
        
   }, [sendEmailCheck])

   // 이메일 코드 인증
   useEffect(() => {
    if (emailCode !== undefined ) {
        sendEmailCheckCode();
    }
    return () => {
        setEmailValue();
        setEmailCode();
    }
}, [sendEmailCheckCode])
    

    // 아이디 중복 검사
    async function sendIdOverlap() {
        try {
            const jsonRequest = JSON.stringify(idValue);
            const response =  await axios({
                method: 'post',
                url: 'http://52.79.137.212:80/service-api/open-api/user/validate-id',
                data: jsonRequest, 
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (response.status == 200) {
                Swal.fire({
                    icon: 'success',
                    title: '사용가능한 아이디입니다.',
                    text: '사용가능한 아이디입니다.',
                    showConfirmButton: false,
                    timer: 1500,
                })
                setFormData({
                    loginId : idValue.loginId
                });
            } 
        }catch (error) {

            if (error.response.status == 500) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!!',
                    text: "서버 에러입니다. 관리자에게 문의해주세요",
                    confirmButtonText: '확인'
                })
                return;
            }

            Swal.fire({
                icon: 'error',
                title: 'Error!!',
                text: error.response.data,
                confirmButtonText: '확인'
            })
        }
    };
    // email check
    async function sendEmailCheck() {
        Swal.showLoading(Swal.getDenyButton());
        try {
            console.log('sendEmailCheck 실행')
            const email = JSON.stringify(emailValue);
            const response = await axios({
                method: 'post',
                url: 'http://52.79.137.212:80/service-api/open-api/user/validate-email',
                data: email,
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            

            if (response.status == 200) {
                Swal.close();
                setFormData({email : emailValue.email});
                Swal.fire({
                    icon: 'success',
                    title: '이메일 전송 성공!',
                    text: '이메일로 인증번호를 전송했습니다.',
                    showConfirmButton: false,
                    timer: 1500,
                })
            } 
        }catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'ERROR!!',
                text: error.response.data,
                confirmButtonText: '확인'
            })
            emailCheckRef.current.close();
            
            console.log(error);
        }
    }
    // email code check
    async function sendEmailCheckCode() {
        try {
            const request = JSON.stringify(emailCode);
            console.log(request)
            const response = await axios({
                method: 'post',
                url: 'http://52.79.137.212:80/service-api/open-api/user/validate-email-code',
                data: request,
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if (response.status == 200) {
                
                setEmailValue();
                setEmailCode();
                Swal.fire({
                    icon: 'success',
                    title: '이메일 번호 인증 성공!',
                    text: '이메일 인증이 완료되었습니다.',
                    showConfirmButton: false,
                    timer: 1500,
                })
                setShowEmailCheckModal(false)
            } 
        }catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: '이메일 인증 실패',
                text: error.response.data,
                
            })
            setEmailValue();
            setShowEmailCheckModal(false)
            console.log(error);
        }
    }

    const handleIdOverlap = (id) => {
        setIdValue((prev) => ({...prev,loginId: id}));
    }

    const handleEmailCheck = (email) => {
        console.log(email);
        setEmailValue({email: email});
    }

    const handleCloseEmailCheckDialog = () => {
        setShowEmailCheckModal(false);
    }

    const handleEmailCheckCode = () => {
        
        setEmailCode({
            emailCode : emailCodeCheckRef.current.value
        });
    }

    const preventReload = (e) => {
        e.preventDefault();
        reset();
    }


   
    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-12">
                    <ProfileInput type={'file'} id={'profile'} css={loginInput}></ProfileInput>
                    <LoginInput id={'id'} text={'id'} placeholder={'사용하실 아이디를 입력해주세요...'} join={'join'} handleIdOverlap={handleIdOverlap}>ID</LoginInput>
                    <LoginInput id={'password'} text={'password'} placeholder={'사용하실 패스워드를 입력해주세요...'} join={'join'}>Password</LoginInput>
                    <LoginInput id={'email'} text={'email'} placeholder={'이메일을 입력해주세요...'} join={'join'} handleEmailCheck={handleEmailCheck} setShowEmailCheckModal={setShowEmailCheckModal}>Email</LoginInput>
                    <LoginInput id={'phone'} text={'phone'} placeholder={'번호를 - 없이 입력해주세요...'} join={'join'}>Phone</LoginInput>
                    <JoinSelectBox list={interest} id={'interest'}>Interest</JoinSelectBox>
                    <DateBox id={'생년월일'}>Birthday</DateBox>
                    <JoinButton css={idPwCss + ' hover:border-emerald-300 cursor-pointer'} isSocial={false} isProvision={true}>약관보기</JoinButton>
                    <JoinButton css={loginMainButtonCss + ' hover:border-emerald-300 cursor-pointer'} isSocial={false} isJoinButton={true} setIsSendData={setIsSendData}>회원가입</JoinButton>
                    {((showEmailCheckModal && emailValue !== '') && joinFormData[0].email !== '') && (
                            <dialog ref={emailCheckRef} className="transition bg-black text-white animate-openmenu w-4/12 h-2/4 backdrop:bg-gray-300 backdrop:opacity-20 flex flex-col justify-center items-center border-2 rounded-2xl ">
                                <img src={logoImg} className="w-28 h-28"></img>
                                <div className="flex flex-col w-3/4 h-1/4 text-center">
                                    
                                    <label htmlFor="text" className="text-3xl my-4">[이메일 인증번호]</label>
                                    <input 
                                        type="text" 
                                        placeholder="이메일 인증코드를 입력해주세요" 
                                        className="h-12 mt-4 text-lg border-2 rounded-xl bg-black p-2 text-center"
                                        ref={emailCodeCheckRef}
                                    />
                                </div>
                                <div className="">
                                    <button onClick={handleEmailCheckCode} className="border-2 p-2 mt-16 mr-16 w-20 rounded-2xl text-sm hover:border-blue-400 transition">확인</button>
                                    <button onClick={handleCloseEmailCheckDialog} className="border-2 p-2 w-20 rounded-2xl text-sm hover:border-red-400 inline transition">닫기</button>
                                </div>
                            </dialog>
                    )}
            </div>
        </div>
        
    )
}

export default JoinForm