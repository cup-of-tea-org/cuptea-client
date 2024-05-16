function DefaultCheckBox({children}) {

    function handleCheck(event) {
        console.log(event.target.value);
    }

    return (
        <div className="mt-2 flex items-center mb-4">
                <label htmlFor="keepLogin" className="mr-1 text-sm flex flex-1">
                    {children}
                    <input id="keepLogin" 
                    type="checkbox" 
                    className="justify-center items-center w-4 h-4 ml-2 pt-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={handleCheck}
                    />
                    
                </label>
                
        </div>
    )
    
}

export default DefaultCheckBox