import { useState } from "react";
import likeImg from '../../../public/like.png'
import fillHeartImg from '../../../public/fill_heart.png'

function VisitorsLike({children, ...props}) {

    const [clickLike, setClickLike] = useState(props.like);
    const [isClickedLike, SetIsClickedLike] = useState(false);
    const [alreadyClicked, SetAlreadyClicked] = useState(false);

    function handleAddLike() {
        setClickLike(prev => prev + 1)
        SetIsClickedLike(prev => !prev)
        SetAlreadyClicked(prev => !prev);
    }


    function handleAlreadyClicked() {
        setClickLike(prev => prev - 1)
        SetIsClickedLike(prev => !prev)
        SetAlreadyClicked(prev => !prev);
    }

    return (
        <>
            <div className={props.css}>
                <img src={isClickedLike ? fillHeartImg : likeImg} alt='좋아요' className={isClickedLike ? 'sm:w-5 sm:h-5 sm:ml-2 ml-2 w-8 h-8 cursor-pointer mr-1': 'sm:w-6 sm:h-6 sm:ml-2 ml-2 w-8 h-8 cursor-pointer'} onClick={alreadyClicked ? handleAlreadyClicked : handleAddLike}/>
                <p>{clickLike}</p>
            </div>
        </>
    )
}

export default VisitorsLike