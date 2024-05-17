import closeImg from '../../../public/close.png'
import { forwardRef } from 'react'
import DefaultCheckBox from './DefaultCheckBox';

const DialogCustom = forwardRef(function DialogCustom({children, ...props}, ref) {

    function handleCloseDialog() {
        ref.current.close();
    }
    
    return (

        <dialog ref={ref} className="transition bg-gray-100 animate-openmenu w-72 h-full backdrop:bg-gray-300 backdrop:opacity-20 ">
                <div className="relative cursor-pointer ">
                    <img src={closeImg} alt="닫기" className="w-6 h-6 absolute top-2 right-2 cursor-pointer border-2 rounded-lg hover:border-red-500" onClick={handleCloseDialog}/>
                </div>  
                <div className="text-white">
                    <div className="top-8 left-4 text-xl absolute text-black w-64">
                        {props.title}
                        <p className="text-sm w-64 h-48 top-8 mt-6 border-2 p-2 border-black">
                            {children}
                        </p>
                    <div className='flex justify-center mt-4'>
                        <DefaultCheckBox>동의합니다</DefaultCheckBox>
                    </div>
                    <div className='flex justify-center w-full'>
                        <button 
                        className='flex text-sm border-2 border-black hover:border-blue-500 justify-center items-center rounded-xl transition w-12 pt-1' 
                        type='button'
                        onClick={handleCloseDialog}
                        >확인
                        </button>
                        
                    </div>
                    
                    
                    </div>
                </div>
        </dialog>
    )
})

export default DialogCustom