import { forwardRef } from "react";
import closeImg from '../../../../public/close.png'
import alertImg from '../../../../public/alert.png'
import ModalButton from "../../common/ModalButton";
import QuestModalButton from "./QuestModalButton";


const QusetModal = forwardRef(function QuestModal({children, setIsCompleted,isCompleted, ...props }, ref) {

    function handleCloseDialog() {
        ref.current.close()
    }

    return (
        <>
            <dialog ref={ref} className=" transition bg-zinc-900 animate-openmenu w-10/12 sm:w-4/12 h-1/4  backdrop:bg-gray-300 backdrop:opacity-20 border-4 border-zinc-700 rounded-2xl overflow-hidden"  >
                <div className="relative cursor-pointer ">
                    <img src={closeImg} alt="닫기" className="w-6 h-6 absolute top-4 right-4 cursor-pointer border-2 rounded-xl hover:border-red-500" onClick={handleCloseDialog}/>
                </div>
                {isCompleted ? <div className="h-full flex justify-center items-center text-xl text-white">
                    완료되었습니다!
                    </div> : <div className="w-full h-full">
                    <div className=" h-full flex justify-center flex-col items-center text-lg dark:text-gray-200 shadow text-gray-400">
                        <img src={alertImg} alt='알림' className="w-8 h-8 mb-4" />
                        <p>{children}</p>
                        <div>
                            <QuestModalButton id={props.id}>Yes</QuestModalButton>
                            <QuestModalButton>NO</QuestModalButton>
                        </div>
                    </div>
                </div>}
                
            </dialog>
        </>
    )
})

export default QusetModal