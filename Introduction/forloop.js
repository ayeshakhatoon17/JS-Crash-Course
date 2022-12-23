// for loop is used for iterating statement for n no of times it is entry loop

/* //ex-1 
for(i=1;i<=5; i++){
    console.log("hello")//prints hello 5 times
} */

//ex-2 declaring i in for loop
for(let i=5; i<=10; i++){
    console.log(i) // prints 5 6 7 8 9 10
}

// ex -3 declaring i outside the loop
let i=3
for ( ;i<=10;i++){
    console.log(i) // prints 3 4 5 6 7 8 9 10
}

// ex-4  
var a = 10
for( ; ; a++)
{
    a<=12 // goes into infite loop
    console.log(a)
}



