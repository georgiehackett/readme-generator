const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  // prompt for project title which will be displayed as the title of the README
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  // prompt for description
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project",
  },
  // prompt for installation instructions
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },
  // prompt for usage information
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  // prompt for license from a list of options - add a badge near top of README and add to info to license section
  {
    type: "list",
    name: "license",
    message: "Which license is your project covered under?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    // choices: licenseOptions.map(option => option.license),
    // badges: licenseOptions.map(option => option.badge)
  },
  // prompt for contributing
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
  // prompt for tests section
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
  },
  // prompt for questions section:
  // user email with instructions on how to reach them
  // GitHub username to generate a link to user's GitHub profile
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
];

const promptUser = () => {
  // Pass questions through inquirer prompt method
  return inquirer.prompt(questions);
};


// function to write README file
function writeToFile(fileName, data) {
  const readmeData = generateMarkdown(data);

  const filePath = path.join(__dirname, fileName);

  fs.writeFile(filePath, readmeData, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully!");
      console.log("The written has the following contents:");
      console.log(fs.readFileSync(filePath, "utf8"));
    }
  });
}

// function to initialize program
const init = async () => {
  try {
    const answers = await promptUser();
    
    await writeToFile("README.md", answers);
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
