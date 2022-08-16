/*
break -> break is the hard stop of the loop
continue -> Continue is kind of ignore. 
            The following lines will not run.
*/


for(let i = 0; i <= 10; i++){
    
    if(i % 2 != 0){
        continue;
    }
    console.log(i);
}

console.log("=====");

let l = 0;

while( l <= 10 ){
    l++;
    if(l % 2 != 0){
        continue;
    }
    console.log(l)
}