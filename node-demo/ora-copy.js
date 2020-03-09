const ora = require('ora');
const chalk = require('chalk');

const spinner = ora(`Loading ${chalk.red('unicorns')}`).start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = `Loading ${chalk.green('love you')}`;
    setTimeout(()=>{
        spinner.stop()
    },2000)
}, 2000);
