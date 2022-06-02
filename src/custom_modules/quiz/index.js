import "./_style.scss";

//////////////////////////////////////////////
// Quiz
//////////////////////////////////////////////

export default class Quiz {

    constructor() {
        this.quiz = document.querySelector('.quiz');
    }

    init(){
    
        if(this.quiz){

            const submitButton = this.quiz.querySelector('button[type="submit"]');
            
            console.log(submitButton);

            function scoreQuiz(event) {

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
            
        }
    }
}