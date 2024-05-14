import JoinForm from '../join/JoinForm'

function JoinDesc() {
    return (
        <div className="flex flex-col flex-1 justify-center items-center font-Jua">
            <div className="my-8">
                <div className="text-5xl text-center py-4">회원가입</div>
            </div>
            <JoinForm />
        </div>
        
    )
}

export default JoinDesc