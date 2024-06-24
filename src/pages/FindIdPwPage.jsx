import { useState } from "react";
import FindIdForm from "../components/login/FindIdForm";
import { useEffect } from "react";
import searchImg from '../../public/search.png';
import FindPwForm from "../components/login/FindPwForm";

function FindIdPwPage() {

    const [showInput, setShowInput] = useState('id');
    const [idFindButtonCss, setIdFindButtonCss] = useState('w-1/2 h-full transition hover:bg-violet-300 rounded-xl');
    const [passwordFindButtonCss, setPasswordFindButtonCss] = useState('w-1/2 h-full rounded-xl hover:bg-teal-400 transition');

    const handleNavClick = (type) => {

        if (type === 'id') {
            setIdFindButtonCss('w-1/2 h-full transition bg-violet-300 rounded-xl')
            setPasswordFindButtonCss('w-1/2 h-full rounded-xl hover:bg-teal-400')
            
        } else {
            setPasswordFindButtonCss('w-1/2 h-full rounded-xl bg-teal-400')
            setIdFindButtonCss('w-1/2 h-full transition hover:bg-violet-300 rounded-xl')
        }

        setShowInput(type);
    }

    useEffect(() => {
        handleNavClick('id');
    },[]);

    return (
        
        <div className="flex flex-col flex-1 items-center mt-24 font-Jua">
            <img src={searchImg} alt='아이디찾기' className="w-48 h-48 mb-8"/>

            <div className="w-3/4 h-16 rounded-xl bg-neutral-800">
                <button className={idFindButtonCss} onClick={() => {handleNavClick('id')}}>아이디 찾기</button>
                <button className={passwordFindButtonCss} onClick={() => {handleNavClick('password')}}>비밀번호 찾기</button>
            </div>
            {showInput === 'id' ?
             <FindIdForm id={'email'}>E-mail</FindIdForm> : <FindPwForm id={'id'}>ID</FindPwForm>}
            
        </div>
        
    )
}

export default FindIdPwPage;