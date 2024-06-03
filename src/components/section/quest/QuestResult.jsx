import cupTeaImg from '../../../../public/logo.png'

function QuestionResult({answers, questions}) {
    return (
        <div className="animate-goUpLevel2 bg- text-white shadow-2xl shadow-cyan-500/50 w-3/4 flex h-3/4 justify-center items-center overflow-y-scroll border border-zinc-700 rounded-2xl">
            <div className="w-full h-full rounded-xl">
                <h1 className="text-2xl text-center my-4 flex justify-center items-center ">
                    <img src={cupTeaImg} alt='컵티 이미지' className='w-24 h-24 inline ' />
                    컵티 결과
                    </h1>
                {questions.map((it, index) => (
                        <div key={it.id} className="text-center w-full  h-1/6 my-2">
                            <p className="my-4 " >{`Q${index + 1}. : ${it.question}`}</p>
                            <p className="rounded-xl ">{`답 : ${answers[index]}`}</p>
                        </div>
                ))}
            </div>
                    
        </div>
    )
}

export default QuestionResult