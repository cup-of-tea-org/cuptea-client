
function VisitorsComment({children, ...props}) {
    return (
        <>
            
            <li key={props.id} className="mt-4 mx-4 mb-4 h-24 flex items-center justify-center shadow-lg shadow-zinc-500/50">
                <img src={props.img} alt="userImage" className="w-8 h-8 shadow-xl shadow-zinc-500/40"/>
                <p className="mr-16 w-12 truncate text-xs">{props.nickname}</p>
                <p className="w-48 text-xs shadow-lg shadow--500/50">{props.desc}</p>
            </li>
        </>
    )
}

export default VisitorsComment