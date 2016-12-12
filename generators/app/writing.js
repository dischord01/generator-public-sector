/**
 * Created by bsollar@redhat.com on 12/12/2016
 */
var mkdirp  = require('mkdirp');
var path    = require('path');
var emoji  = require('node-emoji');


'use strict';

module.exports = function() {
	// create the src folder and its sub-directories

	var title = this.props.name;

	console.log(title);

    mkdirp.sync(title);
    mkdirp.sync(path.join(title, 'group_vars'));
    mkdirp.sync(path.join(title, 'host_vars'));
    mkdirp.sync(path.join(title, 'roles'));
  
    console.log('----------------------------------');
    console.log(emoji.get('file_folder') + '  The new Playbook is ' + title.underline.cyan);
    console.log('----------------------------------');
    
    this.fs.copyTpl(
      this.templatePath('Vagrantfile'),
      this.destinationPath(path.join(title, 'Vagrantfile')), { name: this.props.box }
    );

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath(path.join(title, 'README.md')), { name: this.props.name }
    );
    
    this.fs.copy(
      this.templatePath('ansible.cfg'),
      this.destinationPath(path.join(title, 'ansible.cfg'))
    );

    this.fs.copy(
      this.templatePath('site.yml'),
      this.destinationPath(path.join(title, 'site.yml'))
    );

    this.fs.copy(
      this.templatePath('group_vars_example'),
      this.destinationPath(path.join(title, 'group_vars/example'))
    );

    this.fs.copy(
      this.templatePath('inventory'),
      this.destinationPath(path.join(title, 'inventory'))
    );

    this.fs.copy(
      this.templatePath('galaxy.yml'),
      this.destinationPath(path.join(title, 'galaxy.yml'))
    );
  }