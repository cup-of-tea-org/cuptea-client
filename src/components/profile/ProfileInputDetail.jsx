function ProfileInputDetail({children, ...props}) {
    return (
        <div className="text-2xl mb-6">  
            <label htmlFor={props.id} className="ml-1 mr-4 block py-1">{children}</label>
            <input type={props.type} id={props.id} className="bg-black border-2 w-80 h-9 rounded-xl px-1 text-lg hover:border-blue-500 transition placeholder:text-sm"/>
        </div>
    )
}

export default ProfileInputDetail