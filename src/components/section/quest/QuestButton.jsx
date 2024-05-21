import { useNavigate } from "react-router-dom"

function QuestButton({children, ...props}) {

    const navigate = useNavigate();
    
    function handleNavigate() {
        navigate(props.link);
    }

    return (
        <>
            <button type='button' className={props.css} onClick={handleNavigate}>
                {children}
            </button>
        </>
    )
}

export default QuestButton