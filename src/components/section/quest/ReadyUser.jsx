import { useRecoilState, useSetRecoilState } from "recoil"
import { UserClickedAtom, UserIsClickedAtom } from "../../../recoil/atoms/UserAtoms"
import { useRef, useState } from "react"
import { UserCss } from "../../../css/UserCss";
import { useNavigate } from "react-router-dom";


function ReadyUser({id, ...props}) {

    const navigate = useNavigate();

    function handleIsClicked(id) {
        navigate(props.link)
    }

    return (
        <div key={id} 
        className={UserCss} onClick={handleIsClicked} >
            <li className='w-12 text-center text-xs transition cursor-pointer'>
                <img src={props.img} alt="질문 이미지" className="animate-goUpLevel2"/>
            </li>
            <div className='text-center text-xs truncate w-12'>{props.nickname}</div>
            
        </div>
    )
}

export default ReadyUser