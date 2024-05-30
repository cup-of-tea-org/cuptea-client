import { forwardRef } from "react"
import AlarmComponent from "./AlarmComponent"
import closeImg from '../../../public/close.png'

const DefaultModal = forwardRef(function DefaultModal({children, ...props}, ref) {

    function handleCloseDialog() {
        ref.current.close()
    }

    return (
        <>
             <dialog ref={ref} className=" transition bg-zinc-900 animate-openmenu w-4/12 h-2/4 backdrop:bg-gray-300 backdrop:opacity-20 border-4 border-zinc-700 rounded-2xl">
                <div className="relative cursor-pointer ">
                    <img src={closeImg} alt="닫기" className="w-6 h-6 absolute top-4 right-4 cursor-pointer border-2 rounded-xl hover:border-red-500" onClick={handleCloseDialog}/>
                </div>
                <div className="w-full h-full overflow-y-scroll">
                    <div className=" h-12 flex justify-center my-4 items-center text-lg dark:text-gray-200 shadow text-gray-400">
                        {children}
                    </div>
                    {props.type === 'alarm' ? <AlarmComponent /> : undefined}
                </div>
            </dialog>
        </>
    )
})

export default DefaultModal