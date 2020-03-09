var shell = require('shelljs');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git!!!');
    shell.exit(1);
}

shell.cd('node-demo');
shell.ls('*.js').forEach(function (file) {
    console.log(file)
    shell.sed('-i', 'v0.1.2', 'v0.1.2', file);
    shell.sed('-i', /^.*REMOVE_THIS_LINE.*$/, '', file);
    shell.sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat('macro.js'), file);
});
shell.cd('..');

// Run external tool synchronously
// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
//     shell.echo('Error: Git commit failed');
//     shell.exit(1);
// }
