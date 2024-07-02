import kakaoPhoto from '../../../public/kakao.png'
import googlePhoto from '../../../public/google.png'
import LoginInput from "../common/LoginInput";
import { loginMainButtonCss, idPwCss, kakao, google } from "../../css/LoginCss";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import LoginButton from "./LoginButton";
import { useEffect, useCallback, useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginFormAtom, TokenAtom } from '../../recoil/atoms/LoginAtoms';
import { loginSelector } from '../../recoil/selectors/LoginSelectors.js';

function LoginForm() {

    const loginData = useRecoilValue(loginSelector);
    const loginDataReset = useResetRecoilState(LoginFormAtom);
    const navigate = useNavigate();
    const [loginTrigger, setLoginTrigger] = useState(false);
    const setToken = useSetRecoilState(TokenAtom);
    const [socialType, setSocialType] = useState();
    

    const loginSubmit = async () => {
        const loginRequest = JSON.stringify(loginData);
        try {
            const response = await axios({
                method: 'post',
                url: 'http://52.79.137.212:80/service-api/open-api/login',
                data: loginRequest,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status == 200) {
                Swal.fire({
                    title: '로그인 성공!',
                    text: '로그인에 성공하셨습니다',
                    icon: 'success',
                    timer: 2000,
                });
                
                // 헤더에 토큰 삽입
                axios.defaults.headers.common['Authorization'] = `${response.data.token}`;
                // 전역 객체에 토큰 저장
                setToken(response.data.token);
                navigate('/');
                loginDataReset();
            } 

        } catch (error) {
            console.log(error);
            if (error.response.status == 400) {
                Swal.fire({
                    title: '로그인 실패!',
                    text: error.response.data.message,
                    icon: 'error',
                    confirmButtonText: '확인'
                })

                return;
            }
            Swal.fire({
                title: '로그인 실패!',
                text: '서버 오류입니다. 잠시 후 다시 시도해주세요',
                icon: 'error',
                confirmButtonText: '확인'
            })       
        }
    }

    const socialLoginSubmit = async () => {
        
    }

    useEffect(() => {
        if (loginTrigger) {
            console.log('loginTrigger');
            loginSubmit();
        }
        return () => {
           setLoginTrigger(false);   
        }
    }, [loginSubmit])

    useEffect(() => {
        // const request = axios.
    }, [])

    // input validation
    const handleLoginButton = () => {
        console.log('handleLoginButton');
        const regex = /^[a-zA-Z0-9]+$/;
        if (loginData.loginId == '' && !regex.test(loginData.loginId)) {
            Swal.fire({
                title: '로그인 실패!',
                text: '아이디를 입력해주세요',
                icon: 'error',
                confirmButtonText: '확인'
            })
            return;
        } else if (loginData.password == '') {
            Swal.fire({
                title: '로그인 실패!',
                text: '패스워드를 입력해주세요',
                icon: 'error',
                confirmButtonText: '확인'
            })
            return;
        }

        setLoginTrigger(true);
    }

    const handleSocialLoginButton = (socialType) => {
        //TODO
        socialType == 'kakao' ? 
        window.location.href = 'http://cuptea.site/oauth2/authorization/kakao' : 
        window.location.href = 'http://cuptea.site/oauth2/authorization/google'
    }

    const handleForgotIdPasswordButton = () => {
        navigate('/login/findUser');
    }


    return (
        <form>
            <LoginInput text={'text'} id={'id'} placeholder={'아이디를 입력해주세요...'} login={'id'}>ID</LoginInput>
            <LoginInput text={'password'} id={'password'} placeholder={'비밀번호를 입력해주세요...'} login={'password'} setLoginTrigger={setLoginTrigger}>Password</LoginInput>
            {/* <DefaultCheckBox>로그인 유지</DefaultCheckBox> */}
            <LoginButton css={loginMainButtonCss} ifTrue={false} login={'login'} handleClick={handleLoginButton}>로그인</LoginButton>
            <LoginButton css={idPwCss} ifTrue={false} login={'findIdPassword'} handleClick={handleForgotIdPasswordButton}>비밀번호를 잊으셨나요?</LoginButton>
            <LoginButton css={kakao} img={kakaoPhoto} login={'social'} socialType={'kakao'} handleClick={handleSocialLoginButton}></LoginButton>
            <LoginButton css={google} img={googlePhoto} login={'social'} socialType={'google'}></LoginButton>
        </form>
    )
}

export default LoginForm