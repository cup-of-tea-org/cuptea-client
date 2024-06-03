import questionImg from '../../../../public/question.png'
import { DUMMY_USER } from '../../common/commonjs/DummyUser'
import userImg from '../../../../public/user.png'
import LoginButton from '../../login/LoginButton'
import { normal, normalWhite } from '../../../css/LoginCss'
import QuestButton from './QuestButton'
import { UserCss } from '../../../css/UserCss'
import { useRecoilState } from 'recoil'
import { UserClickedAtom, UserCssAtom } from '../../../recoil/atoms/UserAtoms'
import { DUMMY_USER2 } from '../../common/commonjs/DummyUser2'
import { useState } from 'react'
import ReadyUser from './ReadyUser'

function ReadyQuest() {

    return (
        <>
            <div className='w-screen h-screen overflow-y-scroll font-Jua'>
                <section className='flex flex-1 justify-center items-center h-72 text-center animate-godownLevel'>
                    <img src={questionImg} alt='questionImage' className='w-72 mt-12'/>
                </section>
                <article className='text-center text-4xl mt-8'>
                        누구에게 질문할까요?
                </article>
                <div>
                    <ul className='flex flex-wrap sm:flex-1 justify-between items-center px-12 sm:px-12 mt-12 transition'>
                        {DUMMY_USER2.map((it) => (
                            <ReadyUser key={it.id} id={it.id} img={it.img ?? userImg} nickname={it.nickname} link={`/quest/:${it.id}`}></ReadyUser>
                        ))}
                    </ul>
                </div>
                <div className='flex justify-center pt-12'>
                    컵티를 보낼 친구를 클릭해주세요!
                </div>
                <div className='flex justify-center items-center mt-12 '>
                    <button type='button' className='text-sm w-16 border-2 border-gray-800 rounded-xl hover:border-blue-500 transition hover:scale-105'>Next</button>
                </div>
            </div>
        </>
    )
}

export default ReadyQuest