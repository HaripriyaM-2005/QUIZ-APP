const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "A program that can copy itself and infect a computer without the permission or knowledge of the owner is called?",
    options: ["Floppy", "Virus", "Java", "Monitor"],
    answer: "Virus",
  },
  {
    question: "Which was the first web browse?",
    options: ["WWW", "Google", "Fiefox", "Safari"],
    answer: "WWW",
  },
  {
    question: "which company is nicknamed'Big Blue'?",
    options: ["TCS", "IBM", "Microsoft", "Satyam"],
    answer: "IBM",
  },
  {
    question: "What is windows XP?",
    options: ["OS", "Storage device", "Processor", "Output Device"],
    answer: "OS",
  },
  {
    question: "What is a Compiler?",
    options: ["An Application Software", "A process", "A System Software", "A document"],
    answer: "A System Software",
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Tool Multi Language",
      "Hypertext Markdown Language",
      "Home Tool Markup Language",
    ],
    answer: "Hypertext Markup Language",
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answer: "<script>",
  },
  {
    question: "The brain of any computer system is?",
    options: ["ALU", "Memory", "CPU", "Control unit"],
    answer: "CPU",
  },
  {
    question: "Which of the following is the 1's complement of 10??",
    options: ["01", "110", "11", "10"],
    answer: "01",
  },
  {
    question: "How many Bits make one Byte?",
    options: ["16 bits", "32 bits", "64 bits", "8 bits"],
    answer: "CPU",
  },
  {
    question: "Printer is an example of which types of device?",
    options: ["Input", "Output", "CPU", "Storage"],
    answer: "Output",
  },
  {
    question: "Which of these is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML",
  },
  {
    question: "Which company created the Windows operating system?",
    options: ["IBM", "Microsoft", "Google", "Apple"],
    answer: "Microsoft",
  },
  {
    question: "Which of the following is a search engine?",
    options: ["Yahoo", "Facebook", "WhatsApp", "Excel"],
    answer: "Yahoo",
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Run Access Memory", "Read Access Memory", "Real Actual Memory"],
    answer: "Random Access Memory",
  },
  {
    question: "Which device is used to connect a computer to a network?",
    options: ["Keyboard", "Monitor", "Scanner", " Router"],
    answer: " Router",
  },
  {
    question: "Which of the following stores permanent data?",
    options: ["Register", "Cache", "ROM", "RAM"],
    answer: "ROM",
  },
  {
    question: "Which programming language was developed by Sun Microsystems (now owned by Oracle)?",
    options: ["Python", "Ruby", " C#", "Java"],
    answer: "Java",
  },
  {
    question: "What is the purpose of DNS (Domain Name System)?",
    options: ["It encrypts data", "It checks internet security", "It manages network devices", " It maps IP addresses to domain names"],
    answer: " It maps IP addresses to domain names",
  },
  {
    question: "Which of the following is not a type of cloud computing model?",
    options: ["TaaS", "IaaS", "PaaS", "MySQL"],
    answer: "TaaS",
  },
  {
    question: "Which one of these is an example of a NoSQL database?",
    options: ["PostgreSQL", "Oracle", "MongoDB", " SaaS"],
    answer: "MongoDB",
  },
  {
    question: "In which year was the first version of the C programming language released?",
    options: ["1990","1980", "1972", "1965"],
    answer: "1972",
  },
  {
    question: "What does URL stand for?",
    options: ["Universal Record Locator", "Universal Record Locator", " Uniform Registered Link", "Uniform Resource Locator"],
    answer: "Uniform Resource Locator",
},
];

let currentQuestionIndex = 0;
let score = 0;

const userName = localStorage.getItem("quizUser") || "Guest";
document.getElementById("user-name").textContent = `Hello, ${userName}!`;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, option);
    optionsEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function selectAnswer(button, selected) {
  const q = questions[currentQuestionIndex];
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === q.answer) btn.classList.add("correct");
    else if (btn.textContent === selected && selected !== q.answer)
      btn.classList.add("wrong");
  });
  if (selected === q.answer) score++;
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `${userName}, your score is ${score}/${questions.length}`;
  }
});

showQuestion();
