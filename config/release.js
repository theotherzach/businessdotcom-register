// config/release.js
var BuildTask = require('ember-cli/lib/tasks/build');

module.exports = {
  // Build the project in the production environment, outputting to dist/
  beforeCommit: function(project) {
    var task = new BuildTask({
      project: project,
    });

    return task.run({
      environment: 'production',
      outputPath: 'dist/'
    });
  }
};
