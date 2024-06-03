function QuestionResult({answers}) {
    return (
        <div className="animate-goUpLevl2 bg-zinc-500">
            {answers.map((it, index) => (
                <div>{`ANSWER_${index} : ${it}`}</div>
            ))}
        </div>
    )
}

export default QuestionResult