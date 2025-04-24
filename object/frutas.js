const frutas = {'fruta1' :{"nome":"maça" , "cor":'vermelha', 'peso':100, 'preço':5, "estragou":true},
"fruta2":{"nome":"banana" , "cor":'amarela', 'peso':200, 'preço':8, "estragou":false},
"fruta3":{"nome":"uva" , "cor":'verde', 'peso':300, 'preço':10, "estragou":false}
}



for (let f in frutas) {
 
    if(frutas[f] ["estragou"] ==true){
        console.log("Putz grila, está podre")
    }
   else{
    console.log(f, '-> nome:', frutas[f].nome, ", sua cor é" ,frutas[f].cor, "seu peso é",frutas[f].peso,"gramas", "e seu preço é R$",frutas[f].preço)
   }
   
}


