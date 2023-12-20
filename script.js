const btn = document.getElementsByClassName('button_cal_container');
 let inputEl = document.getElementById("ip");



for(let eachbtn of btn){
    eachbtn.addEventListener("click",btnfn);
  
}

function btnfn(e){
        
    if (e.target.innerText == "="){
        inputEl.value += eval(e.target.innerText);
    }else{
        inputEl.value += e.target.innerText;
    }

}



