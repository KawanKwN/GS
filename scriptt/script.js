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
    ];