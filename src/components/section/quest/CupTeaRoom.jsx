import { useNavigate, useParams } from 'react-router-dom'


function CupTeaRoom({...props}) {

    const param = useParams('id');

    const navigate = useNavigate();

    function handleNavigate() {
        navigate(props.link);
    }


    return (
        <div className='w-full' key={props.id}>
            <div>
                <div className='flex justify-center items-center my-8 mx-12 flex-col md:flex-row'>
                    <h1 className='w-80 text-lg sm:relative'>{props.name}
                    </h1>
                    
                    <div className='w-64 border-2 h-32 rounded-3xl relative cursor-pointer hover:scale-110 transition' onClick={handleNavigate}>
                        <img src={props.image} alt='roomImage' className='object-cover w-full h-full rounded-3xl'/>
                        {props.count && <p className='absolute bottom-4 right-4'>{props.count + '/5'}</p>}
                        {props.to && <div className='my-4 text-xs absolute left-16 text-center block px-4 '>{`To. ${props.to}`}</div>}
                    </div>
                    

                </div>   
            </div>
        </div>
    )
}

export default CupTeaRoom