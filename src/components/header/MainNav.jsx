import homeImg from '../../../public/home.png'
import searchImg from '../../../public/search.png'
import playImg from '../../../public/play.png'
import alarmImg from '../../../public/heart.png'
import addUserImg from '../../../public/addUser.png'
import userImg from '../../../public/user.png'
import moreMenuImg from '../../../public/more.png'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import messageImg from '../../../public/message.png'
import { useRef, useState } from 'react'
import MenuModal from './MenuModal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { MenuIsModalAtom } from '../../recoil/atoms/MenuAtoms'

function MainNav() {

    const navigate = useNavigate();
    const [isModal, setIsModal] = useRecoilState(MenuIsModalAtom)
    const [isRunningModal, setIsRunningModal] = useState(false)
    
    function navigateHome() {
        navigate("/");
    }

    function handleModal() {
        setIsModal(prev => !prev)
        setIsRunningModal(prev => !prev)
    }

    


    return (
        <header className="font-Jua sm:h-full h-24 w-full sm:w-2/6 flex-col sm:border-r-2 border-gray-500 sm:flex" >
            <div className="text-5xl pt-4 px-4 sm:p-0 sm:my-12 sm:mb-4 sm:justify-center sm:items-center sm:flex sm:cursor-pointer relative font-Dancing text-center" onClick={navigateHome} >
                    CupTea
                    <img src={moreMenuImg} alt="menu" className="w-8 h-8 sm:w-8 sm:h-8 inline transition hover:scale-105 z-auto absolute top-4 right-2 sm:hidden" onClick={() => {setIsModal(true)}}/>
            </div>
            <div className="sm:flex flex-col text-sm sm:mt-24 w-full sm:justify-start sm:ml-12 sm:w-40">
                <ul className='w-full flex sm:flex-col justify-center gap-2 sm:gap-0'>
                    <Menu img={homeImg} key={'home'} link={'/'} >홈</Menu>
                    <Menu img={searchImg} key={'search'} link={':id/my-cuptea'}>내 컵티</Menu>
                    <Menu img={playImg} key={'ask'} link={'quest'}>컵티 GO!</Menu>
                    <Menu img={messageImg} key={'message'} link={':id/visitors'}>방명록</Menu>
                    <Menu img={alarmImg} key={'alarm'} >알람</Menu>
                    <Menu img={addUserImg} key={'addUser'} link={':id/friends'}>친구 추가</Menu>
                </ul>

            </div>
            {isModal && <MenuModal />}
            <div className='flex flex-1 text-sm my-12 mt-32 justify-start ml-12 w-full invisible sm:visible'>
                <ul>
                    <Menu img={userImg} key={'profile'} link={':id/profile'}>프로필</Menu>    
                    <Menu img={moreMenuImg} key={'더보기'}>더 보기</Menu>
                </ul>
            </div>
        </header>
    )
}

export default MainNav