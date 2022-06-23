// main message constant
const keyInMessage = document.querySelector(".keyInMessage");

// .which attribute constant
const numberDispMessage = document.querySelector(".whichMessage");

// all the boxes
const dotCodeBx = document.getElementById("codeText");
const dotKeyBx = document.getElementById("keyText");
const dotWhichBx = document.getElementById("whichText");

// dotCodeBx


document.addEventListener("keydown", (event) => {
    keyInMessage.textContent = event.key;
    numberDispMessage.textContent = event.which;


    dotCodeBx.innerText = event.code;
    dotKeyBx.innerText = event.key;
    dotWhichBx.innerText = event.which;
});
