import { atom } from "recoil";

export const UserCssAtom = atom({
    key: 'UserCssAtom',
    default: 'flex flex-wrap border-2 w-16 justify-center sm:flex-col items-center rounded-md border-gray-800 hover:border-violet-300 hover:scale-105 hover:bg-gray-200 hover:text-black transition cursor-pointer ',
})

export const UserClickedAtom = atom({
    key: 'UserClickedAtom',
    default: ''
})

export const UserIsClickedAtom = atom({
    key: 'UserIsClickedAtom',
    default: false
})
