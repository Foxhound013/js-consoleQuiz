//IIFE in order to privatize the entire game.
(function () {
    var Question = function (questionText, answers, correctAnswer, pointValue) {
        this.questionText = questionText;
        this.answers = answers; //an array of answers
        this.correctAnswer = correctAnswer; //refers to the index of the correct answer in answers
        this.pointValue = pointValue;
    };

    //add in necessary methods to the objects prototype
    //An object method to check the users answer
    Question.prototype.checkAnswer = function (usersAnswer) {
        if (Number(usersAnswer) === (currentQuestion.correctAnswer + 1)) {
            console.log("===================");
            console.log("Correct Answer!\n\n");
            score += currentQuestion.pointValue;
            return(true); //continue the game
        } else if (usersAnswer === "exit") {
            console.log("Bye!");
            return(false); //end the game
        } else {
            console.log("===================");
            console.log("Better luck next time?");
            return(true); //continue the game
        }
    };

    //An object method to display the score after each guess
    Question.prototype.displayScore = function () {
        console.log("Your current score is: " + score + "\n\n");
    };

    //instantiate the first question for the game
    var questionOne = new Question('What\'s better than JavaScript development?', ['1: Jesus', '2: Nothing', '3: PHP Development!'], 0, 5);

    //instantiate the second question for the game
    var questionTwo = new Question('Who let the dogs out?', ['1: Beyonce', '2: Obama', '3: Baha Men'], 2, 1);

    //instantiate the third question for the game
    var questionThree = new Question('Does Trevor Mcafee have needs?', ['1: Yes', '2: No'], 0, 3);

    var possibleQuestions = [questionOne, questionTwo, questionThree];

    var score = 0; //initialize the players score to 0
    var gameOn = true; //Allows the game to be shutdown if the player types exit (switches to false)

    while (gameOn === true) {
        // randomization algorithm to randomize which question is selected
        var randQuestion = Math.floor(Math.random() * possibleQuestions.length);
        var currentQuestion = possibleQuestions[randQuestion]; //store the current question
        console.log(currentQuestion.questionText);

        //loop through the possible answers and display them to the player
        for (var i = 0; i < currentQuestion.answers.length; i++) {
            console.log(currentQuestion.answers[i]);
        };
      
        var usersAnswer = prompt("Please select the correct answer (just type the number). Or type \"exit\" to quit.");
    
        //check the answer, if the user enters exit then gameOn is set to false, otherwise it will be left as undefined.
        gameOn = currentQuestion.checkAnswer(usersAnswer);
        currentQuestion.displayScore();
    };
     
})();