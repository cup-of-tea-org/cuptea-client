function Menu({children, ...props}) {

    return (
        <>
            <li className="mt-4 cursor-pointer hover:bg-stone-800 w-40 hover:scale-105 rounded-3xl transition" key={props.key}>
                <img src={props.img} alt="menu" className="w-8 h-8 inline transition hover:scale-105 z-auto "/>
                <div className="inline">{children}</div>
            </li>
        </>
    )
}

export default Menu