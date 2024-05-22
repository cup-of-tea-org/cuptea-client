function TextArea() {
    return (
        <>
            <label htmlFor="textarea" className="block mb-2">내용</label>
            <textarea id="textarea" className="w-full text-sm h-56 border-4 rounded-xl hover:border-blue-500 text-black box-border p-2 sm:p-2 overflow-scroll transition"></textarea>
        </>
    )
}

export default TextArea