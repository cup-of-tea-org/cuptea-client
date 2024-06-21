import { atom } from 'recoil';

export const JoinAtoms = atom({
    key: 'JoinAtoms',
    default: [
        {
            loginId: '',
            password: '',
            phone: '',
            email: '',
            interest: 'TRAVEL',
            provision: false,
            birthday: null,
        }, 
        {
            profileImage: null,
        }
    ]
});

export const JoinAgreeAtoms = atom({
    key: 'JoinAgreeAtoms',
    default: {
        isIdOverlapped: false,
        isEmailCheck: false
    }
})
