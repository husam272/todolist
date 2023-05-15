let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let p = document.getElementById("p");

btn.addEventListener("click" , function (){

    if(input.value == ""){
        
        p.innerHTML="Enter a Value";
    }
    else{
        p.innerHTML="";
        let para = document.createElement("p");
        para.innerHTML = input.value;
        list.appendChild(para);
        input.value=""

        let remove = document.createElement("button");
        remove.innerHTML="Delete";
        para.appendChild(remove);
        remove.addEventListener("click" , function (){
            list.removeChild(para);
        })
    }
   
});