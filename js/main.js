'use strict';

const ul = document.getElementsByClassName('fruits');

const sberry = document.getElementById('berry');

console.log(document.getElementById('berry'));
console.log( "I found the berry:" + document.getElementById('berry').innerHTML);

sberry.style.backgroundColor = "Pink";

const orange = document.getElementsByTagName("li")[2];
console.log(orange);
console.log("I found the berry:" + orange.innerHTML);

orange.style.backgroundColor = "Orange";

const lis = document.getElementsByTagName("li");
console.log(lis);

for(let i = 0; i < lis.length; i++) {
    lis[i].style.width = "100px";
    lis[i].style.listStyleType = "none";

    if(lis[i].innerHTML === "Pear") {
        lis[i].style.backgroundColor = "LightGreen";
    }
}

const allLi = document.querySelectorAll("li");
console.log(allLi);

[].forEach.call(lis, function(li) {
    li.style.border = "thin solid black"
});



