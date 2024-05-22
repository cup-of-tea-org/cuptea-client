import OptionBox from "../common/OptionBox"

function ProfileSelectBox({children, ...props}) {

    return (   
        <div className="flex items-center">  
            <label htmlFor={props.id} className="text-2xl mr-8">{children}</label>
            <select id={props.id} 
                    className="text-white text-sm w-32 h-6 bg-black border-white border-2 text-center rounded-md hover:border-blue-500 transition"
            >
                {children}
                {   
                    props.list.map(it => (
                        <OptionBox key={it}>{it}</OptionBox>
                    ))
                }
            </select>
        </div>
    )
}

export default ProfileSelectBox