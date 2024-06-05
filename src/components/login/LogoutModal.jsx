import { redirect } from 'react-router-dom';
import closeImg from '../../../public/close.png'
import ModalButton from '../common/ModalButton'
import { useRef, useState, forwardRef } from 'react';
import alertImg from '../../../public/alert.png'
import LogoutButton from './LogoutButton';


const LogoutModal = forwardRef(function LogoutModal({children}, ref) {

    
    const [isCompleted, setIsCompleted] = useState(false);

    const closeDialog = () => {
        ref.current.close()
    }
    
    return (
        <>
            <dialog ref={ref} className=" transition bg-zinc-900 animate-openmenu sm:w-4/12 sm:h-1/4 w-3/4 h-2/6  backdrop:bg-gray-300 backdrop:opacity-20 border-4 border-zinc-700 rounded-2xl overflow-hidden"  >
                <div className="relative cursor-pointer ">
                    <img src={closeImg} alt="닫기" className="w-6 h-6 absolute top-4 right-4 cursor-pointer border-2 rounded-xl hover:border-red-500" onClick={closeDialog}/>
                </div>
                <div className="w-full h-full">
                    <div className=" h-full flex justify-center flex-col items-center text-lg dark:text-gray-200 shadow text-gray-400">
                        <img src={alertImg} alt='알림' className="w-8 h-8 mb-4" />
                        <p>{children}</p>
                        <div>
                            <LogoutButton setIsCompleted={setIsCompleted} >Yes</LogoutButton>
                            <LogoutButton closeDialog={closeDialog}>No</LogoutButton>
                        </div>
                    </div>
                </div>
                
            </dialog>
        </>
    )
})

export default LogoutModal