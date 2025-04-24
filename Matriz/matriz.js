

// const mat1 = [[-5,8,0], [3,7,10], [1,-8,2]]
// const mat2 = [[5, 7, 4], [-1, -1, -1],[0, 10, 9]]

// const resultado = [[],[],[]] 

//  for (let linha =0; linha<3 ; linha++){
// for(let coluna=0 ; coluna<3; coluna++){
//  resultado[linha][coluna] = mat1[linha][coluna] + mat2[linha][coluna]}
// }
// console.log(mat1)
// console.log(mat2)
// console.log(resultado)

 

 const mat1 = [[-5,8,0], [3,7,10], [1,-8,2]]
const mat2 = [[5, 7, 4], [-1, -1, -1],[0, 10, 9]]
for (let linha =0; linha<3 ; linha++){
    for(let coluna=0 ; coluna<3; coluna++){
        const resultado =(mat1[linha][coluna]+ mat2[linha][coluna] )
        console.log(resultado)
    }
}
