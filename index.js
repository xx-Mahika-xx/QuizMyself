var readLineSync = require("readline-sync");
var chalk = require("chalk")
var score = 0;

const questionAnswerSet = [
  {
    question: "What's is Mahika's age? ",
    answer: "19"
  },
  {
    question: "Where was Mahika born? ",
    answer: "Lucknow"
  },
  {
    question: "What is Mahika's Favourite color? ",
    answer: "Green"
  }
]
var highScores = [
  {
    name: "Anjali",
    score: 3
  },
  {
    name: "Sapan",
    score: 2
  },
  {
    name: "Anusha",
    score: 2
  }
]

const play = (username) => {
  for(i = 0 ; i<3; i++){
    var userAnswer = readLineSync.question(chalk.bold("Q"+(i+1)+"."+ (questionAnswerSet[i].question)+"\n\t"));
    if(userAnswer.toUpperCase() == questionAnswerSet[i].answer.toUpperCase()){
      console.log(chalk.green("\tYou are right!"));
      score++;
      console.log("\t"+username + "\'s Score is: " + chalk.bold(score));
    }
    else{
      console.log(chalk.red("\tYou are wrong!"));
      console.log("\t"+username + "\'s Score is: " + chalk.bold.underline(score));
    }
    console.log(" ");
  }
  console.log(chalk.bold("\nHigh Scores are as follows: "));
  var flag =0;
  for( k = 0; k< highScores.length;k++){
    if(score>= highScores[k].score && flag!=1){
      flag =1;
    console.log(chalk.bold(username+": "+chalk.underline(" "+score+" ")));
    }
    console.log(chalk.bold(highScores[k].name+": "+ chalk.bgHex('#FFA500')
            .underline(" "+highScores[k].score+" ")));
  }
  if(flag ===1){
    console.log(chalk.red.underline("Congratulation! You have beaten a High Score."));
  }
  else{
    console.log(chalk.red.underline("Oh no! You couldn't beat a High Score."));
  }
}
const userName = readLineSync.question("Enter your user name: ");
play(userName);

