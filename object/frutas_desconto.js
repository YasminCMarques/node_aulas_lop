const frutas = {'fruta1' :{"nome":"maça" , "cor":'vermelha', 'peso':100, 'preço':5},
"fruta2":{"nome":"banana" , "cor":'amarela', 'peso':200, 'preço':8},
"fruta3":{"nome":"uva" , "cor":'verde', 'peso':300, 'preço':10}
}






for (let f in frutas) {
    console.log(f, '-> nome:', frutas[f].nome, ", sua cor é" ,frutas[f].cor, "seu peso é",frutas[f].peso,"gramas", "e seu preço é R$",frutas[f].preço)
}


console.log("Os valores depois dos 10%")


for (let f in frutas) {
    console.log(f, '-> nome:', frutas[f].nome, ", sua cor é" ,frutas[f].cor, "seu peso é",frutas[f].peso+(frutas[f].peso/100)*10,"gramas", "e seu preço é R$",frutas[f].preço+(frutas[f].preço/100)*10)
}
