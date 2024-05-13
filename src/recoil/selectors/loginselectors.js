

export const loginSelector = selector({
  key: 'loginSelector',
  get: ({get}) => get(loginDescTextAtom),
});