import { atom } from "recoil";
import addUserImg from '../../../public/addUser.png'

export const LoginFormAtom  = atom({
    key: 'loginFormAtom',
    default: {
        loginId: '',
        password: ''
    }
})

export const IdAtom = atom({
    key: 'idAtom',
    default: ''
})

export const TokenAtom = atom({
    key: 'tokenAtom',
    default: ''
})

