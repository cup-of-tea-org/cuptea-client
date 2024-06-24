import kakaoPhoto from '../../../public/kakao.png'
import googlePhoto from '../../../public/google.png'
import LoginInput from "../common/LoginInput";
import { loginMainButtonCss, idPwCss, kakao, google } from "../../css/LoginCss";
import { useRecoilValue, useResetRecoilState } from "recoil";
import LoginButton from "./LoginButton";
import { useEffect, useCallback, useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { loginSelector } from '../../recoil/selectors/LoginSelectors';
import { useNavigate } from "react-router-dom";
import { LoginFormAtom } from '../../recoil/atoms/LoginAtoms';

function LoginForm() {

    const loginData = useRecoilValue(loginSelector);
    const loginDataReset = useResetRecoilState(LoginFormAtom);
    const navigate = useNavigate();
    const [loginTrigger, setLoginTrigger] = useState(false);
    const idPwCheckRef = useRef();

    

    const loginSubmit = async () => {
        const loginRequest = JSON.stringify(loginData);
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:9090/service-api/open-api/login',
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
                
                loginDataReset();
                setLoginTrigger(prev => {
                    return !prev;
                });
                navigate('/')
                // axios.defaults.headers.common['Authorization'] = `${response.data}`
            } 

        } catch (error) {
            Swal.fire({
                title: '로그인 실패!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: '확인'
            })

            setLoginTrigger(prev => {
                return !prev;
            });

            return;
        }
    }

    useEffect(() => {
        if (loginTrigger) {
            loginSubmit();
        }
    }, [loginSubmit])

    // input validation
    const handleLoginButton = () => {
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

        setLoginTrigger(prev => {
            return !prev;
        });
    }

    const handleForgotIdPasswordButton = () => {
        navigate('/login/findUser');
    }

    const handleCloseDialog = () => {
        idPwCheckRef.current.close();
    }


    return (
        <form>
            <LoginInput text={'text'} id={'id'} placeholder={'아이디를 입력해주세요...'} login={'id'}>ID</LoginInput>
            <LoginInput text={'password'} id={'password'} placeholder={'비밀번호를 입력해주세요...'} login={'password'} setLoginTrigger={setLoginTrigger}>Password</LoginInput>
            {/* <DefaultCheckBox>로그인 유지</DefaultCheckBox> */}
            <LoginButton css={loginMainButtonCss} ifTrue={false} login={'login'} handleClick={handleLoginButton}>로그인</LoginButton>
            <LoginButton css={idPwCss} ifTrue={false} login={'findIdPassword'} handleClick={handleForgotIdPasswordButton}>비밀번호를 잊으셨나요?</LoginButton>
            <LoginButton css={kakao} img={kakaoPhoto} login={'social'} kakao={'kakao'}></LoginButton>
            <LoginButton css={google} img={googlePhoto} login={'social'} google={'google'}></LoginButton>
        </form>
    )
}

export default LoginForm