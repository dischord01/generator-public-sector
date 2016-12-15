/**
 * Created by bsollar@redhat.com on 12/12/2016
 */
'use strict';
var yeoman  = require('yeoman-generator');



module.exports = yeoman.Base.extend({


            prompting: require('./prompting'),

            writing: require('./writing'),

            install: require('./install')

//End Yeoman
});
                

