import questionImg from '../../../public/question.png'
import logoutImg from '../../../public/logout.png'

function MenuModal() {
    return (
        <div>  
            <div className="w-56 h-24 z-10 border fixed bg-gray-800 transition animate-openmenu ml-8 mt-24 flex flex-col justify-center items-center">
                <div className="border-b-2 w-full h-full text-center flex justify-center items-center hover:bg-gray-600 transition cursor-pointer">
                    로그아웃
                    <img src={logoutImg} alt='신고' className='w-5 h-5 mb-1'/>
                </div>
                <div className=" w-full h-full text-center flex justify-center items-center hover:bg-gray-600 transition cursor-pointer">
                    문제 신고
                    <img src={questionImg} alt='신고' className='w-4 h-4 ml-1 mb-1'/>
                </div>
            </div>
        </div>
    )
}

export default MenuModal