let starting='';
let ending='';
let opt='';
let show= document.getElementById("show")
function Numb(a){
    if (opt.length===0){
        starting+=a;
        show.value=starting;
    }
    else{
        ending+=a;
        show.value+=ending
    }
    console.log(starting,opt,ending)
} 
function Operator(a){
    opt=a;
    show.value+=a;
}
function Result(){
let val='';
    if(opt==='+'){
     val= Number(starting)+ Number(ending);
    }
    else if(opt==='-'){
       val=Number(starting)- Number(ending);
    }
     else if(opt==='*'){
        val=Number(starting)* Number(ending);
    } 
    else if(opt==='/'){
        val=Number(starting)/ Number(ending);
    }
    
    show.value=val;
}
function Clear(){
    starting="";
    ending="";
    opt="";
    show.value="0";
}