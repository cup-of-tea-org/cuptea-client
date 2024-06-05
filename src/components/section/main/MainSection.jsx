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
            <div className="h-full sm:h-40 border sm:border rounded-3xl border-gray-300 sm:mx-16 mx-8 my-12 
            flex flex-col sm:flex-col justify-center items-center 
            text-lg cursor-pointer hover:border-green-400 transition hover:scale-105" onClick={handleClickNav}>
                <img src={props.img} alt="menu" className="sm:w-24 h-32 w-24 sm:h-full sm:mx-12 py-4"/>
                <p className="text-center pb-4">{children}</p>
            </div>
            <DefaultModal ref={dialogRef} type={'alarm'} setIsClickedButton={setIsClickedButton}>알림</DefaultModal>
            
        </>
    )
}

export default MainSection