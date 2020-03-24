/**
 * @author 14544
 * @date 2020/3/24 10:37
 */

/*module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        // 禁止使用 var
        'no-var': "error",
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': [
            "error",  // off、warn 或 error 中的一个，表示关闭、警告和报错。后面的项都是该规则的其他配置
            "interface"
        ]
    }
}*/

// 使用 AlloyTeam ESLint 规则中的 TypeScript 版本，它已经为我们提供了一套完善的配置规则，
// 并且与 Prettier 是完全兼容的（eslint-config-alloy 不包含任何代码格式的规则，代码格式的问题交给更专业的 Prettier 去处理）。
module.exports = {
    extends: [
        'alloy',
        'alloy/typescript',
    ],
    env: {
        // 您的环境变量（包含多个预定义的全局变量）
        // Your environments (which contains several predefined global variables)
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 您的全局变量（设置为 false 表示它不允许被重新赋值）
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    rules: {
        // 自定义您的规则
        // Customize your rules
    }
};