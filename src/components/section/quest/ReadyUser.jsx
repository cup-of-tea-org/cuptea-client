import { useRecoilState, useSetRecoilState } from "recoil"
import { UserClickedAtom, UserIsClickedAtom } from "../../../recoil/atoms/UserAtoms"
import { useRef, useState } from "react"
import { UserCss } from "../../../css/UserCss";


function ReadyUser({id, ...props}) {

    const [isClicked, setIsClicked] = useState(false);
    // const [user, setUser] = useRecoilState(UserClickedAtom);
    // const setClicked = useSetRecoilState(UserIsClickedAtom);

    // TODO
    // 컴포넌트 하나더 만들어서 filter() 로 클릭된거 이외에는 모두 삭제 후 질문지 만들기, 빈 질문지 보기 버튼까지 포함된 페이지 만들기.

    function handleIsClicked(id) {
        setIsClicked(prev => !prev)
    }

    return (
        
        <div key={id} 
        className={isClicked ? UserCss + 'bg-white text-black scale-105': UserCss } onClick={() => handleIsClicked(id)} >
            <li className='w-12 text-center text-xs transition cursor-pointer '>
                <img src={props.img} />
            </li>
            <div className='text-center text-xs truncate w-12'>{props.nickname}</div>
            
        </div>
    )
}

export default ReadyUser