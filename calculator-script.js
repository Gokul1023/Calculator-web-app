function displayvalue(val){
    document.getElementById("display").value=document.getElementById("display").value+val;
}

function clearDisplay(){
    document.getElementById("display").value='';
}

function backspace(){
   let a= document.getElementById("display");
   a.value=a.value.slice(0,-1);
}

function answer(){
    var userInput = document.getElementById("display").value;
    var result=eval(userInput);

    document.getElementById("display").value=result;
}
