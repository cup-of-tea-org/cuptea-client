import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import userImg from '../../../public/user.png';
import { joinSelector } from '../../recoil/selectors/JoinSelectors';
import { useState } from 'react';
import Swal from 'sweetalert2';

function ProfileInput({children, ...props}) {

    const setFormData = useSetRecoilState(joinSelector);

    const [profileImg, setProfileImg] = useState(userImg);

    function handleFileInput(e) {
        const reader = new FileReader();

        if (e.target.files[0].type !== 'image/png') {
            Swal.fire({
                title: '이미지 형식 오류',
                text: '이미지는 png 형식만 지원합니다.',
                icon: 'error',
                confirmButtonText: '확인'
            })
            return;
        }
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            setProfileImg(reader.result);
        };
        
        setFormData({
            profileImage: e.target.files[0]
        })
    }
    

    return (
        <>
            <label htmlFor={props.id} className={props.css}>
                <img src={profileImg} 
                alt='프로필'
                className='w-32 inline border-2 border-white rounded-full hover:scale-110 transition cursor-pointer hover:border-blue-500 placeholder:text-white'
                />
                
            </label>
            
            
            <input 
            type='file' 
            id={props.id} 
            className="hidden"
            accept="image/png"
            onChange={(e) => handleFileInput(e)}
            />
        </>
    )
}

export default ProfileInput