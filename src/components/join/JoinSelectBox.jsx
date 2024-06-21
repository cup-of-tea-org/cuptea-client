import { useState } from "react"
import OptionBox from "../common/OptionBox"
import { useSetRecoilState } from "recoil";
import { joinSelector } from "../../recoil/selectors/JoinSelectors";

function JoinSelectBox({children, ...props}) {

    const setFormData = useSetRecoilState(joinSelector);

    function handleSelect(e) {
        switch(e.target.value) {
            case '여행' :
                setFormData({
                    interest: 'TRAVEL'
                })
                break;
            case '운동':
                setFormData({
                    interest: 'SPORTS'
                })
                break;
            case '카페':
                setFormData({
                    interest: 'CAFE'
                })
                break;
        }
    }

    return (   
        <div>  
            <label htmlFor={props.id} className="pr-5 text-2xl ">{children}</label>
            <select id={props.id} 
                    className="text-white sm:text-sm w-32 sm:h-8 h-6 bg-black border-white border-2 text-center rounded-md hover:border-blue-500 transition"
                    onChange={handleSelect}
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

export default JoinSelectBox