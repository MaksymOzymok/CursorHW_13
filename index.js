function* idMaker() {
 let id = 1;
 while (true)
    yield  id++
}

let id = idMaker();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

function* fontSizeMaker(fontSize) {

    while (true){
        let reset = yield fontSize;
        if(reset==='up'){
            fontSize+=2;
        }
        else
        if (reset === 'down'){
            fontSize-=2;
        }
    }
}

let k = fontSizeMaker(12);
const fontGenerator = fontSizeMaker(14); // 14 – стартовое значение
console.log(fontGenerator.next("up").value); // -> 14
console.log(fontGenerator.next("up").value);//-> 16
console.log(fontGenerator.next("up").value);//-> 18
console.log(fontGenerator.next().value); //-> 18
console.log(fontGenerator.next("down").value); // -> 16
console.log(fontGenerator.next("down").value); // -> 14
console.log(fontGenerator.next("down").value); //-> 12
console.log(fontGenerator.next().value); //-> 12