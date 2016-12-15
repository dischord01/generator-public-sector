/**
 * Created by bsollar@redhat.com on 12/12/2016
 */
'use strict';

module.exports = function() {
    
    let done = this.async(),

                prompts = [{
                    type: 'input',
                    name: 'domain_name',
                    message: 'What is the domain name this will be deployed to?',
                    default: 'redhatgov.io'
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