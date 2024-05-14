import { useRecoilValue } from "recoil"
import { loginDescTextAtom } from "../../recoil/atoms/loginAtoms";
import LoginInput from "../common/LoginInput";
import LoginButton from "./LoginButton";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

function LoginDesc() {

    const loginDescText = useRecoilValue(loginDescTextAtom);
    const navigate = useNavigate();

    function handleJoinClick() {
        navigate("/login/join");
    }

    return (
        <div className="flex flex-col flex-1 justify-center items-center font-Jua ">
            <div className="my-8">
                <div className="text-5xl text-center py-4">{loginDescText.text1}</div>
                <div className="text-5xl text-center">{loginDescText.text2}</div>
            </div>
            <LoginForm />
            <div className="pt-8 text-sm">
                계정이 없으신가요? / 
                <button 
                className="text-sky-500  hover:scale-110 transition underline hover:decoration-wavy"
                onClick={handleJoinClick}
                >
                    회원가입
                </button>
            </div>
            
        </div>
        
    )
}

export default LoginDesc