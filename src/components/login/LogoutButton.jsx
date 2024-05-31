import { redirect, useNavigate } from "react-router-dom"

function LogoutButton({children, setIsCompleted, closeDialog, ...props}) {

    const navigate = useNavigate()

    function handleAgreeClick() {

        setIsCompleted(prev => !prev)
        navigate('/login')
        closeDialog
    }

    return (

        <>
            <button className="mx-8 pt-1 mt-2 border-2 px-4 border-zinc-700 rounded-2xl text-lg hover:bg-white hover:text-zinc-800 transition" onClick={children === 'Yes' ? handleAgreeClick : closeDialog}>{children}</button>
        </>
    )
}

export default LogoutButton