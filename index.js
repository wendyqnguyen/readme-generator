// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the project name >> '
    },
    {
        type: 'number',
        name: 'version',
        message: 'Please enter the version numnber >> '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the project description >> '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions >> '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions >> '
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines >> '
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions >> '
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'list',
        name: 'license',      
        message: 'Which licenses does this project require? (Check all that apply)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Please enter the GitHub link to your project >>'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username >>'
    },
    {
        type: 'input',
        name: 'email',      
        message: 'Please enter your email address >>'
    }]   


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Done!");
      
      });
}

//function to prompt user for README data
const promptUser = () => {
    return inquirer.prompt(questions);
  };



// Function to initialize app
function init() {
    // promptUser().then(answers => writeToFile('myreadme.txt', answers));
    promptUser().then(answers => { 
        var markdown = generateMarkdown(answers);
        // console.log(markdown);
        // var answerString = `Name: ${answers.name}`
        writeToFile('myreadme.md', markdown);

    });
}

// Function call to initialize app
init();
