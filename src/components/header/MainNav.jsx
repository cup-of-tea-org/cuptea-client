import homeImg from '../../../public/home.png'
import searchImg from '../../../public/search.png'
import playImg from '../../../public/play.png'
import alarmImg from '../../../public/heart.png'
import addUserImg from '../../../public/addUser.png'
import userImg from '../../../public/user.png'
import moreMenuImg from '../../../public/more.png'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'

function MainNav() {

    const navigate = useNavigate();
    
    function navigateHome() {
        navigate("/");
    }

    return (
        <header className="font-Jua h-full w-80 flex flex-col border-r-2 border-gray-500">
            <div className="text-4xl my-12 justify-center items-center flex cursor-pointer" onClick={navigateHome}>
                    CupTea
            </div>
            <div className="flex flex-1 text-sm my-12 justify-start ml-8 w-40">
                <ul className='w-full'>
                    <Menu img={homeImg} key={'home'}>홈</Menu>
                    <Menu img={searchImg} key={'search'}>검색</Menu>
                    <Menu img={playImg} key={'ask'}>질문하러 가기</Menu>
                    <Menu img={alarmImg} key={'alarm'}>알림</Menu>
                    <Menu img={addUserImg} key={'addUser'}>친구 추가</Menu>
                </ul>
            </div>
            <div className='flex flex-1 text-sm my-12 mt-20 justify-start ml-8 w-full'>
                <ul>
                    <Menu img={userImg} key={'profile'}>프로필</Menu>    
                    <Menu img={moreMenuImg} key={'더보기'}>더 보기</Menu>    
                </ul>        
            </div>
        </header>
    )
}

export default MainNav