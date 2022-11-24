// Array Methods
console.log('Array Methods are:');
const array=[1,2,3,4,5,6,7,8,9,10];

//1. filter
let storeFilter=array.filter((items)=>{
    return items<6;
});
console.log('Filter methods :',storeFilter);

//2. map
// do some functions with respective elements
let storemap=array.map((items)=>{
    return items*2;
});
console.log('multiplied with 2 in each items in array using map',storemap);

//3. find
let storefind=array.find((items)=>{
    return items==9;
});
console.log("find method ",storefind);

//4.forEach
array.forEach((items)=>{});

//5.entries
//returns key value pair
let storeentries=array.entries();
console.log('Entries:',[...storeentries]);

//6.every
//all items must statisfy
let storeevery=array.every((items)=>{
    return items<8;
});
console.log('Every method:',storeevery);

//6.some
//atleast one items need statisfy
let storesome=array.some((items)=>{
    return items<8;
});
console.log('Some method:',storesome);

//7.reduce

//8.includes
let storeincludes=array.includes(2);
console.log('includes:',storeincludes);

//9.indexOf
let storeIndexOf=array.indexOf(9);
console.log("indexOf:",storeIndexOf);

//10.lastIndexOf
let storeLastIndexOf=array.lastIndexOf(9);
console.log("lastIndexOf:",storeLastIndexOf);

//11.fill

//12.length
console.log('Length of the array:',array.length);

//13.pop
console.log("_________________________________________________");
console.log('Pop:   Delete one element in last');
console.log("Before pop",array);
array.pop();
console.log("After pop",array);
console.log("_________________________________________________");
console.log('');
//14.push
console.log("_________________________________________________");
console.log('push:  Add one element in last');
console.log("Before push",array);
array.push(10);
console.log("After push",array);
console.log("_________________________________________________");
console.log('');
//15.shift
console.log("_________________________________________________");
console.log('shift: Delete one element in first');
console.log("Before shift",array);
array.shift();
console.log("After shift",array);
console.log("_________________________________________________");
console.log('');
//16.unshift
console.log("_________________________________________________");
console.log('unshift:  Add one element in first');
console.log("Before unshift",array);
array.unshift(1);
console.log("After unshift",array);
console.log("_________________________________________________");
console.log('');
//17. reverse
let storeReverse=array.reverse();
console.log('Reverse the array',storeReverse);

//18.sort
console.log("sort the array",array.sort());

//19.sortInDesc
let storeSortInDesc=array.sort((a,b)=>{
    return b-a;
});
console.log('Sort the array in decending order:',storeSortInDesc);


//String Methods:

//almost  same as string methods
