const firstQuestions = [
  {
    type: "input",
    message: "Enter your name:",
    name: "Name",
  },
  {
    type: "list",
    message: "Enter your role:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "Role",
  },
  {
    type: "input",
    message: "Enter your email:",
    name: "Email",
  },
  {
    type: "input",
    message: "Enter your ID number:",
    name: "Id",
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "Enter your office number",
    name: "officeNum",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Enter your school",
    name: "school",
  },
];

exports.firstQuestions = firstQuestions;
exports.managerQuestions = managerQuestions;
exports.engineerQuestions = engineerQuestions;
exports.internQuestions = internQuestions;
