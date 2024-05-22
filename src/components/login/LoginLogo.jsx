import { useNavigate } from 'react-router-dom'
import logo from '../../../public/logo.png'

function LoginLogo() {

    const navigate = useNavigate();

    function handleClickMain() {
        navigate('/login');
    }
    
    return (
            <div className='flex-col flex-1 justify-center items-center cursor-pointer hidden sm:flex' 
                onClick={handleClickMain}>
                <h1 className='h-60 flex justify-center items-end text-8xl font-Dancing'>CupTea</h1>
                <div className='flex justify-center items-center overflow-hidden'>
                    <img src={logo} className='object-cover h-80'></img>
                </div>
                
            </div>
    )
}

export default LoginLogo