import { useParams } from 'react-router-dom'
import { DUMMY_CUPTEAS } from '../../common/commonjs/DummyCupTeas';
import coffeeImg from '../../../../public/coffee.png'
                    import Dummy_Image from '../../../../public/ex1.jpg'
import CupTeaRoom from './CupTeaRoom';

function QuestionList() {

    const param = useParams();
    

    return (
        <>
            <div className='w-screen font-Jua overflow-y-scroll'>
                <section>
                    <div className='flex fixed w-full text-white bg-black-200 mt-4 pl-4'>
                        <img src={coffeeImg} alt='playImg' className='w-16 h-full '/>
                        <h1 className='mt-5 text-xl pl-4'>{param.id + ' 님에게 보내는 컵티 목록'}</h1>
                    </div>
                    <div className='flex flex-col w-full justify-center items-center py-20'>
                        {DUMMY_CUPTEAS.map((it) => (
                            <CupTeaRoom key={it.id} name={it.name} image={Dummy_Image} count={it.count} link={`/:${it.id}/:roomNum/singleQuestForm`}></CupTeaRoom>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

export default QuestionList