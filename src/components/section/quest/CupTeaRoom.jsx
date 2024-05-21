import { useNavigate, useParams } from 'react-router-dom'


function CupTeaRoom({...props}) {

    const param = useParams('id');

    const navigate = useNavigate();

    function handleNavigate() {
        navigate(props.link);
    }


    return (
        <div className='w-full'>
            <div>
                <div className='flex justify-center items-center my-8 mx-12 flex-col lg:flex-row'>
                    <h1 className='w-80 text-lg'>{props.name}</h1>
                    <div className='w-64 border-2 h-32 rounded-3xl relative cursor-pointer' onClick={handleNavigate}>
                        <img src={props.image} alt='roomImage' className='object-cover w-full h-full rounded-3xl'/>
                        <p className='absolute bottom-4 right-4'>{props.count + '/5'}</p>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default CupTeaRoom