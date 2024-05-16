import { atom } from "recoil";
import addUserImg from '../../../public/addUser.png'



export const joinProfileImgAtom = atom({
    key: 'joinProfileImgAtom',
    default: {
        addUserImg
    }
})

