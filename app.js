(function(){
 const buttons=document.querySelectorAll(".btn");
 const storeimg=document.querySelectorAll(".storeimg");
 buttons.forEach((item)=>{
    item.addEventListener("click",(e)=>{
e.preventDefault();
const filter=e.target.dataset.filter;
console.log(filter)
storeimg.forEach((img)=>{
    if(filter==="all"){
        img.style.display="block"
    }
    else{
        if(img.classList.contains(filter)){
            img.style.display="block"
        }
        else{
            img.style.display="none"
        }
    }
})
    })
 })
})();