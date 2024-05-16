import LoginButton from "./LoginButton"
import kakaoPhoto from '../../../public/kakao.png'
import googlePhoto from '../../../public/google.png'
import LoginInput from "../common/LoginInput";
import { loginMainButtonCss, idPwCss, kakao, google } from "../../css/LoginCss";
import DefaultCheckBox from "../common/DefaultCheckBox";


    function LoginForm() {

    return (
        <form>
            <LoginInput text={'text'} id={'id'} placeholder={'아이디를 입력해주세요...'}>ID</LoginInput>
            <LoginInput text={'password'} id={'password'} placeholder={'비밀번호를 입력해주세요...'}>Password</LoginInput>
            <DefaultCheckBox>로그인 유지</DefaultCheckBox>
            <LoginButton css={loginMainButtonCss} ifTrue={false}>로그인</LoginButton>
            <LoginButton css={idPwCss} ifTrue={false}>비밀번호를 잊으셨나요?</LoginButton>
            <LoginButton css={kakao} img={kakaoPhoto} isSocial={true}></LoginButton>
            <LoginButton css={google} img={googlePhoto} isSocial={true}></LoginButton>
            
        </form>
    )
}

export default LoginForm