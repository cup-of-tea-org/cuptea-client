import { forwardRef } from "react"

const VisitorsDialog = forwardRef(function VisitorsDialog({children, ...props}, ref) {

    return (
        <>  
                <dialog ref={ref} className="transition w-3/4 bg-gray-200 bg-opacity-0 animate-openmenu h-3/4 backdrop:bg-gray-300 backdrop:opacity-10 ">
                    <div className="opacity-100 bg-pink-800 w-24 h-24">
                        
                    </div>
                </dialog>
           
        </>
    )
})

export default VisitorsDialog