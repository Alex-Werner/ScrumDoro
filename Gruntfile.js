module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect:{
            serve:{
                options: {
                    port: 9000,
                    // NOTA BENE :
                    // '0.0.0.0' to access the server from outside.
                    // 'localhost' in order to access the server from inside
                    // Dev is using Fiddler4 in local
                    hostname: 'localhost',
                    base:['src/'],
                    debug:true
                }
            }
        },
        uglify:{
            options: {
                compress: false,
                mangle: false,
                sourceMap: false,
                beautify:true
            },
            target:{
                src:[
                    'src/scripts/app.js',
                    'src/config/*.js',

                    'src/controllers/*.js',
                    'src/services/*.js',
                    'src/scripts/*.js',
                    'src/scripts/*/*.js',
                ],
                //CASE SERVER
                //dest:'public/js/public.js',
                //CASE LOCAL
                dest:'src/views/js/public.js'
            }
        },
        watch:{
            options:{
                livereload:true
            },
            js:{
                //files:['/modules/**/*.js','/src/**/*.js','/src/*.js']
                files: [ 'src/scripts/app.js',
                    'src/config/*.js',
                    'src/controllers/*.js',
                    'src/services/*.js',
                    'src/scripts/*.js',
                    'src/scripts/*/*.js'
                    ,'Gruntfile.js'],
                tasks: [ 'uglify' ]
            },
            css: {
                files: ['src/views/styles/**/*.css', 'src/views/styles/*.css']
            },
            html:{
                files:['src/*.html','src/views/**/*.html','src/views/*.html']
            }
        }

    });
    //Load plugin

    grunt.registerTask('serve',['connect','uglify','watch']);
    grunt.registerTask('default',['uglify']);
    //grunt.registerTask('build',[]);
};