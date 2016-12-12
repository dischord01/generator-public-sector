/**
 * Created by bsollar@redhat.com on 12/12/2016
 */
var colors  = require('colors');
var emoji   = require('node-emoji');
var path    = require('path');

require('shelljs/global');

'use strict';

module.exports = function() {

  var done = this.async();

                if (!which('git')) {
                    echo('Sorry, this script requires git');
                    exit(1);
                }

                if (!which('asciibinder')) {
                    echo('Sorry, this script requires asciibinder');
                    exit(1);
                }

                console.log('----------------------------------');
                console.log(emoji.get('floppy_disk') + '    Running  ' + 'Git & Asciibinder'.underline.cyan);
                console.log('----------------------------------');


                var title = this.props.workshop_title;

                if (test('-d', title)) {
                  
                  cd(path.join(title));
                  
                  exec('git init && git add . && git commit -m "first commit"', function(code, stout) {
                    console.log('Exit code:', code);
                    console.log(stout)
                  });

                  exec('asciibinder', function(code, stout) {
                    console.log('Exit code:', code);
                    console.log(stout)
                    done();
                  });
                
                }

                console.log('----------------------------------');
                console.log(emoji.get('file_folder') + '    The new Workshop is ' + title.underline.cyan);
                console.log('----------------------------------');
//End Install
};
