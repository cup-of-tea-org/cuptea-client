import { useParams } from "react-router-dom"
import { DUMMY_CUPTEAS } from "../../common/commonjs/DummyCupTeas";
import coffeeImg from '../../../../public/coffee.png'
import Dummy_Image from '../../../../public/ex1.jpg'
import CupTeaRoom from "./CupTeaRoom";

function MyQuestionList() {
    const param = useParams('id');

    return (
        <>
            <div className='w-full font-Jua overflow-scroll'>
                <section>
                    <div className='flex fixed w-full text-white bg-black-200'>
                        <img src={coffeeImg} alt='playImg' className='w-16 h-full '/>
                        <h1 className='mt-5 text-xl pl-4'>{param.id + ' 님에게 보내는 컵티 목록'}</h1>
                    </div>
                    <div className='flex flex-col w-full justify-center items-center py-8'>
                        {DUMMY_CUPTEAS.map((it) => (
                            <CupTeaRoom name={it.name} image={Dummy_Image} count={it.count}></CupTeaRoom>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default MyQuestionList