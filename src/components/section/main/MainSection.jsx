import { useNavigate } from "react-router-dom"

function MainSection({children, ...props}) {

    const navigate = useNavigate();

    function handleClickNav() {
        navigate(props.nav);
    }

    return (
        <>
            <div className="mt-80 border-2 rounded-3xl border-gray-300 mx-8 
            flex flex-col md:flex-col justify-center items-center 
            text-sm cursor-pointer hover:border-green-400 transition hover:scale-105" onClick={handleClickNav}>
                <img src={props.img} alt="menu" className="w-20 h-20 mx-12 my-4 md:w-40 md:h-40"/>
                <p className="md:text-center mb-4">{children}</p>
            </div>
        </>
    )
}

export default MainSection