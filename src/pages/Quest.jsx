import { useNavigate, useParams } from 'react-router-dom'
import questExImg from '../assets/questEx.jpg'
import QuestButton from '../components/section/quest/QuestButton'

function QuestLayout({props}) {

    const navigate = useNavigate()
    const {id, roomId} = useParams();


    return (
        <div className='w-screen font-Jua mt-8 '>
            <div className='w-full h-2/4 mt-16'>
                <img src={questExImg} alt='문제' className='w-full h-full object-contain'/>                           
                <div className='w-full h-40 mt-12'>
                    <div className='border-2 h-24 mt-4 sm:mx-12 mx-8 flex flex-col justify-center items-center rounded-xl'>
                        <p className='text-2xl '>컵티 예제 제목입니다.</p>
                    </div>
                    <div className='flex justify-center items-center mt-8'>
                        <QuestButton css={'border-2 py-2 px-4 rounded-2xl hover:bg-yellow-100 transition hover:scale-105 hover:text-black shadow-lg shadow-violet-500/50'} link={`/${id}/${roomId}/quest?quest=1`}>Start!</QuestButton>
                    </div>
                </div>
            </div>
        </div>
    )

    
}

export default QuestLayout