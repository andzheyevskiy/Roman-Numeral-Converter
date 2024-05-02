const input=document.getElementById("number")
const boton= document.getElementById("convert-btn")
const output=document.getElementById("output")

const values=[
["M",1000],
["CM",900],
["D",500],
["CD",400],
["C",100],
["XC",90],
["L",50],
["XL",40],
["X",10],
["IX",9],
["V",5],
["IV",4],
["I",1],
]
function isError(value){
    let isError=true
    if(!value){
        output.innerHTML="Please enter a valid number"
        output.setAttribute("class","wrong")
    }else if(value<0){
        output.innerHTML="Please enter a number greater than or equal to 1"
        output.setAttribute("class","wrong")
    }else if(value>=4000){
        output.innerHTML="Please enter a number less than or equal to 3999"
        output.setAttribute("class","wrong")
    }else{
        isError=false
    }
    return isError    
}
function converter(number){
    if(!isError(number))
{        let result="";
        values.forEach((numeral)=>{
        while(number>=numeral[1]){
            result+=numeral[0]
            number -= numeral[1]
        }
    })
    output.setAttribute("class","normal")
    output.innerHTML = result}
}

boton.onclick= function(){
    converter(input.value) 
}






