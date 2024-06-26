import userImg from '../../public/user.png'
import { DUMMY_USER } from '../components/common/commonjs/DummyUser'
import { DUMMY_VISITORS } from '../components/common/commonjs/DummyVisitors'
import ReadyUser from '../components/section/quest/ReadyUser'
import VisitorsDesc from '../components/visitors/VisitorsDesc'
import { useNavigate } from 'react-router-dom'

function Visitors() {

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (axios.defaults.headers.common["Authorization"] == null) {
    //         navigate("/login");
    //     }
    // },[])

    
    return (
        <>  
            <div className='w-screen font-Jua mt-8 overflow-y-scroll '>
                <ul className='flex flex-1 justify-between sm:gap-0 items-center sm:px-24 sm:h-32'>
                    {DUMMY_USER.map((it) => (
                        <ReadyUser key={it.id} id={it.id} img={it.img ?? userImg} nickname={it.nickname} link={`/:${it.id}/visitors`}></ReadyUser>
                    ))}
                </ul>
                {DUMMY_VISITORS.map((it) => (
                    <VisitorsDesc key={it.id} nickname={it.nickname} img={userImg} desc={it.desc} like={it.like} comment={it.comment}></VisitorsDesc>
                ))}
            </div>
        </>
    )
}

export default Visitors