import { useRecoilState } from "recoil"
import { QuestTypeAtom } from "../../../recoil/atoms/QuestTypeAtoms";
import OptionBox from "../../common/OptionBox";

function QuestTypeSelectBox({children, ...props}) {

    const [questType, setQuestType] = useRecoilState(QuestTypeAtom);

    function handleQuestType(event) {
        setQuestType(event.target.value);
    }

    return (   
        <>  
            <label htmlFor={props.id} className="pr-5 text-2xl">{children}</label>
            <select id={props.id} 
                    className="text-white text-sm w-32 h-6 bg-black border-white border-2 text-center rounded-md hover:border-blue-500 transition"
                    onChange={handleQuestType}
            >
                {children}
                {   
                    props.list.map(it => (
                        <OptionBox key={it}>{it}</OptionBox>
                    ))
                }
            </select>
        </>
    )
}

export default QuestTypeSelectBox