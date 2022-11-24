const name=document.getElementsByClassName('name');


//console.dir(name[0].attributes.id.textContent);

//name[0].value="kavin sk";
// setAttribute
//name[0].setAttribute('value','skkk');

//getAttribute
//console.log('getting attribute is...',name[0].getAttribute('value'));

//console.log(parseInt('123',10));
// is attribute is present or not
//console.log(name[0].hasAttribute('value'));


// remove attribute
//name[0].removeAttribute('');

//console.log(name[0].getAttribute('data-ece'));

// to get all custom values

//console.log(name[0].dataset);

//const allattributes=name[0];

//console.log(allattributes.attributes);


// Applying css in dom

// Building a Show password Technique


const checkbox=document.getElementById("check");

checkbox.onclick =(event)=>{
    const ele=event.target.previousElementSibling.previousElementSibling;
    //console.log(ele.value,event.target.value);
    const checkboxvalue=event.target;
    if(checkboxvalue.value=='absent'){
        checkboxvalue.setAttribute('value','present');
        ele.setAttribute('type','text');
    }
    else{
        checkboxvalue.setAttribute('value','absent');
        ele.setAttribute('type','password');
    }
}

const submitbtn=document.getElementById('submitbtn');
submitbtn.setAttribute('style','color:red');
submitbtn.style.backgroundColor='black';
submitbtn.style.cssText='border-radius:5px';


const element=document.getElementsByClassName("input-name-container");

//console.log(element[0]);

//element[0].style.cssText='background-color: aqua;width: 600px;';

// element[0].style.backgroundColor='green';
// element[0].style.width='300px';

// Applying css using class

//console.log(element[0].classList);

// element[0].classList.forEach((i)=>{
//     console.log(i);
// })

//1.add
//element[0].classList.add('iiii');

//2.contains
//element[0].classList.contains('iiii');

//3.replace
//element[0].classList.replace('oldclassname','newclassname');

//4. remove
//element[0].classList.remove('iiii');

//5.toggle
// if class name already exists remove it otherwise add it
//element[0].classList.toggle("newclassname");

console.log(element[0].classList);

const showbtn=document.getElementById("show");
const hidebtn=document.getElementById("hide");

hidebtn.onclick=()=>{
    element[0].style.display='none';
}

showbtn.onclick=()=>{
    element[0].style.display='block';
}

const changebg=document.getElementById("changebg");
const input=document.getElementById("inp");
changebg.onclick=()=>{
    //console.log(input.id);
    if(input.id!='inp')
    input.id='inp'
    else input.id='';
}

function handler(){
    alert('you have clicked');
}

//document.addEventListener('click',handler,{once:true});

//document.removeEventListener('click',handler);

//Bubling and capturing
const form=document.querySelector("form");
const formdiv=document.querySelector(".form-div");
const formp=document.querySelector(".form-p");

form.addEventListener('click',(event)=>{
    //alert(event);
    console.log(event);
});

formdiv.addEventListener('click',()=>{
alert('div');
});

formp.addEventListener('click',()=>{
    alert('p')
});

const elements=document.querySelectorAll(".form");
elements.forEach(ele=>{
    ele.addEventListener('click',(event)=>{
        console.log(' bubling phase',event.target.tagName);
    });

    ele.addEventListener('click',(event)=>{
        console.log('capturing phase',event.target.tagName);
    },{capture:true});
});

// Preventing default actions in browser

