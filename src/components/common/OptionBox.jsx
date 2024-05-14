function OptionBox({children, ...props}) {
    return (
        <>
            <option key={props.key} value={props.value}>{children}</option>
        </>
    )
}

export default OptionBox