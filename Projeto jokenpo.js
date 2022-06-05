        const prompt = require("prompt-sync")();
        console.clear();
        while(true){
        let rodadas = 0;
        let op = 0;
        let maquina = 0;
        let pontosJogador = 0;
        let pontosMaquina = 0;
        let empate = 0;
        const jokenpo = ["Pedra", "Papel", "Tesoura"];

        console.log();
    
        console.log("Bem vindo ao Jokenpô!");
        console.log();
        rodadas = +prompt("Digite a quantidade de rodadas: ");
        console.log();
        console.log();
        for(let i=1; i<=rodadas; i++){
        
            const aleatorio = Math.floor(Math.random()*3);
            maquina = aleatorio;
            console.log("***************************************************")
            op = +prompt("escolha a sua opção: 1-pedra/ 2-papel/ 3-tesoura: ");
            while(op != 1 && op != 2 && op != 3){
                console.log();
                console.log("Opção Invalida ");
                op = +prompt("escolha a sua opção: 1-pedra/ 2-papel/ 3-tesoura: ");
                
            } 
            op--;

            if((op == 0 && maquina == 2) || (op == 1 && maquina == 0) || (op == 2 && maquina == 1)){
                    console.log();
                    console.log("Parabéns você ganhou essa rodada!");  
                    pontosJogador++
            }else if((op == 2 && maquina == 0) || (op == 0 && maquina == 1) || (op == 1 && maquina == 2)){
                    console.log();
                    console.log("Você perdeu essa rodada!");
                    pontosMaquina++   
            }else if((op == 2 && maquina == 2) || (op == 1 && maquina == 1) || (op == 0 && maquina == 0)){
                    console.log();
                    console.log("Empate nessa rodada!");
                    empate++
            } 
        } 

        if(pontosJogador > pontosMaquina && pontosJogador >= empate){
            console.clear();
            console.log("           PARABÉNS GUERREIRO(A)! VOCÊ FOI O GRANDE CAMPEÃO :) ")
            console.log();
            console.log("RANK: jogador(a) em 1° com ",pontosJogador," pontos / maquina em 2° com ",pontosMaquina," pontos")
            console.log("vocês empataram ",empate," vezes!")
            console.log();
        }else if(pontosMaquina > pontosJogador && pontosMaquina >= empate){
            console.clear();
            console.log("NÃO FOI DESSA VEZ, VOCÊ LUTOU BRAVAMENTE MAIS A MAQUINA VENCEU :( ")
            console.log();
            console.log("RANKING: maquina em 1° com ",pontosMaquina," pontos / jogador(a) em 2° com ",pontosJogador," pontos")
            console.log("vocês empataram ",empate," vezes!")
            console.log();
        }else {
            console.clear();
            console.log("A DISPUTA FOI MUITO EQUILIBRADA E DESSA VEZ O JOGO TERMINOU EMPATADO :)")
            console.log();
            console.log("você fez ",pontosJogador," pontos e a maquina fez ",pontosMaquina," pontos")
            console.log("vocês empataram ",empate," vezes!")
            console.log();
        }
        
        
        let novoJogo = prompt("Deseja jogar novamente? ").toUpperCase();
        if(novoJogo === "SIM"){ 
            console.clear();         
            continue;          
        }else{
            console.clear();
            console.log("Fim de Jogo!!!");
            break;
        }

        }

         
         
