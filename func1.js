
const sortStrByAlpha = (data) => {

    let arrString = data.split(" ");
    
    arrString.sort();
    
    let alphaString="";

    arrString.forEach(word => {
        alphaString += `${word} `;
    });
    
    return alphaString;

};

let mysort = sortStrByAlpha('john is a junior javascript developer');
console.log(mysort);

// reverse string

const strReverse = (data) => {

    let arrString = data.split("");  
    arrString.reverse(); 
    let rString="";

    arrString.forEach(character => {
        rString += `${character}`;
    });
    
    return rString;

};

let mysortrev = strReverse('john is a junior javascript developer');
console.log(mysortrev);


