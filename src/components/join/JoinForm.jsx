import LoginInput from "../common/LoginInput"
import JoinSelectBox from "./JoinSelectBox"

function JoinForm() {

    const interest = ["여행", "운동", "카페"];

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <form>
                    <LoginInput>Nickname</LoginInput>
                    <LoginInput>Email</LoginInput>
                    <LoginInput>Phone</LoginInput>
                    <JoinSelectBox list={interest} id={'interest'}>Interest</JoinSelectBox>
                    
                </form>
            </div>
        </div>
        
    )
}

export default JoinForm