import { selector } from "recoil";
import { JoinAgreeAtoms, JoinAtoms } from "../atoms/JoinAtoms";
import axios from "axios";

export const joinSelector = selector({
    key: 'joinSelector',
    get: ({get}) => {
        return get(JoinAtoms);
    },
    set: ({set, get}, newValue) => {
        if (newValue.hasOwnProperty('profileImage')) {
            const currentValue = get(JoinAtoms);
            return set(JoinAtoms, [{...currentValue[0]}, {...currentValue[1], ...newValue}]);
        }
        const currentValue = get(JoinAtoms);
        return set(JoinAtoms, [{...currentValue[0], ...newValue}, {...currentValue[1]}]);
    }
});

export const joinAgreeSelector = selector({
    key: 'joinAgreeSelector',
    get: ({get}) => {
        return get(JoinAgreeAtoms);
    },
    set: ({set, get}, newValue) => {
        const currentValue = get(JoinAgreeAtoms);
        return set(JoinAgreeAtoms,{...currentValue, ...newValue});
    }
});