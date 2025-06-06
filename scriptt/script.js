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
 const quizData = [
    {
      pergunta: "1. Qual é a principal causa de enchentes nas cidades brasileiras?",
      opcoes: ["A) Falta de chuvas constantes", "B) Queimadas em áreas urbanas", "C) Acúmulo de lixo e urbanização desordenada", "D) Presença de vegetação nativa"],
      correta: 2
    },
    {
      pergunta: "2. O que é um sistema de alerta precoce?",
      opcoes: ["A) Um tipo de sirene de rua", "B) Um protocolo de evacuação manual", "C) Um conjunto de sensores que avisa sobre riscos antes que ocorram", "D) Um aplicativo de previsão do tempo genérico"],
      correta: 2
    },
    {
      pergunta: "3. Qual dessas tecnologias a HydroWacht utiliza para prevenir enchentes?",
      opcoes: ["A) Impressoras 3D", "B) Blockchain", "C) Sensores IoT e Inteligência Artificial", "D) Realidade Virtual"],
      correta: 2
    },
    {
      pergunta: "4. Qual é a principal função dos sensores IoT no projeto HydroWacht?",
      opcoes: ["A) Medir a velocidade da internet", "B) Monitorar o nível da água em tempo real", "C) Transmitir imagens ao vivo", "D) Captar sons de sirenes"],
      correta: 1
      },
     {
      pergunta: "5. Em qual local é mais comum o impacto das enchentes no Brasil?",
      opcoes: ["A) Regiões desérticas", "B) Áreas montanhosas", "C) Zonas urbanas com pouca drenagem", "D) Fazendas afastadas"],
      correta: 2
     },
      {
      pergunta: "6. Por que os dados históricos são importantes no combate às enchentes?",
      opcoes: ["A) Para criar gráficos decorativos", "B) Para prever padrões de risco", "C) Para processos judiciais", "D) Para pesca"],
      correta: 1
    },
    {
      pergunta: "7. Qual é um dos principais diferenciais da HydroWacht?",
      opcoes: ["A) Transmitir notícias", "B) Conectar cidadãos, órgãos públicos e sensores", "C) Chamadas de vídeo", "D) Bloquear ruas automaticamente"],
      correta: 1
    },
    {
      pergunta: "8. O que os moradores podem fazer pelo app da HydroWacht?",
      opcoes: ["A) Enviar relatórios e receber alertas", "B) Acessar jogos", "C) Comprar itens", "D) Marcar consultas"],
      correta: 0
    },
    ];