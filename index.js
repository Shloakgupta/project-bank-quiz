const questions = [
  {
    question: "1. What is the purpose of a budget?",
    choices: ["a) To spend money without restrictions", "b) To save money for future expenses", "c) To track the number of toys owned", "d) To borrow money from friends"],
    correctAnswer: 2
  },
  {
    question: "2. What does 'interest' mean in the context of finance?",
    choices: ["a) Money earned on savings or investments", "b) Money spent on shopping", "c) Money exchanged in foreign markets", "d) Money given as gifts"],
    correctAnswer: 1
  },
  {
    question: "3. How can you increase your savings?",
    choices: ["a) Spending more than your income", "b) Saving only during special occasion", "c) Setting aside a portion of your allowance or earnings", "d) Avoiding the concept of saving altogether"],
    correctAnswer: 3
  },
  {
    question: "4. What is the role of a bank in personal finance?",
    choices: ["a) To spend money on behalf of customers", "b) To provide a safe place to keep money and offer financial services", "c) To lend money with no expectation of repayment", "d) To sell goods and services to customers"],
    correctAnswer: 2
  },
  {
    question: "5. What is the definition of 'credit score'?",
    choices: ["a) The amount of money in a savings account", "b) A numerical representation of a person's creditworthiness", "c) The price of goods and services", "d) The number of credit cards a person owns"],
    correctAnswer: 2
  },
  {
    question: "6. Why is it important to have insurance?",
    choices: ["a) To make money through premiums", "b) To protect against financial losses from unexpected events", "c) To buy expensive items", "d) To show off to friends and family"],
    correctAnswer: 2
  },
  {
    question: "7. What is the purpose of investing?",
    choices: ["a) To spend money on luxury items", "b) To earn a return on your money over time", "c) To give money to charity", "d) To hide money from taxes"],
    correctAnswer: 2
  },
  {
    question: "8. What is inflation?",
    choices: ["a) The decrease in the prices of goods and services", "b) The increase in the value of money over time", "c) The overall rise in the prices of goods and services over time", "d) The process of saving money in a piggy bank"],
    correctAnswer: 3
  },
  {
    question: "9. What is the difference between a debit card and a credit card?",
    choices: ["a) They are the same", "b) Debit cards are linked to a bank account, while credit cards allow you to borrow money", "c) Credit cards are free, but debit cards have fees", "d) Debit cards are only for online shopping, while credit cards are for in-store purchases"],
    correctAnswer: 2
  },
  {
    question: "10. What does the term 'ROI' stand for in finance?",
    choices: ["a) Return on Investment", "b) Rate of Inflation", "c) Running Out of Income", "d) Receiving Outstanding Income"],
    correctAnswer: 1
  },
];

let currentQuestion = 0;
let score = 0;
console.log(score)
const questionElement = document.querySelector('.questions h1');
const answerButtons = document.querySelectorAll('.answerButtons button');
const correctAlert = document.querySelector('.correctAlert');
const incorrectAlert = document.querySelector('.incorrectAlert');
const nextButton = document.querySelector('.nextBtn');
correctAlert.style.display = 'none';
incorrectAlert.style.display = 'none';


function displayQuestion() {
  console.log(score)
  questionElement.textContent = questions[currentQuestion].question;
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = questions[currentQuestion].choices[i];
    answerButtons[i].addEventListener('click', () => checkAnswer(i));
  }
}

let answered = false; // Flag to track if the answer is already given

function checkAnswer(selectedAnswerIndex) {
  if (!answered && selectedAnswerIndex !== -1) {
    answered = true; // Mark the question as answered
    let humanCorrectAnswerIndex = questions[currentQuestion].correctAnswer - 1
    if (selectedAnswerIndex === humanCorrectAnswerIndex) {
      score++;
      correctAlert.style.display = 'block';
      incorrectAlert.style.display = 'none';
    } else {
      correctAlert.style.display = 'none';
      incorrectAlert.style.display = 'block';
    }
    nextButton.style.display = 'block';
    disableAnswerButtons();
  }
}


function disableAnswerButtons() {
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].removeEventListener('click', checkAnswer);
  }
}

nextButton.addEventListener('click', () => {
  answered = false
  correctAlert.style.display = 'none';
  incorrectAlert.style.display = 'none';
  nextButton.style.display = 'none';
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
});

function displayResult() {
  questionElement.textContent = `Your score: ${score} out of ${questions.length}`;
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].style.display = 'none';
  }
  nextButton.style.display = 'none';
}

displayQuestion(); // Display the first question initially
