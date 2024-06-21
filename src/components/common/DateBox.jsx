import { useSetRecoilState } from "recoil";
import { joinSelector } from "../../recoil/selectors/JoinSelectors";

function DateBox({children, ...props}) {

    const setFormData = useSetRecoilState(joinSelector);

    function handleDateChange(e) {
        
        setFormData({
            birthday: e.target.value
        });
    }
    
    return (
        <div className="my-4 flex items-center">
            <label htmlFor={props.id} className="pr-4 text-2xl">{children}</label>
            <input 
            type="date" 
            id={props.id} 
            className="text-sm text-black w-32 h-8 cursor-pointer bg-white rounded-md text-center pl-4 hover:border-blue-500 transition" 
            onChange={handleDateChange}
            />
        </div>
    )
}

export default DateBox;