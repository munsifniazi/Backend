import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const todos = [];

const showMenu = () => {
  console.log('\n 1. Add a Task...');
  console.log('\n 2. View a Task...');
  console.log('\n 3. Exit...');
  rl.question('Enter your choice: ', handleinput);
};

const handleinput = (option) => {
  if (option === '1') {
    rl.question('Enter your task: ', (task) => {
      todos.push(task);
      console.log(`Task added: ${task}`);
      showMenu();
    });
  } else if (option === '2') {
    console.log('Your tasks are: ');
    todos.forEach((currTask, index) => {
      console.log(`${index + 1}. ${currTask}`);
    });
    showMenu();
  } else if (option === '3') {
    console.log('Exiting...');
    rl.close();
  } else {
    console.log('Invalid option. Please try again.');
    showMenu();
  }
};
showMenu();
