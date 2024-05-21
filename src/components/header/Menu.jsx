import { useNavigate } from "react-router-dom"

function Menu({children, ...props}) {

    const navigate = useNavigate();

    function handleNavigate() {
        navigate(props.link);
    }

    return (
        <>
            <li className="mt-4 cursor-pointer hover:bg-stone-800 w-40 hover:scale-105 rounded-3xl transition" key={props.key} onClick={handleNavigate}>
                <img src={props.img} alt="menu" className="w-8 h-8 inline transition hover:scale-105 z-auto "/>
                <div className="inline">{children}</div>
            </li>
        </>
    )
}

export default Menu