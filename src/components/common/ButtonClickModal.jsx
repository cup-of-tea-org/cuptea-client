import { forwardRef, useEffect, useState } from "react"
import closeImg from '../../../public/close.png'
import alertImg from '../../../public/alert.png'
import ModalButton from "./ModalButton"

const ButtonClickModal = forwardRef(function ButtonClickModal({children, ...props}, ref) {

    const [isCompleted, setIsCompleted] = useState(false);
    const [timer, setTimer] = useState(3);

    const handleIsComplete = (isComplete) => {
        setIsCompleted(isComplete)
    }

    function handleCloseDialog() {
        ref.current.close()
    }

    useEffect(() => {
        const alertTimer = setTimeout(() => {
            ref.current.close()
            console.log('clicked')

        }, 3000)

        if (alertTimer <= 0) {
            clearTimeout(alertTimer)
        }

        return () => clearTimeout(alertTimer);
    }, [isCompleted])

   

   

    return (
        <>  
             <dialog ref={ref} className=" transition bg-zinc-900 animate-openmenu w-4/12 h-1/4 backdrop:bg-gray-300 backdrop:opacity-20 border-4 border-zinc-700 rounded-2xl overflow-hidden">
                <div className="relative cursor-pointer ">
                    <img src={closeImg} alt="닫기" className="w-6 h-6 absolute top-4 right-4 cursor-pointer border-2 rounded-xl hover:border-red-500" onClick={handleCloseDialog}/>
                </div>
                {isCompleted ? <div className="h-full flex justify-center items-center text-xl text-white">
                    완료되었습니다!
                    {/* <p className="text-xs">{timer} 초 후에 사라집니다.</p> */}
                    </div> : <div className="w-full h-full">
                    <div className=" h-full flex justify-center flex-col items-center text-lg dark:text-gray-200 shadow text-gray-400">
                        <img src={alertImg} alt='알림' className="w-8 h-8 mb-4" />
                        <p>{children}</p>
                        <div>
                            <ModalButton setIsCompleted={handleIsComplete}>Yes</ModalButton>
                            <ModalButton>No</ModalButton>
                        </div>
                    </div>
                </div>}
                
            </dialog>
        </>
    )
})

export default ButtonClickModal