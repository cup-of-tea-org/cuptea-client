import { useRef } from "react"
import DialogCustom from "../common/DialogCustom";
import { provision } from "../common/commonjs/Provision";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { joinSelector } from "../../recoil/selectors/JoinSelectors";
import Swal from "sweetalert2";

function LoginButton({children, setIsSendData, ...props}) {
    const [joinFormData, setJoinFormData] = useRecoilState(joinSelector);
    const dialogRef = useRef()

     const handleDialog = async () => {
        if (!props.isJoinButton) {
            dialogRef.current.showModal();
            return;
        }
        
        // TODO 모든 input 검증이 완료되어야 회원가입 요청 보내기.
        console.log(joinFormData[1])

        if (joinFormData[1].profileImage == null) { // 프로필 이미지
            console.log('프로필 이미지 없음')
            Swal.fire({
                title: '회원가입 실패!',
                text: '프로필 이미지를 등록해주세요',
                icon: 'error',
                confirmButtonText: '확인'
            
            })
            return;
        }


        joinFormData.forEach(it => {

            console.log(it)
            
            // 약관
            if (it.provision === false) {
                console.log('약관동의 안함')
                Swal.fire({
                    title: '회원가입 실패!',
                    text: '약관에 동의해주세요',
                    icon: 'error',
                    confirmButtonText: '확인'
                })
                return;
                
            } 
            
            // 모든 조건 validate
            if (Object.values(it) == '' || Object.values(it) == false) {
                Swal.fire({
                    title: '회원가입 실패!',
                    text: '모든 항목을 입력해주세요',
                    icon: 'error',
                    confirmButtonText: '확인'
                
                })
                return;
            }
        });

        setIsSendData(true);
    }
    
    return (
        <>  
            {props.isProvision && (<DialogCustom ref={dialogRef} title={'<약관동의>'}>{provision + provision}</DialogCustom>)}
            <div className={props.css}>
                <button type="button" className="w-full" onClick={handleDialog}>
                    {props.isSocial ?
                    <img src={props.img} className="w-60 object-cover inline h-10"/>
                        : <div></div>
                    }
                {children}            
                </button>
            </div>
                                                         
        </>
       
    )
}

export default LoginButton