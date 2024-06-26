import questionImg from '../../../public/question.png'
import logoutImg from '../../../public/logout.png'
import { useRecoilState, useSetRecoilState } from 'recoil'
import LogoutModal from '../login/LogoutModal'
import { MenuIsModalAtom, MoreAboutAtom } from '../../recoil/atoms/MenuAtoms'
import { useRef } from 'react'
import closeImg from '../../../public/close.png'

function MenuModal() {

    const [moreAboutModal, setMoreAboutModal] = useRecoilState(MoreAboutAtom)
    const dialogRef = useRef();

    const setModal = useSetRecoilState(MenuIsModalAtom)

    function handleMoreAboutModal() {
        setMoreAboutModal(prev => !prev)
        dialogRef.current.showModal()
    }

    function handleCloseDialog() {
        setModal(prev => !prev)
    }


    return (
        <div>
           
            <div className="sm:w-68 sm:h-28 w-80 h-80 z-10 border fixed bg-black transition animate-openmenu ml-8 mt-24 flex flex-col justify-center items-center ">
                <div className="cursor-pointer ">
                    <img src={closeImg} alt="닫기" className="sm:w-6 sm:h-6 w-8 h-8 absolute top-1 right-1 cursor-pointer border-2 rounded-2xl hover:border-red-500" onClick={handleCloseDialog}/>
                </div>
                <div className="border w-full h-full sm:text-lg text-2xl text-center flex justify-center items-center hover:bg-gray-600 transition cursor-pointer">
                    문제 신고
                    <img src={questionImg} alt='신고' className='w-4 h-4 ml-1 mb-1'/>
                </div>
                <div className=" w-full h-full border text-center sm:text-lg text-2xl flex justify-center items-center hover:bg-stone-800 transition cursor-pointer" onClick={handleMoreAboutModal}>
                    로그아웃
                    <img src={logoutImg} alt='신고' className='w-5 h-5 mb-1'/>
                    
                </div>
            </div>
            <LogoutModal ref={dialogRef}>로그아웃 모달</LogoutModal>

        </div>
    )
}

export default MenuModal