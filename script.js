const fs = require('fs');

console.time('challenge');

var floor = 0;
var data = fs.readFileSync('./input.txt').toString();
var i = data.length + 1;    

while (--i) {
    switch (data.charAt(i-1)) {
        case "(":
            floor++;
            break;
        case ")":
            floor--;
            break;
    }  
};

console.log(floor);    
console.timeEnd('challenge');