import { Outlet, useNavigate } from "react-router-dom"
import MainNav from "../components/header/MainNav"
import axios from "axios"
import { useEffect } from "react";

function MainLayout() {

    const navigate = useNavigate();
    console.log("navigate 실행")

    useEffect(() => {
        if (axios.defaults.headers.common["Authorization"] == null) {
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