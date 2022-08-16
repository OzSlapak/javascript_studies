/*

var start = 0;

while (start <= 10) {
    console.log(start);
    start++;
}

-----------------------------------------------------

start

do{
    update
}while(condition);

-----------------------------------------------------

while & do...while     ->
    If you are not sure about how many times loop should repeat.

    while loop checks condition before executing code block.
    do...while checks condition after executing code block.

for loop           ->
    If you are sure about how many times loop should repeat.

*/

var start = 0;

do{
    console.log(start);
    start++;
}while(start <= 5);


/* while vs do...while */

var index = 10;

while (index < 10) {
    console.log('From While Loop' + index);
    index++;
}

var index2 = 10;

do {
    console.log('From Do...While Loop => ' + index);
    index++;
}while (index2 < 10);