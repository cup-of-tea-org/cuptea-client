function MultipleAnswer({answers, OnSelect}) {
    return (
        <div className="flex justify-between">
            {answers.map((it) => (
                <div key={it} 
                    className="border-2 p-4 rounded-2xl transition hover:scale-105 cursor-pointer hover:bg-violet-300 hover:text-black"
                    onClick={() => OnSelect(it)}
                >
                        {it}
                </div>
            ))}
        </div>
    )
}

export default MultipleAnswer