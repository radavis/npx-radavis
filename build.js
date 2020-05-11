'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Richard Davis'),
  handle: chalk.white('radavis'),
  work: chalk.white('Software Engineer @ fearless.tech'),
  opensource: chalk.white('Node.js Community Committee ') + chalk.green('⬢'),
  twitter: chalk.gray('twitter.com/') + chalk.cyan('theebeastmaster'),
  npm: chalk.gray('npmjs.com/') + chalk.red('~radavis'),
  github: chalk.gray('github.com/') + chalk.green('radavis'),
  linkedin: chalk.gray('linkedin.com/in/') + chalk.blue('davisra'),
  web: chalk.cyan('radavis.github.io'),
  npx: chalk.red('npx') + ' ' + chalk.white('@bnb/card  (via GitHub Package Registry)'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing // data.labelWeb + data.web

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
