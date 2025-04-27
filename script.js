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
    question: "Which was the first web browser?",
    options: ["WWW", "Google", "Firefox", "Safari"],
    answer: "WWW",
  },
  {
    question: "Which company is nicknamed 'Big Blue'?",
    options: ["TCS", "IBM", "Microsoft", "Satyam"],
    answer: "IBM",
  },
  {
    question: "What is Windows XP?",
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
    question: "Which of the following is the 1's complement of 10?",
    options: ["01", "00", "11", "10"],
    answer: "01",
  },
  {
    question: "How many Bits make one Byte?",
    options: ["16 bits", "32 bits", "64 bits", "8 bits"],
    answer: "8 bits",
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
    options: ["Keyboard", "Monitor", "Scanner", "Router"],
    answer: "Router",
  },
  {
    question: "Which of the following stores permanent data?",
    options: ["Register", "Cache", "ROM", "RAM"],
    answer: "ROM",
  },
  {
    question: "Which programming language was developed by Sun Microsystems (now owned by Oracle)?",
    options: ["Python", "Ruby", "C#", "Java"],
    answer: "Java",
  },
  {
    question: "What is the purpose of DNS (Domain Name System)?",
    options: ["It encrypts data", "It checks internet security", "It manages network devices", "It maps IP addresses to domain names"],
    answer: "It maps IP addresses to domain names",
  },
  {
    question: "Which of the following is not a type of cloud computing model?",
    options: ["TaaS", "IaaS", "PaaS", "MySQL"],
    answer: "TaaS",
  },
  {
    question: "Which one of these is an example of a NoSQL database?",
    options: ["PostgreSQL", "Oracle", "MongoDB", "SaaS"],
    answer: "MongoDB",
  },
  {
    question: "In which year was the first version of the C programming language released?",
    options: ["1990", "1980", "1972", "1965"],
    answer: "1972",
  },
  {
    question: "What does URL stand for?",
    options: ["Universal Record Locator", "Uniform Registered Link", "Uniform Resource Locator", "Universal Resource Locator"],
    answer: "Uniform Resource Locator",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  const userName = document.getElementById("username").value.trim();
  if (userName === "") {
    alert("Please enter your name!");
    return;
  }
  localStorage.setItem("quizUser", userName);
  document.getElementById("user-name").textContent = userName;
  document.getElementById("signin-page").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestionIndex];
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option);
    optionsEl.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selectedOption) {
  const q = questions[currentQuestionIndex];
  const buttons = document.querySelectorAll("#options button");

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === q.answer) {
      btn.classList.add("correct");
    } else if (btn.textContent === selectedOption) {
      btn.classList.add("wrong");
    }
  });

  if (selectedOption === q.answer) {
    score++;
  }

  document.getElementById("next-btn").style.display = "block";
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");
  const userName = localStorage.getItem("quizUser") || "User";
  document.getElementById("score").textContent = `${userName}, your score is ${score} out of ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-box").classList.add("hidden");
  document.getElementById("signin-page").classList.remove("hidden");
  document.getElementById("username").value = "";
}
