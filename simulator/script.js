document.addEventListener("DOMContentLoaded", () => {
  marked.setOptions({
    breaks: true, // this convert \n en <br>
    gfm: true,
  });
  let originalQuestions = [];
  let currentQuestions = [];
  let currentQuestionIndex = 0;
  let userAnswers = [];
  const maxQuestionsToShow = Infinity;

  // DOM Elements
  const quizContainer = document.getElementById("quiz-container");
  const questionCard = document.getElementById("question-card");
  const resultsScreen = document.getElementById("results-screen");
  const scoreElement = document.getElementById("score");
  const totalQuestionsElement = document.getElementById("total-questions");
  const totalQCountElement = document.getElementById("total-q-count");
  const currentQIndexElement = document.getElementById("current-q-index");
  const questionTopicElement = document.getElementById("question-topic");
  const questionTextElement = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const justificationBox = document.getElementById("justification-box");
  const justificationTextElement =
    document.getElementById("justification-text");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const finishBtn = document.getElementById("finish-btn");
  const restartBtn = document.getElementById("restart-btn");

  // --- Utility Functions ---

  /**
   * Processes text that may contain Markdown and LaTeX.
   * Converts Markdown to HTML, then calls MathJax to process LaTeX.
   * @param {string} text - Text to process.
   * @returns {string} Processed HTML.
   */
  function processText(text) {
    if (!text) return "";

    // Convert Markdown to HTML
    const htmlFromMarkdown = marked.parse(text);

    // MathJax will automatically process LaTeX expressions
    // We return HTML containing both converted Markdown and raw LaTeX
    return htmlFromMarkdown;
  }

  /**
   * Renders content with Markdown/LaTeX and then calls MathJax to process LaTeX.
   * @param {HTMLElement} element - Element where to render.
   * @param {string} content - Content to render.
   */
  function renderMathAndMarkdown(element, content) {
    // First, process Markdown
    const processedContent = processText(content);

    // Assign processed HTML
    element.innerHTML = processedContent;

    // Then, tell MathJax to process LaTeX expressions
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.startup.promise.then(() => {
        MathJax.typesetPromise([element]);
      });
    }
  }

  async function loadQuestions() {
    try {
      const response = await fetch("questions.json");
      originalQuestions = await response.json();

      initializeQuiz();
    } catch (error) {
      console.error("Error loading questions:", error);
      questionTextElement.textContent = "Error: Could not load questions.";
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function shuffleQuestionsByTopic(questions) {
    const questionsByTopic = questions.reduce((acc, q) => {
      const topic = q.tema.split(" - ")[0];
      if (!acc[topic]) {
        acc[topic] = [];
      }
      acc[topic].push(q);
      return acc;
    }, {});

    let shuffledList = [];
    const topics = shuffleArray(Object.keys(questionsByTopic));

    topics.forEach((topic) => {
      const shuffledTopicQuestions = shuffleArray(questionsByTopic[topic]);
      shuffledList = shuffledList.concat(shuffledTopicQuestions);
    });

    return shuffledList.slice(0, maxQuestionsToShow);
  }

  function initializeQuiz() {
    currentQuestions = shuffleQuestionsByTopic(originalQuestions);
    currentQuestionIndex = 0;
    userAnswers = Array(currentQuestions.length).fill(null);

    questionCard.classList.remove("hidden");
    resultsScreen.classList.add("hidden");
    document.getElementById("controls").classList.remove("hidden");
    document.getElementById("navigation").classList.remove("hidden");

    totalQuestionsElement.textContent = currentQuestions.length;
    totalQCountElement.textContent = currentQuestions.length;

    renderQuestion(currentQuestionIndex);
    updateScoreDisplay();
    updateNavigationButtons();
  }

  // --- Rendering Functions ---

  function renderQuestion(index) {
    if (index < 0 || index >= currentQuestions.length) return;

    currentQuestionIndex = index;
    const q = currentQuestions[index];
    const currentAnswer = userAnswers[index];
    const isAnswered = currentAnswer !== null;

    currentQIndexElement.textContent = index + 1;
    questionTopicElement.textContent = q.tema;

    // Render question with Markdown and LaTeX
    renderMathAndMarkdown(questionTextElement, `(${index + 1}) ${q.pregunta}`);

    optionsContainer.innerHTML = "";
    const optionsKeys = Object.keys(q.opciones);

    optionsKeys.forEach((key) => {
      const optionValue = q.opciones[key];
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");

      // Create radio and label
      const radioId = `q${index}-${key}`;
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.id = radioId;
      radio.name = `question${index}`;
      radio.value = key;

      const label = document.createElement("label");
      label.htmlFor = radioId;

      // Process option text
      const optionText = document.createElement("span");
      optionText.className = "option-text";
      renderMathAndMarkdown(optionText, `${key}) ${optionValue}`);

      // Build structure
      label.appendChild(optionText);
      optionDiv.appendChild(radio);
      optionDiv.appendChild(label);

      if (isAnswered) {
        optionDiv.classList.add("disabled");
        if (key === q.respuesta_correcta) {
          optionDiv.classList.add("correct");
        } else if (key === currentAnswer) {
          optionDiv.classList.add("incorrect");
        }

        if (key === currentAnswer) {
          radio.checked = true;
        }
      }

      if (!isAnswered) {
        optionDiv.addEventListener("click", () => handleAnswer(key));
      }

      optionsContainer.appendChild(optionDiv);
    });

    // Show or hide justification
    if (isAnswered) {
      justificationBox.classList.remove("justification-hidden");
      renderMathAndMarkdown(justificationTextElement, q.justificacion);
    } else {
      justificationBox.classList.add("justification-hidden");
      justificationTextElement.innerHTML = "";
    }

    updateNavigationButtons();
  }

  // --- Logic Functions ---

  function handleAnswer(selectedOption) {
    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === q.respuesta_correcta;

    userAnswers[currentQuestionIndex] = selectedOption;

    const options = optionsContainer.querySelectorAll(".option");
    options.forEach((opt) => {
      const radio = opt.querySelector('input[type="radio"]');
      const key = radio.value;

      opt.classList.add("disabled");

      if (key === q.respuesta_correcta) {
        opt.classList.add("correct");
      } else if (key === selectedOption) {
        opt.classList.add("incorrect");
      }

      if (key === selectedOption) {
        radio.checked = true;
      }
    });

    justificationBox.classList.remove("justification-hidden");
    renderMathAndMarkdown(justificationTextElement, q.justificacion);

    updateScoreDisplay();
  }

  function updateScoreDisplay() {
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === currentQuestions[index].respuesta_correcta) {
        correctCount++;
      }
    });
    scoreElement.textContent = correctCount;
  }

  function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;

    const allAnswered = userAnswers.every((answer) => answer !== null);
    finishBtn.disabled = !allAnswered;

    if (userAnswers[currentQuestionIndex] !== null) {
      nextBtn.focus();
    }
  }

  function showResults() {
    questionCard.classList.add("hidden");
    document.getElementById("controls").classList.add("hidden");
    document.getElementById("navigation").classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === currentQuestions[index].respuesta_correcta) {
        correctCount++;
      }
    });

    document.getElementById("final-score").textContent = correctCount;
    document.getElementById("final-total").textContent =
      currentQuestions.length;
  }

  // --- Event Listeners ---

  prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      renderQuestion(currentQuestionIndex - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      renderQuestion(currentQuestionIndex + 1);
    }
  });

  finishBtn.addEventListener("click", showResults);

  restartBtn.addEventListener("click", initializeQuiz);

  // Initialize the simulator when the page loads
  loadQuestions();
});
