import { useNavigate } from "react-router-dom"
import { MenuIsModalAtom } from "../../recoil/atoms/MenuAtoms";
import { useRecoilState } from "recoil";

function Menu({children, ...props}) {

    const navigate = useNavigate();
    const [isModal, setIsModal] = useRecoilState(MenuIsModalAtom)

    function handleNavigate() {
        props.link && navigate(props.link)
        if (children === '더 보기') {
            setIsModal(prev => !prev)
        }
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