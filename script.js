function multTable(){
    let num = document.getElementById("multtxt")
    let tab = document.getElementById("tab")
    
    let number = Number(num.value)
    
    if(num.value.length == 0){
        window.alert("[ERROR] Check your values again!")
    } else {
        tab.innerHTML = ''
        for(var c = 0; c <= 10; ++c){
            let item = document.createElement("option")
            item.text = `${number} x ${c} = ${number * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}