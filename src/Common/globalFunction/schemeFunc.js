export function handleCheckOnlyString(value){
    const regex = /^\s*\p{L}+(?:\s\p{L}+)*\s*$/u;
    return regex.test(value) ? true : false;
}


export function handleCheckPasswordHardEnough(value){
    const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/;
    return regex.test(value) ? true : false;
}