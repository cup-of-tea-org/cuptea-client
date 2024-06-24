import closeImg from '../../../public/close.png'
import { forwardRef, useState } from 'react'
import DefaultCheckBox from './DefaultCheckBox';

const DialogCustom = forwardRef(function DialogCustom({children, ...props}, ref) {

    function handleCloseDialog() {
        ref.current.close();
    }
    
    return (

        <dialog ref={ref} className="transition bg-black text-white animate-openmenu w-4/12 h-2/4 backdrop:bg-gray-300 backdrop:opacity-20">
                <div className="relative cursor-pointer ">
                    <img src={closeImg} alt="닫기" className="w-6 h-6 absolute top-8 right-4 cursor-pointer border-2 rounded-xl hover:border-red-500" onClick={handleCloseDialog}/>
                </div>  
                <div className="text-white w-full flex justify-center mt-12">
                    <div className="text-2xl absolute w-3/4 text-center flex flex-col">
                        {props.title}
                        <p className="text-sm w-full h-3/4 top-8 mt-6 border-2 p-2 border-white">
                            {children}
                        </p>
                    <div className='flex justify-center mt-4'>
                        <DefaultCheckBox>(필수)동의합니다</DefaultCheckBox>
                    </div>
                    <div className='flex justify-center w-full'>
                        <button 
                        className='flex text-sm border-2 border-white hover:border-blue-500 justify-center items-center rounded-xl transition w-20 h-8 mt-4' 
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