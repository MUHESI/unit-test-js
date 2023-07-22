var Jasmine = require('jasmine')
var HtmlReporter = require('jasmine-pretty-html-reporter').HtmlReporter
var path = require('path')
var jasmine = new Jasmine()

jasmine.loadConfigFile('./support/jasmine.json')
jasmine.addReporter(new HtmlReporter({ path: path.join(__dirname, 'results') }))

jasmine.execute()