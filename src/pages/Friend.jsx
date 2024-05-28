import { useParams } from "react-router-dom"
import friendImg from '../../public/friend.png'
import { DUMMY_FRIEND_LIST } from "../components/common/commonjs/DummyFriendList";
import AddFriend from "../components/friend/AddFriend";
import userImg from '../../public/user.png'

function FriendLayout() {

    const param = useParams('id');

    return (
        <>
            <div className='w-screen font-Jua overflow-y-scroll'>
                <div className='flex fixed w-full text-white bg-black-200 mt-4 pl-4'>
                    <img src={friendImg} alt='친구 추가 로고' className='w-16 h-full '/>
                    <h1 className='mt-5 text-xl pl-4'>친구 추가</h1>
                </div>
                <div className="h-full sm:mt-24 mt-16">
                    {DUMMY_FRIEND_LIST.map((it) => (
                        <AddFriend key={it.id} nickname={it.nickname} img={userImg}>친구 추가</AddFriend>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default FriendLayout