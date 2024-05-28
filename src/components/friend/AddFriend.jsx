
function AddFriend({children, ...props}) {
    return (
        <div className='w-full h-24 flex items-center sm:px-48 px-10'>
            <img src={props.img} alt='친구 사진' className='w-8 h-8'/>
            <p className="px-2 w-48 truncate">{props.nickname}</p>
            <div className="flex  w-full justify-end items-center ">
                <p className="text-center border-2 w-16 cursor-pointer rounded-xl hover:scale-105 transition hover:bg-white hover:text-black">추가</p>
            </div>
        </div>
    )
    
}

export default AddFriend