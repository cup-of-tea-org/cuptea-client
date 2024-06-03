import { forwardRef, useCallback, useEffect, useRef, useState } from "react"
import ButtonClickModal from "../common/ButtonClickModal";

function FriendList({children, ...props}) {

    const [isCompleted, setIsCompleted] = useState(false);
    const dialogRef = useRef();
   
    function handleClickModal() {
        dialogRef.current.showModal()
        console.log('handleClickModal')
    }

    function handleCloseDialog() {
        dialogRef.current.close()
    }

    return (
        <div className='w-full h-24 flex items-center sm:px-48 px-10 '>
            <img src={props.img} alt='친구 사진' className='w-8 h-8'/>
            <p className="px-2 w-48 truncate">{props.nickname}</p>
            <div className="flex w-full justify-end items-center " >
                <p className="text-center border-2 w-16 cursor-pointer rounded-xl hover:scale-105 transition hover:bg-white hover:text-black shadow-lg shadow-violet-500/50" onClick={handleClickModal}>{children}</p>
            </div>
            <ButtonClickModal
            key={props.nickname}
            ref={dialogRef}
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
            handleCloseDialog={handleCloseDialog}
            >{props.nickname} 님을 삭제하시겠습니까?</ButtonClickModal>
        </div>
        
    )
    
}

export default FriendList