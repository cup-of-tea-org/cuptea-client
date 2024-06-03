import { useRef } from "react"

function EssayAnswer({OnSelect, id}) {

    const textRef = useRef();

    return (
        <>
            <div className="h-full">
                <label htmlFor={key} className="block"></label>
                <textarea 
                    id={key} 
                    type="text" 
                    className="w-full h-full text-black border-4 hover:border-blue-500 rounded-lg transition"
                    ref={textRef}
                />
                
            </div>
            <div className="h-12 flex justify-center items-center mt-4">
                <button 
                    className="border-2 px-4 rounded-xl hover:bg-yellow-400 transition hover:scale-105 hover:text-black"
                    onClick={() => OnSelect(textRef.current.value)}
                >
                    NEXT!
                </button>
            </div>
            
        </>
    )
}

export default EssayAnswer