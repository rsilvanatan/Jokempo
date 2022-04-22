console.clear();

const prompt = require('prompt-sync')()

let jogarnovamente


do {
    

    let rodadas = prompt ('Quantas rodadas quer jogar? '); 
    while(isNaN(rodadas)){
        rodadas=prompt("Entrada inválida, digite um numero: ")

    }

    let pontoshumano = 0
    let pontoscomputador = 0
    let empate = 0


    for( let i=0;i<rodadas ;i++ ) 
    {
    
    
        let numrandom = ((Math.random())*3);
        let numaleatorio = Math.floor(numrandom)
        let listaopcoes = ["pedra", "papel", "tesoura"]
        let computador = listaopcoes[numaleatorio]
        let escolha = prompt ('Digite a sua escolha? pedra, papel ou tesoura? ')
    
        while(escolha!=="pedra" && escolha!=="papel" && escolha!=="tesoura"){
            escolha = prompt("entrada inválida, digite: pedra, papel ou tesoura: ")
        }
    
        console.log("computador escolheu: ", computador)
        console.log()
    
        if (escolha == computador )
        {
            console.log("Empatou!")
            console.log()
            empate ++
        }
            else if (escolha == "papel" && computador == "pedra"){
                console.log("Ponto para o humano")
                console.log()
                pontoshumano ++
            }
            else if (escolha == "papel" && computador == "tesoura"){
                console.log("Ponto para o computador")
                console.log()
                pontoscomputador ++
            }
            else if (escolha == "pedra" && computador == "papel"){
                console.log("Ponto para o computador")
                console.log()
                pontoscomputador ++
            }
            else if ( escolha == "pedra" && computador == "tesoura"){
                console.log("Ponto para o humano")
                console.log()
                pontoshumano ++
            }
            else if (escolha == "tesoura" && computador == "pedra"){
                console.log("Ponto para o computador")
                console.log()
                pontoscomputador ++
            }
            else if(escolha == "tesoura" && computador == "papel"){
                console.log("Ponto para o humano")
                console.log()
                pontoshumano ++
            }
            
            
            console.log("Pontos humano: ", pontoshumano)
            console.log("Pontos computador: ", pontoscomputador)
            console.log("Empates: ", empate)
            console.log("---------------------")
            console.log()
    }

    if (pontoshumano > pontoscomputador){
    console.log("Parabens você ganhou!!")
    console.log()
    }else if(pontoshumano < pontoscomputador){
    console.log("Que pena, você perdeu!")
    console.log()
    }else if(pontoscomputador == pontoshumano){
    console.log("O jogo empatou!")
    console.log()
}
    
jogarnovamente = prompt("deseja jogar novamente? Digite sim ou nao: ")
console.log()
} while (jogarnovamente == "sim");
