const licenseOptions = [
  {
    license: "MIT",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    license: "APACHE 2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    license: "GPL 3.0",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    license: "BSD 3",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    license: "None",
    badge: "",
  },
];

// function to generate markdown for README
function generateMarkdown(data) {

  const [license] = licenseOptions.filter(
    (license) => license.license === data.license
  );

  return `# ${data.title}

  ## Description
  ${data.description}

  ## License  
  ${license.badge ? `${license.badge}  
  This application is covered under the ${data.license} license` : `This application is not covered by a license`}
  
  ## Table of Contents
  1. [Description](#description)
  2. [License](#license)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation
  To install dependencies, run ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  To run tests for this application, run ${data.tests}

  ## Questions
  If you have any questions you can contact me at ${data.email} or find me on [github](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
