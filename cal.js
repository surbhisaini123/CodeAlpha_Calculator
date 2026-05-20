
document.addEventListener("DOMContentLoaded", function(){
let inp= document.querySelector("input")
let buttons=document.querySelectorAll(".button button")
for(let btn of buttons){
  
     btn.addEventListener("click" ,()=>{
    let txt=btn.innerText
    if(txt=="C"){
         inp.value=""
     }else if(txt=="AC"){
        inp.value= inp.value.slice(0, -1)
     }else if(txt== "="){
          let expression = inp.value;

    
    expression = expression.replace(/%/g,"/100");

    try{
        inp.value = eval(expression);
    }catch{
        inp.value = "Error";
    }   
    }else if(txt=="%"){
        inp.value+="%"

    }else{
        inp.value=inp.value+txt
    }
        
    
    })
        
    
}
   


})
