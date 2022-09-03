console.log(`Calculator`);

const screen=document.getElementById("screen");
const buttons=document.querySelectorAll("button");
let screenValue="";  //initially blank

for(let item of buttons){  //creating click event for every button
    item.addEventListener("click", (e)=>{
        let buttontext=e.target.innerText;
        
        if(buttontext == "AC"){ screenValue=""; screen.value=""; }  //clearing the Screen
        //slicing the string ,slice(0, -1) is equivalent to slice(0, str.length - 1)
        else if(buttontext == "C"){screenValue = screenValue.slice(0,-1);  screen.value = screen.value.slice(0,-1); }  
        else if(buttontext == "="){   //eval is library function to calculate expressions
            try {
                screen.value = eval(screenValue); screenValue = eval(screenValue); 
            }catch (error) {
                screenValue=""; screen.value="Invalid Expression";
            }
        }
        else if(buttontext == "X"){ screenValue += "*"; screen.value += buttontext; }  //changing for calculating expression
        else if(buttontext == "÷"){ screenValue += "/"; screen.value += buttontext; }  //changing for calculating expression
        else if(buttontext == "%"){ screenValue += "/100"; screen.value += buttontext; }  //changing for calculating expression
        else{ screenValue += buttontext; screen.value += buttontext; }
    });
}