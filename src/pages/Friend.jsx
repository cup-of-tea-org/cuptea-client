import { useNavigate, useParams } from "react-router-dom"
import friendImg from '../../public/friend.png'
import { DUMMY_FRIEND_LIST } from "../components/common/commonjs/DummyFriendList";
import userImg from '../../public/user.png'
import FriendList from "../components/friend/FriendList";
import { useRef } from "react";
import axios from "axios";

function FriendLayout() {

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (axios.defaults.headers.common["Authorization"] == null) {
    //         navigate("/login");
    //     }
    // },[])


    return (
        <>
            <div className='w-screen font-Jua overflow-y-scroll animate-openmenu'>
                <div className='flex fixed w-full text-white bg-black-200 mt-4 pl-4'>
                    <img src={friendImg} alt='친구 추가 로고' className='w-16 h-full '/>
                    <h1 className='mt-5 text-xl pl-4'>친구 추가</h1>
                </div>
                <div className="h-full sm:mt-28 mt-16">
                    {DUMMY_FRIEND_LIST.map((it) => (
                        <FriendList key={it.nickname} nickname={it.nickname} img={userImg} >추가</FriendList>
                    )
                    )}
                </div>
                
            </div>
        </>
    )
}

export default FriendLayout