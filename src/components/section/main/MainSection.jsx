import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import DefaultModal from "../../common/DefaultModal";

function MainSection({children, ...props}) {

    const navigate = useNavigate();
    const dialogRef = useRef();
    const [isClickedButton, setIsClickedButton] = useState(false);

    function handleClickNav() {

        props.isModal ? dialogRef.current.showModal() : navigate(props.nav)
    }

    return (
        <>
            <div className="mt-80 border-0 sm:border-2 rounded-3xl border-gray-300 sm:mx-14 mx-8
            flex flex-col sm:flex-col justify-center items-center 
            text-sm cursor-pointer hover:border-green-400 transition hover:scale-105" onClick={handleClickNav}>
                <img src={props.img} alt="menu" className="sm:w-24 h-20 w-20 sm:h-24 sm:mx-12 my-4"/>
                <p className="md:text-center mb-4">{children}</p>
            </div>
            <DefaultModal ref={dialogRef} type={'alarm'} setIsClickedButton={setIsClickedButton}>알림</DefaultModal>
            
        </>
    )
}

export default MainSection