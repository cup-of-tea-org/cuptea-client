import OptionBox from "../common/OptionBox"

function JoinSelectBox({children, ...props}) {

    return (   
        <>  
            <label htmlFor={props.id} className="pr-5 text-2xl">{children}</label>
            <select id={props.id} 
                    className="text-white sm:text-sm w-32 sm:h-8 h-6 bg-black border-white border-2 text-center rounded-md hover:border-blue-500 transition"
            >
                {children}
                {   
                    props.list.map(it => (
                        <OptionBox key={it}>{it}</OptionBox>
                    ))
                }
            </select>
        </>
    )
}

export default JoinSelectBox