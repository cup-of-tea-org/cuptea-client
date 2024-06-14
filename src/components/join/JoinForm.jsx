import { useRecoilState } from "recoil";
import DateBox from "../common/DateBox";
import LoginInput from "../common/LoginInput"
import ProfileInput from "../common/ProfileInput";
import JoinSelectBox from "./JoinSelectBox"
import LoginButton from "../login/LoginButton";
import { idPwCss, loginMainButtonCss } from "../../css/LoginCss";
import { loginInput } from "../../css/FormCss";

function JoinForm() {

    const interest = ["여행", "운동", "카페"];

    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-4">
                <form>
                    <ProfileInput type={'file'} id={'profile'} css={loginInput}></ProfileInput>
                    <LoginInput id={'id'} text={'id'} placeholder={'사용하실 아이디를 입력해주세요...'}>ID</LoginInput>
                    <LoginInput id={'password'} text={'password'} placeholder={'사용하실 패스워드를 입력해주세요...'}>Password</LoginInput>
                    <LoginInput id={'email'} text={'email'} placeholder={'이메일을 입력해주세요...'}>Email</LoginInput>
                    <LoginInput id={'phone'} text={'phone'} placeholder={'번호를 입력해주세요...'}>Phone</LoginInput>
                    <JoinSelectBox list={interest} id={'interest'}>Interest</JoinSelectBox>
                    <DateBox id={'생년월일'}>Birthday</DateBox>
                    <LoginButton css={idPwCss + ' hover:border-emerald-300 cursor-pointer'} isSocial={false} isProvision={true}>약관보기</LoginButton>
                    <LoginButton css={loginMainButtonCss + ' hover:border-emerald-300 cursor-pointer'} isSocial={false}>회원가입</LoginButton>
                    
                </form>
            </div>
        </div>
        
    )
}

export default JoinForm