
function toggleMenu() {
    const nav = document.getElementById("nav");
    const main = document.querySelector("main");

    nav.classList.toggle("active");
    main.classList.toggle("inactive");
  }
function toogleMenu(){
    const nav = document.getElementById("nav");
    const subtitle = document.querySelector(".subtitle");

    nav.classList.toggle("active");
    subtitle.classList.toggle("oculta")
}

const questions = [
  {
    question: "1. Qual é a principal causa de enchentes nas cidades brasileiras?",
    answers: ["A) Falta de chuvas constantes", "B) Queimadas em áreas urbanas", "C) Acúmulo de lixo e urbanização desordenada", "D) Presença de vegetação nativa"],
    correct: 2
  },
  {
    question: "2. O que é um sistema de alerta precoce?",
    answers: ["A) Um tipo de sirene de rua", "B) Um protocolo de evacuação manual", "C) Um conjunto de sensores que avisa sobre riscos antes que ocorram", "D) Um aplicativo de previsão do tempo genérico"],
    correct: 2
  },
  {
    question: "3. Qual dessas tecnologias a HydroWacht utiliza para prevenir enchentes?",
    answers: ["A) Impressoras 3D", "B) Blockchain", "C) Sensores IoT e Inteligência Artificial", "D) Realidade Virtual"],
    correct: 2
  },
  {
    question: "4. Qual é a principal função dos sensores IoT no projeto HydroWacht?",
    answers: ["A) Medir a velocidade da internet nas regiões de risco", "B) Monitorar o nível da água em tempo real", "C) Transmitir imagens das enchentes ao vivo", "D) Captar sons de sirenes nas cidades"],
    correct: 1
  },
  {
    question: "5. Em qual local é mais comum o impacto das enchentes no Brasil?",
    answers: ["A) Regiões desérticas", "B) Áreas montanhosas", "C) Zonas urbanas com pouca drenagem", "D) Fazendas afastadas"],
    correct: 2
  },
  {
    question: "6. Por que os dados históricos são importantes no combate às enchentes?",
    answers: ["A) Para criar gráficos decorativos para campanhas", "B) Para prever com precisão padrões de risco", "C) Para usar como prova em processos judiciais", "D) Para descobrir locais de pesca"],
    correct: 1
  },
  {
    question: "7. Qual é um dos principais diferenciais da HydroWacht?",
    answers: ["A) Transmitir canais de notícias locais", "B) Conectar cidadãos, órgãos públicos e sensores em um só sistema", "C) Permitir chamadas de vídeo durante a chuva", "D) Bloquear ruas automaticamente"],
    correct: 1
  },
  {
    question: "8. O que os moradores podem fazer pelo app da HydroWacht?",
    answers: ["A) Enviar relatórios sobre enchentes e receber alertas", "B) Acessar jogos sobre desastres naturais", "C) Comprar itens de emergência", "D) Marcar consultas médicas"],
    correct: 0
  },
  {
    question: "9. Por que é importante que o sistema da HydroWacht funcione em tempo real?",
    answers: ["A) Para evitar que os dados fiquem desatualizados", "B) Para mostrar comerciais relevantes", "C) Para transmitir a previsão do tempo do dia seguinte", "D) Para realizar sorteios de emergência"],
    correct: 0
  },
  {
    question: "10. Qual é o maior objetivo da HydroWacht?",
    answers: ["A) Educar sobre geografia urbana", "B) Ganhar seguidores nas redes sociais", "C) Reduzir os impactos humanos e materiais causados por enchentes", "D) Substituir a Defesa Civil"],
    correct: 2
  }
];

let perguntaAtual = 0;
  let pontuacao = 0;

  function carregarPergunta() {
  const q = questions[perguntaAtual]; // Corrigido: era quizData
  document.getElementById("question").innerText = q.question; // Corrigido: era q.pergunta
  const opcoesList = document.getElementById("options");
  opcoesList.innerHTML = "";
  q.answers.forEach((opcao, index) => { // Corrigido: era q.opcoes
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${index}"> ${opcao}</label>`;
    opcoesList.appendChild(li);
  });
  document.getElementById("result").innerText = "";
}

function nextQuestion() {
  const selecionada = document.querySelector('input[name="option"]:checked');
  if (!selecionada) {
    alert("Selecione uma opção!");
    return;
  }

  if (parseInt(selecionada.value) === questions[perguntaAtual].correct) { // Corrigido: era quizData
    pontuacao++;
  }

  perguntaAtual++;

  if (perguntaAtual < questions.length) { // Corrigido: era quizData
    carregarPergunta();
  } else {
    document.getElementById("quiz").innerHTML = `
      <h2>Você acertou ${pontuacao} de ${questions.length} perguntas!</h2>
      <p>${pontuacao >= 7 ? "Parabéns, você entende bem sobre prevenção de enchentes!" : "Continue estudando para entender mais sobre o tema!"}</p>
      <button onclick="location.reload()">Refazer Quiz</button>
    `;
  }
}
