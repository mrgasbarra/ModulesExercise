//String functions

let string = '';

export const reverseString = (string) => { //reverse string function
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

export const capitlizeString = (string) => { //capitalize all text
    return `${string.toUpperCase()}`;
};

export const wordSearch = (string, wordCheck) => { //checks to see if string contains the select word.
    return string.includes(wordCheck);
}