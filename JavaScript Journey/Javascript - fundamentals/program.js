function printme(){
    alert("hello");
}

//arrow function with external return
const sumarrow = (a,b) =>{
    return a+b;
}

// arrow function with implicit return type
const suma = (a,b) => a+b;
//alert(suma(3,5));

//arrays
arrays =[1,2,3,4]
//arrays.push(6);
//console.log(arrays.slice(0,2));
// push, slice, indexOf, length
//console.log(arrays.indexOf(2));
//console.log(arrays.length)
//alert(arrays);

//Objects
const person={
    name:'sk',
    shirt:'black'        
}
//console.log(person.name);// accessing object value through .
//console.log(person['shirt']); // acessing the object through bracket[]

// add the new properties to the existing object.
person.phone='9360148930'// created
//console.log(person);


//arrow function with object
const introducer =(name,shirt) =>{
    const objperson={
        name:name,
        shirt:shirt
    }    
    sentence=`hello ${name} your shirt color is ${shirt}`;
    return sentence;
}
//console.log(introducer(prompt('Enter your name'),prompt('Enter shirt name'))); //dynamic input and output

// loops
const arr=[1,2,3,4,5,6,7];

// one type of for loop
for(let i=0;i<arr.length;i++){
   // console.log(arr[i]);
}

//another type of for loop
for(let i of arr){
    //console.log(i);
}
// store the result in new array
let result=[]
for(let i of arr){
    result.push(i*2);
}
//console.log(result);

// how many letters in pharse

let lettercounter =(pharse) =>{
    let c=0;
    for(let i=0;i<pharse.length;i++){
        c++;
    }
    return c;
}
//console.log(lettercounter(prompt()));  

//finding maximum 
const max =(numbers) =>{
    numbers.sort();
    return numbers[numbers.length-1];
}
//console.log(max([7,6,5,4,1,2,3,4]));

// lettert max frequency

const maxfreq =(string) =>{
    let c=' ',t=0;
    for(let i=0;i<string.length;i++){
        let r=0;
        for(let j=0;j<string.length;j++){
            if(string.charAt(i)==string.charAt(j))r++;
        }
        if(r>t){
            c=string.charAt(i);
            t=r;
        }
    }
    return c;
}

//console.log('Maximun frquency character  in the string is  ',maxfreq('haha'));

//Higher order functions ,
// map --> array methods loop and return values
// filter -->


// Map
/*
let numbercounter =(array) =>{
    let c=0;
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
    return c;
}
*/

// The above code can be easily rewritten as,
let numcounterusingmap = (array) =>{
    let c=0;
    return array.map(i => console.log(i));
}

//console.log(numcounterusingmap([1,2,3,4,5]));

//Filter 
//    [].filter(i => condition);

let nums=[1,2,3,4,5,5,6,7,8];
//console.log(nums.filter(i => i>5));



// DOM 

let title=document.getElementById("tit");
//console.log(title.innerText);

let msg="this is way to change the content ";
title.innerText=msg + 'Kavinsk';

//title.innerHTML='<h6>ok</h6>'
title.style.color='blue';
title.style.fontFamily='cursive';

function func(){
        let val=document.getElementById("ip");
        console.log(val.value);
        if(val.value>0){
            val.style.borderColor='darkgreen';
        }
        else {
            val.style.borderColor='red';
        }
}

/*

let rygval=document.querySelectorAll(".ryg");
console.log(rygval);

rygval.forEach(i =>{
    i.onclick = () =>{
        let r=document.getElementById("yellowcontent");
        r.innerText=Number(r.innerText)+1;
    }
})

*/



const colorcount = (string) =>{
    if(string=='red'){
        let r=document.getElementById("redcontent");
        r.innerText=Number(r.innerText)+1;            
    }
    else if(string=='yellow'){
        let r=document.getElementById("yellowcontent");
        r.innerText=Number(r.innerText)+1;
    }
    else {
        let r=document.getElementById("greencontent");
        r.innerText=Number(r.innerText)+1;
    }
}

let clc=document.querySelectorAll(".clearscore");
console.log(clc)
clc.forEach(i =>{
    i.onclick = () =>{
        document.getElementById("greencontent").innerText="0";
        document.getElementById("redcontent").innerText="0";
        document.getElementById("yellowcontent").innerText="0";
    }
})


const tipcalcifunc = (sign) =>{
        let bills=document.getElementById("bill").value;
        let tips=document.getElementById("tip").value;
        if(sign=='+'){
             document.getElementById("people").innerText=Number(document.getElementById("people").innerText)+1;
             document.getElementById("tamt").innerText=(Number(bills)+(Number(bills)/Number(tips)))/Number(document.getElementById("people").innerText);
        }
        else if (Number(document.getElementById("people").innerText)>1){
             document.getElementById("people").innerText=Number(document.getElementById("people").innerText)-1;
             document.getElementById("tamt").innerText=(Number(bills)+(Number(bills)/Number(tips)))/Number(document.getElementById("people").innerText);
        }    
}

// for in loop
l=[1,2,3,4]
for(let i in l){
    //console.log("for in loop",i);
}


// for of loop
for(let i of l){
    //console.log("for of loop",i);
}

list=[];
for(let i=0;i<5;i++)
{
    const details={
        name:'sk',
        age:20,
        address:{
            city:'mulanur',
            state:'tamilnadu'
        }
    };
    list.push(details);
}
//console.log(list);

//factory functions... same as java there we create class and create constructor same concept

lis=[]
function dynamicobj(name){
    return {
        name:name,//name, is also valid
        age:20,
        address:{
            city:'mulanur',
            state:'tamilnadu'
        }
    };
}

lis.push(dynamicobj('sk'));
console.log(lis);

//constructor functions object name as function name then it is called constructor function.

function Person(name){
    this.name=name;//name, is also valid
    this.age=20;
}

let li=new Person('kavinsk');
//console.log(li);


// diff b/w function declaration and func expression

// func declaration we can call anywhere
// addno() excute valid
function addno(){

}

// addno() excute valid

// addnum()  not excuted because it is a expression
let addnum= function(){

};

// addnum() excute only afetr declaration

// immediately invoked function expression
/*
syntax:

(()=>{

    // code here
    automatically excuted
})();

*/

(()=>{
    console.log('jekk');
})();

// functional arguments


let products=[
    {id:1,title:'android', cost:2500},
    {id:2,title:'pc', cost:50000},
    {id:3,title:'i-phone', cost:100000},
];

// chaining methods like java

products=products.sort(
    (a,b)=>{
        return a.cost-b.cost;
    }
).sort(
    (a,b)=>{
        if(a.title<b.title)return -1;
        if(a.title> b.title)return 1;
        return 0;
    }
).filter(
    (items)=>{
        return items.cost<80000;
    }
).map(
    (items)=>{
        return items.title+" - rs "+items.cost;
    }
);
//console.log(products);


//   String Methods

// 1. length - it is used to find the length of the string

let str='kavin sk';
//console.log(str.length);

// 2. charAt

//console.log(str.charAt(0));

// 3 charCodeAt it is used to acces the ascii value of the string in desired position
//console.log(str.charCodeAt(2));


// 4. concat
//console.log(str.concat(' 123'));

// 5. endsWith
//console.log(str.endsWith('sk'));

/// 6. includes

//console.log(str.includes('k'));

// 7. indexOf, lastIndexOf

//8. match -- doubt
//console.log(str.match());

// 9.. pasend doubt
//console.log(str.padEnd(''));

// 10. pad Start- doubt

//11.repeat - repeat the string value no of times mentioned
//console.log(str.repeat(3));

//12. replace('old string ', 'new string')
//console.log(str.replace('sk','ks'));

//13.search doubt
//console.log(str.search([]));

//14.lower upper
//console.log(str.toLowerCase());

//15 . doubt
//console.log(str.valueOf());

op=[1,2,3,4,5]
let ans=op.some((a)=>{
    return a%2==0;
});

//console.log(ans);

let h1=document.getElementById("h1");
// h1.onmouseover=()=>{
//     console.log('ok mouseover');
// }


