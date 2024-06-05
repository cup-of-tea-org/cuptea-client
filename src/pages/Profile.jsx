import { useParams } from 'react-router-dom'
import ProfileInput from '../components/common/ProfileInput'
import ProfileDetail from '../components/profile/ProfileDetail'
import ProfileInputDetail from '../components/profile/ProfileInputDetail'
import ProfileSelectBox from '../components/profile/ProfileSelectBox'
import DateBox from '../components/common/DateBox'

function Profile({children, ...props}) {

    const param = useParams('id')
    const list = ['운동', '여행', '일상'];

    return (
        <>
            <div className='w-screen font-Jua mt-8 '>    
                    <div className='flex justify-center mt-4'>
                        <ProfileInput type={'file'} id={'profile'}></ProfileInput>
                        <ProfileDetail css={'mx-4 mt-12 text-xl cursor-pointer'} link={`/${param.id}/profile`}>rabbit_0212</ProfileDetail>
                    </div>
                    <div className='sm:h-16 h-12 flex justify-center items-center gap-8 text-sm text-center'>
                        <ProfileDetail count={2} css={'cursor-pointer transition hover:scale-110'} link={`/${param.id}/my-cuptea`}>컵티</ProfileDetail >
                        <ProfileDetail count={4} css={'cursor-pointer transition hover:scale-110'} link={`/${param.id}/visitors`}>방명록</ProfileDetail>
                        <ProfileDetail count={13} css={'cursor-pointer transition hover:scale-110'} link={`/${param.id}/friendList`}>친구</ProfileDetail>
                    </div>
                    <div className='h-80 flex flex-col justify-center items-center sm:mt-12 mt-16'>
                        <ProfileInputDetail id={'nickname'} type={'text'}>Nickname</ProfileInputDetail>
                        <ProfileInputDetail id={'email'} type={'email'}>Email</ProfileInputDetail>
                        <ProfileInputDetail id={'phone'} type={'text'}>Phone</ProfileInputDetail>
                        <div className='h-16 text-lg items-center'>
                            <ProfileSelectBox list={list}>Interest</ProfileSelectBox>
                            <DateBox id={'birthday'}>Birthday</DateBox>
                        </div>
                        <div className='mt-12 flex justify-center w-80'>
                            <button type='button' className='bg-black border-2 w-20 h-8 rounded-xl text-sm transition hover:bg-white hover:text-black'>프로필 수정</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Profile