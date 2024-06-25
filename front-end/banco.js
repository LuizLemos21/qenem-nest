document.addEventListener('DOMContentLoaded', async function() {
    const questionList = document.getElementById('questionList');
    const errorMessage = document.getElementById('errorMessage');
  
    try {
      const response = await fetch('http://localhost:3001/questions');
      if (response.ok) {
        const questions = await response.json();
        questions.forEach(question => {
          const li = document.createElement('li');
          li.textContent = question.title;
          li.addEventListener('click', () => {
            window.location.href = `questao.html?id=${question.id}`;
          });
          questionList.appendChild(li);
        });
      } else {
        throw new Error('Failed to fetch questions');
      }
    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });
  