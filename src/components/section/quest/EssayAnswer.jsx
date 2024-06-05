import { useRef } from "react"

function EssayAnswer({OnSelect, id}) {

    const textRef = useRef();

    return (
        <>
            <div className="h-full text-lg">
                <label htmlFor={id} className="block"></label>
                <textarea 
                    id={id} 
                    type="text" 
                    className="w-full h-full text-black border-4 rounded-lg transition shadow-xl shadow-violet-500/50"
                    placeholder="답변을 입력해주세요."
                    ref={textRef}
                />
                
            </div>
            <div className="h-12 flex justify-center items-center mt-4">
                <button 
                    className="border-2 px-4 rounded-xl hover:bg-yellow-100 transition hover:scale-105 hover:text-black shadow-xl shadow-yellow-500/50"
                    onClick={() => OnSelect(textRef.current.value)}
                >
                    NEXT!
                </button>
            </div>
            
        </>
    )
}

export default EssayAnswer