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
        message: 'Project name (Required)'
    },
    {
        type: 'number',
        name: 'version',
        message: 'Project version (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description   (Required)'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Project motivation (why)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)'
    },
    {
        type: 'list',
        name: 'license',      
        message: 'Which licenses does this project require? (Check all that apply)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Authors and acknowledgment'
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
