import { Outlet, useLocation, useNavigate } from "react-router-dom"
import MainNav from "../components/header/MainNav"
import axios from "axios"
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TokenAtom } from "../recoil/atoms/LoginAtoms";

function MainLayout() {

    const navigate = useNavigate();
    const [token, setToken] = useRecoilState(TokenAtom);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // token validation
    useEffect(() => {
        console.log(token);
        const queryStringToken = searchParams.get('token');
        if (queryStringToken != null) {
            console.log(queryStringToken);
            setToken(queryStringToken);
        } else {
            if (token == '' || token == null || token == undefined) {
                navigate('/login');
            }
        }
    },[])

    

   
    
    return (
        <>
            <div className="sm:flex h-screen bg-black text-zinc-50 overflow-y-auto">
                <MainNav />
                <Outlet />
            </div>
        </>
    )
};

export default MainLayout