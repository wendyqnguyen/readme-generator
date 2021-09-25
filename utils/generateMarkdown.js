// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (license){
  return `![GitHub License](https://img.shields.io/badge/license-${license}-blue)`
}else{
  return '';
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    switch(license) {
      case 'Apache 2.0':
        return 'https://www.apache.org/licenses/LICENSE-2.0';
        break;
      case 'GPL 3.0':
        return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
        break;
        case 'MIT':
          return 'https://opensource.org/licenses/MIT';
          break;
        case 'BSD':
          return 'https://opensource.org/licenses/BSD-3-Clause'
          break;
      default:
        return '';
    }
  }else{
    return '';
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `## License 
    ${license}`;
  }else{
    return '';
  }
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(data.license);
  let licenseLink = renderLicenseLink(data.license);
  let badge = renderLicenseBadge(data.license);
  return `# ${data.name} README
## Table of Contents 

* [Project Basics](#Project)
* [Inpsiration](#inspiration)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Project Basics 
${data.name} v\n
${data.version}\n
Description: ${data.description}\n
Link: ${data.link}\n

## Motivation\n
${data.motivation}

## Usage\n
${data.usage}

## Credits\n
${data.credits}

${licenseSection}

${badge}

${licenseLink}

`;
}

module.exports = generateMarkdown;
