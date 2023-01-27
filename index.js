var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What's your name? ");

console.log('Welcom ' + userName + ' to the quiz');
console.log("--------------")

var userName = readlineSync.question("Let's start the quiz " + [" Are You Marvel Fan? "]);
console.log("--------------")


function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
        console.log("right👍!");
        score = score + 1;
    } else {
        console.log("wrong👎!");

    }

    console.log("current score: ", score);
    console.log("............");

}
var questions = [{
    question: ` 1.What is the name of Thor's hammer?
     a:Vanir
     b:Mjolnir
     c:Aesir
     d:Norn
`,
    answer:
        `b`
},
{
    question: ` 2.what is captain america's shield made of?
      a:Adamantium
      b:Promethium
      c:Vibranium
      d:Carbonadium
`,
    answer:
        `c`
},
{
    question: `  3.what is real name of black panther?
     a:T'Challa
     b:M:Baku
     c:N:Jadaka
     d:N'Jobu
`,
    answer:
        `a`
},
{
    question: `  4.what is the alien race loki sent to invade earth in the avengers?
      a:The Skrulls
      b:The kree
      c:The Flerkens
      d:The Chitauri
`,
    answer:
        `d`
},
{
    question: `  5.who is the sister of black panther?
      a:Shuri
      b:Nakia
      c:Ramonda
      d:Okaye
`,
    answer:
        `a`
},
];

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORE🎉: ", score);


