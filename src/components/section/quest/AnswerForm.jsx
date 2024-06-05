import { useNavigate, useParams } from 'react-router-dom'
import questExImg from '../../../assets/questEx.jpg'
import QuestButton from './QuestButton'
import { DUMMY_QUESTIONS } from '../../common/commonjs/DummyQuestions';
import { useEffect, useState } from 'react';
import MultipleAnswer from './MultipleAnswer';
import EssayAnswer from './EssayAnswer';
import QuestionResult from './QuestResult';

function AnswerForm() {

    const {id, roomId} = useParams();
    const [userAnswers, setUserAnswers] = useState([]); // recoil로 바꿔야함.
    const [showAnswers, setShowAnswers] = useState(false);
    const [imgCss, setImgCss] = useState('w-full h-3/4 object-contain')
    const activeQuestionIndex = userAnswers.length;
    const navigate = useNavigate();


    const handleSubmitAnswer = (answer) => {
        console.log(activeQuestionIndex)
        setUserAnswers([...userAnswers, answer]);

    if (showAnswers) {
            setShowAnswers(prev => {
                return !prev
            });
            setImgCss('w-full h-3/4 object-contain animate-openmenu')
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setImgCss('w-full object-contain h-2/4 animate-goUpLevel')
            setShowAnswers(prev => {
                console.log('timeout')
                return !prev
            })
        }, 3000)

        

        return () => {
            clearTimeout(timer)
        }
    },[userAnswers, activeQuestionIndex])

    if (activeQuestionIndex > 4) {
        return (
            <div className='w-screen font-Jua flex justify-center items-center mt-16'>
                <QuestionResult answers={userAnswers} questions={DUMMY_QUESTIONS}/>
            </div>
        )
    }

    

    return (
        <>
            <div className='w-screen font-Jua mt-8 '>
                <div className='w-full h-4/6 mt-12'>
                    <img src={questExImg} alt='문제' className={imgCss}/>                           
                    <div className='w-full h-3/6 mt-12'>
                        <div className='h-1/4 mt-4 sm:mx-12 flex flex-col justify-center items-center rounded-xl '>
                            <div className='sm:mt-32 mt-12'>
                                <h1 className='text-3xl mb-8 mx-8'>{`QUIZ_${activeQuestionIndex + 1} : ${DUMMY_QUESTIONS[activeQuestionIndex].question}`}</h1>
                                {showAnswers ? (DUMMY_QUESTIONS[activeQuestionIndex].type === 'multiple' ? 
                                <MultipleAnswer key={DUMMY_QUESTIONS[activeQuestionIndex].id} 
                                                answers={DUMMY_QUESTIONS[activeQuestionIndex].answers}
                                                OnSelect={handleSubmitAnswer}
                                /> 
                                : <EssayAnswer id={DUMMY_QUESTIONS[activeQuestionIndex].question} OnSelect={handleSubmitAnswer}/>) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnswerForm