import commentImg from '../../../public/comment.png'
import exImg from '../../../public/puppy.jpg'
import VisitorsDialog from './VisitorsDialog'
import { useRef } from 'react'
import VisitorsLike from './VisitorsLike'


function VisitorsDesc({children, ...props}) {


    const dialogRef = useRef();

    function handleDialog() {
        dialogRef.current.showModal();
    }
    return (
        <>  
            <VisitorsDialog ref={dialogRef} img={exImg} desc={props.desc} comment={props.comment} like={props.like}/>
            <div className="h-12 mt-8 flex sm:justify-center sm:mx-40 mx-12 shadow-lg shadow-zinc-500/20 ">
                <div className='flex items-center w-12 justify-center'>
                    <img src={props.img} className='w-8 h-8' alt='userImage' />
                </div>
                <div className=' sm:w-24 w-16 flex justify-start items-center mr-4 text-lg'>
                    <p className='truncate'>{props.nickname}</p>
                </div>
                <div className=' sm:w-32 w-16 flex justify-start items-center text-sm'>
                    <p className='truncate'>{props.desc}</p>
                </div>
                <VisitorsLike like={props.like} css={'md:w-12 w-16 flex justify-start items-center text-xs transition hover:scale-105'}/>
                <div className='w-12 flex justify-start items-center text-xs transition hover:scale-105'>
                    <img src={commentImg} alt='댓글' className='sm:w-8 sm:h-8 w-8 h-8 cursor-pointer' onClick={handleDialog} />
                    <p>{props.comment.length}</p>
                </div>
            </div>
            <div className='flex justify-center px-16 mb-4 mt-2 h-80 sm:px-32 cursor-pointer '>
                <img src={exImg} alt='visitorImage' className='w-80 h-80 object-cover shadow-2xl shadow-zinc-500/50 ' onClick={handleDialog} />
            </div>
        </>
    )
}

export default VisitorsDesc