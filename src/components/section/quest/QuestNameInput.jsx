function QuestionNameInput({children, ...props}) {
    return (
        <div className="w-full mt-4 flex flex-col sm:text-2xl">
            <label htmlFor={props.id} className="block py-2">{children}</label>
            <input id="props.id" type="text" className="w- text-black border-4 hover:border-blue-500 rounded-lg transition"/>
        </div>
    )
}

export default QuestionNameInput