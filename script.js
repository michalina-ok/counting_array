let counter = 0;
const array = [0,];

count();

function count() {
    if (array) {
    counter+=1;

    array.unshift(counter);
    
    if (array.length >= 9) {
        array.length = 9;
    } 

    console.log(array)


    setTimeout(count, 1000);
} 
}





