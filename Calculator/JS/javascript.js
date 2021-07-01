let prev = "";

let clear = document.querySelector("#clear").addEventListener('click', function remove(){
    console.log("check");
    document.querySelector("#screen").innerHTML = "";
    prev = "";
});

let one = document.querySelector("#one").addEventListener('click', function add(){
    let element = document.getElementById("one").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let two = document.querySelector("#two").addEventListener('click', function add(){
    let element = document.getElementById("two").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let three = document.querySelector("#three").addEventListener('click', function add(){
    let element = document.getElementById("three").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let four = document.querySelector("#four").addEventListener('click', function add(){
    let element = document.getElementById("four").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let five = document.querySelector("#five").addEventListener('click', function add(){
    let element = document.getElementById("five").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let six = document.querySelector("#six").addEventListener('click', function add(){
    let element = document.getElementById("six").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let seven = document.querySelector("#seven").addEventListener('click', function add(){
    let element = document.getElementById("seven").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let eight = document.querySelector("#eight").addEventListener('click', function add(){
    let element = document.getElementById("eight").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let nine = document.querySelector("#nine").addEventListener('click', function add(){
    let element = document.getElementById("nine").innerHTML;
    if(prev === "0") prev = "";
    prev += element;
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let zero = document.querySelector("#zero").addEventListener('click', function add(){
    let element = document.getElementById("zero").innerHTML;
    if(prev !== "0"){
        prev += element;
    }
    console.log(prev);
    document.querySelector("#screen").innerHTML = prev;
});

let decimal = document.querySelector("#decimal").addEventListener('click', function add(){
    if(prev === ""){
        prev += "0";
    }
    prev = eval(prev);
    if((prev-Math.floor(prev)) === 0){
        prev += ".";
        document.querySelector("#screen").innerHTML = prev;
    }
});

let curr = "";
let divide = document.querySelector("#divide").addEventListener('click', function add(){
    if(prev !== ""){
        curr += prev;
        curr += "/";
        prev = "";
        document.querySelector("#screen").innerHTML = prev;
    }
});

let multiply = document.querySelector("#multiply").addEventListener('click', function add(){
    if(prev !== ""){
        curr += prev;
        curr += "*";
        prev = "";
        document.querySelector("#screen").innerHTML = prev;
    }
});

let minus = document.querySelector("#minus").addEventListener('click', function add(){
    if(prev !== ""){
        curr += prev;
        curr += "-";
        prev = "";
        document.querySelector("#screen").innerHTML = prev;
    }
});

let plus = document.querySelector("#plus").addEventListener('click', function add(){
    if(prev !== ""){
        curr += prev;
        curr += "+";
        prev = "";
        document.querySelector("#screen").innerHTML = prev;
    }
});

let inverse = document.querySelector("#inverse").addEventListener('click' , function(){
    if(curr === ""){
        prev = eval(prev);
        prev = 1 / prev;
        document.querySelector("#screen").innerHTML = prev;
    }
});

let sign = document.querySelector("#sign").addEventListener('click' , function(){
    if(curr === ""){
        prev = eval(prev);
        prev = (prev*-1);
        document.querySelector("#screen").innerHTML = prev;
    }
});

let equals = document.querySelector("#equals").addEventListener('click', function add(){
    if(prev !== ""){
        curr += prev;
        console.log("curr" , curr);
        prev = eval(curr);
        console.log(typeof(prev));
        curr = "";
        document.querySelector("#screen").innerHTML = prev;
    }
});