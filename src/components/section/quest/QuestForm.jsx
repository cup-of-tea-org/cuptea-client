import playImg from '../../../../public/play.png'
import { normal, normalWhite } from '../../../css/LoginCss'
import FileInput from '../../common/FileInput'
import JoinSelectBox from '../../join/JoinSelectBox'
import QuestButton from './QuestButton'
import QuestionNameInput from './QuestNameInput'
import questionImg from '../../../../public/question.png'
import TextArea from '../../common/TextArea'

function QuestForm() {

    const questionList = ['일상', '운동', '여행'];

    return (
        <>
            <div className='w-screen font-Jua'>
                <div className='flex mt-8 mx-4'>
                    <img src={playImg} alt='playImg' className='w-16'/>
                    <h1 className='mt-5 text-xl'>질문지 만들기</h1>
                </div>
                <section className='w-full rounded-xl flex justify-center items-center animate-openmenu'>
                    <form>
                        <QuestionNameInput>제목</QuestionNameInput>
                        <div className='flex justify-center items-center w-full mt-8'>
                            <p className='w-80 mr-12'>테마
                                <JoinSelectBox list={questionList} id={'question'}></JoinSelectBox>
                            </p>
                        </div>
                        <FileInput id={'thumbnail'} img={questionImg}>썸네일</FileInput>
                        <TextArea />
                        <div className='flex justify-center items-center'>
                            <button type='button' className='w-24 text-sm py-2 bg-black border-2 border-slate-100 rounded-md text-center my-4 hover:scale-105 transition mx-8 hover:border-sky-500'>
                                만들기
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}

export default QuestForm