let text=document.querySelector(".text");
let rbox=document.querySelector(".res");
text.addEventListener("input",function(){
    let t=text.value;
    let c=t.length;
    rbox.innerText=`${c}`;

})
