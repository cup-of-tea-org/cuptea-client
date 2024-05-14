import { Outlet } from "react-router-dom"
import LoginDesc from "../components/login/LoginDesc"
import LoginLogo from "../components/login/LoginLogo"


function LoginLayout() {

    
    
    return (
        <>
            <div className="flex h-screen bg-black text-zinc-50">
                <LoginLogo />
                <Outlet />
            </div>
            
        </>
    )
}

export default LoginLayout