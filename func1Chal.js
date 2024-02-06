function sortNum(number, method) {
    let numArray = number.toString().split('');

    if (method === "reverse") {
        numArray.reverse();
        let rString="";
        numArray.forEach(character => {
        rString += `${character} `;
    });
    return rString;

    } else if (method === "sort") {
        return numArray.sort((a, b) => a - b).join(' ');
    } else {
        return "Invalid method. Please use 'reverse' or 'sort'.";
    }
}

// Example usage:
let myreverse = sortNum(14598345, "reverse");
let mysort1 = sortNum(14598345, "sort");

console.log(myreverse);
console.log(mysort1);

let myreverse2 = sortNum(20800790901, "reverse");
let mysort2 = sortNum(20800790901, "sort");

console.log(myreverse2);
console.log(mysort2);