import OptionBox from "../common/OptionBox"

function JoinSelectBox({children, ...props}) {


    return (   
        <>  
            <label htmlFor={props.id}>{children}</label>
            <select id={props.id}>
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