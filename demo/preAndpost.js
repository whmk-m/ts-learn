
// npm 提供一个npm_lifecycle_event变量，返回当前正在运行的脚本名称，比如pretest、test、posttest等等
const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'test') {
    console.log(`Running the test task!`);
}

if (TARGET === 'pretest') {
    console.log(`Running the pretest task!`);
}

if (TARGET === 'posttest') {
    console.log(`Running the posttest task!`);
}

// 通过npm_package_前缀，npm 脚本可以拿到package.json里面的字段

console.log(process.env.npm_package_name); // foo
console.log(process.env.npm_package_version); // 1.2.5
console.log(process.env.npm_package_scripts_test); // 1.2.5