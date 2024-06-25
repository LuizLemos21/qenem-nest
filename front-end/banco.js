document.addEventListener('DOMContentLoaded', function() {
  const filterForm = document.getElementById('filterForm');
  const questionList = document.getElementById('questionList');
  const errorMessage = document.getElementById('errorMessage');

  filterForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const subject = filterForm.subject.value;
      const difficulty = filterForm.difficulty.value;
      const quantity = filterForm.quantity.value;

      let query = '?';
      if (subject) query += `subject=${subject}&`;
      if (difficulty) query += `difficulty=${difficulty}&`;
      if (quantity) query += `quantity=${quantity}&`;

      try {
          const response = await fetch(`http://localhost:3001/questions${query}`);
          if (response.ok) {
              const questions = await response.json();
              displayQuestions(questions);
          } else {
              throw new Error('Failed to fetch questions');
          }
      } catch (error) {
          errorMessage.textContent = error.message;
      }
  });

  function displayQuestions(questions) {
      questionList.innerHTML = '';
      questions.forEach(question => {
          const li = document.createElement('li');
          li.textContent = question.title;
          li.addEventListener('click', () => {
              window.location.href = `questao.html?id=${question.id}`;
          });
          questionList.appendChild(li);
      });
  }
});
