import { useNavigate } from "react-router-dom"

function QuestButton({children,  ...props}) {

    const navigate = useNavigate()

    function handleClickButton() {
        navigate(props.link)
    }

    return (
        <>
            <button type='button' className={props.css} onClick={handleClickButton}>
                {children}
            </button>
        </>
    )
}

export default QuestButton