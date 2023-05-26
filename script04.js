function contar(){
var n1 = document.getElementById('num1')
var n = Number(n1.value)
var tab = document.getElementById('res')
if(n1.value.length == 0){
    alert('[ERRO]Digite um numero valido')
}else{
    let c = 1 
    tab.innerHTML = ''
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
}


}