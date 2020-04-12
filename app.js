const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Questions = require('./lib/questions');

// const OUTPUT_DIR = path.resolve(__dirname, 'output');
// const outputPath = path.join(OUTPUT_DIR, 'team.html');
// const render = require('./lib/htmlRenderer');

const initialQuestions = () => {
	inquirer.prompt(Questions.firstQuestions).then(answer => {
		if (answer.role === 'Manager') {
			fillManager();
		  } else if (answer.role === 'Engineer') {
			fillEngineer();
		  } else {
			fillIntern();
		  }
		});
	  };

initialQuestions();