import userImg from '../../../public/user.png'
import MainSection from './main/MainSection'
import { DUMMY_USER } from '../common/commonjs/DummyUser'
import playImg from '../../../public/play.png'
import coffeeImg from '../../../public/coffee.png'
import alarmImg from '../../../public/heart.png'

function Home({children, ...props}) {


    return (
        <>
            <div className='w-screen overflow-y-scroll font-Jua'>
                <ul className='flex flex-1 justify-between items-center sm:px-24 mt-8 sm:h-20'>
                    {DUMMY_USER.map((it) => (
                        <div key={it.id} className='flex flex-col border-2 w-16 justify-center items-center rounded-md border-black hover:border-violet-300 hover:scale-105 hover:bg-gray-200 hover:text-black transition'>
                            <li className='w-12 text-center text-xs transition cursor-pointer '>
                                <img src={userImg} />
                            </li>
                            <div className='text-center text-xs truncate w-12'>{it.nickname}</div>
                        </div>
                        ))}
                </ul>
                <section className='flex h-0 sm:flex sm:flex-1 sm:justify-between sm:items-center sm:h-72 text-center sm:flex-row '>
                    <MainSection img={playImg} nav={'quest'}>Play!</MainSection>
                    <MainSection img={coffeeImg} nav={':id/cuptea'}>My CupTea</MainSection>
                    <MainSection img={alarmImg} nav={'alarm'}>알림</MainSection>
                </section>
            </div>
        </>
    )
}

export default Home