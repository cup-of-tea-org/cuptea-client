import { useRecoilState, useRecoilValue } from 'recoil';
import { joinProfileImgAtom } from '../../recoil/atoms/LoginAtoms';
function ProfileInput({children, ...props}) {

    const [image, setImage] = useRecoilState(joinProfileImgAtom);

    return (
        <>
            <label htmlFor={props.id} className="flex flex-col justify-center items-center text-3xl text-center pb-2 gap-2">
                {children} 
                <img src={image.addUserImg} 
                alt='프로필' 
                className='w-28 border-2 border-white rounded-full hover:scale-110 transition cursor-pointer hover:border-blue-500 placeholder:text-white'
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