const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "VOCÊ ACHA CORRETO A AUSENCIA DOS PROFESSORES NAS AULAS, ASSIM COMO A DIMINUIÇÃO DE MATÉRIA?",
        alternativas: [
            {
                texto: "SIM, ACHO CORRETO!",
                afirmacao: "É CONSTATADO QUE O ENSINO NO BRASIL "
            },
            {
                texto: "NÃO ACHO CORRETO",
                afirmacao: "TEM MUITO A SER MELHORADO,"
            }
        ]
    },
    {
        enunciado: "VOCÊ ACHA QUE A FALTA DE TECNOLOGIA E DE INVESTIMENTOS NO MEIO ESCOLA, PREJUDICA OS ALUNOS NOS ESTUDOS?",
        alternativas: [
            {
                texto: "SIM ,PREJUDICA.",
                afirmacao: "ATÉ PORQUE A BAIXA"
            },
            {
                texto: "NÃO, PREJUDICA.",
                afirmacao: "QUALIDADE DO ENSINO"
            }
        ]
    },
    {
        enunciado: "VOCÊ ACHA QUE O DESINTERESSE DOS ALUNOS, ASSIM COMO A PARTICIPAÇÃO DOS PAIS NO MEIO ESCOLAR PODE SER UM PROBLEMA NA EDUCAÇÃO?",
        alternativas: [
            {
                texto: "ACHO UM PROBLEMA.",
                afirmacao: "ACABA PREJUDICANDO."
            },
            {
                texto: "NÃO ACHO UM PROBLEMA.",
                afirmacao: "MUITO OS ALUNOS."
            }
        ]
    },
    {
        enunciado: "VOCÊ NA SUA OPINIÃO, ACHA QUE PODE TER MELHORIAS NO MEIO ESCOLAR?",
        alternativas: [
            {
                texto: "SIM, PODERIA.",
                afirmacao: "A DESISTIREM."
            },
            {
                texto: "NÃO, PODERIA.",
                afirmacao: "DE TERMINAREM OS ESTUDOS."
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " É CONSTATADO QUE O ENSINO NO BRASIL TEM MUITO A SER MELHORADO ATÉ PORQUE A BAIXA QUALIDADE DO ENSINO, ACABA PREJUDICANDO MUITOS ALUNODS DE DESISTIREM DE TERMINAREM OS";
}

mostraPergunta();
