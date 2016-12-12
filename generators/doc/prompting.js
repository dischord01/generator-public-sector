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
                    name: 'domain_name',
                    message: 'What is the domain name this will be deployed to?',
                    default: 'redhatgov.io'
                }, {
                    type: 'input',
                    name: 'domain_zone',
                    message: 'What is the domain zone id this will be deployed to?',
                    default: 'XXXXXXX'
                }, {
                    type: 'input',
                    name: 'aws_access',
                    message: 'What is the aws_access_key_id to use for deploying to S3?',
                }, {
                    type: 'input',
                    name: 'aws_secret',
                    message: 'What is the aws_secret_access_key to use for deploying to S3?',
                }];

                return this.prompt(prompts).then(function(props) {
                    // To access props later use this.props.someAnswer;
                    this.props = props;
                    done();
                }.bind(this));

                //End Prompting  
};