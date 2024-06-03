function MultipleAnswer({answers, OnSelect}) {
    return (
        <div className="flex justify-between">
            {answers.map((it) => (
                <div key={it} 
                    className="border-2 px-4 py-2 rounded-2xl transition hover:scale-105 cursor-pointer hover:bg-violet-100 hover:text-black shadow-xl shadow-violet-500/50"
                    onClick={() => OnSelect(it)}
                >
                        {it}
                </div>
            ))}
        </div>
    )
}

export default MultipleAnswer