import readlineSync from 'readline-sync';

const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showGreeting = () => console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');

const showHello = name => console.log(`Hello, ${name}!\n`);

const check = (correctChoise, userChoise) => (correctChoise === userChoise ?
  'Correct!' : `${userChoise} is wrong answer ;(. Correct answer was ${correctChoise}.`);

const step = (genData, getCorrectResult, toString) => {
  const data = genData();
  const question = toString(data);
  showQuestion(question);
  const userChoise = getAnswer();
  const correctChoise = `${getCorrectResult(data)}`;
  return check(correctChoise, userChoise);
};

const iter = (acc :number, name :string, maxAttempts :number, question,
  getExpected :Function, toString :Function) => {
  if (acc === maxAttempts) {
    return `Congratulations, ${name}!`;
  }
  const result = step(question, getExpected, toString);
  console.log(result);
  if (result === 'Correct!') {
    return iter(acc + 1, name, maxAttempts, question, getExpected, toString);
  }
  return `Let's try again, ${name}!`;
};

const playFullGame = (description :number, game :Function, func :Function,
  toString, maxAttempts = 3) => {
  showGreeting();
  console.log(description);
  const name = getName();
  showHello(name);
  return iter(0, name, maxAttempts, game, func, toString);
};

export default playFullGame;
