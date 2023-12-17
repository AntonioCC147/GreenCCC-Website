const quiz = [
  {
    question: "Ce este energia verde?",
    options: [
      "Combustibili fosili",
      "Energie regenerabilă",
      "Energie nucleară",
      "Cărbune",
    ],
    answer: 1,
  },
  {
    question: "Care dintre următoarele este o sursă de energie regenerabilă?",
    options: ["Energie solară", "Cărbune", "Țiței", "Gaz natural"],
    answer: 0,
  },
  {
    question: "Care este principala beneficiu a energiei verzi?",
    options: [
      "Este nelimitată",
      "Este ieftină",
      "Este curată",
      "Toate de mai sus",
    ],
    answer: 3,
  },
  {
    question: "Care este cel mai comun tip de energie regenerabilă?",
    options: ["Energie solară", "Vânt", "Hidroelectrică", "Geotermală"],
    answer: 2,
  },
  {
    question: "Care este principala dezavantaj a energiei regenerabile?",
    options: [
      "Este scumpă",
      "Nu este de încredere",
      "Este limitată",
      "Este dăunătoare pentru mediu",
    ],
    answer: 1,
  },
  {
    question: "Care țară este cel mai mare producător de energie eoliană?",
    options: ["China", "SUA", "Germania", "India"],
    answer: 0,
  },
  {
    question: "Care este principalul gaz cu efect de seră?",
    options: ["Oxigen", "Dioxid de carbon", "Azot", "Metan"],
    answer: 1,
  },
  {
    question: "Care este efectul gazelor cu efect de seră?",
    options: [
      "Încălzire globală",
      "Distrugerea stratului de ozon",
      "Ploaie acidă",
      "Poluare aeriană",
    ],
    answer: 0,
  },
  {
    question: "Care este principala sursă de energie în lume?",
    options: ["Energie solară", "Vânt", "Țiței", "Nucleară"],
    answer: 2,
  },
  {
    question: "Care este principala avantaj a energiei solare?",
    options: [
      "Este nelimitată",
      "Este ieftină",
      "Este curată",
      "Toate de mai sus",
    ],
    answer: 3,
  },
];

let currentQuestion = 0;

function displayQuestion() {
  const question = quiz[currentQuestion];
  document.getElementById("question").textContent = question.question;
  const options = document.getElementById("options");
  options.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.setAttribute("class", "button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    options.appendChild(button);
  });
}

let correctAnswers = 0;

function checkAnswer(answer) {
  if (answer === quiz[currentQuestion].answer) {
    correctAnswers++;
  } else {
  }
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    displayQuestion();
  } else {
    clearDisplay();
    printFinalScore();
  }
}

function printFinalScore() {
  document.getElementById("answer").innerHTML =
    "Numărul de răspunsuri corecte: " + correctAnswers;
    document.getElementById("answer").style.marginBottom="5%";
}

function clearDisplay() {
  document.getElementById("quiz").remove();
}

document.getElementById("next").onclick = () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    displayQuestion();
  } else {
    clearDisplay();
    printFinalScore();
  }
};

displayQuestion();
