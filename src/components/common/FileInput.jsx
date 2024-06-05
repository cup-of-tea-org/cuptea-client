function FileInput({children, ...props}) {
    return (
        <div className="mt-4">
            <label htmlFor={props.id} className="text-center pb-2 gap-2 sm:text-2xl ">
                {children} 
                <img src={props.img} 
                alt='썸네일' 
                className='w-12 border-2 border-white rounded-xl inline ml-8 mb-2 mt-2 transition cursor-pointer hover:border-blue-500 placeholder:text-white'
                />
                
            </label>
            
            
            <input 
            type='file' 
            id={props.id} 
            className="hidden"
            accept="image/png"
            />
        </div>
    )
}

export default FileInput