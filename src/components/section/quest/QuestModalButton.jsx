import { useNavigate } from "react-router-dom"

function QuestModalButton({children,  handleCloseDialog, ...props}) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/${props.id}/${props.id}/cuptea`) // props.id/roomId/cuptea 로 바껴야함.
    }

    return (

        <>
            <button className="mx-8 pt-1 mt-2 border-2 px-4 border-zinc-700 rounded-2xl text-lg hover:bg-white hover:text-zinc-800 transition" onClick={children === 'Yes' ? handleClick : handleCloseDialog}>{children}</button>
        </>
    )
}

export default QuestModalButton