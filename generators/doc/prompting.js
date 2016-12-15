/**
 * Created by bsollar@redhat.com on 12/12/2016
 */
'use strict';

module.exports = function() {
    
    let done = this.async(),

                prompts = [{
                    type: 'input',
                    name: 'workshop_title',
                    message: 'What is your Workshop Title? (example: Containers)',
                    default: this.appname // Default to current folder name
                }, {
                    type: 'input',
                    name: 'workshop_description',
                    message: 'Write a short statement about the workshop. This will be displayed on the generated website.',
                    default: 'Coming Soon'
                }, {
                    type: 'input',
                    name: 'domain_zone',
                    message: 'What is the domain zone id this will be deployed to?',
                    default: 'XXXXXXX'
                }];

                return this.prompt(prompts).then(function(props) {
                    // To access props later use this.props.someAnswer;
                    this.props = props;
                    done();
                }.bind(this));

                //End Prompting  
};



                