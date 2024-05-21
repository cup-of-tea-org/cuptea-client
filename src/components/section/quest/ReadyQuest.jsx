import questionImg from '../../../../public/question.png'
import { DUMMY_USER } from '../../common/commonjs/DummyUser'
import userImg from '../../../../public/user.png'
import LoginButton from '../../login/LoginButton'
import { normal, normalWhite } from '../../../css/LoginCss'
import QuestButton from './QuestButton'

function ReadyQuest() {
    return (
        <>
            <div className='w-full font-Jua'>
                <section className='flex flex-1 justify-center items-center h-72 text-center'>
                    <img src={questionImg} alt='questionImage' className='w-72 mt-12'/>
                </section>
                <article className='text-center text-4xl mt-4'>
                        누구에게 질문할까요?
                </article>
                <div>
                    <ul className='flex justify-between items-center px-12 lg:px-12 mt-12 transition '>
                        {DUMMY_USER.map((it) => (
                            <div className='flex flex-col border-2 w-16 justify-center items-center rounded-md border-gray-800 hover:border-violet-300 hover:scale-105 hover:bg-gray-200 hover:text-black transition'>
                                <li key={it.id} className='w-12 text-center text-xs transition cursor-pointer '>
                                    <img src={userImg} />
                                </li>
                                <div className='text-center text-xs truncate w-12'>{it.nickname}</div>
                            </div>
                            ))}
                    </ul>
                </div>
                <div className='flex justify-center items-center mt-8 '>
                    <button type='button' className='text-sm w-16 border-2 border-gray-800 rounded-xl hover:border-blue-500 transition hover:scale-105'>Next</button>
                </div>
                <div className='flex justify-center '>
                    <QuestButton css={normal} link={'form'}>질문지 만들기</QuestButton>
                    <QuestButton css={normalWhite} link={':id/questList'}>빈 질문지 보기</QuestButton>
                </div>
            </div>
        </>
    )
}

export default ReadyQuest