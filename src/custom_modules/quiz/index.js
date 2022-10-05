import "./_style.scss";

//////////////////////////////////////////////
// Quiz
//////////////////////////////////////////////

export default class Quiz {

    #quiz = document.querySelectorAll('.quiz');
    #compCheck = document.querySelectorAll('.comprehension-checkpoint');

    init() {
    
        if(this.#quiz) {

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

                        let quizQuestionOptions = quizQuestion.querySelector('.form-entry__option');
                        let answered = quizQuestionOptions.querySelector('input:checked');

                        if (answered) {
                            let answerResponse = answered.closest('label').nextElementSibling;
                            answerResponse.classList.add('display-block');
                        }

                    });

                    // Scroll to quizScore

                    if (quizScore) {

                        quizScore.style.display = "block";

                        let myScroll = quizScore.offsetTop - 16;

                        window.scrollTo({
                            top: myScroll,
                            behavior: "smooth"
                        });
                    }

                };

                submitButton.addEventListener('click', scoreQuiz);
                
            });

        }

        if (this.#compCheck) {

            this.#compCheck.forEach((question) => {
                console.log(question);

                const questionInputList = question.querySelectorAll('input');

                const questionResponseList = question.querySelectorAll('.quiz__response');

                function hideResponses(){

                    questionResponseList.forEach((response) => {
                    response.classList.remove('display-block')
                    });

                
                }

                questionInputList.forEach((option, index) => {
                    option.addEventListener('change', (event) => {

                        console.log('My value is', option.value);
                        
                        const answerResponse = event.currentTarget.closest('label').nextElementSibling;

                        if (event.currentTarget.checked) {
                            // alert('checked');
                            hideResponses()
                            answerResponse.classList.add('display-block');
                        } else {
                            // alert('not checked');
                        }
                    });
                });
            });
        }
          
    }
}