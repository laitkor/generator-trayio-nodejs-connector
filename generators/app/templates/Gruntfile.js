
module.exports = function (grunt) {

	grunt.initConfig({

		jshint: {
	    all: [
	    	'Gruntfile.js', 
	    	'main.js',
	    	'operations/*.js', 
	    	'operations/**/*.js', 
	    	'triggers/*.js',
	    	'operations/**/*.js'
	    ]
	  },

	  generate: {
	  	main: {}
	  },

	  watch: {
		  scripts: {
		    files: [
		    	'*.js',
		    	'operations/*.js', 
		    	'operations/**/*.js', 
		    	'triggers/*.js',
		    	'operations/**/*.js'
		    ],
		    tasks: ['jshint'],
		    options: {
		      spawn: false,
		    },
		  },
		  connectors: {
		  	files: [
		  		'connectors/**/*.json',
		  		'connectors/**/**/*.json',
		  		'connectors/**/**/**/*.json',
		  		'!connectors/**/**/**/output.json',
		  	],
		  	tasks: ['generate']
		  }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-tray-connectors-generator');


	grunt.registerTask('default', ['jshint', 'generate']);
	grunt.registerTask('dev', ['watch']);


};