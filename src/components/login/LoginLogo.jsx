import logo from '../../../public/logo.png'

function LoginLogo() {
    
    return (
            <div className='flex-col flex-1 justify-center items-center'>
                <h1 className='h-40 flex justify-center items-end text-8xl font-Jua'>CupTea</h1>
                <div className='flex justify-center items-center overflow-hidden'>
                    <img src={logo} className='object-cover'></img>
                </div>
                
            </div>
    )
}

export default LoginLogo