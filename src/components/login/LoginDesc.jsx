import { useRecoilValue } from "recoil"
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

function LoginDesc() {

    const navigate = useNavigate();

    function handleJoinClick() {
        navigate("/login/join");
    }

    return (
        <div className="flex flex-col flex-1 justify-center items-center font-Jua ">
            <div className="my-8">
                <div className="text-5xl text-center py-4">무엇이든 질문해보세요!</div>
                <div className="text-5xl text-center">CupTea와 함께</div>
            </div>
            <LoginForm />
            <div className="pt-6 text-sm">
                계정이 없으신가요? &nbsp;
                <button 
                className="text-sky-500  hover:scale-105 transition underline"
                onClick={handleJoinClick}
                >
                    회원가입
                </button>
            </div>
            
        </div>
        
    )
}

export default LoginDesc