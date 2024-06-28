document.addEventListener('DOMContentLoaded', function() {
  const filterForm = document.getElementById('filterForm');
  const questionsList = document.getElementById('questionsList');

  // Populate ENEM year options
  const enemYearSelect = document.getElementById('enemYear');
  for (let year = 1998; year <= 2024; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    enemYearSelect.appendChild(option);
  }

  filterForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const enemYear = filterForm.enemYear.value;
    const subject = filterForm.subject.value;
    const difficulty = filterForm.difficulty.value;

    try {
      const response = await fetch(`http://localhost:3001/questions?enemId=${enemYear}&subject=${subject}&difficulty=${difficulty}`);
      if (response.ok) {
        const questions = await response.json();
        displayQuestions(questions);
      } else {
        throw new Error('Failed to fetch questions');
      }
    } catch (error) {
      console.error(error.message);
    }
  });

  function displayQuestions(questions) {
    questionsList.innerHTML = '';
    questions.forEach(question => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      questionDiv.innerHTML = `
        <h3>${question.title}</h3>
        <p>${question.content}</p>
        <p><strong>Dificuldade:</strong> ${question.difficulty}</p>
        <button onclick="viewQuestion(${question.id})">Ver Detalhes</button>
      `;
      questionsList.appendChild(questionDiv);
    });
  }
});

function viewQuestion(id) {
  window.location.href = `questao.html?id=${id}`;
}
