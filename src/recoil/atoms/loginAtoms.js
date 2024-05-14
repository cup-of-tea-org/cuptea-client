import { atom } from "recoil";

export const loginDescTextAtom = atom({
    key: 'loginDescTextAtom',
    default: {
        text1: '무엇이든 질문해보세요!',
        text2: 'CupTea와 함께'
}
})

// export const isLoginAtom = atom({
//     key: 'isLoginAtom',
//     default: false,
// })