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
            <div className='w-screen  font-Jua'>
                <ul className='flex h-0 justify-between items-center sm:px-24 sm:pt-8 sm:h-1/4 invisible sm:visible'>
                    {DUMMY_USER.map((it) => (
                        <ReadyUser key={it.id} id={it.id} img={it.img ?? userImg} nickname={it.nickname} link={`:${it.id}/visitors`}></ReadyUser>
                        ))}
                </ul>
                <section className='flex-row w-full h-4/4 sm:flex justify-center items-center sm:justify-between sm:items-center mt-12 sm:h-2/4 text-center sm:flex-row  animate-goUpLevel3'>
                    <MainSection img={playImg} nav={'quest'}>Play!</MainSection>
                    <MainSection img={coffeeImg} nav={':id/cuptea'}>My CupTea</MainSection>
                    <MainSection img={userImg} nav={'/:id/profile'} >프로필</MainSection>
                </section>
            </div>
        </>
    )
}

export default Home