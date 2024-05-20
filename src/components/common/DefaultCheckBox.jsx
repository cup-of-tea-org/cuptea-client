function DefaultCheckBox({children}) {

    // function handleCheck(event) {
    //     event.stopPropagation();
    // }

    return (
        <div className="mt-2 flex items-center mb-4">
                <label htmlFor="keepLogin" className="mr-1 text-sm flex" >
                    {children}
                    <input id="keepLogin" 
                    type="checkbox" 
                    className="justify-center items-center w-4 h-4 ml-2 pt-2 text-blue-600 bg-gray-100 
                    border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                    focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    
                </label>
                
        </div>
    )
    
}

export default DefaultCheckBox