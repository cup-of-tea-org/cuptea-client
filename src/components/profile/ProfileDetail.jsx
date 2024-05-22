function ProfileDetail({children, ...props}) {
    return (
        <>
            <h1 className={props.css}>
                {children}
                <p className="inline px-1">{props.count}</p>
            </h1>
        </>
    )
}

export default ProfileDetail