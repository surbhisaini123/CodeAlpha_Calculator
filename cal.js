



document.addEventListener("DOMContentLoaded", function(){
    let inp= document.querySelector("input")
let buttons=document.querySelectorAll(".button button")
for(let btn of buttons){
  
     btn.addEventListener("click" ,()=>{
    // console.log("hiii");
    let txt=btn.innerText
    // console.log(txt);
    if(txt=="C"){
         inp.value=""
     }else if(txt=="AC"){
        inp.value= inp.value.slice(0, -1)
     }else if(txt== "="){
          let expression = inp.value;

    // 🔥 % ko /100 me convert karo (real calculator logic)
    expression = expression.replace(/%/g,"/100");

    try{
        inp.value = eval(expression);
    }catch{
        inp.value = "Error";
    }   //eval calculate a result
    }else if(txt=="()"){
    addBracket()
    }else if(txt=="%"){
        inp.value+="%"

    }else{
        inp.value=inp.value+txt
    }
        
    
    })
        
    
}
   


})
