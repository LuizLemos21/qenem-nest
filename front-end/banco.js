document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('filterForm');
    const questionList = document.getElementById('questionList');
    const errorMessage = document.getElementById('errorMessage');
  
    // Fetch and populate subjects
    fetch('http://localhost:3000/api/subjects')
      .then(response => response.json())
      .then(subjects => {
        const subjectSelect = document.getElementById('subject_id');
        subjects.forEach(subject => {
          const option = document.createElement('option');
          option.value = subject.id;
          option.textContent = subject.name;
          subjectSelect.appendChild(option);
        });
      });
  
    // Fetch and populate Enem years
    fetch('http://localhost:3000/api/enems')
      .then(response => response.json())
      .then(enems => {
        const enemSelect = document.getElementById('enem_id');
        enems.forEach(enem => {
          const option = document.createElement('option');
          option.value = enem.id;
          option.textContent = enem.year;
          enemSelect.appendChild(option);
        });
      });
  
    filterForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const subjectId = filterForm.subject_id.value;
      const enemId = filterForm.enem_id.value;
      const difficulty = filterForm.difficulty.value;
  
      let query = '?';
      if (subjectId) query += `subject_id=${subjectId}&`;
      if (enemId) query += `enem_id=${enemId}&`;
      if (difficulty) query += `difficulty=${difficulty}&`;
  
      try {
        const response = await fetch(`http://localhost:3000/api/questions${query}`);
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
        li.textContent = `${question.enem.year} - ${question.subject.name}: ${question.title} (Dificuldade: ${question.difficulty})`;
        li.addEventListener('click', () => {
          window.location.href = `questao.html?id=${question.id}`;
        });
        questionList.appendChild(li);
      });
    }
  });
  