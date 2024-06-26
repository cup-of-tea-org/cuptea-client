import { Outlet, useNavigate } from "react-router-dom"
import MainNav from "../components/header/MainNav"
import axios from "axios"
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { TokenAtom } from "../recoil/atoms/LoginAtoms";

function MainLayout() {

    const navigate = useNavigate();
    const token = useRecoilValue(TokenAtom);

    useEffect(() => {
        // 임시 => 추후 홈 페이지에 불러올 데이터가 있을 경우 헤더에 토큰을 넣어서 서버로 보낸 후 유효기간 검증
        if (token == '') {
            navigate("/login");
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