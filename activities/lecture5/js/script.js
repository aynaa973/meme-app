const ballans = [
  "It is certain.",
	"It is decidedly so.",
	"Without a doubt.",
	"Yes - definitely.",
	"You may rely on it.",
	"As I see it, yes."
];

const fortuneans = [
"Do not be afraid of competition.",
"An exciting opportunity lies ahead of you.",
"You love peace.",
"Get your mind set…confidence will lead you on.",
"You will always be surrounded by true friends."
];
//func gets user question
function askQuestion() {
  const userQuestion = document.getElementById("userQuestion").value.trim();
  const answerType = document.getElementById("answerType").value; // Get selected answer type

//chooses which array based on form
  const answers = answerType === "magic8Ball" ? ballans : fortuneans;

//random number
  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];

//shows user the rand answer
  document.getElementById("answer").textContent = randomAnswer;
  console.log(`Question: ${userQuestion}`);
  console.log(`Answer: ${randomAnswer}`);
}
