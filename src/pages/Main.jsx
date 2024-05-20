import { Outlet } from "react-router-dom"
import MainNav from "../components/header/MainNav"

function MainLayout() {
    
    return (
        <>
            <div className="flex h-screen bg-black text-zinc-50">
                <MainNav />
                <Outlet />
            </div>
        </>
    )
};

export default MainLayout