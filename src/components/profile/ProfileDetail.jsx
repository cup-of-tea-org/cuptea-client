import { useNavigate } from "react-router-dom"

function ProfileDetail({children, ...props}) {

    const navigate = useNavigate();

    function handleClick() {
        console.log(props.link)
        navigate(props.link)
        
    }

        return (
        <>
            <h1 className={props.css} onClick={handleClick}>
                {children}
                <p className="inline px-1" >{props.count} </p>
            </h1>
        </>
    )
}

export default ProfileDetail