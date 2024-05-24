import userImg from '../../../../public/user.png'
import QuestButton from './QuestButton'
import { normal, normalWhite } from '../../../css/LoginCss'
import { useParams } from 'react-router-dom'


function ReadyQuestDetail() {

    const param = useParams();

    return (
        <>
            <div className='w-screen h-screen overflow-y-scroll font-Jua'>
                <section className='flex flex-1 justify-center items-center h-72 text-center'>
                    <div className='border-4 border-violet-400 rounded-xl h-64 w-56 mt-24 flex justify-center items-center bg-white'>
                        <img src={userImg} alt='userImg' className='w-48 h-48'/>
                    </div>
                </section>
                <div className='flex justify-center text-4xl items-center h-40 pt-12'>
                    <p>{param.id} 에게 CupTea 할까요?</p>
                </div>
                <div className='flex justify-center '>
                    <QuestButton css={normal} link={'form'}>질문지 만들기</QuestButton>
                    <QuestButton css={normalWhite} link={'questList'}>빈 질문지 보기</QuestButton>
                </div>
            </div>
        </>
    )
}

export default ReadyQuestDetail