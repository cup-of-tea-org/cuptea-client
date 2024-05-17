import { useRef } from "react"
import closeImg from '../../../public/close.png'
import DialogCustom from "../common/DialogCustom";
import { provision } from "../common/Provision";

function LoginButton({children, ...props}) {

    const dialogRef = useRef()

    function handleDialog() {
        dialogRef.current.showModal();
    }
    
    return (
        <>  
            {props.isProvision && (<DialogCustom ref={dialogRef} title={'<약관동의>'}>{provision + provision}</DialogCustom>)}
            <div className={props.css}>
                <button type="button" className="w-full" onClick={handleDialog}>
                    {props.isSocial ?
                    <img src={props.img} className="w-60 object-cover inline h-10"/>
                        : <div></div>
                    }
                {children}            
                </button>
            </div>
                                                         
        </>
       
    )
}

export default LoginButton