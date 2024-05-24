import userImg from '../../../public/user.png'
import MainSection from './main/MainSection'
import { DUMMY_USER } from '../common/commonjs/DummyUser'
import playImg from '../../../public/play.png'
import coffeeImg from '../../../public/coffee.png'
import alarmImg from '../../../public/heart.png'
import ReadyUser from './quest/ReadyUser'

function Home({children, ...props}) {


    return (
        <>
            <div className='w-screen overflow-y-scroll font-Jua'>
                <ul className='flex flex-1 justify-between items-center sm:px-24 mt-8 sm:h-20'>
                    {DUMMY_USER.map((it) => (
                        <ReadyUser key={it.id} id={it.id} img={it.img ?? userImg} nickname={it.nickname} link={`:${it.id}/visitors`}></ReadyUser>
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