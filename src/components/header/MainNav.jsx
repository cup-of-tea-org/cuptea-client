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
import { useState } from 'react'
import MenuModal from './MenuModal'
import { useRecoilState } from 'recoil'
import { MenuIsModalAtom } from '../../recoil/atoms/MenuAtoms'

function MainNav() {

    const navigate = useNavigate();
    const [isModal, setIsModal] = useRecoilState(MenuIsModalAtom)
    
    function navigateHome() {
        navigate("/");
    }

    function handleModal() {
        setIsModal(prev => !prev)
    }

    return (
        <header className="font-Jua h-full w-80 flex-col border-r-2 border-gray-500 hidden sm:flex">
            <div className="text-4xl my-12 justify-center items-center flex cursor-pointer font-Dancing" onClick={navigateHome}>
                    CupTea
            </div>
            <div className="flex flex-1 text-sm mt-12 justify-start ml-8 w-40">
                <ul className='w-full'>
                    <Menu img={homeImg} key={'home'} link={'/'} >홈</Menu>
                    <Menu img={searchImg} key={'search'} link={':id/my-cuptea'}>내가 한 컵티</Menu>
                    <Menu img={playImg} key={'ask'} link={'quest'}>컵티하러 가기</Menu>
                    <Menu img={messageImg} key={'message'} link={':id/visitors'}>방명록</Menu>
                    <Menu img={addUserImg} key={'addUser'}>친구 추가</Menu>
                </ul>

            </div>
            {isModal && <MenuModal />}
            <div className='flex flex-1 text-sm my-12 mt-32 justify-start ml-8 w-full'>
                <ul>
                    <Menu img={userImg} key={'profile'} link={':id/profile'}>프로필</Menu>    
                    <Menu img={moreMenuImg} key={'더보기'} >더 보기</Menu>
                </ul>
            </div>
        </header>
    )
}

export default MainNav