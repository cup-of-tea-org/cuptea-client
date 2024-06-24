import { LoginFormAtom } from "../atoms/LoginAtoms";
import { selector } from "recoil";

export const loginSelector = selector({
    key: 'loginSelector',
    get: ({get}) => {
        return get(LoginFormAtom);
    },
    set: ({set, get}, newValue) => {   
        const currentValue = get(LoginFormAtom);
        return set(LoginFormAtom, {...currentValue, ...newValue})
    }
});

