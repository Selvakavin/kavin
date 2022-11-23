let buttonsclick=document.querySelector('.navigation-bars');
let images=document.querySelector('.images');

buttonsclick.addEventListener('click',(event)=>{
    let className=event.target.className;
    className=className.toLowerCase();
    images.childNodes.forEach(ele=>{
        if((ele.className!=undefined && className.substring(0,4)==ele.className.toLowerCase().substring(0,4)))
        {
            let applycss=document.querySelector(`.${ele.className}`);
            applycss.style.display="block";
        }
        else if(className=='all'){
            images.childNodes.forEach(ele=>{
                if(ele.className!=undefined )
                {
                    let applycss=document.querySelector(`.${ele.className}`);
                    applycss.style.display="block";
                }
            });
        }
        else if(ele.className!=undefined){
            let applycss=document.querySelector(`.${ele.className}`);
            applycss.style.display="none";
        }
    });
    
});
