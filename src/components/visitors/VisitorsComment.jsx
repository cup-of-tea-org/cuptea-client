
function VisitorsComment({children, ...props}) {
    return (
        <>
            
            <li key={props.id} className="mt-4 mx-4 mb-4 h-24 flex items-center justify-center shadow-lg shadow-zinc-500/50">
                <img src={props.img} alt="userImage" className="sm:w-12 sm:h-12 w-8 h-8 shadow-xl shadow-zinc-500/40"/>
                <p className="mr-24 w-24 truncate text-lg">{props.nickname}</p>
                <p className="w-48 sm:text-sm h-full overflow-y-scroll text-xs shadow-lg shadow-500/50 ">{props.desc}</p>
            </li>
        </>
    )
}

export default VisitorsComment