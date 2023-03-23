import {getLength} from '../utils/stringUtils';
export const capitalize = (str) => {
     return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getLength = (str) => {
    return str.length;
}