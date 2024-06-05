import { useNavigate, useParams } from 'react-router-dom'
import QuestModal from './QuestModal';
import { useRef, useState } from 'react';
import completeImg from '../../../../public/complete.png'

function CupTeaRoom({...props}) {

    const param = useParams('id');
    const [isCompleted, setIsCompleted] = useState(false);
    const dialogRef = useRef();

    const navigate = useNavigate();

    function handleNavigate() {
        console.log(props.id)
        dialogRef.current.showModal()
        
    }


    return (
        <div className='w-full' key={props.id}>
            <div>
                <div className='flex justify-center items-center my-8 mx-12 flex-col md:flex-row animate-openmenu'>
                    <h1 className='w-80 text-lg sm:relative'>{props.name}
                    {props.state === 'completed' && <img src={completeImg} alt={'완료'} className='w-4 h-4 inline mx-4 mb-1'/>}
                    </h1>
                    <div className='w-64 border-2 h-32 rounded-3xl relative cursor-pointer hover:scale-110 transition' onClick={handleNavigate}>
                        <img src={props.image} alt='roomImage' className='object-cover w-full h-full rounded-3xl'/>
                        {props.count && <p className='absolute bottom-4 right-4' >{props.count + '/5'}</p>}
                        {props.to && <div className='my-4 text-xs absolute left-16 text-center block px-4 '>{`To. ${props.to}`}</div>}
                        {props.date && <div className='my-4 text-xs absolute right-16 text-center block px-4 '>Arrived: {props.date}</div>}
                    </div>
                    

                </div>   
            </div>
            <QuestModal ref={dialogRef} id={props.id}>{props.id}번 컵티를 여시겠습니까?</QuestModal>
        </div>
    )
}

export default CupTeaRoom