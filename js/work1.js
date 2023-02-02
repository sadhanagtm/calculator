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
        show.value+=a
    }
    console.log(starting,opt,ending)
} 
function Operator(a){
    opt+=a;
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
function Partial(){
    if(opt.length===0){
        let lgt=starting.length;
        let data=starting.slice(0,lgt-1);
        console.log(starting,data);
        starting=data;
        show.value=data;
    }
    else if(opt.length>=1 && ending.length===0){
        let lgt=opt.length;
        console.log(lgt)
        let data=opt.slice(0,lgt-1);
        console.log(opt,data);
        opt=data;
        show.value= starting+data
    }
    else{
        let lgt=ending.length;
        let data=ending.slice(0,lgt-1);
        console.log(ending,data,opt);
        ending=data;
        show.value=starting+opt+ending;
    }
}