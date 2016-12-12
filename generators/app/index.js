'use strict';
var yeoman = require('yeoman-generator');
var chalk  = require('chalk');
var yosay  = require('yosay');
var mkdirp = require('mkdirp');
var colors = require('colors');
var emoji  = require('node-emoji');
var shell  = require('shelljs');

shell.config.silent = true;

module.exports = yeoman.Base.extend({
  prompting: function () {

    console.log('---------------------------------------------------');

    console.log(emoji.get('cow2') + '    Ansible and Vagrant development generator   ' +  emoji.get('cow2'));

    console.log('---------------------------------------------------');
    
    if (!shell.which('vagrant')) {
    echo('Sorry, this script requires Vagrant. https://www.vagrantup.com/downloads.html');
    exit(1);
    }

    // Get input from user
    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'What is your Playbook name?',
      default : 'playbook_' + this.appname// Default to current folder name
    },
    {
      type: 'list',
      name: 'box',
      message: function () {
        var vagrant_banner =
        '\n-----------------------------------------------------' +
        '\n' + emoji.get('package') + '  You have the following Vagrant Boxes installed  ' + emoji.get('package') +
        '\n' +                        '   Please choose a box for your Vagrantfile  ' +
        '\n-----------------------------------------------------';
        return vagrant_banner;
      },
      choices: function () {
        var box_list = shell.ls('~/.vagrant.d/boxes').stdout.split('\n');
        box_list.pop();
        box_list.push('centos/7');
        return box_list;
      },
      default: "centos/7",
      filter: function (box) {
        return box.toLowerCase();
      }
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },
  
  writing: require('./writing')

  // install: function () {
  //   this.installDependencies();
  // }
});
