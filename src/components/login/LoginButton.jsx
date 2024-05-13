
function LoginButton({children, ...props}) {

    return (
        <div className={props.css}>
            <button type="button" className="" >
                {props.isSocial ?
                <img src={props.img} className="w-60 object-cover inline h-10"/>
                    : <div></div>
                }
            {children}            
            </button>
        </div>
    )
}

export default LoginButton