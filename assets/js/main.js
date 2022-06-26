
const display = document.querySelector('#display')
const evaluate = document.querySelector('#calculate')
const Delete = document.querySelector('#del')
const DeleteAll = document.querySelector('#clear')

function appendNum(x) { 
     display.value = display.value+x; 
 }
 
 evaluate.addEventListener('click', () => { 
     let equation = display.value.trim() 
     display.value = eval(equation);     
 })

 Delete.addEventListener('click', () => {display.value = display.value.slice(0,-1);})

 DeleteAll.addEventListener('click',() =>{display.value=''})
 

