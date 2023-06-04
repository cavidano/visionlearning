export default class Quiz {

	#quiz = document.querySelectorAll('.quiz');

	init() {
		if (this.#quiz) {
			this.#quiz.forEach((quiz) => {
				const submitButton = quiz.querySelector('button[type="submit"]');

				const scoreQuiz = (event) => {
					event.preventDefault();

					const quizQuestionsParent = quiz.querySelector('.quiz__questions');
					const quizQuestionsList = quizQuestionsParent.querySelectorAll('li.form-entry');
					const quizResponsesList = quiz.querySelectorAll('.quiz__response');

					const quizScore = quiz.querySelector('.quiz__score');

					quizResponsesList.forEach((quizResponse) => {
						quizResponse.classList.remove('display-block');
					});

					quizQuestionsList.forEach((quizQuestion) => {
						let quizQuestionOptions = quizQuestion.querySelector(
							'.form-entry__option'
						);
						let answered = quizQuestionOptions.querySelector('input:checked');

						if (answered) {
							let answerResponse = answered.closest('label').nextElementSibling;
							answerResponse.classList.add('display-block');
						}
					});

					// Scroll to quizScore

					if (quizScore) {
						quizScore.style.display = 'block';

						let myScroll = quizScore.offsetTop - 16;

						window.scrollTo({
							top: myScroll,
							behavior: 'smooth',
						});
					}
				};

				submitButton.addEventListener('click', scoreQuiz);
			});
		}
	}
}

export class CompCheck {
	#compCheckList = document.querySelectorAll('.comprehension-checkpoint');

	#compCheckInputsList = document.querySelectorAll('.comprehension-checkpoint input');
	#compCheckResponseList = document.querySelectorAll('.quiz__response');

	#handleResponse = (event) => {
		const currentInput = event.currentTarget;

		this.#compCheckInputsList.forEach((input) => {
			if (input !== currentInput) {
				input.checked = false;
			}
		});

		this.#compCheckResponseList.forEach((response) => {
			response.classList.remove('shown');
		});

		const answer = currentInput.closest('label').nextElementSibling;

		if (event.currentTarget.checked) {
			answer.classList.add('shown');
		}
	};

	init() {
		if (this.#compCheckList) {
			this.#compCheckList.forEach((question) => {
				const questionInputList = question.querySelectorAll('input');

				questionInputList.forEach((option) => {
					option.addEventListener('change', (event) => {
						this.#handleResponse(event);
					});
				});
			});
		}
	}
}
