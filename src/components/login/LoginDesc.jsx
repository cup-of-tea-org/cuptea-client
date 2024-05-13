import { useRecoilValue } from "recoil"
import { loginDescTextAtom } from "../../recoil/atoms/loginAtoms";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";

function LoginDesc() {

    const loginDescText = useRecoilValue(loginDescTextAtom);

    return (
        <div className="flex flex-col flex-1 justify-center items-center font-Dongle ">
            <div>
                <div className="text-6xl text-center">{loginDescText.text1}</div>
                <div className="text-6xl text-center">{loginDescText.text2}</div>
            </div>
            <LoginForm />
            <div className="pt-8 text-xl">계정이 없으신가요? / <button className="text-sky-500  hover:scale-110 transition underline hover:decoration-wavy">회원가입</button></div>
            
        </div>
        
    )
}

export default LoginDesc