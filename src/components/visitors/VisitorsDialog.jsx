import { forwardRef } from "react"
import closeImg from '../../../public/close.png'
import userImg from '../../../public/user.png'
import VisitorsComment from "./VisitorsComment";
import VisitorsLike from "./VisitorsLike";

const VisitorsDialog = forwardRef(function VisitorsDialog({children, ...props}, ref) {

    function handleCloseDialog() {
        ref.current.close();
    }

    return (
        <>  
                <dialog ref={ref} className=" transition w-11/12 bg-black bg-opacity-100 animate-openmenu h-full backdrop:bg-gray-200 backdrop:opacity-10 ">
                    <div className="relative cursor-pointer ">
                        <img src={closeImg} alt="닫기" className="w-8 h-8 absolute top-4 right-4 cursor-pointer border-2 rounded-xl hover:border-red-500" onClick={handleCloseDialog}/>
                    </div>  
                    <div className="sm:w-full sm:h-full h-full flex sm:flex-row flex-col ">    
                        <img src={props.img} className="w-full sm:w-3/6 h-full sm:object-center object-cover" alt="방명록" />
                        <div className="w-full text-white mt-4 flex flex-col ">
                            <ul className="overflow-y-scroll h-full">
                                {props.comment.map((it) => (
                                    <VisitorsComment id={it.id} key={it.id} desc={it.desc} nickname={it.nickname} img={userImg}></VisitorsComment>
                                ))}
                            </ul>
                            <div className="relative sm:mb-2 sm:ml-2">
                                <VisitorsLike like={props.like} css={'h-full sm:absolute sm:bottom-4 bottom-12 mx-2 mb-4 sm:mb-1 flex justify-start items-center text-sm transition hover:scale-105'}/>
                            </div>
                            <div className="inline">
                                <label htmlFor="comment"></label>
                                <input id="comment" className=" w-9/12 sm:h-12 sm:w-10/12 bg-black text-lg ml-4 sm:pr-2 pb-1 " placeholder="댓글을 입력해주세요... "/>
                                <button className="bg-black text-gray-200 2/12 sm:mr-2 ml-2 cursor-pointer hover:text-blue-400 transition hover:scale-105 text-lg">게시</button>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    
                    

                </dialog>
           
        </>
    )
})

export default VisitorsDialog