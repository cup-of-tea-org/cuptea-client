import LoginButton from "./LoginButton"
import kakaoPhoto from '../../../public/kakao.png'
import googlePhoto from '../../../public/google.png'
import LoginInput from "../common/LoginInput";

    function LoginForm() {

    const loginMainButtonCss = "bg-amber-900 h-10 flex justify-center items-center my-5 border-2 rounded-md text-sm px-1 transition hover:scale-105";
    const idPwCss = "w-60 h-10 text-sm py-2 bg-black border-2 border-slate-100 rounded-md text-center my-5 hover:scale-105 transition";
    const kakao = "w-60 h-11 bg-black border-2 border-slate-900 rounded-lg text-center overflow-hidden my-5 transition hover:scale-105";
    const google = "w-60 h-10 rounded-lg overflow-hidden hover:scale-105 transition";

  

    return (
        <form>
            <LoginInput text={'text'} id={'id'}>ID</LoginInput>
            <LoginInput text={'password'} id={'password'}>Password</LoginInput>
            <div className="mt-2">
                <label htmlFor="keepLogin" className="mr-2">로그인 유지</label>
                <input id="keepLogin" type="checkbox" className=""/>
            </div>
            <LoginButton css={loginMainButtonCss} ifTrue={false}>로그인</LoginButton>
            <LoginButton css={idPwCss} ifTrue={false}>비밀번호를 잊으셨나요?</LoginButton>
            <LoginButton css={kakao} img={kakaoPhoto} isSocial={true}></LoginButton>
            <LoginButton css={google} img={googlePhoto} isSocial={true}></LoginButton>
            
        </form>
    )
}

export default LoginForm