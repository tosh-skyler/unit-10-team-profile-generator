const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Questions = require('./lib/questions');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const render = require('./lib/htmlRenderer');

let team = [];

function addUser() {
    inquirer.prompt(Questions.firstQuestions)
        .then(function(reqfirstQuestions) {
            switch(reqfirstQuestions.Role) {
                case 'Manager':
                    inquirer.prompt(Questions.managerQuestions)
                        .then(function(res) {
                            team.push(new Manager(
                                reqfirstQuestions.Name, 
                                reqfirstQuestions.Id, 
                                reqfirstQuestions.Email, 
                                res.officeNum));
                                askAgain();
                        }); 
                    break;
                case 'Engineer':
                    inquirer.prompt(Questions.engineerQuestions)
						.then(function(res) {
                            console.log(`User entered: ${res.github}`);
                            team.push(new Engineer(
                                reqfirstQuestions.Name, 
                                reqfirstQuestions.Id, 
                                reqfirstQuestions.Email, 
                                res.github));
                                askAgain();
                        })
                    break;
                case 'Intern':
                    inquirer.prompt(Questions.internQuestions)
                        .then(function(res) {
                            console.log(`User entered: ${res.school}`);
                            team.push(new Intern(
                                reqfirstQuestions.Name, 
                                reqfirstQuestions.Id, 
                                reqfirstQuestions.Email, 
                                res.school));
                                askAgain();
                        });
                    break;        
            }
	});
	function askAgain() {
		inquirer.prompt(Questions.moreQuestions)
		.then(function(res) {
			console.log(res.addUsrQuestion);
			if(res.addUsrQuestion) {
				addUser();
			} else {
				fs.writeFile(outputPath, render(team), err => {
					if (err) {
						throw err;
					}
					console.log("HTML generation was a sucess!");
				});
			}
		});
	}
}

addUser();