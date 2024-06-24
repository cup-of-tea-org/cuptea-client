import { atom } from "recoil";
import addUserImg from '../../../public/addUser.png'

export const LoginFormAtom  = atom({
    key: 'loginFormAtom',
    default: {
        loginId: '',
        password: ''
    }
})

