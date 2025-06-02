const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");
const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas:{
        }
    texto:"Alternativa1",
    afirmaçao; 'afirmaçao1'
],
[
  texto:"Alternativa2",.
 afirmaçao:'afirmaçao2'

]


        ["Alternativa1",c]
    },
    {
     enunciado: "Pergunta 1",
        alternativas:{
        }
    texto:"Alternativa1",
    afirmaçao; 'afirmaçao1'
],
[
  texto:"Alternativa2"
 afirmaçao:'afirmaçao2'

]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}





function mostraAlternativa()
mostraPergunta();
























