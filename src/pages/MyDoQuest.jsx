import { useNavigate, useParams } from "react-router-dom"
import coffeeImg from '../../public/coffee.png'
import Dummy_Image from '../../public/ex1.jpg'
import CupTeaRoom from "../components/section/quest/CupTeaRoom";
import { DUMMY_CUPTEAS } from "../components/common/commonjs/DummyCupTeas";
import { DUMMY_MY_CUPTEAS } from "../components/common/commonjs/DummyMyCupTea";

function MyDoQuest() {

    const param = useParams('id');
    const navigate = useNavigate()

    function handleNavigate() {
        navigate('/')
    }

    return (
        <>
            <div className='w-screen font-Jua '>
                <section>
                    <div className='flex fixed w-full text-white bg-black-200 mt-4 pl-4'>
                        <img src={coffeeImg} alt='playImg' className='w-16 h-full cursor-pointer' onClick={handleNavigate}/>
                        <h1 className='mt-5 text-xl pl-4'>{'내가 한 CupTea'}</h1>
                    </div>
                    <div className='flex flex-col w-full justify-center items-center py-20'>
                        {DUMMY_MY_CUPTEAS.map((it) => (
                            <CupTeaRoom key={it.id} name={it.name} image={Dummy_Image} to={it.to}></CupTeaRoom>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default MyDoQuest