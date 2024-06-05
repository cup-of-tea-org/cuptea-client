import { Outlet } from "react-router-dom"
import MainNav from "../components/header/MainNav"

function MainLayout() {
    
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