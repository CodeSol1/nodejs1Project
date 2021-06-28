
const count1 = document.querySelector(".count1");
const count2 = document.querySelector(".count2");
const count3 = document.querySelector(".count3");
const count4 = document.querySelector(".count4");

let count = 1;
setInterval(() => {
    if (count < 245) {
        count++;
        count1.innerText = count;
    }

}, 1)

var counter1 = 1;
setInterval(() => {
    if (counter1 < 342) {
        counter1++;
        count2.innerText = counter1;
    }

}, 1)
var counter2 = 1;
setInterval(() => {
    if (counter2 < 189) {
        counter2++;
        count3.innerText = counter3;
    }

}, 1)
var counter3 = 1;
setInterval(() => {
    if (counter3 < 346) {
        counter3++;
        count4.innerText = counter3;
    }

}, 1)




