/*
 1 .... 100

for(let i = 0; i < 20; i++ ){
    console.log(Math.floor(Math.random() * 100)+1)
}
*/

/*
let input = prompt('enter a number');
let input2 = Number.parseInt(input);

console.log(input);
console.log(input2);

console.log(typeof input);
console.log(typeof input2);
*/

let computer = Math.floor(Math.random() * 100) + 1;
console.log(computer);
let user = 0;
let lives = 5;

do{
    user = Number.parseInt(prompt('enter a number'));
    lives--;
    if(computer > user && lives > 0){
        alert(`Pick something bigger (${lives} Lives)`);
    } else if(computer < user && lives > 0){
        alert(`Pick something smaller (${lives} Lives)`);
    }
    
}while( computer != user && lives > 0);

if(lives > 0 || computer == user){
    alert('Well done!...');
}else {
    alert('Game Over...');
}
