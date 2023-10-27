// From validate 
const Empty = (value) => {
        if(value.trim() === "")return false;
        return true;
} 
const Regex = (value,regex) => {
    if (!value.test(regex)) return false;
    return true;
}

const passLength = (value) => {
    if(value.length < 8 &&  Empty(value)){
        return false
    }
    return true;
}
export {Empty, Regex,passLength }; 