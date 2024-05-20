import userImg from '../../../public/user.png'
import MainSection from './main/MainSection'
import { DUMMY_USER } from '../common/commonjs/DummyUser'
import playImg from '../../../public/play.png'
import coffeeImg from '../../../public/coffee.png'
import alarmImg from '../../../public/heart.png'

function Home({children, ...props}) {


    return (
        <>
            <div className='w-full'>
                <ul className='flex justify-between items-center px-24 mt-4'>
                    {DUMMY_USER.map((it) => (
                        <div className='flex flex-col border-2 w-16 justify-center items-center rounded-md border-black hover:border-violet-300 hover:scale-105 hover:bg-gray-200 hover:text-black transition'>
                            <li key={it.id} className='w-12 text-center text-xs transition cursor-pointer '>
                                <img src={userImg} />
                            </li>
                            <div className='text-center text-xs truncate w-12'>{it.nickname}</div>
                        </div>
                        ))}
                </ul>
                <section className='flex flex-1 justify-center items-center h-72 text-center'>
                    <MainSection img={playImg} nav={'quest'}>질문하러 가기</MainSection>
                    <MainSection img={coffeeImg} nav={'cuptea'}>컵티 보기</MainSection>
                    <MainSection img={alarmImg} nav={'alarm'}>알림</MainSection>
                </section>
            </div>
        </>
    )
}

export default Home