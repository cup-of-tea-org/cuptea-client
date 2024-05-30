function ModalButton({children, setIsCompleted}) {

    const handleSetIsComplete = (data) => {
        setIsCompleted(data);
    }

    return (

        <>
            <button className="mx-8 pt-1 mt-2 border-2 px-4 border-zinc-700 rounded-2xl text-lg hover:bg-white hover:text-zinc-800 transition" onClick={children === 'Yes' ? () => {handleSetIsComplete(true)} : undefined}>{children}</button>
        </>
    )
}

export default ModalButton