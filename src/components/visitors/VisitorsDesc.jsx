import userImg from '../../../public/user.png'
import likeImg from '../../../public/like.png'
import commentImg from '../../../public/comment.png'
import exImg from '../../../public/puppy.jpg'
import VisitorsDialog from './VisitorsDialog'
import { useRef } from 'react'


function VisitorsDesc({children, ...props}) {

    const dialogRef = useRef();

    function handleDialog() {
        dialogRef.current.showModal();
    }

    return (
        <>  
            <VisitorsDialog ref={dialogRef}/>
            <div className="h-12 mt-8 flex sm:justify-center sm:mx-40 mx-12">
                <div className='flex items-center w-12 justify-center'>
                    <img src={props.img} className='w-6 h-6' alt='userImage' />
                </div>
                <div className=' sm:w-24 w-16 flex justify-start items-center mr-4 text-xs'>
                    <p className='truncate'>{props.nickname}</p>
                </div>
                <div className=' sm:w-32 w-16 flex justify-start items-center text-xs'>
                    <p className='truncate'>{props.desc}</p>
                </div>
                <div className=' w-12 flex justify-start items-center text-xs'>
                    <img src={likeImg} alt='좋아요' className='sm:w-6 sm:h-6 ml-2 w-4 h-4 cursor-pointer'/>
                    <p>{props.like}</p>
                </div>
                <div className='w-12 flex justify-start items-center text-xs'>
                    <img src={commentImg} alt='좋아요' className='sm:w-6 sm:h-6 w-4 h-4 cursor-pointer'/>
                    <p>{props.comment.length}</p>
                </div>
            </div>
            <div className='flex justify-center px-16 mb-4 mt-2 h-80 sm:px-32 cursor-pointer'>
                <img src={exImg} alt='visitorImage' className='w-80 h-80 object-cover ' onClick={handleDialog} />
            </div>
        </>
    )
}

export default VisitorsDesc