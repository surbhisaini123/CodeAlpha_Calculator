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
     }else if(txt=="="){
        inp.value=eval(inp.value)   //eval calculate a result
    }else{
        inp.value=inp.value+txt
    }
        
    
    })
        
    
}
