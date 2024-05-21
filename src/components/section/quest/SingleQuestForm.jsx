import playImg from '../../../../public/play.png'
import FileInput from '../../common/FileInput'
import QuestionNameInput from './QuestNameInput'
import questionImg from '../../../../public/question.png'
import TextArea from '../../common/TextArea'
import { useRecoilValue } from 'recoil'
import MultipleChoiceInput from './MultipleChoiceInput'
import QuestTypeSelectBox from './QuestTypeSelectBox'
import { QuestTypeAtom } from '../../../recoil/atoms/QuestTypeAtoms'

function SingleQuestForm() {


    const questType = useRecoilValue(QuestTypeAtom);
    const questionList = ['주관식', '객관식'];

    return (
        <>
            <div className='w-full font-Jua'>
                <div className='flex mt-8 mx-4'>
                    <img src={playImg} alt='playImg' className='w-16'/>
                    <h1 className='mt-5 text-xl'>질문 만들기</h1>
                </div>
                <section className='w-full rounded-xl flex justify-center items-center'>
                    <form>
                        <QuestionNameInput>제목</QuestionNameInput>
                        <div className='flex justify-center items-center w-full mt-8'>
                            <p className='w-80 mr-12'>질문 유형
                                <QuestTypeSelectBox list={questionList} id={'question'}></QuestTypeSelectBox>
                            </p>
                        </div>
                        <FileInput id={'thumbnail'} img={questionImg}>썸네일</FileInput>
                        {
                            questType === '주관식' ? <TextArea /> : <div className=''>
                                <MultipleChoiceInput id={'answer1'}>1번 답</MultipleChoiceInput>
                                <MultipleChoiceInput id={'answer2'}>2번 답</MultipleChoiceInput>
                                <MultipleChoiceInput id={'answer3'}>3번 답</MultipleChoiceInput>
                                </div>
                        }
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

export default SingleQuestForm