const value = document.querySelector('h1');

const setValue = function (input) {
    value = input;
}

const characters = ["░","▒","▓","<",">","/"];

const chars = value.innerHTML.split("");
const charsLeng = chars.length;




const toggle = function () {
    const charsList = chars;
    charsList[0] = characters[2];
    
    const string = charsList.join("");
    console.log(string);
   
    document.querySelector('h1').innerHTML = string;

}


const glitchOut = function () {
    setTimeout(toggle, 3000);
}





