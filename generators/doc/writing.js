/**
 * Created by bsollar@redhat.com on 12/12/2016
 */
var mkdirp  = require('mkdirp');
var path    = require('path');

'use strict';

module.exports = function() {

                // create the src folder and its sub-directories
                this.log('creating folder structure');

                // Get Workshop name from user input
                var title = this.props.workshop_title;

                mkdirp.sync(title);
                mkdirp.sync(path.join(title, '_images'));
                mkdirp.sync(path.join(title, '_javascripts'));
                mkdirp.sync(path.join(title, '_previews'));
                mkdirp.sync(path.join(title, '_stylesheets'));
                mkdirp.sync(path.join(title, '_stylesheets/sass'));
                mkdirp.sync(path.join(title, '_stylesheets/sass/fonts'));
                mkdirp.sync(path.join(title, '_stylesheets/sass/settings'));
                mkdirp.sync(path.join(title, '_templates'));
                mkdirp.sync(path.join(title, 'workshop'));
                mkdirp.sync(path.join(title, 'workshop/images'));
                mkdirp.sync(path.join(title, 'resources'));
                mkdirp.sync(path.join(title, 'resources/images'));

                // Copy
                // Images
                this.fs.copy(
                    this.templatePath('workshop/_images/*.svg'),
                    this.destinationPath(path.join(title, '_images/'))
                );
                // JS
                this.fs.copy(
                    this.templatePath('workshop/_javascripts/bootstrap-offcanvas.js'),
                    this.destinationPath(path.join(title, '_javascripts/bootstrap-offcanvas.js'))
                );
                this.fs.copy(
                    this.templatePath('workshop/_javascripts/respond.proxy.js'),
                    this.destinationPath(path.join(title, '_javascripts/respond.proxy.js'))
                );
                // CSS
                this.fs.copy(
                    this.templatePath('workshop/_stylesheets/*.css'),
                    this.destinationPath(path.join(title, '_stylesheets/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/_stylesheets/*.js'),
                    this.destinationPath(path.join(title, '_stylesheets/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/_stylesheets/*.gif'),
                    this.destinationPath(path.join(title, '_stylesheets/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/_stylesheets/sass/*.scss'),
                    this.destinationPath(path.join(title, '_stylesheets/sass/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/_stylesheets/sass/fonts/*.scss'),
                    this.destinationPath(path.join(title, '_stylesheets/sass/fonts/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/_stylesheets/sass/fonts/*.scss'),
                    this.destinationPath(path.join(title, '_stylesheets/sass/settings/'))
                );
                // ERB
                this.fs.copy(
                    this.templatePath('workshop/_templates/*.erb'),
                    this.destinationPath(path.join(title, '_templates/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/_templates/_analytics_other.html'),
                    this.destinationPath(path.join(title, '_templates/_analytics_other.html'))
                );
                this.fs.copy(
                    this.templatePath('workshop/_templates/_search_other.html'),
                    this.destinationPath(path.join(title, '_templates/_search_other.html'))
                );
                this.fs.copy(
                    this.templatePath('workshop/resources/*.adoc'),
                    this.destinationPath(path.join(title, 'resources/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/workshop/*.adoc'),
                    this.destinationPath(path.join(title, 'workshop/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/workshop/images/*.png'),
                    this.destinationPath(path.join(title, 'workshop/images/'))
                );
                this.fs.copy(
                    this.templatePath('workshop/workshop/images/*.svg'),
                    this.destinationPath(path.join(title, 'workshop/images/'))
                );
                // ascii
                this.fs.copy(
                    this.templatePath('workshop/.gitignore'),
                    this.destinationPath(path.join(title, '.gitignore'))
                );
                this.fs.copy(
                    this.templatePath('workshop/*.yml'),
                    this.destinationPath(path.join(title))
                );
                this.fs.copy(
                    this.templatePath('workshop/Gemfile'),
                    this.destinationPath(path.join(title, 'Gemfile'))
                );
                this.fs.copy(
                    this.templatePath('workshop/Guardfile'),
                    this.destinationPath(path.join(title, 'Guardfile'))
                );
                this.fs.copy(
                    this.templatePath('workshop/LICENSE'),
                    this.destinationPath(path.join(title, 'LICENSE'))
                );
                this.fs.copy(
                    this.templatePath('workshop/Rakefile'),
                    this.destinationPath(path.join(title, 'Rakefile'))
                );
                this.fs.copy(
                    this.templatePath('workshop/README.md'),
                    this.destinationPath(path.join(title, 'README.md'))
                );
                //Template
                this.fs.copyTpl(
                    this.templatePath('workshop/_templates/_topnav_other.html'),
                    this.destinationPath(path.join(title, '_templates/_topnav_other.html')), {
                        workshop_title: this.props.workshop_title,
                        workshop_description: this.props.workshop_description
                    }
                );
                console.log('End Templating');

                //End Writing
};