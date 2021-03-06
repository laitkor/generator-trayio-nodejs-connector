var generators = require('yeoman-generator');
var path = require('path');

var TRIGGER_FOLDER = "triggers";

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);		
		this.connectorName = process.cwd().split(path.sep).pop();
	},
	createHttp: function() {
		this.conflicter.force = true;
	    this.fs.copyTpl(
			this.templatePath("trigger.js"),
			this.destinationPath(TRIGGER_FOLDER + "/trigger.js")
	    );		
		this.composeWith('trayio-nodejs-connector:connector', { options: {
			name: this.connectorName + "-trigger",
			title: "Trigger",
			description: "Auto created connector trigger",
			connectorType: "trigger",
			help_link: "#"
		}});		    
		this.composeWith('trayio-nodejs-connector:operation', { options: {
			connectorName: this.connectorName + "-trigger",
			name: "trigger-init",
			title: "Trigger",
			help_link: "#"
		}});	    
	},
	installSDKDependency: function() {
		this.npmInstall(['body-parser'], { 'save': true });		
	}	
});