import questionImg from '../../../../public/question.png'
import userImg from '../../../../public/user.png'
import { DUMMY_USER2 } from '../../common/commonjs/DummyUser2'
import ReadyUser from './ReadyUser'

function ReadyQuest() {

    return (
        <>
            <div className='w-screen h-screen font-Jua'>
                <section className='flex flex-1 justify-center items-center h-72 text-center animate-godownLevel'>
                    <img src={questionImg} alt='questionImage' className='w-72 mt-12'/>
                </section>
                <article className='text-center text-4xl mt-8'>
                        누구에게 질문할까요?
                </article>
                <div>
                    <ul className='flex flex-wrap sm:gap-0 gap-1 sm:flex-1 justify-between items-center px-12 sm:px-12 mt-12 transition'>
                        {DUMMY_USER2.map((it) => (
                            <ReadyUser key={it.id} id={it.id} img={it.img ?? userImg} nickname={it.nickname} link={`/quest/:${it.id}`}></ReadyUser>
                        ))}
                    </ul>
                </div>
                <div className='flex justify-center pt-12 text-2xl sm:mt-8'>
                    컵티를 보낼 친구를 클릭해주세요!
                </div>
                <div className='flex justify-center items-center mt-8'>
                    <button type='button' className='text-xl w-32 border-2 sm:mt-8 border-gray-800 rounded-xl hover:border-blue-500 transition hover:scale-105'>Next</button>
                </div>
            </div>
        </>
    )
}

export default ReadyQuest