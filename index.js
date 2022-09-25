

btnCalcular.addEventListener("click", calcular)
function calcular(){
    
    let bill=document.getElementById("inputBill").value;
    let people=document.getElementById("inputPeople").value;
    let propina=document.getElementById("inputPropina").value;
    
    
    
    let a=bill/people
    let b=a*propina
    let c=b/100
    
    let d=a+c
    
    document.getElementById("bill").innerHTML= c
    document.getElementById("people").innerHTML=d

}
