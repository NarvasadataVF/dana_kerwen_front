import { atom } from "recoil";

export const baseUrlState = atom({
    key: "baseUrlState",
    default: 'http://172.16.88.228:1000/'
})