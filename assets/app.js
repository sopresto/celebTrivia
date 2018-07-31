var panel = $("#quiz-area");

var questions = [{
    question: "How many sisters are in the Kardashian Family?",
    answers: ["one", "two", "three", "twelve"],
    correctAnswer: "three"
}, {
    question: "What is the name of the character who played the villian in Black Panther?",
    answers: ["Micheal B Jordan", "Chadwick Boseman", "Terrance Howard", "Kevin Hart"],
    correctAnswer: "Micheal B Jordan"
}, {
    question: "Which real housewife of Atlanta was in Escape?",
    answers: ["Porsha Williams", "Nene Leakes", "Cynthia Bailey", "Kandi Burress"],
    correctAnswer: "Kandi Burress"
}, {
    question: "Who was Khole Kardashian first married to?",
    answers: ["Steph Curry", "Lamar Odam", "Charles Berkely", "Micheal Jordan"],
    correctAnswer: "Lamar Odam"
}, {
    question: "Which show did Kevin Hart Produce on BET?",
    answers: ["The Game", "Being Mary Jane", "The Real Husbands of Hollywood", "The Quad"],
    correctAnswer: "The Real Husbands of Hollywood"
}, {
    question: "Which famous basketball player is Gabriel Union Married to?",
    answers: ["Dwayne Wade", "Shaq", "Kyrie Irving", "Ben Simmons"],
    correctAnswer: "Dwayne Wade"
}, {
    question: "Who Host all reunion shows on Bravo?",
    answers: ["Dave Chappelle", "Andy Cohen", "Anthony Bourdain", "Ricky Martin"],
    correctAnswer: "Andy Cohen"
}, {
    question: "Which station features the show Total Divas?",
    answers: ["Bravo", "TBS", "E!", "ABC"],
    correctAnswer: "E!"
}, {
    question: "Which show is about Doctor's and features Meredith Grey as the leading actress?",
    answers: ["Black-ish", "Grey's Anatomy", "How to get away with Murder", "Real World"],
    correctAnswer: "Grey's Anatomy"
}];



//global variable that will hold the time.
var timer;

// //this variable will hold time and score for the game.
// //as well as all of the functions for the operation of the game.
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("Time Up!");
            game.done();
    
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
        $("#start").remove();
        

        for (var i = 0; i < questions.length; i++) {
            panel.append("<h2>" + questions[i].question + "<h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                panel.append("<input type= 'radio' name= 'question-" + i + 
                "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j])
          
            }
        }


        panel.append("<button id='done'> done</button>")
    },

    done: function() {
        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[0].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });


        $.each($("input[name='question-1']:checked"), function(){
            if($(this).val() === questions[1].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function(){
            if($(this).val() === questions[2].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val() === questions[3].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function(){
            if($(this).val() === questions[4].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function(){
            if($(this).val() === questions[5].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function(){
            if($(this).val() === questions[6].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function(){
            if($(this).val() === questions[7].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function(){
            if($(this).val() === questions[8].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"), function(){
            if($(this).val() === questions[9].correctAnswer){
                game.correct++;
            }
            else {
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function(){
        clearInterval(timer);
        $("#sub-wrapper h2").remove();
        panel.html("<h2>All Done!</h2>");
        panel.append("<h3>Correct Answers:" + this.correct + "<h3>" );
        panel.append("<h3>Incorrect Answers" + this.incorrect + "<h3>" );
        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct))+ "</h3>");
    }
}

$(document).on("click","#start", function(){
    game.start();
    // debugger;
});

$(document).on("click","#done", function(){
    game.done();
});


