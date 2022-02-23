let prod = document.querySelector("input.prod");
let val = document.querySelector("input.val")
var tot = document.querySelector("td.tVal")
let initVal = 0
function read(){   
    initVal += Number(val.value) 
    if(String(prod.value) == 0 || String(val.value) == 0){
        window.alert("Preencha o produto e o seu valor completamente!");
    }else{
        //Criação da linha da tabela
        let proxLine = document.createElement("tr")
        document.querySelector(".tb02").appendChild(proxLine)
        proxLine.setAttribute("class","cont")
        //Criação das células da linha
        let proxContent1 = document.createElement("td")
        proxContent1.setAttribute("class","nprod")
        proxLine.appendChild(proxContent1)
        proxContent1.innerHTML = `${prod.value}`
        let proxContent2 = document.createElement("td")
        proxLine.appendChild(proxContent2)
        proxContent2.innerHTML = `R$ ${Number(val.value).toFixed(2).replace('.',',')}`
    }
    prod.value = ""
    val.value = ""
    tot.innerHTML = `R$ ${initVal.toFixed(2).replace('.',',')}`
}

function del(){
   
}