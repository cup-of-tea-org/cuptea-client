import { useRecoilState, useRecoilValue } from 'recoil';
import userImg from '../../../public/user.png';
function ProfileInput({children, ...props}) {

    const [image, setImage] = useRecoilState(joinProfileImgAtom);

    

    return (
        <>
            <label htmlFor={props.id} className={props.css}>
                <img src={userImg} 
                alt='프로필'
                className='w-28 inline border-2 border-white rounded-full hover:scale-110 transition cursor-pointer hover:border-blue-500 placeholder:text-white'
                />
                
            </label>
            
            
            <input 
            type='file' 
            id={props.id} 
            className="hidden"
            accept="image/png"
            />
        </>
    )
}

export default ProfileInput