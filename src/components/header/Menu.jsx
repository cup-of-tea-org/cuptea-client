import { useNavigate } from "react-router-dom"
import { MenuIsModalAtom } from "../../recoil/atoms/MenuAtoms";
import { useRecoilState } from "recoil";
import { useRef, useState } from "react";
import DefaultModal from "../common/DefaultModal";

function Menu({children, ...props}) {

    const navigate = useNavigate();
    const [isModal, setIsModal] = useRecoilState(MenuIsModalAtom)
    const dialogRef = useRef();
    const [isClickedButton, setIsClickedButton] = useState(false);

    function handleNavigate() {
        props.link && navigate(props.link)
        if (children === '더 보기') {
            setIsModal(prev => !prev)
        }else if (children === '알람') {
            dialogRef.current.showModal()
        }
    }

    return (
        <>  
            <li className="mt-4 cursor-pointer hover:bg-neutral-800 sm:w-40 sm: hover:scale-105 rounded-2xl transition " key={props.key} onClick={handleNavigate}>
                <img src={props.img} alt="menu" className="w-6 h-6  sm:w-8 sm:h-8 inline transition hover:scale-105 z-auto "/>
                <div className="inline ">{children}</div>
            </li>
            <DefaultModal ref={dialogRef} type={'alarm'} setIsClickedButton={setIsClickedButton}>알림</DefaultModal>

        </>
    )
}

export default Menu