var readlineSync = require('readline-sync');
console.log('lets see how well you know Abhishek!\n');
var userName = readlineSync.question('please enter your name: \n')
console.log('Hi! '+ userName + ' enter a / b / c as answer for each questions ' )
console.log('\nYou will get 1 point for each correct answer ')

 var score = 0;
function play(question,answer){
  var userAns = readlineSync.question(question)
  if(userAns === answer){
    console.log('congo! you got one point !')
    score++;
  }
  else{
    console.log('Oops! You are wrong !')
    
  }
  console.log('your current score is '+ score)
  console.log("\n-------------\n")
}

var myQuestions = [{
  question: "1. Where is my home town?\na.Bhopal\nb.Jabalpur\nc.Rewa\n\n",
  answer:"c"
},{
  question: "2. Which is my favourite sports?\na.Cricket\nb.Basketball\nc.Football\n\n",
  answer:"a"
},{
  question: "3. When is my Birthday?\na.10th july\nb.13th july\nc.12th july\n\n",
  answer:"c"
},{
  question: "4. What is my nickname?\na.abhi\nb.sourav\nc.gupta\n\n",
  answer:"a"
},{
  question: "5. Who is my idol?\na.William Hawkings\nb.Virat Kohli\nc.APJ Abdul Kalam\n\n",
  answer:"b"
}]
for(var i=0;i<myQuestions.length;i++){
  var currentque = myQuestions[i]
  play(currentque.question,currentque.answer)
}

console.log("great!! your final score is "+score)

var highScore=[{
  name:"anuj",
  points:"5"
},{
  name: "tanu",
  points:"4"
}]
console.log("\n****Check Out Scoreboard****");
for(let i=0; i<highScore.length; i++){
  console.log(highScore[i].name+":"+highScore[i].points);
}
console.log("\n\n If you had beaten the High-Score then send/n me the screenshot of ypur Final Score so,/n that i can update the Scoreboard. ")